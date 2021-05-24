import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }]
  };
  chart.setOption(option);
  return chart;
}

Page({
  data: {
    // tab切换    
    currentTab: 0,
    ec: {
      onInit: initChart
    },
    datas: [], // 第一模块历史数据
    datas2: [], // 第二模块历史数据
  },

  onPullDownRefresh: function () {},

  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current,
    })
  },
  onLoad: function (options) {
    let that = this
    const db = wx.cloud.database()
    db.collection('collection').get({
      success: function (res) {
        that.setData({
          datas: res.data
        })
        console.log();
      },
      fail: (err) => {
        console.log(err);
      }
    })
    let that2 = this
    const db2 = wx.cloud.database()
    db2.collection('collection').get({
      success: function (res) {
        that2.setData({
          datas2: res.data
        })
      },
      fail: (err) => {
        console.log(err);
      }
    })
    // wx.cloud.callFunction({
    //   name: 'getCollectedAnswers',
    //   data: {
    //     _openid: app.globalData.OPENID
    //   },
    //   success: function (res) {
    //     that.setData({
    //       datas2: res.result
    //     })
    //     console.log(res.result);
    //   }
    // })
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成  
  },
  onShow: function () {
    // 生命周期函数--监听页面显示  
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏  
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载  
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作  
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数  
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享  
    return {
      title: 'title', // 分享标题  
      desc: 'desc', // 分享描述  
      path: 'path' // 分享路径  
    }
  }
})