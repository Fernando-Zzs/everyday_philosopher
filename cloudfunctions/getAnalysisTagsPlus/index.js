const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

cloud.init()

Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    "S": this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + ""));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

function get_class_from_tag(tag_mapping_obj, tag) {
  let tags_period_arr = tag_mapping_obj.period
  let tags_region_arr = tag_mapping_obj.region
  let tags_subject_arr = tag_mapping_obj.subject
  let tags_content_arr = tag_mapping_obj.content
  let tags_other_arr = tag_mapping_obj.other

  for (let i = 0, len = tags_period_arr.length; i < len; i++) {
    if (tags_period_arr[i] == tag) {
      return 'period'
    }
  }
  for (let i = 0, len = tags_region_arr.length; i < len; i++) {
    if (tags_region_arr[i] == tag) {
      return 'region'
    }
  }
  for (let i = 0, len = tags_subject_arr.length; i < len; i++) {
    if (tags_subject_arr[i] == tag) {
      return 'subject'
    }
  }
  for (let i = 0, len = tags_content_arr.length; i < len; i++) {
    if (tags_content_arr[i] == tag) {
      return 'content'
    }
  }
  for (let i = 0, len = tags_other_arr.length; i < len; i++) {
    if (tags_other_arr[i] == tag) {
      return 'other'
    }
  }
}

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

function get_tags_by_story_id(story_arr, story_id) {
  for (let i = 0, len = story_arr.length; i < len; i++) {
    if (story_arr[i].story_id == story_id) {
      return story_arr[i].tags
    }
  }

  return []
}

function get_tags_by_question_id(story_arr, question_arr, question_id) {
  for (let i = 0, len = question_arr.length; i < len; i++) {
    if (question_arr[i].question_id == question_id) {
      return get_tags_by_story_id(story_arr, question_arr[i].story_id)
    }
  }

  return []
}

function get_tags_by_answer_id(story_arr, question_arr, answer_arr, answer_id) {
  for (let i = 0, len_i = answer_arr.length; i < len_i; i++) {
    if (answer_arr[i].answer_id == answer_id) {
      let question_id = answer_arr[i].question_id

      for (let j = 0, len_j = question_arr.length; j < len_j; j++) {
        if (question_arr[j].question_id == question_id) {
          return get_tags_by_question_id(story_arr, question_arr, question_id)
        }
      }
    }
  }

  return []
}

function get_tags_by_comment_id(story_arr, comment_arr, comment_id) {
  for (let i = 0, len = comment_arr.length; i < len; i++) {
    if (comment_arr[i].comment_id == comment_id) {
      return get_tags_by_story_id(story_arr, comment_arr[i].story_id)
    }
  }

  return []
}

function get_tags_and_count_final_index(tags_and_count_final, tags_and_count) {
  let tag = tags_and_count.tag

  for (let i = 0, len = tags_and_count_final.length; i < len; i++) {
    if (tags_and_count_final[i].tag == tag) {
      return i
    }
  }

  return -1
}

function merge_tags_and_count_xx_arr(tags_and_count_history_arr, tags_and_count_collection_arr, tags_and_count_like_arr, tags_and_count_comment_arr, tag_mapping_obj) {
  let tags_and_count_final = []
  let tags_period_arr = tag_mapping_obj.period
  let tags_region_arr = tag_mapping_obj.region
  let tags_subject_arr = tag_mapping_obj.subject
  let tags_content_arr = tag_mapping_obj.content
  let tags_other_arr = tag_mapping_obj.other

  for (let i = 0, len = tags_period_arr.length; i < len; i++) {
    tags_and_count_final.push({
      tag: tags_period_arr[i],
      count: 0
    })
  }
  for (let i = 0, len = tags_region_arr.length; i < len; i++) {
    tags_and_count_final.push({
      tag: tags_region_arr[i],
      count: 0
    })
  }
  for (let i = 0, len = tags_subject_arr.length; i < len; i++) {
    tags_and_count_final.push({
      tag: tags_subject_arr[i],
      count: 0
    })
  }
  for (let i = 0, len = tags_content_arr.length; i < len; i++) {
    tags_and_count_final.push({
      tag: tags_content_arr[i],
      count: 0
    })
  }
  for (let i = 0, len = tags_other_arr.length; i < len; i++) {
    tags_and_count_final.push({
      tag: tags_other_arr[i],
      count: 0
    })
  }

  for (let i = 0, len_i = tags_and_count_history_arr.length; i < len_i; i++) {
    let index = get_tags_and_count_final_index(tags_and_count_final, tags_and_count_history_arr[i])
    tags_and_count_final[index].count += tags_and_count_history_arr[i].count
  }
  for (let i = 0, len_i = tags_and_count_collection_arr.length; i < len_i; i++) {
    let index = get_tags_and_count_final_index(tags_and_count_final, tags_and_count_collection_arr[i])
    tags_and_count_final[index].count += tags_and_count_collection_arr[i].count
  }
  for (let i = 0, len_i = tags_and_count_like_arr.length; i < len_i; i++) {
    let index = get_tags_and_count_final_index(tags_and_count_final, tags_and_count_like_arr[i])
    tags_and_count_final[index].count += tags_and_count_like_arr[i].count
  }
  for (let i = 0, len_i = tags_and_count_comment_arr.length; i < len_i; i++) {
    let index = get_tags_and_count_final_index(tags_and_count_final, tags_and_count_comment_arr[i])
    tags_and_count_final[index].count += tags_and_count_comment_arr[i].count
  }

  return tags_and_count_final
}

