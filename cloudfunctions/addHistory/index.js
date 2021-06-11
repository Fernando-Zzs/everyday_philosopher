const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  async function getCount() { //获取数据的总数，这里记得设置集合的权限
    let count = await db.collection('history').where({
      _openid: event._openid,
      id: event.id,
      type: event.type
    }).count();
    return count;
  }
  async function getList(skip) { //分段获取数据
    let list = await db.collection('history').where({
      _openid: event._openid,
      id: event.id,
      type: event.type
    }).skip(skip).get();
    return list.data;
  }
  // let judge_arr = await db.collection('history').where({
  //   _openid: event._openid,
  //   id: event.id,
  //   type: event.type
  // }).get()
  // judge_arr = judge_arr.data

  let count = await getCount();
  count = count.total;
  let judge_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    judge_arr = judge_arr.concat(await getList(i));
  }

  if (judge_arr.length != 0) {
    db.collection('history').where({
      _openid: event._openid,
      id: event.id,
      type: event.type
    }).update({
      data: {
        timestamp: event.timestamp
      }
    })
  } else {
    db.collection('history').add({
      data: {
        _openid: event._openid,
        description: event.description,
        id: event.id,
        timestamp: event.timestamp,
        title: event.title,
        type: event.type
      }
    })
  }
}

// input: _openid type id timestamp
// null