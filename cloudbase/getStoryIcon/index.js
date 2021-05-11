const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  let ret = await db.collection('story').where({
      story_id: event.story_id
    })
    .get()
  return ret.data[0].icon
}

// input: story_id
// output: 该story的icon（string）