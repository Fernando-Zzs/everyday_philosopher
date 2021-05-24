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
  let answer_arr = await db.collection('answer').get()
  answer_arr = answer_arr.data

  let ret_arr = []

  for (let i = 0, len = answer_arr.length; i < len; i++) {
    if (isExist(answer_arr[i].collect_openid, event._openid)) {
      ret_arr.push(answer_arr[i])
    }
  }

  return ret_arr
}