const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  async function getCount() { //获取数据的总数，这里记得设置集合的权限
    let count = await db.collection('answer').where({
      question_id: event.question_id
    }).count();
    return count;
  }
  async function getList(skip) { //分段获取数据
    let list = await db.collection('answer').where({
      question_id: event.question_id
    }).skip(skip).orderBy('like_num', 'desc').get();
    return list.data;
  }

  // let ret = await db.collection('answer').where({
  //     question_id: event.question_id
  //   })
  //   .orderBy('like_num', 'desc')
  //   .get()

  // ret = ret.data

  let count = await getCount();
  count = count.total;
  let ret = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    ret = ret.concat(await getList(i));
  }

  for (let i = 0, len = ret.length; i < len; i++) {
    ret[i].like_num = ret[i].like_openid.length
    ret[i].collect_num = ret[i].collect_openid.length
  }

  return ret
}

// input: question_id
// output: 该问题下按赞数降序的所有答案