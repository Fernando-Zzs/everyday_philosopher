const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  // 获取总记录数
  let total = await db.collection('collection').count()
  total = total.total
  db.collection('collection').add({
    data: {
      _openid: event._openid,
      description: event.description,
      id: event.id,
      timestamp: event.timestamp,
      title: event.title,
      type: event.type
    }
  })
  return total + ''
}

// input: 
// _openid: event._openid,
// description: event.description,
// id: event.id,
// timestamp: event.timestamp,
// title: event.title,
// type: event.type