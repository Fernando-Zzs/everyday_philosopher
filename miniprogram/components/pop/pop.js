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
      value: 'cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/question_bg.jpg'
      //cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/1.jpg
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
    customStyle:'margin-left:15%;margin-top:45%;width:70vw;height: 99vw;border-radius:20px;background-color: rgba(0, 0, 0, 0);z-index: 999;border:1px solid white',
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
      wx.cloud.downloadFile({
                  fileID:this.properties.posterURL,
                  maxAge: 120*60*1000,
                  success:res=>{
                    console.log(res.tempFilePath)
                    wx.showShareImageMenu({path:res.tempFilePath})
                  }
     })
    }
  }
})