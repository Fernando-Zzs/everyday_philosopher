// miniprogram/pages/find/answer/answer.js
const app = getApp()
let _this_global = null

function initAnswer(value) {
  let hotList = []

  wx.cloud.callFunction({
    name: 'getTopAnswer',
    data: {
      question_id: value
    },
    success: async function (res1) {
      hotList = res1.result // checked

      for (let i = 0, len = hotList.length; i < len; i++) {
        hotList[i].liked = false
        hotList[i].collected = false

        wx.cloud.callFunction({
          name: 'isAnswerLiked',
          data: {
            answer_id: hotList[i].answer_id,
            _openid: app.globalData.OPENID
          },
          success: function (res2) {
            if (res2.result) {
              hotList[i].liked = true
            } else {
              hotList[i].liked = false
            }
            _this_global.setData({
              hotList
            })
          }
        })
        wx.cloud.callFunction({
          name: 'isAnswerCollected',
          data: {
            answer_id: hotList[i].answer_id,
            _openid: app.globalData.OPENID
          },
          success: function (res2) {
            if (res2.result) {
              hotList[i].collected = true
            } else {
              hotList[i].collected = false
            }
            _this_global.setData({
              hotList
            })
          }
        })
      }
    }
  })
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    question_description: '',
    question_id: '',
    answer_id: '',
    content: '',
    like_num: 0,
    collect_num: 0,
    avatarURL: '',
    nickname: '',
    hotList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'searchStory',
      data: {
        keywords: '开始'
      },
      success: function (res) {
        console.log(res.result);
      },
      fail: function (err) {
        console.log(err);
      }
    })

    let that = this
    _this_global = this
    // let temp = options.answer_id;
    let temp = '0'
    this.setData({
      answer_id: temp
    })

    wx.cloud.callFunction({
      name: 'getAnswer',
      data: {
        answer_id: that.data.answer_id
      },
      success: function (res) {
        that.setData({
          question_id: res.result.question_id,
          answer_id: res.result.answer_id,
          content: res.result.content,
          like_num: res.result.like_openid.length,
          collect_num: res.result.collect_openid.length,
          avatarURL: res.result.avatarURL,
          nickname: res.result.nickname
        })

        var qid = that.data.question_id

        wx.cloud.callFunction({
          name: 'getQuestion',
          data: {
            question_id: qid
          },
          complete: r => {
            that.setData({
              question_description: r.result.title
            })

            initAnswer(that.data.question_id)
          }
        })

      }
    })
  },
  handleAnswerLike(e) {
    let index = e.currentTarget.dataset.index
    let like_num = _this_global.data.hotList[index].like_num
    if (_this_global.data.hotList[index].liked) {
      _this_global.setData({
        ['hotList[' + index + '].liked']: false,
        ['hotList[' + index + '].like_num']: _this_global.data.hotList[index].like_num - 1
      })

      wx.cloud.callFunction({
        name: 'deleteLike',
        data: {
          _openid: app.globalData.OPENID,
          type: 'answer',
          id: _this_global.data.hotList[index].answer_id
        }
      })
    } else {
      _this_global.setData({
        ['hotList[' + index + '].liked']: true,
        ['hotList[' + index + '].like_num']: _this_global.data.hotList[index].like_num + 1
      })

      wx.cloud.callFunction({
        name: 'addLike',
        data: {
          _openid: app.globalData.OPENID,
          description: 'des1',
          id: _this_global.data.hotList[index].answer_id,
          timestamp: Date.parse(new Date()) / 1000,
          title: '',
          type: 'answer'
        }
      })
    }

    wx.cloud.callFunction({
      name: 'tapAnswerLike',
      data: {
        liked: !_this_global.data.hotList[index].liked,
        _openid: app.globalData.OPENID,
        answer_id: e.currentTarget.dataset.answerid
      }
    })
  },
  handleAnswerCollect(e) {
    let index = e.currentTarget.dataset.index
    let collect_num = _this_global.data.hotList[index].collect_num
    if (_this_global.data.hotList[index].collected) {
      _this_global.setData({
        ['hotList[' + index + '].collected']: false,
        ['hotList[' + index + '].collect_num']: _this_global.data.hotList[index].collect_num - 1
      })

      wx.cloud.callFunction({
        name: 'deleteCollection',
        data: {
          _openid: app.globalData.OPENID,
          type: 'answer',
          id: _this_global.data.hotList[index].answer_id
        }
      })
    } else {
      _this_global.setData({
        ['hotList[' + index + '].collected']: true,
        ['hotList[' + index + '].collect_num']: _this_global.data.hotList[index].collect_num + 1
      })

      wx.cloud.callFunction({
        name: 'addCollection',
        data: {
          _openid: app.globalData.OPENID,
          description: 'des1',
          id: _this_global.data.hotList[index].answer_id,
          timestamp: Date.parse(new Date()) / 1000,
          title: '',
          type: 'answer'
        }
      })
    }

    wx.cloud.callFunction({
      name: 'tapAnswerCollect',
      data: {
        collected: !_this_global.data.hotList[index].collected,
        _openid: app.globalData.OPENID,
        answer_id: e.currentTarget.dataset.answerid
      },
      success: function (res) {
        console.log('success');
      },
      fail: function (err) {
        console.log(err);
      }
    })
  }
})

// 根据answer_id获取数据库中的信息
// wx.cloud.callFunction({
//   name: 'getAnswer',
//   data: {
//     answer_id: that.data.answer_id
//   },
//   complete: res => {
//     // console.log(res.result)
//     that.setData({
//       question_id: res.result.question_id,
//       answer_id: res.result.answer_id,
//       content: res.result.content,
//       like_num: res.result.like_num,
//       collect_num: res.result.collect_num,
//       avatarURL: res.result.avatarURL,
//       nickname: res.result.nickname
//     })

//     // 根据question_id获取问题的title
//     var qid = that.data.question_id
//     console.log(qid)

//     wx.cloud.callFunction({
//       name: 'getQuestion',
//       data: {
//         question_id: qid
//       },
//       complete: r => {
//         that.setData({
//           question_description: r.result.title
//         })
//       }
//     })

//     // 根据question_id获取数据库中的热答
//     wx.cloud.callFunction({
//       name: 'getTopAnswer',
//       data: {
//         question_id: qid
//       },
//       complete: resu => {
//         console.log(resu.result)
//       }
//     })

//   }
// })