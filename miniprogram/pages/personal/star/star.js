// pages/swiper2/swiper2.js
const app = getApp()
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    tab_index: 0,
    phi:[],
    que:[],
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.systemType()
    wx.cloud.callFunction({
      name: 'getCollection',
      data: {
        _openid: app.globalData.OPENID,
        type: "story"
      },
      complete: res => {
        var ret = res.result
        this.setData({
          phi: ret
        })
      }
    })

    wx.cloud.callFunction({
      name: 'getCollection',
      data: {
        _openid: app.globalData.OPENID,
        type: "answer"
      },
      complete: res => {
        var ret = res.result
        this.setData({
          que: ret
        })
      }
    })
  },
  
  onReady:function(){
    this.timer = setInterval(() => {
      if (this.data.show) {
        this.setData({
          show: !this.data.show
        })
      }
    }, 1000)
  },

  scroll (event) {
    console.log(event)
  },
 
  reactBottom () {
    console.log('触底-加载更多')
  },
 
  // 获取设备屏幕高度
  systemType () {
    wx.getSystemInfo({
      success: (res) => {
        let windowHeight = res.windowHeight
 
        this.setData({
          windowHeight: windowHeight
        })
 
        console.log(res)
      }
    })
  },
 
  tabChange (event) {
    this.setData({
      tab_index: event.detail.current
    })
  },
 
  // tab栏选择
  selectTab (event) {
    this.setData({
      tab_index: event.currentTarget.dataset.index
    })
  },
 
  // 返回顶部
  backTop () {
    let tab_index = this.data.tab_index
 
    this.setData({
      ['scrollTop' + tab_index]: 0
    })
  },

  onUnload: function () {
    clearInterval(this.timer)
  }
})