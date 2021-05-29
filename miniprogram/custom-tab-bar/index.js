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
        "iconPath": "/images/recommend.png",
        "selectedIconPath": "/images/recommend_selected.png",
        "text":"故事视界"
      },
      {
        "pagePath": "/pages/planet/index",
        "iconPath": "/images/find.png",
        "selectedIconPath": "/images/find_selected.png",
        "text":"哲学星球"
      },
      {
        "pagePath": "/pages/find/index/index",
        "iconPath": "/images/find.png",
        "selectedIconPath": "/images/find_selected.png",
        "text":"探索星域"
      },
      {
        "pagePath": "/pages/personal/index/index",
        "iconPath": "/images/my.png",
        "selectedIconPath": "/images/my_selected.png",
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
      },5)
      setTimeout(()=>{ 
        clearInterval(i)
        this.setData({b:-50})
        console.log(this.data.b)
      },300)
    
  }
  },
  showTabBar(){
    if(!show){
      show=true
    this.animate('.tab-bar',
    [
      {
        offset:0,
        bottom:'-50px'
      },
      {
        offset:1,
        bottom:0
      }
    ],300,function () {
      this.setData({b:0})
  }.bind(this))
  }
}
}
})