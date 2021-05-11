const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  let ret = await db.collection('history').where({
      _openid: event._openid,
      type: event.type
    })
    .orderBy('timestamp','desc')
    .get()
  return ret.data
}

// input: _openid type
// output: history的数组