const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  db.collection('like').where({
    _openid: event._openid,
    type: event.type,
    id: event.id
  }).remove()
}