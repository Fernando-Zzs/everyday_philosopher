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
    .get()
  return ret.data[0]
}

// input: _openid type
// output: history表的一条记录