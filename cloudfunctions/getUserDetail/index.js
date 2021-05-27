// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
  let ret = await db.collection('user').where({
      _openid: event._openid
    })
    .get()
  return ret.data[0]
}

// input: _openid
// output: 整条记录