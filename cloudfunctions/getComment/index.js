// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
const db = cloud.database()

function compare(property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value2 - value1;
  }
}

exports.main = async (event, context) => {
  let ret = await db.collection('comment')
    .where({
      story_id: event.story_id
    })
    .get()
  ret = ret.data

  for (let i = 0, len = ret.length; i < len; i++) {
    ret[i].like_num = ret[i].like_openid.length
  }

  ret.sort(compare('like_num'))
  return ret
}

// 输入：story_id
// 输出：comment数组