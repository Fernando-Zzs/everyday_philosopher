// miniprogram/pages/find/story-detail/story-detail.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    story_id:'',
    story_title:'',
    story_content:'',
    lineHeight: 24,
    functionShow: false,
    emojiShow: false,
    comment: '',
    focus: false,
    cursor: 0,
    _keyboardShow: false,
    parsedComment: [],
    show:[],
    emojiSource: 'cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/emoji _ 雪碧图_files/emoji-sprite.b5bd1fe0.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.timer = setInterval(()=>{
      if(this.data.show){
        this.setData({
          show: !this.data.show
        })
      }
    },1000)
    
    const emojiInstance = this.selectComponent('.mp-emoji')
    this.emojiNames = emojiInstance.getEmojiNames()
    this.parseEmoji = emojiInstance.parseEmoji
    let value = options.story_id
    let that = this
    wx.cloud.callFunction({
      name:'getComment',
      data:{
        story_id: value
      },
      complete:res=>{
        that.setData({
          story_id: value,
          show: res.result
        })
        // console.log(that.data.show)
      }
    })
    
    wx.cloud.callFunction({
      name:"getStory",
      data:{
        story_id: value,
      },
      complete: res=>{
        var title_temp = res.result.title;
        var content_temp = res.result.content[0].text;
        that.setData({
          story_title: title_temp,
          story_content: content_temp
        })
      }
    })
  },
  onUnload:function(){
    clearInterval(this.timer)
  },
  onkeyboardHeightChange(e) {
    const {height} = e.detail
    this.setData({
      keyboardHeight: height
    })
  },

  hideAllPanel() {
    this.setData({
      functionShow: false,
      emojiShow: false
    })
  },
  showEmoji() {
    this.setData({
      functionShow: false,
      emojiShow: this.data._keyboardShow || !this.data.emojiShow
    })
  },
  showFunction() {
    this.setData({
      functionShow: this.data._keyboardShow || !this.data.functionShow,
      emojiShow: false
    })
  },
  chooseImage() {},
  onFocus() {
    this.data._keyboardShow = true
    this.hideAllPanel()
  },
  onBlur(e) {
    this.data._keyboardShow = false
    this.data.cursor = e.detail.cursor || 0
  },
  onInput(e) {
    const value = e.detail.value
    this.data.comment = value
  },
  onConfirm() {
    this.onsend()
  },
  insertEmoji(evt) {
    const emotionName = evt.detail.emotionName
    const { cursor, comment } = this.data
    const newComment =
      comment.slice(0, cursor) + emotionName + comment.slice(cursor)
    this.setData({
      comment: newComment,
      cursor: cursor + emotionName.length
    })
  },
  onsend() {
    // 将评论记录放入两个数据库
    let that = this
    let avatarurl_temp = app.globalData.AVATARURL
    let nickname_temp = app.globalData.NICKNAME
    const comment = this.data.comment
    // const parsedComment = this.parseEmoji(this.data.comment)
    const parsedComment = comment
    wx.cloud.callFunction({
      name:'addComment',
      data:{
        story_id: that.data.story_id,
        content: parsedComment,
        avatarURL: avatarurl_temp,
        nickname: nickname_temp
      }
    })
    
    // 显示到页面上
    wx.cloud.callFunction({
      name:'getComment',
      data:{
        story_id:that.data.story_id
      },
      complete:res=>{
        // console.log(res.result)
        // show = res.result
        that.setData({
          show: res.result,
          parsedComment:'',
          comment: ''
        })
      }
    })
    
  },
  deleteEmoji: function() {
    const pos = this.data.cursor
    const comment = this.data.comment
    let result = '',
      cursor = 0

    let emojiLen = 6
    let startPos = pos - emojiLen
    if (startPos < 0) {
      startPos = 0
      emojiLen = pos
    }
    const str = comment.slice(startPos, pos)
    const matchs = str.match(/\[([\u4e00-\u9fa5\w]+)\]$/g)
    // 删除表情
    if (matchs) {
      const rawName = matchs[0]
      const left = emojiLen - rawName.length
      if (this.emojiNames.indexOf(rawName) >= 0) {
        const replace = str.replace(rawName, '')
        result = comment.slice(0, startPos) + replace + comment.slice(pos)
        cursor = startPos + left
      }
      // 删除字符
    } else {
      let endPos = pos - 1
      if (endPos < 0) endPos = 0
      const prefix = comment.slice(0, endPos)
      const suffix = comment.slice(pos)
      result = prefix + suffix
      cursor = endPos
    }
    this.setData({
      comment: result,
      cursor: cursor
    })
  },
  like_it:function(e){
    console.log(e.currentTarget.dataset.commentid);
    var that = this;
    wx.cloud.callFunction({
      name:'likeComment',
      data:{
        _id: e.currentTarget.dataset.commentid
      },
      complete:res=>{
        let that = this
        let value = that.data.story_id
        wx.cloud.callFunction({
          name:'getComment',
          data:{
            story_id: value
          },
          complete:res=>{
            that.setData({
              show: res.result
            })
          }
        })
      }
    })
  },
  collect_it:function(e){

  }
})