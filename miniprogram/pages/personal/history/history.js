import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {};
  chart.setOption(option);
  return chart;
}

Page({
  data: {
      show: true, // 是否显示加载栏
      openid:'',
      currentTab: 0, // tab切换
      ec:{
        onInit:initChart
      },
      phi:[],
      que:[],
      backgroundImage:''
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
    // 生命周期函数--监听页面加载
    // const db2 = wx.cloud.database();
    // db2.collection('history').add({
    //   data:{
    //     description:"description2",
    //     id:"1",
    //     timestamp:123456,
    //     title:"title2",
    //     type:"answer"
    //   }
    // })
    // 调用云函数获取用户openid
    
    wx.cloud.downloadFile({
      fileID: 'cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星空11.jpg',
      maxAge: 120*60*1000,
      success:res=>{
        that.setData({
          backgroundImage: res.tempFilePath
        })
      }
    })

    let page = this;
    wx.cloud.callFunction({
      name: 'getUserInfo',
      complete: res => {
        // console.log(res.result)
        var openid = res.result.openid
        page.setData({
          openid: openid
        })
      }
    })

    // 访问数据库存入本地以便渲染
    let that = this
    var oid = app.globalData.OPENID
    const db = wx.cloud.database()

    // 要获取历史记录，就要访问history数据库，根据记录的type类型进而访问不同的数据库
    // db.collection('history').orderBy('timestamp','asc').where({
    //   type:"story",
    //   _openid: oid
    // })
    // .orderBy('timestamp','asc')
    // .get({
    //   success:function(res){
    //     that.setData({
    //       phi:res.data
    //     })
    //   }
    // })
    wx.cloud.callFunction({
      name: 'getHistory',
      data: {
        _openid: oid,
        type: "story"
      },
      complete: res => {
        // console.log(res.result)
        var ret = res.result
        that.setData({
          phi: ret
        })
      }
    })

    wx.cloud.callFunction({
      name: 'getHistory',
      data: {
        _openid: oid,
        type: "answer"
      },
      complete: res => {
        // console.log(res.result)
        var ret = res.result
        that.setData({
          que: ret
        })
      }
    })
  },

  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    this.timer = setInterval(() => {
      if (this.data.show) {
        this.setData({
          show: !this.data.show
        })
      }
    }, 1000)
  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
    clearInterval(this.timer)
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