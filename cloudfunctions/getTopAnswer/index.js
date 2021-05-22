const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  let ret = await db.collection('answer').where({
      question_id: event.question_id
    })
    .orderBy('like_num', 'desc')
    .get()

  ret = ret.data

  for (let i = 0, len = ret.length; i < len; i++) {
    ret[i].like_num = ret[i].like_openid.length
    ret[i].collect_num = ret[i].collect_openid.length
  }

  return ret
}

// input: question_id
// output: 该问题下按赞数降序的所有答案