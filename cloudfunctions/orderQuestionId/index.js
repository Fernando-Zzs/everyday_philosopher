const cloud = require('wx-server-sdk')


cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  let question_arr = await db.collection('question').get()
  question_arr = question_arr.data

  for (let i = 0, len = question_arr.length; i < len; i++) {
    question_arr[i].question_id = i + ''
  }
}