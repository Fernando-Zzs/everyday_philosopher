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
  return ret.data[0]
}

// input: story_id
// output: story表的一条记录(obj)
// 