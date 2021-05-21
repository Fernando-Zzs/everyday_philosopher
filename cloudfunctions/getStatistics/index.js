const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let ret = await db.collection('user').where({
    _openid: event._openid
  }).get()
  return ret.data[0].time
}

// input: _openid
// output: {story: 18, question: 12, answer: 6, comment: 6} 单位s