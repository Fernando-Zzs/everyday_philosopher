const app = getApp()

Page({
  data: {
    a: true,
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    search_state:false,
    tap_state:false
  },
  binddragend() {
    console.log('binddragend')
  },
  bindscroll() {
    // console.log('bindscroll');
  },
  search(e){
    // if(!this.data.search_state)
    //   {
    //     //search 
        
    // this.setData({
    //     search_state:true,
    //   })
    //   }
    //   this.setData({
    //     tap_state:!this.data.tap_state
    //   })
    //   if(this.data.search_state!=this.data.tap_state){
    //     console.log('2')
    //   }
    if(!this.data.search_state){
      this.animate('.inputer',[
        {width:'0px',offset:0},
        {width:'200px',ease:'ease-in',offset:1}
      ],300,()=>{this.setData({search_state:true})})
    }
  },
  disfoucus(e){
    this.animate('.inputer',[
      {width:'200px',ease:'ease-in',offset:0},
      {width:'0px',ease:'ease-out',offset:1}
    ],300,()=>{this.setData({search_state:false})})
  },
  search_confirm(e){
    console.log(e.detail.value)
    wx.navigateTo({
      // url: 'search/search?value='+(e.detail.value),
      url:'../search/search?value='+(e.detail.value)
    })
  }

})