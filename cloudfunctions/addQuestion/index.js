const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  // 获取总记录数
  // let total = await db.collection('question').count()
  // total = total.total
  // db.collection('question').add({
  //   data: {
  //     collect_openid: [],
  //     description: event.description,
  //     image: 'cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/问号.png',
  //     like_openid: [],
  //     question_id: total + '',
  //     story_id: event.story_id,
  //     title: event.title
  //   }
  // })

  db.collection('history').where({
    _openid: 'oMvG85YWjsnPqQVl8DwKB8B-CrcY'
  }).remove()
}

// input: title discription story_id
// output: null