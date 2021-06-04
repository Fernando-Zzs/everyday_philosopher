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

function isExist(arr, str) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] == str) {
      return true
    }
  }

  return false
}

function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

exports.main = async (event, context) => {
  async function getCount(table) { //获取数据的总数，这里记得设置集合的权限
    let count = await db.collection(table).where({}).count();
    return count;
  }
  async function getList(skip, table) { //分段获取数据
    let list = await db.collection(table).skip(skip).get();
    return list.data;
  }

  // let question_arr = await db.collection('question').get()
  // question_arr = question_arr.data
  let count = await getCount('question');
  count = count.total;
  let question_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    question_arr = question_arr.concat(await getList(i, 'question'));
  }

  // let user_arr = await db.collection('user').get()
  // user_arr = user_arr.data
  count = await getCount('user');
  count = count.total;
  let user_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    user_arr = user_arr.concat(await getList(i, 'user'));
  }

  let ret_arr = []
  if (user_arr.length < 100) {
    while (ret_arr.length < event.num) {
      let qid = question_arr[randomNum(0, question_arr.length - 1)].question_id
      if (!isExist(ret_arr, qid)) {
        ret_arr.push(qid)
      }
    }

    return ret_arr
  }

  let dataBase = {}
  for (let i = 0, u_len = user_arr.length; i < u_len; i++) {
    dataBase[user_arr[i]._openid] = {}
  }

  for (let i = 0, u_len = user_arr.length; i < u_len; i++) {
    let _openid = user_arr[i]._openid
    for (let j = 0, q_len = question_arr.length; j < q_len; j++) {
      let score = 0
      let question_id = question_arr[j].question_id
      if (question_arr[j].like_openid.includes(_openid)) {
        score++
      }
      if (question_arr[j].collect_openid.includes(_openid)) {
        score += 2
      }
      dataBase[_openid][question_id] = score
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
  let recommend_questions = dataBase[recommend_openid]
  let recommend_questions_arr = []

  for (key in recommend_questions) {
    let question_score_obj = {}
    question_score_obj.question_id = key
    question_score_obj.score = recommend_questions[key]
    recommend_questions_arr.push(question_score_obj)
  }
  recommend_questions_arr.sort(compare('score'))
  let ret_question_id_arr = []
  for (let i = 0; i < event.num; i++) {
    ret_question_id_arr.push(recommend_questions_arr[i].question_id)
  }
  return ret_question_id_arr
}

// input: _openid num(推荐问题数目)
// output: 包含推荐问题的question_id的数组