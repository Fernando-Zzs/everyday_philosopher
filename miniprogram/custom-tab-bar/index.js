// custom-tab-bar/index.js
let show=true
Component({
  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    b:0,
    list: [
      {
        "pagePath": "/pages/story/index/index",
        "iconPath": "/images/1-1.png",
        "selectedIconPath": "/images/1-2.png",
        "text":"阅读视界"
      },
      {
        "pagePath": "/pages/planet/index",
        "iconPath": "/images/2-1.png",
        "selectedIconPath": "/images/2-2.png",
        "text":"故事星球"
      },
      {
        "pagePath": "/pages/find/index/index",
        "iconPath": "/images/3-1.png",
        "selectedIconPath": "/images/3-2.png",
        "text":"探索星域"
      },
      {
        "pagePath": "/pages/personal/index/index",
        "iconPath": "/images/4-1.png",
        "selectedIconPath": "/images/4-2.png",
        "text":"我"
      }
    ]

  },

  pageLifetimes:{
    show(){
      
    }
  },

  methods:{
  myswitchTab(e) {
    const data = e.currentTarget.dataset
    console.log(data.path);
    const url = data.path
    wx.switchTab({url})
          
    // var width=wx.getSystemInfoSync().windowWidth/3
    this.setData({
      selected: data.index
    })
  },
  hidemTabBar(){
    
    if(show){
      show=false
      console.log("hide tababr")
      var b=0
      var i=setInterval(()=>{
        this.setData({b:b--})    
      },3)
      setTimeout(()=>{ 
        clearInterval(i)
        this.setData({b:-70})
        console.log(this.data.b)
      },250)
    
  }
  },
  showTabBar(){
    if(!show){
      show=true
      this.setData({b:0})
    this.animate('.tab-bar',
    [
      {
        offset:0,
        bottom:'-70px'
      },
      {
        offset:1,
        bottom:0
      }
    ],300,function () {
      this.clearAnimation('.tab-bar', function () {
        
      }.bind(this))     
  }.bind(this))
  }
}
}
})