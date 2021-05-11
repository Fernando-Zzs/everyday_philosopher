import PubSub from 'pubsub-js'
Page({
  onLoad: function () {
    PubSub.subscribe('switchType', (msg, type) => {
      console.log(msg, type);
    })
  },
  toIndex() {
    wx.navigateTo({
      url: '../index/index',
    })
  }
})