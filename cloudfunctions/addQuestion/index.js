const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  // 获取总记录数
  let total = await db.collection('question').count()
  total = total.total
  db.collection('question').add({
    data: {
      question_id: total + '',
      title: event.title,
      discription: event.discription,
      story_id: event.story_id,
      answer_detail: [{}],
      collect_num: 0
    }
  })
}

// input: title discription story_id
// output: null