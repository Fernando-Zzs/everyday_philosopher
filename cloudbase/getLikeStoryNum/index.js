const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  let ret = await db.collection('story').where({
      story_id: event.story_id
    })
    .get()
  return ret.data[0].like_openid.length
}

// input: story_id
// output: 喜欢该故事的用户数