//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'cloud1-6gm7hn7636af92c5',
        traceUser: true,
      })
    }

    this.globalData = {
      OPENID: '',
      NICKNAME: '',
      AVATARURL: 'cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/匿名用户.png'
    }
  }
})
