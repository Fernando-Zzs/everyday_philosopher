//app.js
App({
  onLoad: function () {
    wx.getUserProfile({
      desc: 'desc',
    })
  },
  onLaunch: function () {
    wx.cloud.init({
      env: 'cloud1-7gj2827q094239b8',
      traceUser: true
    })
  }
})