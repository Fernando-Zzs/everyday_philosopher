const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  let comments_arr = await db.collection('comment').where({
    story_id: event.story_id
  }).get()
  comments_arr = comments_arr.data

  let index = -1
  for (let i = 0, len = comments_arr.length; i < len; i++) {
    if (comments_arr[i].comment_id == event.comment_id) {
      index = i
    }
  }

  let buffer = comments_arr[index]
  comments_arr.splice(index, 1)

  comments_arr.unshift(buffer)
  return comments_arr
}