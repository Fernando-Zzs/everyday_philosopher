// pages/analyse/analyse.js
const app = getApp()
let that = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    capsuleTop:wx.getMenuButtonBoundingClientRect().top,
    capsuleHeight:wx.getMenuButtonBoundingClientRect().height,
    show: true,
    analysis: [],
    scale_arr: [{
      tag: '',
      scale: 1
    }, {
      tag: '',
      scale: 1
    }, {
      tag: '',
      scale: 1
    }, {
      tag: '',
      scale: 1
    }, {
      tag: '',
      scale: 1
    }, {
      tag: '',
      scale: 1
    }, {
      tag: '',
      scale: 1
    }, {
      tag: '',
      scale: 1
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
  },
  back: function () {
    wx.switchTab({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.timer = setInterval(() => {
      if (this.data.show) {
        this.setData({
          show: !this.data.show
        })
      }
    }, 1000),
    wx.cloud.callFunction({
      name: 'getAnalysisTagsPlus',
      data: {
        _openid: app.globalData.OPENID
      },
      success: function (res) {
        let res_arr = res.result
        for (let i = 0; i < 8; i++) {
          that.setData({
            ['scale_arr[' + i + '].tag']: res.result[i].tag,
            ['scale_arr[' + i + '].scale']: res_arr[i].count,
          })
        }

      },
      fail: function (err) {
        console.log(err)
      }
    })
    if (this.data.analysis.length > 0) {
      for (var i = 0; i < this.data.analysis.length; i++) {
        this.animate('.i' + (i + 1),
          [{
            transform: 'scale(' + this.data.analysis[i] + ')'
          }])
      }
    }
  },
  back: function () {
    wx.switchTab({
      url: '../index/index',
    })
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
    clearInterval(this.timer)
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