function get_percentage(story_arr, tag_mapping_obj, tags_and_count_final) {
  let tags_and_max_count_arr = []
  let tags_period_arr = tag_mapping_obj.period
  let tags_region_arr = tag_mapping_obj.region
  let tags_subject_arr = tag_mapping_obj.subject
  let tags_content_arr = tag_mapping_obj.content
  let tags_other_arr = tag_mapping_obj.other

  for (let i = 0, len = tags_period_arr.length; i < len; i++) {
    tags_and_max_count_arr.push({
      tag: tags_period_arr[i],
      count: 0
    })
  }
  for (let i = 0, len = tags_region_arr.length; i < len; i++) {
    tags_and_max_count_arr.push({
      tag: tags_region_arr[i],
      count: 0
    })
  }
  for (let i = 0, len = tags_subject_arr.length; i < len; i++) {
    tags_and_max_count_arr.push({
      tag: tags_subject_arr[i],
      count: 0
    })
  }
  for (let i = 0, len = tags_content_arr.length; i < len; i++) {
    tags_and_max_count_arr.push({
      tag: tags_content_arr[i],
      count: 0
    })
  }
  for (let i = 0, len = tags_other_arr.length; i < len; i++) {
    tags_and_max_count_arr.push({
      tag: tags_other_arr[i],
      count: 0
    })
  }

  for (let i = 0, len_i = story_arr.length; i < len_i; i++) {
    let tags = story_arr[i].tags
    for (let j = 0, len_j = tags.length; j < len_j; j++) {
      let tag_position = get_tag_position(tags_and_max_count_arr, tags[j])
      tags_and_max_count_arr[tag_position].count += 2.5
    }
  }

  for (let i = 0, len_i = tags_and_count_final.length; i < len_i; i++) {
    let denominator = 0
    for (let j = 0, len_j = tags_and_max_count_arr.length; j < len_j; j++) {
      if (tags_and_count_final[i].tag == tags_and_max_count_arr[j].tag) {
        denominator = tags_and_max_count_arr[j].count
      }
    }
    tags_and_count_final[i].count /= denominator

    if (tags_and_count_final[i].count > 1) {
      tags_and_count_final[i].count = 1
    }
  }

  return tags_and_count_final
}

