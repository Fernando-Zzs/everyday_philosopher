const cloud = require('wx-server-sdk')


cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  db.collection('story').where({
      story_id: event.story_id
    })
    .update({
      data: {
        collect_openid: _.push(event._openid)
      }
    })
}

// input: story_id _openid
// output: null