const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  async function getCount() { //获取数据的总数，这里记得设置集合的权限
    let count = await db.collection('answer').where({
      question_id: event.question_id
    }).count();
    return count;
  }
  async function getList(skip) { //分段获取数据
    let list = await db.collection('answer').where({
      question_id: event.question_id
    }).skip(skip).get();
    return list.data;
  }

  //   let answers_arr = await db.collection('answer').where({
  //     question_id: event.question_id
  //   }).get()
  //   answers_arr = answers_arr.data

  let count = await getCount();
  count = count.total;
  let answers_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    answers_arr = answers_arr.concat(await getList(i));
  }
  return answers_arr;

  let index = -1
  for (let i = 0, len = answers_arr.length; i < len; i++) {
    if (answers_arr[i].answer_id == event.answer_id) {
      index = i
    }
  }

  let buffer = answers_arr[index]
  answers_arr.splice(index, 1)

  answers_arr.unshift(buffer)
  return answers_arr
}

//input: question_id, answer_id
//output: 将特定answer_id放在第一个的answer_id集合