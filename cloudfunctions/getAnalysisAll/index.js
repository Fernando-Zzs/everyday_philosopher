const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  async function getCount(table) { //获取数据的总数，这里记得设置集合的权限
    let count = await db.collection(table).where({
      _openid: event._openid
    }).count();
    return count;
  }
  async function getList(table, skip) { //分段获取数据
    let list = await db.collection(table).where({
      _openid: event._openid
    }).skip(skip).get();
    return list.data;
  }

  let timestamp_end = Date.parse(new Date()) / 1000
  let day = new Date().getDay()

  let today_0 = new Date()
  today_0.setHours(0)
  today_0.setMinutes(0)
  today_0.setSeconds(0)
  today_0.setMilliseconds(0)
  let timestamp_start = Date.parse(today_0) / 1000 - 86400 * day

  let res_story_read = 0
  let res_question_read = 0
  let res_answer_read = 0
  let res_comment_read = 0
  let res_story_like = 0
  let res_story_collect = 0
  let res_question_like = 0
  let res_question_collect = 0
  let res_answer_like = 0
  let res_answer_collect = 0
  let res_comment_like = 0
  let res_comment_collect = 0

  // let user_history_arr = await db.collection('history').where({
  //     _openid: event._openid
  //   })
  //   .get()
  // user_history_arr = user_history_arr.data

  let count = await getCount('history');
  count = count.total;
  let user_history_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    user_history_arr = user_history_arr.concat(await getList('history', i));
  }

  let user_history_story_arr = []
  let user_history_question_arr = []
  let user_history_answer_arr = []
  let user_history_comment_arr = []

  for (let i = 0, len = user_history_arr.length; i < len; i++) {
    switch (user_history_arr[i].type) {
      case 'story':
        user_history_story_arr.push(user_history_arr[i])
        break
      case 'question':
        user_history_question_arr.push(user_history_arr[i])
        break
      case 'answer':
        user_history_answer_arr.push(user_history_arr[i])
        break
      case 'comment':
        user_history_comment_arr.push(user_history_arr[i])
        break
      default:
        break
    }
  }

  // history中四元素在时间戳范围内的次数
  for (let i = 0, len = user_history_story_arr.length; i < len; i++) {
    if (user_history_story_arr[i].timestamp >= timestamp_start && user_history_story_arr[i].timestamp <= timestamp_end) {
      res_story_read++
    }
  }
  for (let i = 0, len = user_history_question_arr.length; i < len; i++) {
    if (user_history_question_arr[i].timestamp >= timestamp_start && user_history_question_arr[i].timestamp <= timestamp_end) {
      res_question_read++
    }
  }
  for (let i = 0, len = user_history_answer_arr.length; i < len; i++) {
    if (user_history_answer_arr[i].timestamp >= timestamp_start && user_history_answer_arr[i].timestamp <= timestamp_end) {
      res_answer_read++
    }
  }
  for (let i = 0, len = user_history_comment_arr.length; i < len; i++) {
    if (user_history_comment_arr[i].timestamp >= timestamp_start && user_history_comment_arr[i].timestamp <= timestamp_end) {
      res_comment_read++
    }
  }

  // read 统计完成，开始like和collect统计

  // let user_like_arr = await db.collection('like').where({
  //     _openid: event._openid,
  //   })
  //   .get()
  // user_like_arr = user_like_arr.data

  count = await getCount('like');
  count = count.total;
  let user_like_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    user_like_arr = user_like_arr.concat(await getList('like', i));
  }

  // let user_collect_arr = await db.collection('collection').where({
  //     _openid: event._openid,
  //   })
  //   .get()
  // user_collect_arr = user_collect_arr.data

  count = await getCount('collection');
  count = count.total;
  let user_collect_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    user_collect_arr = user_collect_arr.concat(await getList('collection', i));
  }

  let res_story_like_arr = []
  let res_story_collect_arr = []
  let res_question_like_arr = []
  let res_question_collect_arr = []
  let res_answer_like_arr = []
  let res_answer_collect_arr = []
  let res_comment_like_arr = []
  let res_comment_collect_arr = []

  for (let i = 0, len = user_like_arr.length; i < len; i++) {
    switch (user_like_arr[i].type) {
      case 'story':
        res_story_like_arr.push(user_like_arr[i])
        break
      case 'question':
        res_question_like_arr.push(user_like_arr[i])
        break
      case 'answer':
        res_answer_like_arr.push(user_like_arr[i])
        break
      case 'comment':
        res_comment_like_arr.push(user_like_arr[i])
        break
      default:
        break
    }
  }
  for (let i = 0, len = user_collect_arr.length; i < len; i++) {
    switch (user_collect_arr[i].type) {
      case 'story':
        res_story_collect_arr.push(user_collect_arr[i])
        break
      case 'question':
        res_question_collect_arr.push(user_collect_arr[i])
        break
      case 'answer':
        res_answer_collect_arr.push(user_collect_arr[i])
        break
      case 'comment':
        res_comment_collect_arr.push(user_collect_arr[i])
        break
      default:
        break
    }
  }

  for (let i = 0, len = res_story_like_arr.length; i < len; i++) {
    if (res_story_like_arr[i].timestamp >= timestamp_start && res_story_like_arr[i].timestamp <= timestamp_end) {
      res_story_like++
    }
  }
  for (let i = 0, len = res_story_collect_arr.length; i < len; i++) {
    if (res_story_collect_arr[i].timestamp >= timestamp_start && res_story_collect_arr[i].timestamp <= timestamp_end) {
      res_story_collect++
    }
  }
  for (let i = 0, len = res_question_like_arr.length; i < len; i++) {
    if (res_question_like_arr[i].timestamp >= timestamp_start && res_question_like_arr[i].timestamp <= timestamp_end) {
      res_question_like++
    }
  }
  for (let i = 0, len = res_question_collect_arr.length; i < len; i++) {
    if (res_question_collect_arr[i].timestamp >= timestamp_start && res_question_collect_arr[i].timestamp <= timestamp_end) {
      res_question_collect++
    }
  }
  for (let i = 0, len = res_answer_like_arr.length; i < len; i++) {
    if (res_answer_like_arr[i].timestamp >= timestamp_start && res_answer_like_arr[i].timestamp <= timestamp_end) {
      res_answer_like++
    }
  }
  for (let i = 0, len = res_answer_collect_arr.length; i < len; i++) {
    if (res_answer_collect_arr[i].timestamp >= timestamp_start && res_answer_collect_arr[i].timestamp <= timestamp_end) {
      res_answer_collect++
    }
  }
  for (let i = 0, len = res_comment_like_arr.length; i < len; i++) {
    if (res_comment_like_arr[i].timestamp >= timestamp_start && res_comment_like_arr[i].timestamp <= timestamp_end) {
      res_comment_like++
    }
  }
  for (let i = 0, len = res_comment_collect_arr.length; i < len; i++) {
    if (res_comment_collect_arr[i].timestamp >= timestamp_start && res_comment_collect_arr[i].timestamp <= timestamp_end) {
      res_comment_collect++
    }
  }

  let res_all_info = {
    res_story_read,
    res_question_read,
    res_answer_read,
    res_comment_read,
    res_story_like,
    res_story_collect,
    res_question_like,
    res_question_collect,
    res_answer_like,
    res_answer_collect,
    res_comment_like,
    res_comment_collect
  }

  return res_all_info

}

// 分析（次数）
// input: _openid
// output: {
//   res_story_read,
//   res_question_read,
//   res_answer_read,
//   res_comment_read,
//   res_story_like,
//   res_story_collect,
//   res_question_like,
//   res_question_collect,
//   res_answer_like,
//   res_answer_collect,
//   res_comment_like,
//   res_comment_collect
// }