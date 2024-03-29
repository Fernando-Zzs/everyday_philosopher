// write/write.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question_id: '',
    answer_id: '',
    question_title: '',
    user_avatar: '',
    user_nickname: '',
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.OPENID==""){
      wx.showModal({
        title: '提示',
        content: '先登录才能评论哦',
        success(res){
          if(res.confirm){
            wx.switchTab({
              url: '../../personal/index/index',
            })
          }else if(res.cancel){
            wx.navigateBack({
              delta: 1,
            })
          } 
        }
      })
    }
    let that = this
    console.log(options.question_id)
    this.setData({
      question_id: options.question_id
    })
    wx.cloud.callFunction({
      name: 'getQuestion',
      data: {
        question_id: options.question_id
      },
      complete: res => {
        that.setData({
          question_title: res.result.title
        })
      }
    })
    let avatarurl_temp = app.globalData.AVATARURL
    let nickname_temp = app.globalData.NICKNAME
    this.setData({
      user_avatar: avatarurl_temp,
      user_nickname: nickname_temp
    })
  },

  submit: function () {
    let that = this
    if (that.data.content != "") {
      // console.log(this.data.content)
      wx.cloud.callFunction({
        name: 'addAnswer',
        data: {
          question_id: that.data.question_id,
          content: that.data.content,
          avatarURL: that.data.user_avatar,
          nickname: that.data.user_nickname
        },
        complete: res => {
          wx.navigateTo({
            url: '../../find/answer-detail/answer-detail?question_id=' + that.data.question_id + '&answer_id=' + res.result,
          })
        }
      })
    }else{
      wx.showToast({
        title: '内容不能为空',
        icon: 'error'
      })
    }
  },

  inputChange(e) {
    this.setData({
      content: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (app.globalData.TIMESTAMP_ANSWER_START == 0) {
      app.globalData.TIMESTAMP_ANSWER_START = Date.parse(new Date()) / 1000
    }
    console.log(app.globalData.TIMESTAMP_ANSWER_START);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    app.globalData.TIMESTAMP_ANSWER_END = Date.parse(new Date()) / 1000
    console.log(app.globalData.TIMESTAMP_ANSWER_END);
    wx.cloud.callFunction({
      name: 'addTime',
      data: {
        _openid: app.globalData.OPENID,
        type: 'answer',
        addedTime: app.globalData.TIMESTAMP_ANSWER_END - app.globalData.TIMESTAMP_ANSWER_START
      },
      success: function (res) {
        console.log(1111111122222222222222222222);
      },
      fail: function (err) {
        console.log(err);
      }
    })
    app.globalData.TIMESTAMP_ANSWER_START = 0
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