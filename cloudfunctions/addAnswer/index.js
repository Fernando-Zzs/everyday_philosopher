const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  // 获取总记录数
  let total = await db.collection('answer').count()
  total = total.total
  db.collection('answer').add({
    data: {
      answer_id: total + '',
      question_id: event.question_id,
      content: event.content,
      like_num: 0,
      collect_num: 0,
      avatarURL: event.avatarURL,
      nickname: event.nickname
    }
  })
  return total + ''
}
// input: question_id content avatarURL nickname
// output: answer_id