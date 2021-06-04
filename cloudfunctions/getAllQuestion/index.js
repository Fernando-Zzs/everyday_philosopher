// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

function compare(property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2;
  }
}

exports.main = async (event, context) => {
  // let ret = await db.collection('question').get()
  // ret = ret.data

  let count = await getCount();
  count = count.total;
  let ret = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    ret = ret.concat(await getList(i));
  }

  let arr_buffer = []
  let item_buffer = {}
  for (let i = 0, len = ret.length; i < len; i++) {
    item_buffer = ret[i]
    item_buffer.question = parseInt(item_buffer.question_id)
    arr_buffer.push(item_buffer)
  }

  arr_buffer.sort(compare('question_id'))

  ret = []
  for (let i = 0, len = arr_buffer.length; i < len; i++) {
    item_buffer = arr_buffer[i]
    item_buffer.question_id = item_buffer.question_id + ''
    ret.push(item_buffer)
  }

  return ret
}
async function getCount() { //获取数据的总数，这里记得设置集合的权限
  let count = await db.collection('question').where({}).count();
  return count;
}
async function getList(skip) { //分段获取数据
  let list = await db.collection('question').skip(skip).get();
  return list.data;
}