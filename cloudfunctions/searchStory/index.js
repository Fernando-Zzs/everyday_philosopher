const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

Array.prototype.unique = function () {
  var a = this.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j])
        a.splice(j, 1);
    }
  }
  return a;
}

exports.main = async (event, context) => {
  async function getCount() { //获取数据的总数，这里记得设置集合的权限
    let count = await db.collection('story').where({}).count();
    return count;
  }
  async function getList(skip) { //分段获取数据
    let list = await db.collection('story').skip(skip).get();
    return list.data;
  }

  // let story_arr = await db.collection('story').get()
  // story_arr = story_arr.data
  let count = await getCount();
  count = count.total;
  let story_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    story_arr = story_arr.concat(await getList(i));
  }

  let ret_story_id_arr_from_title = []
  let ret_story_id_arr_from_content = []
  let ret_story_id_arr_from_tags = []
  for (let i = 0, len = story_arr.length; i < len; i++) {
    if (story_arr[i].title.indexOf(event.keywords) != -1) {
      ret_story_id_arr_from_title.push(story_arr[i].story_id)
    }
  }
  for (let i = 0, len_i = story_arr.length; i < len_i; i++) {
    let total_content = ''
    for (let j = 0, len_j = story_arr[i].story_content.length; j < len_j; j++) {
      total_content += story_arr[i].story_content[j].content
    }
    if (total_content.indexOf(event.keywords) != -1) {
      ret_story_id_arr_from_content.push(story_arr[i].story_id)
    }
  }
  for (let i = 0, len = story_arr.length; i < len; i++) {
    let total_tags = ''
    for (let j = 0, len_j = story_arr[i].tags.length; j < len_j; j++) {
      total_tags += story_arr[i].tags[j]
    }
    if (total_tags.indexOf(event.keywords) != -1) {
      ret_story_id_arr_from_tags.push(story_arr[i].story_id)
    }
  }

  let ret_story_id_arr_from_all = ret_story_id_arr_from_title.concat(ret_story_id_arr_from_content).concat(ret_story_id_arr_from_tags).unique()
  return ret_story_id_arr_from_all
}