// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let total = await db.collection('comment').count()
  total = total.total
  db.collection('comment').add({
    data:{
      comment_id: total + '',
      content: event.content,
      story_id: event.story_id,
      like_num: 0,
      avatarURL: event.avatarURL,
      nickname: event.nickname
    }
  })
}

// input: content story_id avatarURL nickname
// output: null