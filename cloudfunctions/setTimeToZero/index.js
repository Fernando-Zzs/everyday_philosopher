const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  db.collection('user').where({}).update({
    data: {
      time: _.set({
        story: 0,
        question: 0,
        answer: 0,
        comment: 0
      })
    }
  })
}

// 每过一周把user表中的time属性值设为0