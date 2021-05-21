const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  // 获取总记录数
  let total = await db.collection('answer').count()
  total = total.total
  db.collection('answer').add({
    data: {
      answer_id: total + '',
      question_id: event.question_id,
      content: event.content,
      like_openid: _.push(event._openid),
      collect_openid: _.push(event._openid),
      avatarURL: event.avatarURL,
      nickname: event.nickname,
      _openid: event._openid
    }
  })
  return total + ''
}
// input: question_id content avatarURL nickname
// output: answer_id