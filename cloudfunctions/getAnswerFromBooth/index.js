const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  let answers_arr = await db.collection('answer').where({
    question_id: event.question_id
  }).get()
  answers_arr = answers_arr.data

  let index = -1
  for (let i = 0, len = answers_arr.length; i < len; i++) {
    if (answers_arr[i].answer_id == event.answer_id) {
      index = i
    }
  }

  let buffer = answers_arr[index]
  answers_arr.splice(index, 1)

  answers_arr.unshift(buffer)
  return answers_arr
}