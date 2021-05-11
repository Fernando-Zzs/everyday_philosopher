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
  let story_arr = await db.collection('story').get()
  story_arr = story_arr.data

  let ret_story_id_arr_from_title = []
  let ret_story_id_arr_from_content = []
  for (let i = 0, len = story_arr.length; i < len; i++) {
    if (story_arr[i].title.indexOf(event.keywords) != -1) {
      ret_story_id_arr_from_title.push(story_arr[i].story_id)
    }
  }
  for (let i = 0, len_i = story_arr.length; i < len_i; i++) {
    let total_content = ''
    for (let j = 0, len_j = story_arr[i].content.length; j < len_j; j++) {
      total_content += story_arr[i].content[j].text
    }
    if (total_content.indexOf(event.keywords) != -1) {
      ret_story_id_arr_from_content.push(story_arr[i].story_id)
    }
  }

  let ret_story_id_arr_from_all = ret_story_id_arr_from_title.concat(ret_story_id_arr_from_content).unique()
  return ret_story_id_arr_from_all
}