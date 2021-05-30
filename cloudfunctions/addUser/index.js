const cloud = require('wx-server-sdk')


cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  let search_result = await db.collection('user').where({
    _openid: event._openid
  }).get()
  search_result = search_result.data

  if (search_result == 0) {
    db.collection('user').add({
      data: {
        _openid: event._openid,
        nickname: event.nickname,
        avatarUrl: event.avatarUrl,
        time: {
          answer: 0,
          story: 0,
          comment: 0,
          question: 0
        },
        time_last_week: {
          answer: 0,
          story: 0,
          comment: 0,
          question: 0
        }
      }
    })
  }
}