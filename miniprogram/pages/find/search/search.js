// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    keywords: '',
    fixed: false,
    search_items: [],
    story_items: []
  },
  back: function () {
    wx.switchTab({
      url: '../index/index',
    })
  },
  search(value) {

  },
  search_confirm(e) {
    // console.log(e.detail.value)
    var keyword = e.detail.value
    var that = this
    wx.cloud.callFunction({
      name: 'searchQuestion',
      data: {
        keywords: keyword
      },
      complete: res => {
        var temp = res.result
        if (!temp) {
          console.log('无匹配问题')
        } else {
          var empty = []
          for (let i = 0, len = temp.length; i < len; i++) {
            wx.cloud.callFunction({
              name: 'getQuestion',
              data: {
                question_id: temp[i]
              },
              complete: res => {
                empty.push(res.result)
                that.setData({
                  search_items: empty
                })
              }
            })
          }
          that.setData({
            search_items: temp
          })
        }
      }
    })
    wx.cloud.callFunction({
      name: 'searchStory',
      data: {
        keywords: keyword
      },
      complete: res => {
        var temp = res.result
        if (!temp) {
          console.log('无匹配故事')
        } else {
          var empty = []
          for (let i = 0, len = temp.length; i < len; i++) {
            wx.cloud.callFunction({
              name: 'getStory',
              data: {
                story_id: temp[i]
              },
              complete: res => {
                empty.push(res.result)
                that.setData({
                  story_items: empty
                })
              }
            })
          }
          that.setData({
            search_items: temp
          })
        }
      }
    })
  },
  showQuestionDetail: function (e) {
    console.log(e.currentTarget.dataset.questionid)
    wx.navigateTo({
      url: '../question-detail/question-detail?question_id=' + e.currentTarget.dataset.questionid,
    })
  },
  showStoryDetail: function (e) {
    console.log(e.currentTarget.dataset.storyid)
    wx.navigateTo({
      url: '../story-detail/story-detail?story_id=' + e.currentTarget.dataset.storyid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)

  },
  onPageScroll(res){
    let that = this
    this.setData({
      scrollTop: res.scrollTop
    })
    if(this.data.scrollTop> 64){
      that.setData({
        fixed: true
      })
    } else{
      that.setData({
        fixed: false
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.timer = setInterval(() => {
      if (this.data.show) {
        this.setData({
          show: !this.data.show
        })
      }
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.timer)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})