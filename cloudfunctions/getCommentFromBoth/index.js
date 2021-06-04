const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  async function getCount() { //获取数据的总数，这里记得设置集合的权限
    let count = await db.collection('comment').where({
      story_id: event.story_id
    }).count();
    return count;
  }
  async function getList(skip) { //分段获取数据
    let list = await db.collection('comment').where({
      story_id: event.story_id
    }).skip(skip).get();
    return list.data;
  }

  // let comments_arr = await db.collection('comment').where({
  //   story_id: event.story_id
  // }).get()
  // comments_arr = comments_arr.data

  let count = await getCount();
  count = count.total;
  let comments_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    comments_arr = comments_arr.concat(await getList(i));
  }

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