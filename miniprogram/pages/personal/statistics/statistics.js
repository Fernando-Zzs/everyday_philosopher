import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();

function initChart1(canvas, width, height){
  const chart = echarts.init(canvas, null, {
    width:width,
    height:height
  });
  canvas.setChart(chart);
  var option={
    backgroundColor: '#fff',
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

function initChart2(canvas, width, height){
  const chart = echarts.init(canvas, null, {
    width:width,
    height:height
  });
  canvas.setChart(chart);
  var option = {
    legend: {
    },
    toolbox: {
        show: false,
        feature: {
            mark: {show: false},
            dataView: {show: true, readOnly: false},
            restore: {show: false},
            saveAsImage: {show: false}
        }
    },
    series: [
        {
            name: '面积模式',
            type: 'pie',
            radius: [20, 70],
            center: ['50%', '70%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            data: [
                {value: 40, name: '中哲'},
                {value: 38, name: '科哲'},
                {value: 32, name: '西哲'},
                {value: 30, name: '马克思主义哲学'},
                {value: 28, name: '逻辑学'},
                {value: 26, name: '心理学'},
                {value: 22, name: '政治学'},
                {value: 18, name: '艺术学'}
            ]
        }
    ]
};
  chart.setOption(option);
  return chart;
}

function initChart3(canvas, width, height){
  const chart = echarts.init(canvas, null, {
    width:width,
    height:height
  });
  canvas.setChart(chart);
   var option = {
    backgroundColor: '#fff',
    radar: {
        // shape: 'circle',
        indicator: [
            { name: '逻辑能力', max: 6500},
            { name: '知识面广度', max: 16000},
            { name: '知识面深度', max: 30000},
            { name: '心理学', max: 38000},
            { name: '思维', max: 52000},
            { name: '语言组织', max: 25000}
        ]
    },
    series: [{
        name: '哲学素养',
        type: 'radar',
        data: [
            {
                value: [4200, 3000, 20000, 35000, 50000, 18000]
            }
        ]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec1:{
      onInit:initChart1
    },
    ec2:{
      onInit:initChart2
    },
    ec3:{
      onInit:initChart3
    },
    index:0,
    x:35
  },
  swip(e){
    console.log(e)
    this.setData({x:this.data.x+=e.detail.dx/2000})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  back:function(){
    wx.switchTab({
      url: '../index/index',
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
