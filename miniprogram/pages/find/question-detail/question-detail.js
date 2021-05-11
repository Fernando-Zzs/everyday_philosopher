// miniprogram/pages/find/question-detail/question-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 问题的内容
    title_temp:'',
    description_temp:'',
    // 回答的内容
    answer_temp:'',
    like_num:'',
    collect_num:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let que_temp = options.question_id
    let ans_temp = options.answer_id
    // console.log(que_temp,ans_temp,con_temp,like_temp,collect_temp)
    let that = this
    wx.cloud.callFunction({
      name:"getQuestion",
      data:{
        question_id: que_temp,
      },
      complete: res=>{
        var title_temp = res.result.title;
        var description_temp = res.result.description;

        that.setData({
          title_temp,
          description_temp
        })
      }
    })
    wx.cloud.callFunction({
      name:"getAnswer",
      data:{
        answer_id: ans_temp,
      },
      complete: res=>{
        var answer_temp = res.result.content;
        var like_num = res.result.like_num;
        var collect_num = res.result.collect_num;
        that.setData({
          answer_temp,
          like_num,
          collect_num
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