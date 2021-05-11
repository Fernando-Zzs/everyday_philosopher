const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  let ret = await db.collection('answer').where({
      answer_id: event.answer_id
    })
    .get()
  return ret.data[0]
}

// input: answer_id
// output: answer表的一条记录（对象）