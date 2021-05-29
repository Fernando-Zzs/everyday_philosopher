let can_tab_state = true
Page({
  data: {
    show: true,
    sysInfo: wx.getSystemInfoSync(),
    broad_state: false,
    story: {},
    story_id: '0',
    posterURL: '',
    title: "序言",
    poster: "",
    container_height: 9000,
    story_info: ["欢迎", "开始"],
    story_series: [{
      title: "小说"
    }, {
      title: "先哲之死"
    }],
    story_relative: [{
      id: 1,
      title: "宇宙之卵"
    }, {
      id: 1,
      title: "宇宙之卵"
    }],
    story_content: []
  },
  onLoad(options) {
    let that = this
    // console.log('o',options)
    if (options.story_id) {
      this.setData({
        story_id
      })
    } else {
      //每日推荐
    }
    this.getStory(this.data.story_id)
    // 获取故事id对应海报
    wx.cloud.callFunction({
      name: 'getStory',
      data: {
        story_id: '5'
      },
      complete: res => {
        // console.log(res.result)
        that.setData({
          posterURL: res.result.poster[1]
        })
      }
    })
    // this.load()
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
    this.setData({
      broad_state: false
    })

  },
  onReady() {
    this.timer = setInterval(() => {
      if (this.data.show) {
        this.setData({
          show: !this.data.show
        })
      }
    }, 3000)
  },

  scroll(e) {
    if (can_tab_state) {
      if (e.detail.deltaY < -3) {
        this.getTabBar().hidemTabBar()
        can_tab_state = false;
        setTimeout(() => {
          can_tab_state = true
        }, 400) //防抖节流
      }
      if (e.detail.deltaY > 3) {
        this.getTabBar().showTabBar()
        can_tab_state = false;
        setTimeout(() => {
          can_tab_state = true
        }, 400)
      }
    }
  },
  broad(e) {
    this.setData({
      broad_state: true
    })
    //   if(!this.data.broad_state){

    this.animate('.broadside',
      [{
          left: '-60vw',
          offset: 0,
          ease: 'ease-in'
        },
        {
          left: '0vw',
          offset: 0,
          ease: 'ease-in'
        }
      ], 150)

  },
  onEnter(e) {},
  beforeLeave(e) {
    this.animate('.broadside',
      [{
          left: '0vw',
          offset: 0,
          ease: 'ease-out'
        },
        {
          left: '-60vw',
          offset: 0,
          ease: 'ease-out'
        }
      ], 150, () => {
        this.setData({
          broad_state: false
        })
      })
  },
  share_story(e) {
    console.log('share')
    wx.showShareImageMenu({
      path: this.data.poster
    })
  },
  comment_story(e) {
    //跳转至评论
    wx.navigateTo({
      url: '' + '?story_id=' + this.data.story_id,
    })
  },
  load() {
    console.log("start to add animation")
    // 添加组件动画
    for (var i = 0; i < this.data.story_content.length; i++) {
      var item = this.data.story_content[i]
      var selector = item.selector
      var keyframes = item.keyframes
      var offset = item.offset
      var startScrollOffset = item.startScrollOffset
      var endScrollOffset = item.endScrollOffset
      // console.log(item)
      this.animate(selector,
        keyframes,
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: startScrollOffset + offset,
          endScrollOffset: endScrollOffset + offset,
        })
    }
    //添加按钮动画
    this.animate(".end-comment-button",
      [{
          opacity: 0,
          left: '-100vw',
          offset: 0
        },
        {
          opacity: 0,
          left: '15vw',
          offset: 0.1
        },
        {
          opacity: 1,
          left: '15vw',
          offset: 0.3
        },
        {
          opacity: 1,
          left: '15vw',
          offset: 0.9
        },
        {
          opacity: 1,
          left: '15vw',
          offset: 1
        }
      ],
      2000, {
        scrollSource: '#scroller',
        timeRange: 2000,
        startScrollOffset: this.data.container_height - 1500,
        endScrollOffset: this.data.container_height,
      })
    this.animate(".end-share-button",
      [{
          opacity: 0,
          right: '-100vw',
          offset: 0
        },
        {
          opacity: 0,
          right: '15vw',
          offset: 0.1
        },
        {
          opacity: 1,
          right: '15vw',
          offset: 0.3
        },
        {
          opacity: 1,
          right: '15vw',
          offset: 0.9
        },
        {
          opacity: 1,
          right: '15vw',
          offset: 1
        }
      ],
      2000, {
        scrollSource: '#scroller',
        timeRange: 2000,
        startScrollOffset: this.data.container_height - 1500,
        endScrollOffset: this.data.container_height,
      })
  },
  getStory(id) {
    //获取故事数据并设置
    const db = wx.cloud.database()
    db.collection('story').where({
      story_id: id
    }).get({
      success: (res) => {
        var res = res.data[0]
        this.setData({
          story: res,
          story_id: res.story_id,
          title: res.title,
          poster: res.poster,
          container_height: res.container_height,
          story_info: res.info,
          story_series: res.series,
          story_relative: res.relative,
          story_content: res.story_content
        })
        this.load()
        console.log(res)
      }
    })


  },
  jump(e) {
    const data = e.currentTarget.dataset
    const id = data.story_id
    this.getStory(id)
    this.load()
  },
  onUnload: function () {
    clearInterval(this.timer)
  }
})