// 云函数入口函数
exports.main = async (event, context) => {
  // let today_0 = new Date()
  // let day = new Date().getDay()
  // let timestamp_end = 0
  // let timestamp_start = 0
  // today_0.setHours(0)
  // today_0.setMinutes(0)
  // today_0.setSeconds(0)
  // today_0.setMilliseconds(0)

  // if (day == 0) {
  //   timestamp_end = Date.parse(today_0) / 1000 - 86400 * 6
  // } else {
  //   timestamp_end = Date.parse(today_0) / 1000 - 86400 * (day - 1)
  // }
  // timestamp_start = timestamp_end - 86400 * 7

  async function getCount_sqa(table) { //获取数据的总数，这里记得设置集合的权限
    let count = await db.collection(table).where({}).count();
    return count;
  }
  async function getList_sqa(skip, table) { //分段获取数据
    let list = await db.collection(table).skip(skip).get();
    return list.data;
  }
  async function getCount_hclc(table) { //获取数据的总数，这里记得设置集合的权限
    let count = await db.collection(table).where({
      _openid: event._openid
    }).count();
    return count;
  }
  async function getList_hclc(skip, table) { //分段获取数据
    let list = await db.collection(table).where({
      _openid: event._openid
    }).skip(skip).get();
    return list.data;
  }

  // let story_arr = await db.collection('story').get()
  // story_arr = story_arr.data

  let count = await getCount_sqa('story');
  count = count.total;
  let story_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    story_arr = story_arr.concat(await getList_sqa(i, 'story'));
  }

  // let question_arr = await db.collection('question').get()
  // question_arr = question_arr.data


  count = await getCount_sqa('question');
  count = count.total;
  let question_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    question_arr = question_arr.concat(await getList_sqa(i, 'question'));
  }

  // let answer_arr = await db.collection('answer').get()
  // answer_arr = answer_arr.data

  count = await getCount_sqa('answer');
  count = count.total;
  let answer_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    answer_arr = answer_arr.concat(await getList_sqa(i, 'answer'));
  }

  // let history_arr = await db.collection('history').where({
  //     _openid: event._openid
  //   })
  //   .get()
  // history_arr = history_arr.data // 得到相应时间戳内的history数据

  count = await getCount_hclc('history');
  count = count.total;
  let history_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    history_arr = history_arr.concat(await getList_hclc(i, 'history'));
  }

  let history_story_id_arr = []
  for (let i = 0, len = history_arr.length; i < len; i++) {
    if (history_arr[i].type == 'story') {
      history_story_id_arr.push(history_arr[i].id)
    }
  }

  let tags_and_count_history_arr = []
  for (let i = 0, len_i = story_arr.length; i < len_i; i++) {
    for (let j = 0, len_j = story_arr[i].tags.length; j < len_j; j++) {
      let currentTag = story_arr[i].tags[j]
      let tag_position = get_tag_position(tags_and_count_history_arr, currentTag)
      if (tag_position >= 0) {
        tags_and_count_history_arr[tag_position].count++
      } else {
        tags_and_count_history_arr.push({
          tag: currentTag,
          count: 1
        })
      }
    }
  }
  // 已经得到tags_and_count_history_arr

  // let collection_arr = await db.collection('collection').where({
  //     _openid: event._openid,
  //   })
  //   .get()
  // collection_arr = collection_arr.data // 得到相应时间戳内的collection数据

  count = await getCount_hclc('collection');
  count = count.total;
  let collection_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    collection_arr = collection_arr.concat(await getList_hclc(i, 'collection'));
  }

  // let like_arr = await db.collection('like').where({
  //     _openid: event._openid,
  //   })
  //   .get()
  // like_arr = like_arr.data

  count = await getCount_hclc('like');
  count = count.total;
  let like_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    like_arr = like_arr.concat(await getList_hclc(i, 'like'));
  }

  // let comment_arr = await db.collection('comment').where({
  //     _openid: event._openid,
  //   })
  //   .get()
  // comment_arr = comment_arr.data

  count = await getCount_hclc('comment');
  count = count.total;
  let comment_arr = []
  for (let i = 0; i < count; i += 100) { //自己设置每次获取数据的量
    comment_arr = comment_arr.concat(await getList_hclc(i, 'comment'));
  }

  let tag_mapping_obj = await db.collection('tag_mapping').get()
  tag_mapping_obj = tag_mapping_obj.data[0]

  let tags_and_count_collection_arr = []
  for (let i = 0, len_i = collection_arr.length; i < len_i; i++) {
    let tags = []
    if (collection_arr[i].type == 'story') {
      tags = get_tags_by_story_id(story_arr, collection_arr[i].id)
    }
    if (collection_arr[i].type == 'question') {
      tags = get_tags_by_question_id(story_arr, question_arr, collection_arr[i].id)
    }
    if (collection_arr[i].type == 'answer') {
      tags = get_tags_by_answer_id(story_arr, question_arr, answer_arr, collection_arr[i].id)
    }
    for (let j = 0, len_j = tags.length; j < len_j; j++) {
      let tag_position = get_tag_position(tags_and_count_collection_arr, tags[j])
      if (tag_position >= 0) {
        tags_and_count_collection_arr[tag_position].count += 1.5
      } else {
        tags_and_count_collection_arr.push({
          tag: tags[j],
          count: 1.5
        })
      }
    }
  }

  let tags_and_count_like_arr = []
  for (let i = 0, len_i = like_arr.length; i < len_i; i++) {
    let tags = []
    if (like_arr[i].type == 'story') {
      tags = get_tags_by_story_id(story_arr, like_arr[i].id)
    }
    if (like_arr[i].type == 'question') {
      tags = get_tags_by_question_id(story_arr, question_arr, like_arr[i].id)
    }
    if (like_arr[i].type == 'answer') {
      tags = get_tags_by_answer_id(story_arr, question_arr, answer_arr, like_arr[i].id)
    }
    if (like_arr[i].type == 'comment') {
      tags = get_tags_by_comment_id(story_arr, comment_arr, like_arr[i].id)
    }
    for (let j = 0, len_j = tags.length; j < len_j; j++) {
      let tag_position = get_tag_position(tags_and_count_like_arr, tags[j])
      if (tag_position >= 0) {
        tags_and_count_like_arr[tag_position].count++
      } else {
        tags_and_count_like_arr.push({
          tag: tags[j],
          count: 1
        })
      }
    }
  }

  let tags_and_count_comment_arr = []
  for (let i = 0, len_i = comment_arr.length; i < len_i; i++) {
    let tags = get_tags_by_comment_id(story_arr, comment_arr, comment_arr[i].comment_id)
    for (let j = 0, len_j = tags.length; j < len_j; j++) {
      let tag_position = get_tag_position(tags_and_count_comment_arr, tags[j])
      if (tag_position >= 0) {
        tags_and_count_comment_arr[tag_position].count += 2
      } else {
        tags_and_count_comment_arr.push({
          tag: tags[j],
          count: 2
        })
      }
    }
  }

  let tags_and_count_final = merge_tags_and_count_xx_arr(tags_and_count_history_arr, tags_and_count_collection_arr, tags_and_count_like_arr, tags_and_count_comment_arr, tag_mapping_obj)
  let percentage_count_arr = get_percentage(story_arr, tag_mapping_obj, tags_and_count_final)

  for (let i = 0, len = percentage_count_arr.length; i < len; i++) {
    if (!(percentage_count_arr[i].count >= 0)) {
      percentage_count_arr[i].count = 0
    }
  }

  percentage_count_arr.sort(compare('count'))

  let ret_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let i = 0, len = percentage_count_arr.length; i < len; i++) {
    switch (get_class_from_tag(tag_mapping_obj, percentage_count_arr[i].tag)) {
      case 'period':
        if (ret_arr[0] == 0) {
          ret_arr[0] = percentage_count_arr[i]
        } else if (ret_arr[1] == 0) {
          ret_arr[1] = percentage_count_arr[i]
        }
        break
      case 'region':
        if (ret_arr[2] == 0) {
          ret_arr[2] = percentage_count_arr[i]
        } else if (ret_arr[3] == 0) {
          ret_arr[3] = percentage_count_arr[i]
        }
        break
      case 'subject':
        if (ret_arr[4] == 0) {
          ret_arr[4] = percentage_count_arr[i]
        } else if (ret_arr[5] == 0) {
          ret_arr[5] = percentage_count_arr[i]
        }
        break
      case 'content':
        if (ret_arr[6] == 0) {
          ret_arr[6] = percentage_count_arr[i]
        } else if (ret_arr[7] == 0) {
          ret_arr[7] = percentage_count_arr[i]
        }
        break
      case 'other':
        if (ret_arr[8] == 0) {
          ret_arr[8] = percentage_count_arr[i]
        } else if (ret_arr[9] == 0) {
          ret_arr[9] = percentage_count_arr[i]
        }
        break
      default:
        break
    }
  }

  return ret_arr
}

// 分析思路：
// 获取每个小tag的绝对分数：
// 评论2 收藏1.5 点赞1 查看1 针对tag
// history表中只记录故事和问题
// 1. 在history表中找到该用户的所有历史记录放到history_arr中
// 2. 在collection表中找到该用户的所有收藏记录放到collection_arr中
// 3. 在like表中找到该用户的所有点赞记录放到like_arr中