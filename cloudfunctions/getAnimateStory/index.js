const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  let ret = await db.collection('animate').where({
      animate_id: event.animate_id
    })
    .get()
  return ret.data[0]
}

// input: animate_id
// output: 整个数组