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
  let question_arr = await db.collection('question').get()
  question_arr = question_arr.data

  let ret_question_id_arr_from_title = []
  let ret_question_id_arr_from_description = []
  for (let i = 0, len = question_arr.length; i < len; i++) {
    if (question_arr[i].title.indexOf(event.keywords) != -1) {
      ret_question_id_arr_from_title.push(question_arr[i].question_id)
    }
  }
  for (let i = 0, len = question_arr.length; i < len; i++) {
    if (question_arr[i].description.indexOf(event.keywords) != -1) {
      ret_question_id_arr_from_description.push(question_arr[i].question_id)
    }
  }

  let ret_question_id_arr_from_all = ret_question_id_arr_from_title.concat(ret_question_id_arr_from_description).unique()

  // for( let i=0,len = ret_question_id_arr_from_all.length;i<len;i++){
  //   wx.cloud.callFunction({
  //     name:'getQuestion',
  //     data:{
  //       question_id: ret_question_id_arr_from_all[i]
  //     },
  //     complete:res=>{
  //       ret_question_id_arr_from_all[i] = res
  //     }
  //   })
  // }
  return ret_question_id_arr_from_all
}