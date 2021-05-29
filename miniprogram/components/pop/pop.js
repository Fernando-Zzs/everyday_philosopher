const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type:{
      type: String,
      value: ''
    },
    show:{
      type: Boolean,
      value:''
    },
    question_id:{
      type: String,
      value:''
    },
    story_id:{
      type: String,
      value:''
    },
    word_id:{
      type: String,
      value:''
    },
    title:{
      type: String,
      value: ''
    },
    content:{
      type: String,
      value: ''
    },
    posterURL:{
      type: String,
      value: ''
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
    overlayStyle: 'background-color: rgba(0, 0, 0, 0.7)',

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad(){
      console.log(this.data.question_id)
    },
    exit() {
      this.setData({
        show: false,
      })
    },
  
    enterWrite(e){
      wx.navigateTo({
        url: '../../find/write/write?question_id='+e.currentTarget.dataset.question_id,
      })
    },
    enterAnswer(e){
      console.log(e.currentTarget.dataset.question_id)
      wx.navigateTo({
        url: '../../find/QandA/index?question_id='+e.currentTarget.dataset.question_id,
      })
    },

    enterStory(e){
      console.log(e.currentTarget.dataset.story_id)
      // wx.navigateTo({
      //   url: '../../pages/find/story-detail/story-detail?story_id='+e.currentTarget.dataset.story_id,
      // })
      app.story_id=e.currentTarget.dataset.story_id
      wx.switchTab({
        url: '/pages/story/index/index',
      })
    },

    sharePoster(e){
      wx.showShareImageMenu({path:this.data.posterURL})
    }
  }
})