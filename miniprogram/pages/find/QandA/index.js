// pages/index/index.js
import mockArr from './mock.js'
const app = getApp()
let winWidth = 416;
let winHeight = 736;
let chance=1;
let canUp=true;
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}
Page({
  onLoad()
  {  
  },
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },
  data: {
    show: false,
    x: winWidth,
    y: winHeight,
    animationA: {},
    list: [],
    arr:[],
    distance: "",
    startX: '', // 初始点X位置
    startY: '', // 初始点Y位置
    currentIndex: -1, // 当前最上层滑块
    ratio: 2, // 屏幕比例
    context: '', // 文本框内容
    currentQid: '' // 当前问题id
  },
  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
    this.getList()
    setTimeout(()=>{this.setData({list:this.data.list})},500)
   
  },
  touchStart(e) {
    // console.log(e.currentTarget.dataset.questionid)
    this.setData({
      currentQid: e.currentTarget.dataset.questionid
    })
    let index = e.currentTarget.dataset.index
    let touches = e.touches
    let list = this.data.list || []
    // 多点触摸让图片回到原位
    // if (touches.length > 1) {
    //   list[index].x = winWidth
    //   list[index].y = 0
    //   that.setData({
    //     list
    //   })
    // } else 
    if (index === (list.length - 1)) {
      let startX = e.touches[0].clientX;
      let startY = e.touches[0].clientY;
      this.setData({
        startX,
        startY
      })
    }
  },
  // 拖动结束
  touchEnd(e) {
    
    let index = e.currentTarget.dataset.index
    let list = this.data.list || []
    
    if (index === (list.length - 1)) {
    //   if(list.length < 4){ 
    //     this.moveList()
    // }
      let that = this;
      let startX = this.data.startX;
      let startY = this.data.startY;
      let endX = e.changedTouches[0].clientX;
      let endY = e.changedTouches[0].clientY;
      var distance = that.data.distance;
      // 与结束点与图片初始位置距离
      let disX = Math.abs(distance - winWidth)
      // 当前操作，初始点与结束点距离
      let disClientX = Math.abs(endX - startX)
      let disClientY = Math.abs(endY - startY)
      // 当滑动大于 滑块宽度的1/3翻页
      let ratio = this.data.ratio
      let moveDis = 666 / (ratio * 3);
      // console.log(disX, moveDis)disX > moveDis && 
      if (disClientX > moveDis&&list.length>1) {
        list[index].x = (endX - startX) > 0 ? winWidth * 2 : -winWidth
        // 移除时距离竖向距离
        list[index].y = disClientY
        if(index-1>=0){
          list[index-1].x-=7
        // 移除时距离竖向距离
        list[index-1].y +=7
        }
        that.setData({
          list: list,
          // animationA: null
        });
        // 移出动画结束后 从list内移除
        setTimeout(() => {

          list.splice((list.length - 1), 1);
          this.setData({
            list
          })
          // 列表长度小于4的时候请求服务端
          
         if (list.length < 4) {
            that.getList()
          }
       
        }, 300)
        that.setData({
          context: ''
        })
      } else if (disClientX < 1 && disClientY < 1) {
        // 点击进入
        // console.log('点击进入详情')
      } else {
        list[index].x = winWidth
        list[index].y = 0
        that.setData({
          list
        })
      }
    }
    else{
      list[index].x = winWidth
        list[index].y = 0
        this.setData({
          list
        })
        console.log(1)
    }
  },
  
  onReady() {
  },
  // 模拟获取列表数据

  getList() {
    let that = this
    // setTimeout(() => {
      wx.cloud.callFunction({
        name: 'getAllQuestion',
        complete: res => {

          this.data.arr= deepClone(res.result)
          let list = this.data.list || [];
          for (let i of this.data.arr) {
            i.x = winWidth
            i.y = 0
            list.unshift(i)
          }
          if(chance==1){
          var index = (this.data.list.length - 1)
          if(index-1>=0){
            console.log('1')
            list[index].x-=7
          // 移除时距离竖向距离
          list[index].y +=7
          chance=0;
          }}
          // if(canUp){
          //   this.setData({
          //     list:this.data.list
          //   })
          //   canUp=false;
          // }
          this.setData({
            list
          })
         
          wx.hideLoading()
        }
      })
    // }, 200)
  },
  moveList(){
    let list = this.data.list || [];
          for (let i of this.data.arr) {
            i.x = winWidth
            i.y = 0
            list.unshift(i)
          }
          this.setData({
            list
          })
          console.log(list)
  },

})