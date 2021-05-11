const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  db.collection('history').where({
      _openid: event._openid
    })
    .update({
      data: {
        detail: _.push({
          type: event.type,
          id: event.id,
          timestamp: event.timestamp
        })
      }
    })
}

// input: _openid type id timestamp
// null