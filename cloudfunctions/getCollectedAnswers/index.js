const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

function isExist(arr, str) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] == str) {
      return true
    }
  }
  return false
}

const db = cloud.database()
exports.main = async (event, context) => {
  async function getCount() { //获取数据的总数，这里记得设置集合的权限
    let count = await db.collection('answer').where({}).count();
    return count;
  }
  async function getList(skip) { //分段获取数据
    let list = await db.collection('answer').skip(skip).get();
    return list.data;
  }

  // let answer_arr = await db.collection('answer').get()
  // answer_arr = answer_arr.data

  let count = await getCount();
  count = count.total;
  let answer_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    answer_arr = answer_arr.concat(await getList(i));
  }
  return answer_arr;

  let ret_arr = []

  for (let i = 0, len = answer_arr.length; i < len; i++) {
    if (isExist(answer_arr[i].collect_openid, event._openid)) {
      ret_arr.push(answer_arr[i])
    }
  }

  return ret_arr
}