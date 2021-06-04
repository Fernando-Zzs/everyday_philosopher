// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  let today_0 = new Date()
  let day = new Date().getDay()
  let timestamp_end = 0
  let timestamp_start = 0
  today_0.setHours(0)
  today_0.setMinutes(0)
  today_0.setSeconds(0)
  today_0.setMilliseconds(0)

  if (day == 0) {
    timestamp_end = Date.parse(today_0) / 1000 - 86400 * 6
  } else {
    timestamp_end = Date.parse(today_0) / 1000 - 86400 * (day - 1)
  }
  timestamp_start = timestamp_end - 86400 * 7

  let ret_obj = {
    answer: 0,
    comment: 0
  }

  let answer_count = await db.collection('answer').where({
    _openid: event._openid,
    timestamp: _.gt(timestamp_start).and(_.lt(timestamp_end))
  }).count()

  let comment_count = await db.collection('comment').where({
    _openid: event._openid,
    timestamp: _.gt(timestamp_start).and(_.lt(timestamp_end))
  }).count()

  ret_obj.answer = answer_count.total
  ret_obj.comment = comment_count.total

  return ret_obj
}