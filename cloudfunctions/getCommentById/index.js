// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
const db = cloud.database()

exports.main = async (event, context) => {
  let ret = await db.collection('comment')
    .where({
      comment_id: event.comment_id
    })
    .get()
  ret = ret.data[0]

  return ret
}