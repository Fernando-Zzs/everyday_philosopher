// components/history-item/history-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    historyItemsArray:{
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    storyID:'',
    openid:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击删除图标则访问数据库把对应数据删掉
    delete: function(event){
      console.log(event);
      const db = wx.cloud.database();
      db.collection('history')
      .where({
        id:event.currentTarget.dataset.storyid
      })
      .remove({
        success: res=>{
          wx.showToast({
            title: '删除成功',
          })
          // 调用云函数获取用户openid
          let page = this;
          wx.cloud.callFunction({
            name:'getUserInfo',
            complete:res=>{
              // console.log(res.result)
              var openid = res.result.openid
              page.setData({
                openid
              })
            }
          })
          // 访问数据库更新历史记录
          let that = this
          var oid = this.openid
          wx.cloud.callFunction({
            name:'getHistory',
            data:{
              _openid: oid,
              type: "story"
            },
            complete:res=>{
              var ret = res.result
              that.setData({
                historyItemsArray: ret
              })
            }
          })
        },
        fail:err=>{
          wx.showToast({
            icon:'none',
            title:'删除失败'
          })
          console.log(err);
        }
      })
    },
    showDetail:function(event){
      console.log(event.currentTarget.dataset.storyid)
      let that = this;
      // wx.cloud.callFunction({
      //   name:"getStory",
      //   data:{
      //     story_id: event.currentTarget.dataset.storyid
      //   },
      //   complete: res=>{
      //     var ret = res.result.story_id
      //     console.log(ret)
         
      //   }
      // })
      getApp().story_id=event.currentTarget.dataset.storyid;
      wx.switchTab({
        url: '/pages/story/index/index',
      })
    }
  }
})
