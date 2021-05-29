// pages/index/index.js
import mockArr from './mock.js'
const app = getApp()
let value_global = ''
let that = this

let winWidth = 416;
let winHeight = 736;

let chance = 1;
let next = false;

function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}
Page({
  data: {
    show: true,
    x: winWidth,
    y: winHeight,
    animationA: {},
    list: [],
    arr: [],
    initLength: '',
    distance: "",
    startX: '', // 初始点X位置
    startY: '', // 初始点Y位置
    currentIndex: -1, // 当前最上层滑块
    ratio: 2, // 屏幕比例
    context: '', // 文本框内容
    Sid: '', // 故事id
    like_num: ''
  },

  onLoad: function (options) {
    // 获取传来的story_id
    this.setData({
      Sid: options.story_id
    })
  },
  onReady: function () {
    this.timer = setInterval(() => {
      if (this.data.show) {
        this.setData({
          show: !this.data.show
        })
      }
    }, 3000)
  },
  onShow: function () {
    if (app.globalData.TIMESTAMP_COMMENT_START == 0) {
      app.globalData.TIMESTAMP_COMMENT_START = Date.parse(new Date()) / 1000
    }
    chance = 1;
    let that = this
    
    var res = wx.getSystemInfoSync();
    winWidth = res.windowWidth;
    winHeight = res.windowHeight;
    let ratio = res.pixelRatio
    this.setData({
      ratio
    })


    // 获取list数组
    this.getList()
  },
  write(e){
    wx.navigateTo({
      url: "/pages/find/writeComment/write?story_id"+this.data.Sid,
    })
  },
  handleLike: function (e) {
    // console.log(e.currentTarget.dataset.commentid)
    let index = e.currentTarget.dataset.index
    // console.log(index)
    let like_num = this.data.list[index].like_openid.length
    console.log(like_num)
    if (this.data.list[index].liked) {
      this.setData({
        ['list[' + index + '].liked']: false,
        like_num: this.data.like_num - 1
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
      this.setData({
        ['list[' + index + '].liked']: true,
        like_num: this.data.like_num + 1
      })

      wx.cloud.callFunction({
        name: 'addLike',
        data: {
          _openid: app.globalData.OPENID,
          description: '',
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
        liked: !this.data.list[index].liked,
        _openid: app.globalData.OPENID,
        comment_id: e.currentTarget.dataset.commentid
      }
    })
  },

  touchStart(e) {
    // console.log(e.currentTarget.dataset.questionid)
    // this.setData({
    //   currentQid: e.currentTarget.dataset.questionid
    // })
    let index = e.currentTarget.dataset.index
    let touches = e.touches
    let list = this.data.list || []
    // 多点触摸让图片回到原位
    if (touches.length > 1) {
      list[index].x = winWidth
      list[index].y = 0
      that.setData({
        list
      })
    } else if (index === (list.length - 1)) {
      // if (touches.length > 1) {
      //   list[index].x = winWidth
      //   list[index].y = 0
      //   that.setData({
      //     list
      //   })
      // } else 
      if (index === (list.length - 1)) {
        let startX = e.touches[0].clientX;
        let startY = e.touches[0].clientY;
        this.setData({
          startX,
          startY
        })
      }
    }
  },
  // 拖动结束
  touchEnd(e) {
    let that = this
    let index = e.currentTarget.dataset.index
    let list = this.data.list || []
    // console.log(index)
    if (index === (list.length - 1)) {
      let that = this;
      let startX = this.data.startX;
      let startY = this.data.startY;
      let endX = e.changedTouches[0].clientX;
      let endY = e.changedTouches[0].clientY;
      var distance = that.data.distance;
      // 与结束点与图片初始位置距离
      let disX = Math.abs(distance - winWidth)
      // 当前操作，初始点与结束点距离
      let disClientX = Math.abs(endX - startX)
      let disClientY = Math.abs(endY - startY)
      // 当滑动大于 滑块宽度的1/3翻页
      let ratio = this.data.ratio
      let moveDis = 666 / (ratio * 3);
      // console.log(disX, moveDis)
      if (disX > moveDis && disClientX > moveDis) {
        // console.log(disX, moveDis)disX > moveDis && 
        if (list.length > 1) {

          if (index % this.data.initLength == 0) {
            console.log(this.data.initLength-1)
            that.setData({
              like_num: that.data.list[that.data.initLength - 1].like_openid.length,
              collect_num: that.data.list[that.data.initLength - 1].collect_openid.length
            })
          } else {
            console.log(index%this.data.initLength - 1)
            that.setData({
              like_num: that.data.list[index % this.data.initLength - 1].like_openid.length,
              collect_num: that.data.list[index % this.data.initLength - 1].collect_openid.length
            })
          }
          list[index].x = (endX - startX) > 0 ? winWidth * 2 : -winWidth
          // 移除时距离竖向距离
          // list[index].y = disClientY
          list[index].y = disClientY
          if (index - 1 >= 0) {
            list[index - 1].x -= 7
            // 移除时距离竖向距离
            list[index - 1].y += 7
          }
          that.setData({
            list: list,
            // animationA: null
            // animationA: null
          });
          // 移出动画结束后 从list内移除
          setTimeout(() => {

            list.splice((list.length - 1), 1);

            this.setData({
              list
            })
            // 列表长度小于4的时候请求服务端

            if (next) {
              next = false;
              this.moveList()

            }
            if (list.length < 4) {
              that.getList()

            }

          }, 300)
          that.setData({
            context: ''
          })
        } else {
          list[index].x = winWidth - 7
          list[index].y = 0 + 7
          that.setData({
            list
          })
        }
      } else {
        list[index].x = winWidth - 7
        list[index].y = 0 + 7
        this.setData({
          list
        })
        // console.log(1)
      }
    } else {
      list[index].x = winWidth
      list[index].y = 0
      this.setData({
        list
      })
    }

  },
  onUnload: function () {
    clearInterval(this.timer)
  },
  touchMove(e) {
    // 左滑右滑手势可优化
  },
  onChange: function (e) {
    var that = this;
    that.setData({
      distance: e.detail.x
    })
  },
  // 模拟获取列表数据

  getList() {
    let that = this
    setTimeout(() => {
      // setTimeout(() => {
      wx.cloud.callFunction({
        name: 'getComment',
        data: {
          story_id: that.data.Sid
        },
        complete: res => {
          this.data.arr = deepClone(res.result)
          // console.log("arr",this.data.arr)
          this.setData({
            arr: this.data.arr,
            initLength: this.data.arr.length
          })
          next = true
          // 初次赋值
          this.setData({
            like_num: this.data.arr[0].like_openid.length
          })

          if (chance == 1) {
            this.moveList()
            chance = 0;
            next = false
            var index = (this.data.list.length - 1)
            if (index - 1 >= 0) {
              this.data.list[index].x -= 7
              this.data.list[index].y += 7
            }
            this.setData({
              list: this.data.list,
            })
          }
          wx.hideLoading()

        }
      })
    }, 200)

  },
  moveList() {
    let list = this.data.list || [];
    // console.log(this.data.arr)
    var count = this.data.initLength - 1
    for (let i of this.data.arr) {
      i.x = winWidth
      i.y = 0
      wx.cloud.callFunction({
        name: 'isCommentLiked',
        data: {
          comment_id: i.comment_id,
          _openid: app.globalData.OPENID
        },
        success: function (res2) {
          if (res2.result) {
            i.liked = true
          } else {
            i.liked = false
          }
        }
      })
      i.index = count--
      list.unshift(i)
    }
    this.setData({
      list
    })
    console.log(list)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    app.globalData.TIMESTAMP_COMMENT_END = Date.parse(new Date()) / 1000
    wx.cloud.callFunction({
      name: 'addTime',
      data: {
        _openid: app.globalData.OPENID,
        type: 'comment',
        addedTime: app.globalData.TIMESTAMP_COMMENT_END - app.globalData.TIMESTAMP_COMMENT_START
      }
    })
    app.globalData.TIMESTAMP_COMMENT_START = 0
    app.globalData.TIMESTAMP_COMMENT_END = 0
  }
})