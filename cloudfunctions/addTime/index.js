const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'story':
      db.collection('user').where({
        _openid: event._openid
      }).update({
        data: {
          time: {
            story: _.inc(event.addedTime)
          }
        }
      })
      break
    case 'question':
      db.collection('user').where({
        _openid: event._openid
      }).update({
        data: {
          time: {
            question: _.inc(event.addedTime)
          }
        }
      })
      break
    case 'answer':
      db.collection('user').where({
        _openid: event._openid
      }).update({
        data: {
          time: {
            answer: _.inc(event.addedTime)
          }
        }
      })
      break
    case 'comment':
      db.collection('user').where({
        _openid: event._openid
      }).update({
        data: {
          time: {
            comment: _.inc(event.addedTime)
          }
        }
      })
      break
    default:
      break
  }
}