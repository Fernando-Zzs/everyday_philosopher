const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  let judge_arr = await db.collection('history').where({
    _openid: event._openid,
    id: event.id,
    type: event.type
  }).get()
  judge_arr = judge_arr.data

  if (judge_arr.length != 0) {
    db.collection('history').where({
      _openid: event._openid,
      id: event.id,
      type: event.type
    }).update({
      data: {
        timestamp: event.timestamp
      }
    })
  } else {
    db.collection('history').add({
      data: {
        _openid: event._openid,
        description: event.description,
        id: event.id,
        timestamp: event.timestamp,
        title: event.title,
        type: event.type
      }
    })
  }
}

// input: _openid type id timestamp
// null