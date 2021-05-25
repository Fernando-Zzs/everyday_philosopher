// write/write.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question_title:'',
    user_avatar:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    // console.log(options.question_id)
    wx.cloud.callFunction({
      name:'getQuestion',
      data:{
        question_id: options.question_id
      },
      complete:res=>{
        that.setData({
          question_title: res.result.title
        })
      }
    })
    let avatarurl_temp = app.globalData.AVATARURL
    let nickname_temp = app.globalData.NICKNAME
    this.setData({
      user_avatar: avatarurl_temp
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