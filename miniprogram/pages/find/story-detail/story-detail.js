// miniprogram/pages/find/story-detail/story-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    story_title:'',
    story_content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let value = options.story_id
    let that = this
    wx.cloud.callFunction({
      name:"getStory",
      data:{
        story_id: value,
      },
      complete: res=>{
        var title_temp = res.result.title;
        var content_temp = res.result.content[0].text;
        that.setData({
          story_title: title_temp,
          story_content: content_temp
        })
      }
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