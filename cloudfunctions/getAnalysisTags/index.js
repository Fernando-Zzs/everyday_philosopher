const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

cloud.init()

function string_to_arr(str) {
  eval('let ' + str + ' = []')
}

function get_tag_position(arr, str) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i].tag == str) {
      return i
    }
  }

  return -1
}

function compare(property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value2 - value1;
  }
}

// 云函数入口函数
exports.main = async (event, context) => {
  async function getCount_h(timestamp_start, timestamp_end) { //获取数据的总数，这里记得设置集合的权限
    let count = await db.collection('history').where({
      _openid: event._openid,
      timestamp: _.lte(timestamp_end).and(_.gte(timestamp_start))
    }).count();
    return count;
  }
  async function getList_h(skip, timestamp_start, timestamp_end) { //分段获取数据
    let list = await db.collection('history').where({
      _openid: event._openid,
      timestamp: _.lte(timestamp_end).and(_.gte(timestamp_start))
    }).skip(skip).get();
    return list.data;
  }
  async function getCount_s() { //获取数据的总数，这里记得设置集合的权限
    let count = await db.collection('story').where({}).count();
    return count;
  }
  async function getList_s(skip) { //分段获取数据
    let list = await db.collection('story').skip(skip).get();
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

  // let history_arr = await db.collection('history').where({
  //     _openid: event._openid,
  //     timestamp: _.lte(timestamp_end).and(_.gte(timestamp_start))
  //   })
  //   .get()
  // history_arr = history_arr.data // 得到相应时间戳内的history数据

  let count = await getCount_h(timestamp_start, timestamp_end);
  count = count.total;
  let history_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    history_arr = history_arr.concat(await getList_h(i, timestamp_start, timestamp_end));
  }

  let history_story_id_arr = []
  for (let i = 0, len = history_arr.length; i < len; i++) {
    if (history_arr[i].type == 'story') {
      history_story_id_arr.push(history_arr[i].id)
    }
  }

  // let story_arr = await db.collection('story').get()
  // story_arr = story_arr.data

  count = await getCount_s();
  count = count.total;
  let story_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    story_arr = story_arr.concat(await getList_s(i));
  }
  return story_arr;

  let tags_and_count_arr = []
  for (let i = 0, len_i = story_arr.length; i < len_i; i++) {
    for (let j = 0, len_j = story_arr[i].tags.length; j < len_j; j++) {
      let currentTag = story_arr[i].tags[j]
      let tag_position = get_tag_position(tags_and_count_arr, currentTag)
      if (tag_position >= 0) {
        tags_and_count_arr[tag_position].count++
      } else {
        tags_and_count_arr.push({
          tag: currentTag,
          count: 1
        })
      }
    }
  }
  tags_and_count_arr.sort(compare('count'))

  let ret_tags_and_count_arr = []
  for (let i = 0; i < event.num; i++) {
    ret_tags_and_count_arr.push(tags_and_count_arr[i])
  }

  return ret_tags_and_count_arr
}

// input: _openid num(返回次数最多的tag值所在的对象)
// output: array 在n=5时：
// (5) [{…}, {…}, {…}, {…}, {…}]
// 0: {tag: "tag1", count: 2}
// 1: {tag: "ymx", count: 2}
// 2: {tag: "tag2", count: 1}
// 3: {tag: "大司马", count: 1}
// 4: {tag: "mxy", count: 1}