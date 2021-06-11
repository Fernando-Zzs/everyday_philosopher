const cloud = require('wx-server-sdk')


cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  async function getCount() { //获取数据的总数，这里记得设置集合的权限
    let count = await db.collection('question').where({}).count();
    return count;
  }
  async function getList(skip) { //分段获取数据
    let list = await db.collection('question').skip(skip).get();
    return list.data;
  }

  // let question_arr = await db.collection('question').get()
  // question_arr = question_arr.data

  let count = await getCount();
  count = count.total;
  let question_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    question_arr = question_arr.concat(await getList(i));
  }

  for (let i = 0, len = question_arr.length; i < len; i++) {
    question_arr[i].question_id = i + ''
  }
}