const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  async function getCount() { //获取数据的总数，这里记得设置集合的权限
    let count = await db.collection('collection').where({
      _openid: event._openid,
      type: event.type
    }).count();
    return count;
  }
  async function getList(skip) { //分段获取数据
    let list = await db.collection('collection').where({
      _openid: event._openid,
      type: event.type
    }).skip(skip).orderBy('timestamp', 'desc').get();
    return list.data;
  }


  // let ret = await db.collection('collect').where({
  //     _openid: event._openid,
  //     type: event.type
  //   })
  //   .orderBy('timestamp', 'desc')
  //   .get()
  // return ret.data

  let count = await getCount();
  count = count.total;
  let ret = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    ret = ret.concat(await getList(i));
  }
  return ret;
}

// input: _openid type
// output: collection的数组