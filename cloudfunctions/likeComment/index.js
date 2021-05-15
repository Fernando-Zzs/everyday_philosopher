// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数

exports.main = async (event, context) => {
  const db = cloud.database()
  const _ = db.command
  let ret = await db.collection('comment').where({
    _id: event._id
  })
  .update({
    data:{
      like_num: _.inc(1)
    }
  }).get()
  return ret.data
}

//input: _id
//output: 更新后的comment记录