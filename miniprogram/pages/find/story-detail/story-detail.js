// miniprogram/pages/find/story-detail/story-detail.js
const app = getApp()
let value_global = ''
let _this_global = this

let content_height = 0
let timestamp_story_start = 0
let timestamp_comment_start = 0
let timestamp_story_end = 0
let timestamp_comment_end = 0
let lock = false

function initComment(value) {
  let comment_arr = []

  wx.cloud.callFunction({
    name: 'getComment',
    data: {
      story_id: value
    },
    success: async function (res1) {
      comment_arr = res1.result // checked

      for (let i = 0, len = comment_arr.length; i < len; i++) {
        comment_arr[i].liked = false

        wx.cloud.callFunction({
          name: 'isCommentLiked',
          data: {
            comment_id: comment_arr[i].comment_id,
            _openid: app.globalData.OPENID
          },
          success: function (res2) {
            if (res2.result) {
              comment_arr[i].liked = true
            } else {
              comment_arr[i].liked = false
            }
            _this_global.setData({
              show: comment_arr
            })
          }
        })
      }
      console.log(comment_arr);
    }
  })
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLoading: true,
    story_id: '',
    story_title: '',
    story_content: '',
    lineHeight: 24,
    functionShow: false,
    emojiShow: false,
    comment: '',
    focus: false,
    cursor: 0,
    _keyboardShow: false,
    parsedComment: '',
    show: [],
    emojiSource: 'cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/emoji _ 雪碧图_files/emoji-sprite.b5bd1fe0.png',
    collected: false,
    liked: false,
    like_story_num: 0,
    liked_comment: false,
    story_description: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'getAnalysisTagsPlus',
      data: {
        _openid: 'oMvG85TcKyxuM3KXlkmNaXu6CKYM'
      },
      success: function (res) {
        console.log('ceshijieguo', res.result);
      }
    })
    let _this = this
    _this_global = _this

    this.timer = setInterval(() => {
      if (this.data.showLoading) {
        this.setData({
          showLoading: !this.data.showLoading
        })
      }
    }, 1000)



    const emojiInstance = this.selectComponent('.mp-emoji')
    this.emojiNames = emojiInstance.getEmojiNames()
    this.parseEmoji = emojiInstance.parseEmoji
    let value = options.story_id
    value_global = value
    let that = this
    // wx.cloud.callFunction({
    //   name: 'getComment',
    //   data: {
    //     story_id: value
    //   },
    //   complete: res => {
    //     that.setData({
    //       story_id: value,
    //       show: res.result
    //     })
    //     // console.log(that.data.show)
    //   }
    // })

    const app = getApp()
    console.log('openid: ' + app.globalData.OPENID)

    wx.cloud.callFunction({
      name: 'getLikeStoryNum',
      data: {
        story_id: value
      },
      success: function (res) {
        console.log('likestory: ' + res.result);
        _this_global.setData({
          like_story_num: res.result
        })
      }
    })

    wx.cloud.callFunction({
      name: 'isStoryCollected',
      data: {
        story_id: value,
        _openid: app.globalData.OPENID
      },
      success: function (res) {
        console.log('collected: ' + res.result)
        if (res.result) {
          _this.setData({
            collected: true
          })
        }
      },
      fail: function (res) {
        console.log(res)
      }
    })

    wx.cloud.callFunction({
      name: 'isStoryLiked',
      data: {
        story_id: value,
        _openid: app.globalData.OPENID
      },
      success: function (res) {
        console.log('liked: ' + res.result)
        if (res.result) {
          _this.setData({
            liked: true
          })
        }
      },
      fail: function (res) {
        console.log(res)
      }
    })

    initComment(value)

    wx.cloud.callFunction({
      name: "getStory",
      data: {
        story_id: value,
      },
      complete: res => {
        var title_temp = res.result.title;
        var content_temp = res.result.content[0].text;
        that.setData({
          story_title: title_temp,
          story_content: content_temp,
          story_description: res.result.description,
          story_id: value
        })
      }
    })
  },
  onUnload: function () {
    clearInterval(this.timer)
  },
  onkeyboardHeightChange(e) {
    const {
      height
    } = e.detail
    this.setData({
      keyboardHeight: height
    })
  },

  hideAllPanel() {
    this.setData({
      functionShow: false,
      emojiShow: false
    })
  },
  showEmoji() {
    this.setData({
      functionShow: false,
      emojiShow: this.data._keyboardShow || !this.data.emojiShow
    })
  },
  showFunction() {
    this.setData({
      functionShow: this.data._keyboardShow || !this.data.functionShow,
      emojiShow: false
    })
  },
  chooseImage() {},
  onFocus() {
    this.data._keyboardShow = true
    this.hideAllPanel()
  },
  onBlur(e) {
    this.data._keyboardShow = false
    this.data.cursor = e.detail.cursor || 0
  },
  onInput(e) {
    const value = e.detail.value
    this.data.comment = value
  },
  // onConfirm() {
  //   this.onsend()
  // },
  insertEmoji(evt) {
    const emotionName = evt.detail.emotionName
    const {
      cursor,
      comment
    } = this.data
    const newComment =
      comment.slice(0, cursor) + emotionName + comment.slice(cursor)
    this.setData({
      comment: newComment,
      cursor: cursor + emotionName.length
    })
  },
  onsend() {
    // 将评论记录放入两个数据库
    let that = this
    let avatarurl_temp = app.globalData.AVATARURL
    let nickname_temp = app.globalData.NICKNAME
    const comment = this.data.comment
    // const parsedComment = this.parseEmoji(this.data.comment)
    const parsedComment = comment
    _this_global.setData({
      parsedComment: '',
      comment: ''
    })
    let comment_id_add = -1
    wx.cloud.callFunction({
      name: 'addComment',
      data: {
        story_id: value_global,
        content: parsedComment,
        avatarURL: avatarurl_temp,
        nickname: nickname_temp,
        timestamp: Date.parse(new Date()) / 1000,
        _openid: app.globalData.OPENID
      },
      success: function (res) {
        comment_id_add = res.result // checked

        let comment_obj_add = {}
        wx.cloud.callFunction({
          name: 'getCommentById',
          data: {
            comment_id: comment_id_add
          },
          success: function (res) {
            comment_obj_add = res.result

            let show = _this_global.data.show
            comment_obj_add.liked = false
            comment_obj_add.like_num = 0
            show.push(comment_obj_add)
            _this_global.setData({
              show
            })
          }
        })
      }
    })

    // 显示到页面上
    // wx.cloud.callFunction({
    //   name: 'getComment',
    //   data: {
    //     story_id: that.data.story_id
    //   },
    //   complete: res => {
    //     // console.log(res.result)
    //     // show = res.result
    //     that.setData({
    //       show: res.result,
    //       parsedComment: '',
    //       comment: ''
    //     })
    //   }
    // })
  },
  deleteEmoji: function () {
    const pos = this.data.cursor
    const comment = this.data.comment
    let result = '',
      cursor = 0

    let emojiLen = 6
    let startPos = pos - emojiLen
    if (startPos < 0) {
      startPos = 0
      emojiLen = pos
    }
    const str = comment.slice(startPos, pos)
    const matchs = str.match(/\[([\u4e00-\u9fa5\w]+)\]$/g)
    // 删除表情
    if (matchs) {
      const rawName = matchs[0]
      const left = emojiLen - rawName.length
      if (this.emojiNames.indexOf(rawName) >= 0) {
        const replace = str.replace(rawName, '')
        result = comment.slice(0, startPos) + replace + comment.slice(pos)
        cursor = startPos + left
      }
      // 删除字符
    } else {
      let endPos = pos - 1
      if (endPos < 0) endPos = 0
      const prefix = comment.slice(0, endPos)
      const suffix = comment.slice(pos)
      result = prefix + suffix
      cursor = endPos
    }
    this.setData({
      comment: result,
      cursor: cursor
    })
  },
  // like_it: function (e) {
  //   console.log(e.currentTarget.dataset.commentid);
  //   var that = this;
  //   wx.cloud.callFunction({
  //     name: 'likeComment',
  //     data: {
  //       _id: e.currentTarget.dataset.commentid
  //     },
  //     complete: res => {
  //       let that = this
  //       let value = that.data.story_id
  //       wx.cloud.callFunction({
  //         name: 'getComment',
  //         data: {
  //           story_id: value
  //         },
  //         complete: res => {
  //           that.setData({
  //             show: res.result
  //           })
  //         }
  //       })
  //     }
  //   })
  // },
  // collect_it: function (e) {

  // },
  handleCollect() {
    if (_this_global.data.collected) {
      _this_global.setData({
        collected: false
      })

      wx.cloud.callFunction({
        name: 'deleteCollection',
        data: {
          _openid: app.globalData.OPENID,
          type: 'story',
          id: value_global
        }
      })
    } else {
      _this_global.setData({
        collected: true
      })

      wx.cloud.callFunction({
        name: 'addCollection',
        data: {
          _openid: app.globalData.OPENID,
          description: _this_global.data.story_description,
          id: value_global,
          timestamp: Date.parse(new Date()) / 1000,
          title: _this_global.data.story_title,
          type: 'story'
        }
      })
    }
    wx.cloud.callFunction({
      name: 'tapStoryCollect',
      data: {
        collected: !_this_global.data.collected,
        _openid: app.globalData.OPENID,
        story_id: value_global
      },
      success: function (res) {
        console.log(res.result)
      }
    })
  },
  to:function(e){
    console.log(e.currentTarget.dataset.storyid)
    wx.navigateTo({
      url: '../../find/SandC/index?story_id='+e.currentTarget.dataset.storyid,
    })
  },
  handleLike() {
    let like_story_num = _this_global.data.like_story_num
    if (_this_global.data.liked) {
      _this_global.setData({
        liked: false,
        like_story_num: like_story_num - 1
      })

      wx.cloud.callFunction({
        name: 'deleteLike',
        data: {
          _openid: app.globalData.OPENID,
          type: 'story',
          id: value_global
        }
      })
    } else {
      _this_global.setData({
        liked: true,
        like_story_num: like_story_num + 1
      })

      wx.cloud.callFunction({
        name: 'addLike',
        data: {
          _openid: app.globalData.OPENID,
          description: _this_global.data.story_description,
          id: value_global,
          timestamp: Date.parse(new Date()) / 1000,
          title: _this_global.data.story_title,
          type: 'story'
        }
      })
    }
    wx.cloud.callFunction({
      name: 'tapStoryLike',
      data: {
        liked: !_this_global.data.liked,
        _openid: app.globalData.OPENID,
        story_id: value_global
      },
      success: function (res) {
        console.log(res.result)
      }
    })
  },
  handleCommentLike(e) {
    let index = e.currentTarget.dataset.index
    let like_num = _this_global.data.show[index].like_num
    if (_this_global.data.show[index].liked) {
      _this_global.setData({
        ['show[' + index + '].liked']: false,
        ['show[' + index + '].like_num']: _this_global.data.show[index].like_num - 1
      })

      wx.cloud.callFunction({
        name: 'deleteLike',
        data: {
          _openid: app.globalData.OPENID,
          type: 'comment',
          id: e.currentTarget.dataset.commentid
        }
      })
    } else {
      _this_global.setData({
        ['show[' + index + '].liked']: true,
        ['show[' + index + '].like_num']: _this_global.data.show[index].like_num + 1
      })

      wx.cloud.callFunction({
        name: 'addLike',
        data: {
          _openid: app.globalData.OPENID,
          description: 'des1',
          id: e.currentTarget.dataset.commentid,
          timestamp: Date.parse(new Date()) / 1000,
          title: '',
          type: 'comment'
        }
      })
    }

    wx.cloud.callFunction({
      name: 'tapCommentLike',
      data: {
        liked: !_this_global.data.show[index].liked,
        _openid: app.globalData.OPENID,
        comment_id: e.currentTarget.dataset.commentid
      }
    })
  },
  handleSend() {
    this.onsend()
  },
  onPageScroll: function (e) {
    if (content_height == 0) {
      wx.createSelectorQuery().select('.content').boundingClientRect(function (rect) {
        content_height = rect.height - wx.getSystemInfoSync().windowHeight
      }).exec()
    }

    if (!lock && content_height != 0 && e.scrollTop >= content_height) {
      lock = true
      timestamp_story_end = Date.parse(new Date()) / 1000
      timestamp_comment_start = Date.parse(new Date()) / 1000
      console.log('storyover', timestamp_story_end);
      wx.cloud.callFunction({
        name: 'addTime',
        data: {
          _openid: app.globalData.OPENID,
          type: 'story',
          addedTime: timestamp_story_end - timestamp_story_start
        }
      })
    }
  },
  onShow: function () {
    timestamp_story_start = Date.parse(new Date()) / 1000
    console.log('show', timestamp_story_start);
  },
  onUnload: function () {
    timestamp_comment_end = Date.parse(new Date()) / 1000
    wx.cloud.callFunction({
      name: 'addTime',
      data: {
        _openid: app.globalData.OPENID,
        type: 'comment',
        addedTime: timestamp_comment_end - timestamp_comment_start
      }
    })
  }
})