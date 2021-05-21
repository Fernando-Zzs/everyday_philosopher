// miniprogram/pages/find/answer/answer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question_description: '',
    question_id: '',
    answer_id: '',
    content: '',
    like_num: '',
    collect_num: '',
    avatarURL: '',
    nickname: '',
    hotList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let temp = options.answer_id;
    this.setData({
      answer_id: temp
    })
    // 根据answer_id获取数据库中的信息
    wx.cloud.callFunction({
      name: 'getAnswer',
      data: {
        answer_id: that.data.answer_id
      },
      complete: res => {
        // console.log(res.result)
        that.setData({
          question_id: res.result.question_id,
          answer_id: res.result.answer_id,
          content: res.result.content,
          like_num: res.result.like_num,
          collect_num: res.result.collect_num,
          avatarURL: res.result.avatarURL,
          nickname: res.result.nickname
        })

        // 根据question_id获取问题的title
        var qid = that.data.question_id
        console.log(qid)
        
        wx.cloud.callFunction({
          name: 'getQuestion',
          data: {
            question_id: qid
          },
          complete: r => {
            that.setData({
              question_description: r.result.title
            })
          }
        })

        // 根据question_id获取数据库中的热答
        wx.cloud.callFunction({
          name: 'getTopAnswer',
          data: {
            question_id: qid
          },
          complete: resu => {
            console.log(resu.result)
          }
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