const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    avatar: '',
    nickname: '',
    newLetterNumber: 0,
    serviceId: '',
    param: app.globalData.param
  },

  //自定义导航上内边距自适应
  attached: function attached() {
    var _this = this;
    var isSupport = !!wx.getMenuButtonBoundingClientRect;
    var rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
    wx.getSystemInfo({
      success: function success(res) {
        var ios = !!(res.system.toLowerCase().search('ios') + 1);
        _this.setData({
          ios: ios,
          statusBarHeight: res.statusBarHeight,
          innerWidth: isSupport ? 'width:' + rect.left + 'px' : '',
          innerPaddingRight: isSupport ? 'padding-right:' + (res.windowWidth - rect.left) + 'px' : '',
          leftWidth: isSupport ? 'width:' + (res.windowWidth - rect.left) + 'px' : '',
          innerPaddingLeft: isSupport ? 'padding-left:' + (res.windowWidth - rect.left) + 'px' : ''
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初始化页面自定义导航栏
    var _this = this;
    _this.attached();
    //获取登录信息
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onReady: function () {
    this.timer = setInterval(() => {
      if (this.data.show) {
        this.setData({
          show: !this.data.show
        })
      }
    }, 1000)
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
  },
  onUnload: function () {
    clearInterval(this.timer)
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        var that = this
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 1000
        })
        const db = wx.cloud.database()

        wx.cloud.callFunction({
          name: 'getUserInfo',
          complete: res => {
            app.globalData.OPENID = res.result.openid
            wx.cloud.callFunction({
              name: 'addUser',
              data: {
                _openid: app.globalData.OPENID,
                nickname: that.data.userInfo.nickName,
                avatarUrl: that.data.userInfo.avatarUrl
              },
              success: function (res) {},
              fail: function (err) {
                console.log(err);
              }
            })
          }
        })
        app.globalData.NICKNAME = this.data.userInfo.nickName
        app.globalData.AVATARURL = this.data.userInfo.avatarUrl


      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.showToast({
      title: '以游客方式登录成功',
      icon: 'success',
      duration: 1000
    })

  },

  //切换导航
  cutTitle: function (e) {
    // console.log(e.currentTarget.dataset.index)
    let that = this;
    let index = e.currentTarget.dataset.index;
    var navigationArr = that.data.navigationArr;
    //清空全部样式
    navigationArr.forEach((item) => {
      item.isSelected = false;
    })
    //点击的导航添加上样式
    navigationArr[index].isSelected = true;
    that.setData({
      navigationArr: navigationArr
    })
  },
  onPageScroll: function (e) {
    // 导航栏透明度
    let Alpha = e.scrollTop * 1 / 100;
    // 导航栏背景颜色
    let navigationBackgroundColor = 'rgba(0, 0, 0,' + Alpha + ')';
    this.setData({
      navigationBackgroundColor: navigationBackgroundColor,
    })
  },
  /* 进入历史记录列表 */
  openHistory: function () {
    wx.navigateTo({
      url: '../../personal/history/history'
    })
  },

  /* 进入收藏夹列表 */
  openPortfolio: function () {
    wx.navigateTo({
      url: '../../personal/star/star'
    })
  },

  /* 进入分析列表 */
  openAnalysis: function () {
    wx.navigateTo({
      url: '../../personal/analyse/analyse'
    })
  },

  /* 进入统计列表 */
  openStatistics: function () {
    wx.navigateTo({
      url: '../../personal/statistics/statistics'
    })
  }
})