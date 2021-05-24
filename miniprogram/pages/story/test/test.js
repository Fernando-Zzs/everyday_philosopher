Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    db.collection('story').add({
      data:{
        collect_openid:["157","oMvG85TcKyxuM3KXlkmNaXu6CKYM"],
        comment:[],
        content:[{images:"address",keyframes:[],text:"",type:"t1"}],
        description:"柏拉图之师苏格拉底之死是悲壮的，是迟暮之人伟大的殉道。而柏拉图的结局并没有那么悲惨。",
        icon:"",
        like_openid:["123","oMvG85TcKyxuM3KXlkmNaXu6CKYM"],
        story_id:'3',
        tags:[],
        title:"柏拉图：柏拉图之死"
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