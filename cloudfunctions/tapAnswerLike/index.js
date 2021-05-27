const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

function del(arr, str) {
  let index = -1
  for (let i = 0, len = str.length; i < len; i++) {
    if (arr[i] == str) {
      index = i
    }
  }

  arr.splice(index, 1)
}

exports.main = async (event, context) => {
  if (event.liked) {
    let ret_openid_arr = await db.collection('answer').where({
      answer_id: event.answer_id
    }).get()
    ret_openid_arr = ret_openid_arr.data[0].like_openid

    del(ret_openid_arr, event._openid) // checked

    db.collection('answer').where({
      answer_id: event.answer_id
    }).update({
      data: {
        like_openid: ret_openid_arr
      }
    })
  } else {
    db.collection('answer').where({
      answer_id: event.answer_id
    }).update({
      data: {
        like_openid: _.push(event._openid)
      }
    })
  }
}

//Input: answer_id, _openid, liked