const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isStory:{
      type: Boolean,
      value: ''
    },
    show:{
      type: Boolean,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    duration: 500,
    position: 'center',
    round: false,
    overlay: true,
    customStyle:'margin-left:15%;margin-top:20%;width:70%;height: 60%;border-radius:20px;background-color: rgba(0, 0, 0, 0);z-index: 999',
    overlayStyle: 'background-color: rgba(0, 0, 0, 0.7)'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // popup_story(e) {
    //   this.setData({
    //     isStory:true,
    //     customStyle:this.data.customStoryStyle
    //   })
    // },
    // popup_question(e){
    //   this.setData({
    //     customStyle:this.data.customQuestionStyle,
    //     isStory:false
    //   })
    // },
    exit() {
      this.setData({
        show: false,
        isStory:''
      })
    },
  
    enterWrite(e){
      wx.navigateTo({
        url: '../../find/write/write',
      })
    },
    enterAnswer(e){
      wx.navigateTo({
        url: 'url',
      })
    },
    enterStory(e){
      wx.navigateTo({
        url: 'url',
      })
    }
  }
})