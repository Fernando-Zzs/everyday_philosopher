let can_tab_state = true
let app = getApp()
let timestamp_start = 0
let timestamp_end = 0
Page({
    data: {
        show: true,
        sysInfo: wx.getSystemInfoSync(),
        menuButton: wx.getMenuButtonBoundingClientRect(),
        broad_state: false,
        scroll_top: 0,
        story: {},
        story_id: '0',
        liked: false,
        collected: false,
        title: "序言",
        posterURL: '',
        posterTEMP: '',
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
        //每日推荐
       this.setData({story_id:app.recommand_story[0]})
                 // 获取故事id对应海报
        wx.cloud.callFunction({
            name: 'getStory',
            data: {
                story_id: '5'
            },
            complete: res => {
                wx.cloud.downloadFile({
                    fileID: res.result.poster[1],
                    maxAge: 120 * 60 * 1000,
                    success: res => {
                        this.setData({
                            posterTEMP: res.tempFilePath
                        })
                    }
                })
                this.setData({
                    posterURL: res.result.poster[1]
                })
            }
        })
        this.getStory(this.data.story_id)
        wx.cloud.callFunction({
            name: 'isStoryLiked',
            data: {
                story_id: this.data.story_id,
                _openid: app.globalData.OPENID
            },
            success: function (res) {
                console.log('liked: ' + res.result)
                if (res.result) {
                    this.setData({
                        liked: true
                    })
                }
            },
            fail: function (res) {
                console.log(res)
            }
        })
        wx.cloud.callFunction({
            name: 'isStoryCollected',
            data: {
                story_id: this.data.story_id,
                _openid: app.globalData.OPENID
            },
            success: function (res) {
                if (res.result) {
                    this.setData({
                        collected: true
                    })
                }
            },
            fail: function (res) {
                console.log(res)
            }
       
        })
       
    },
    onShow() {
        timestamp_start = Date.parse(new Date()) / 1000

        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
        this.setData({
            broad_state: false
        })

        console.log("now story:",app.story_id);
        if (app.story_id != this.data.story_id) {
            this.setData({
                story_id: app.story_id
            })
            
            this.getStory(this.data.story_id)
        }
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
        this.animate('.broadside', [{
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
        this.animate('.broadside', [{
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
        wx.cloud.downloadFile({
            fileID: this.data.posterURL,
            maxAge: 120 * 60 * 1000,
            success: res => {
                console.log(res.tempFilePath)
                wx.showShareImageMenu({
                    path: res.tempFilePath
                })
            }
        })
    },
    comment_story(e) {
        //跳转至评论
        wx.navigateTo({
            url: '../../find/SandC/index' + '?story_id=' + this.data.story_id,
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
            if (item.component == "nest") {
                for (var j = 0; j < item.son.length; j++) {
                    var it = item.son[j]
                    var selector = it.selector
                    var keyframes = it.keyframes
                    var offset = it.offset
                    var startScrollOffset = it.startScrollOffset
                    var endScrollOffset = it.endScrollOffset
                    this.animate(selector,
                        keyframes,
                        2000, {
                            scrollSource: '#scroller',
                            timeRange: 2000,
                            startScrollOffset: startScrollOffset + offset,
                            endScrollOffset: endScrollOffset + offset,
                        })
                }
            }
        }
        //添加按钮动画
        this.animate(".end-comment-button", [{
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
        this.animate(".end-share-button", [{
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
                    posterURL: res.posterURL,
                    container_height: res.container_height,
                    story_info: res.info,
                    story_series: res.series,
                    story_relative: res.relative,
                    story_content: res.story_content
                })

                wx.cloud.callFunction({
                    name: 'addHistory',
                    data: {
                        _openid: app.globalData.OPENID,
                        description: '',
                        id: res.story_id,
                        timestamp: Date.parse(new Date()) / 1000,
                        title: res.title,
                        type: 'story'
                    }
                })

                this.load()
                console.log(res)
            }
        })


    },
    jump(e) {
        var data = e.currentTarget.dataset
        var id = data.story_id
        console.log(e)
        this.setData({
            scroll_top: 0
        })
        this.getStory(id)
        app.story_id = id

    },
    onUnload: function () {
        clearInterval(this.timer)
    },
    onHide: function () {
        console.log('进入onhide');
        timestamp_end = Date.parse(new Date()) / 1000
        console.log(timestamp_start, timestamp_end);
        wx.cloud.callFunction({
            name: 'addTime',
            data: {
                _openid: app.globalData.OPENID,
                type: 'story',
                addedTime: timestamp_end - timestamp_start
            }
        })
    },

    handleLike() {
        if (this.data.liked) {
            this.setData({
                liked: false,
            })

            wx.cloud.callFunction({
                name: 'deleteLike',
                data: {
                    _openid: app.globalData.OPENID,
                    type: 'story',
                    id: this.data.story_id
                }
            })
        } else {
            this.setData({
                liked: true
            })

            wx.cloud.callFunction({
                name: 'addLike',
                data: {
                    _openid: app.globalData.OPENID,
                    description: '',
                    id: this.data.story_id,
                    timestamp: Date.parse(new Date()) / 1000,
                    title: this.data.title,
                    type: 'story'
                }
            })
        }
        wx.cloud.callFunction({
            name: 'tapStoryLike',
            data: {
                liked: !this.data.liked,
                _openid: app.globalData.OPENID,
                story_id: this.data.story_id
            }
        })
    },
    handleCollect() {

        if (this.data.collected) {
            this.setData({
                collected: false
            })

            wx.cloud.callFunction({
                name: 'deleteCollection',
                data: {
                    _openid: app.globalData.OPENID,
                    type: 'story',
                    id: this.data.story_id
                }
            })
        } else {
            this.setData({
                collected: true
            })

            wx.cloud.callFunction({
                name: 'addCollection',
                data: {
                    _openid: app.globalData.OPENID,
                    description: '',
                    id: this.data.story_id,
                    timestamp: Date.parse(new Date()) / 1000,
                    title: this.data.title,
                    type: 'story'
                }
            })
        }
        wx.cloud.callFunction({
            name: 'tapStoryCollect',
            data: {
                collected: !this.data.collected,
                _openid: app.globalData.OPENID,
                story_id: this.data.story_id
            }
        })
    },
    pinglun: function (e) {
        console.log(e)
        wx.navigateTo({
            url: '../../find/SandC/index' + '?story_id=' + this.data.story_id,
        })
    },
    fenxiang: function (e) {
        // console.log(this.data.posterTEMP)
        wx.showShareImageMenu({
            path: this.data.posterTEMP
        })
    }
})