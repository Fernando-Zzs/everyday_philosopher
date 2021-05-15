// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV  
})

// 云函数入口函数
const db = cloud.database()
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let ret = await db.collection('comment')
  .where({
    story_id: event.story_id
  })
  .orderBy("like_num",'desc')
  .get()
  return ret.data
}

// 输入：story_id
// 输出：comment数组