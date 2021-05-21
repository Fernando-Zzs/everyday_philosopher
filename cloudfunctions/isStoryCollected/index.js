const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

cloud.init()

function isExist(arr, str) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] == str) {
      return true
    }
  }
  return false
}

// 云函数入口函数
exports.main = async (event, context) => {
  let _openid_arr = await db.collection('story').where({
    story_id: event.story_id
  }).get()
  _openid_arr = _openid_arr.data[0].collect_openid

  return isExist(_openid_arr, event._openid)
}

// input: story_id _openid
// output: bool