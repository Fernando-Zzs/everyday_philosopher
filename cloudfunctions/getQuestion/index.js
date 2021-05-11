const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  let ret = await db.collection('question').where({
      question_id: event.question_id
    })
    .get()
  return ret.data[0]
}

// input: question_id
// output: question表的一条记录（obj)