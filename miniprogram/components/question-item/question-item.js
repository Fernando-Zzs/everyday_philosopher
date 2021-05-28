// components/question-item/question-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    answerItemsArray:{
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    answerID:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击删除图标则访问数据库把对应数据删掉
    delete: function(event){
      const db = wx.cloud.database();
      db.collection('history')
      .where({
        id: event.currentTarget.dataset.answerid
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
              type: "answer"
            },
            complete: res=>{
              var ret = res.result
              that.setData({
                answerItemsArray: ret
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
      // console.log(event.currentTarget.dataset.questionid)
      console.log(event);
      wx.cloud.callFunction({
        name:"getAnswer",
        data:{
          answer_id: event.currentTarget.dataset.answerid
        },
        complete: res=>{
          var ret_ques = res.result.question_id
          var ret_answ = res.result.answer_id
          var ret_content = res.result.content
          var ret_like_num = res.result.like_num
          var ret_collect_num = res.result.collect_num
          
          wx.navigateTo({
            // url: '/pages/find/question-detail/question-detail?question_id='+ret_ques+'&answer_id='+ret_answ+'&content='+ret_content+'&like_num='+ret_like_num+'&collect_num='+ret_collect_num,
            url: '/pages/find/QandA/index?question_id='+ret_ques,
          })
        }
      })
    }
  }
})
