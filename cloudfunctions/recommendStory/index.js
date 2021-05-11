const cloud = require('wx-server-sdk')


cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

function compare(property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value2 - value1;
  }
}

exports.main = async (event, context) => {
  let story_arr = await db.collection('story').get()
  story_arr = story_arr.data
  let user_arr = await db.collection('user').get()
  user_arr = user_arr.data
  let dataBase = {}
  for (let i = 0, u_len = user_arr.length; i < u_len; i++) {
    dataBase[user_arr[i]._openid] = {}
  }

  for (let i = 0, u_len = user_arr.length; i < u_len; i++) {
    let _openid = user_arr[i]._openid
    for (let j = 0, s_len = story_arr.length; j < s_len; j++) {
      let score = 0
      let story_id = story_arr[j].story_id
      if (story_arr[j].like_openid.includes(_openid)) {
        score++
      }
      if (story_arr[j].collect_openid.includes(_openid)) {
        score += 2
      }
      dataBase[_openid][story_id] = score
    }
  }

  /** 曼哈顿距离算法**/
  let manhattan = (dataChild, dataFather) => {
    let arr = []; // 用于返回距离的数组
    let child = []; // 存放提取出的、被比较的子数据
    let father = []; // 存放提取出的所有

    /** 开始提取数据 **/
    for (key in dataChild)
      child.push(dataChild[key])

    for (key1 in dataFather) {
      let arr_child = [];
      for (key2 in dataFather[key1])
        arr_child.push(dataFather[key1][key2])
      father.push(arr_child)
    }
    // console.log(child,father)

    /**开始计算**/
    for (let i = 0; i < father.length; i++) {
      let len = 0;
      for (let j = 0; j < child.length; j++) {
        if (child[j] != 0 && father[i][j] != 0)
          len += Math.abs(child[j] - father[i][j])
      }
      arr.push(len);
    }

    return arr;
  }

  let res_arr = manhattan(dataBase[event._openid], dataBase)
  // return res_arr [0, 2]

  let min = 999999
  let _openid_position = 0
  let min_position = 0
  for (let i = 0, len = user_arr.length; i < len; i++) {
    if (user_arr[i]._openid == event._openid) {
      _openid_position = i
      break
    }
  }
  for (let i = 0, len = res_arr.length; i < len; i++) {
    if (i == _openid_position) {
      continue
    } else {
      if (res_arr[i] < min) {
        min = res_arr[i]
        min_position = i
      }
    }
  }

  let recommend_openid = user_arr[min_position]._openid
  let recommend_stories = dataBase[recommend_openid]
  let recommend_stories_arr = []

  // return recommend_stories {0: 0, 1: 1}

  for (key in recommend_stories) {
    let story_score_obj = {}
    story_score_obj.story_id = key
    story_score_obj.score = recommend_stories[key]
    recommend_stories_arr.push(story_score_obj)
  }
  recommend_stories_arr.sort(compare('score'))
  let ret_story_id_arr = []
  for (let i = 0; i < event.num; i++) {
    ret_story_id_arr.push(recommend_stories_arr[i].story_id)
  }
  return ret_story_id_arr
}

// input: _openid num(推荐故事数目)
// output: 包含推荐故事的story_id的数组