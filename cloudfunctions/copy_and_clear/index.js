const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // let user_obj = await db.collection('user').where({
  //   _openid: event._openid
  // }).get()
  // user_obj = user_obj.data[0]

  // let time = user_obj.time
  // let time_last_week = user_obj.time_last_week

  // for (key in time_last_week) {
  //   time_last_week[key] = time[key]
  //   time[key] = 0
  // }

  // db.collection('user').where({
  //   _openid: event._openid
  // }).update({
  //   data: {
  //     time: time,
  //     time_last_week: time_last_week
  //   }
  // })
  db.collection('user').where({
    _openid: event._openid
  }).remove()
}

// 每过一周把user表中的time属性值设为0