
const app = getApp()
Page({
  onLoad() {
    //********************小星球页面**********************
    let that = this
    let temp = []
    // 获取所有的问题
    wx.cloud.callFunction({
      name: 'getAllQuestion',
      complete: res => {
        // console.log(res.result[0])
        let allQuestion = res.result
        console.log(allQuestion)
        // 先获取当前数据库中问题数,然后随机给把question_id分配到一个空数组中
        const db = wx.cloud.database()
        db.collection('question').count().then(res => {
          console.log(res.total)
          for (var s = 1; s < 21; s++) {
            var seed = Math.floor(Math.random() * res.total)

            this.data.items.push({ // 问题
              id: "item" + s,
              no: s,
              url: that.data.url[Math.floor(Math.random() * 14)],
              question_id: seed,
              title: allQuestion[seed].title,
              content: allQuestion[seed].description
            })

            // this.randomCircle(s);
            this.setData({
              items: this.data.items
            });
            var {
              offX,
              offY
            } = this.getOffset(s);
            var factor = this.data.position[s - 1].r / 100;
            // factor=1;
            // var z_index=Math.floor(Math.random()*5);
            var z_index = this.data.virtualView[s - 1]

            this.animate(
              '#item' + (s),
              [{
                transform: 'scale(' + factor + ') translate(' + offX + 'px,' + offY + 'px)',
                offset: 0
              }, {
                transform: 'scale(' + factor + ') translate(' + (offX + (this.data.depth[z_index]) / 2) + 'px,' + offY + 'px)',
                offset: 0.4
              }, {
                transform: 'scale(' + factor + ') translate(' + (offX + this.data.depth[z_index]) + 'px,' + offY + 'px)',
                offset: 1
              }],
              2000, {
                scrollSource: '#scroll-view_H',
                timeRange: 2000,
                startScrollOffset: (this.data.position[s - 1].x - 500), //150*(s-6),////
                endScrollOffset: (this.data.position[s - 1].x + 500), //200+150*(s),////
                orientation: 'horizontal',
              }
            )
            // console.log(s, "position:x", offX, this.data.position[s - 1].x,
            //   "y", offY, this.data.position[s - 1].y,
            //   "r", this.data.position[s - 1].r, z_index);
          }
        })
      }
    })

  },
  
  //**********************小星球页面**************************
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },
  data: {
    currentScene: false,
    ww: wx.getSystemInfoSync().windowWidth,
    toView: 'green',
    dWidth: 100,
    dHeight: 600,
    showNow: '',
    question_id: '',
    items: [],
    currentIndex: '',
    virtualView: [
      4, 0, 3, 1, 1,
      3, 2, 0, 2, 1,
      2, 3, 2, 2, 2,
      0, 0, 4, 0, 2
    ],
    position: [{
        x: 0,
        y: 206,
        r: 110,
        i: 1
      },
      {
        x: 100,
        y: 50,
        r: 110,
        i: 2
      },
      {
        x: 200,
        y: 275,
        r: 130,
        i: 3
      },
      {
        x: 300,
        y: 70,
        r: 115,
        i: 4
      },
      {
        x: 400,
        y: 332,
        r: 113,
        i: 5
      },
      {
        x: 500,
        y: 148,
        r: 129,
        i: 6
      },
      {
        x: 600,
        y: 341,
        r: 123,
        i: 7
      },
      {
        x: 700,
        y: 52,
        r: 137,
        i: 8
      },
      {
        x: 800,
        y: 312,
        r: 116,
        i: 9
      },
      {
        x: 900,
        y: 114,
        r: 116,
        i: 10
      },
      {
        x: 1000,
        y: 328,
        r: 124,
        i: 11
      },
      {
        x: 1100,
        y: 140,
        r: 122,
        i: 12
      },
      {
        x: 1200,
        y: 340,
        r: 117,
        i: 13
      },
      {
        x: 1300,
        y: 176,
        r: 114,
        i: 14
      },
      {
        x: 1400,
        y: 337,
        r: 114,
        i: 15
      },
      {
        x: 1500,
        y: 61,
        r: 111,
        i: 16
      },
      {
        x: 1600,
        y: 244,
        r: 114,
        i: 17
      },
      {
        x: 1700,
        y: 229,
        r: 116,
        i: 18
      },
      {
        x: 1800,
        y: 320,
        r: 121,
        i: 19
      },
      {
        x: 1900,
        y: 71,
        r: 114,
        i: 20
      }
    ],
    depth: [0, 100, 150, 200, 300],
    url: [
      "cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星球1.png", "cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星球2.png", "cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星球3.png", "cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星球4.png","cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星球5.png","cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星球6.png","cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星球7.png","cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星球8.png","cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星球9.png","cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星球10.png","cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星球11.png","cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星球12.png","cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星球13.png","cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/images/星球14.png"
    ]
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  enter(e) {
    console.log(e.currentTarget.dataset.no)
    let that = this
    console.log(e.currentTarget.dataset.question_id)
    let qid = e.currentTarget.dataset.question_id
    // let openid_temp=app.globalData.OPENID
    // wx.cloud.callFunction({
    //   name:'addHistory',
    //   data:{
    //     _openid: openid_temp,
    //     timestamp: Date.parse(new Date()) / 1000,
    //     type: 'answer',
    //     id: qid
    //   },
    // })
    that.setData({
      showNow: true,
      question_id: qid,
      currentIndex: e.currentTarget.dataset.no - 1
    })
  },
  scroll(e) {

    console.log(e.detail.scrollLeft)
    // wx.createSelectorQuery().select('.container').node(function(res){
    //    console.log(res) // 节点对应的 Canvas 实例。
    //   res.setStyle(
    //     {
    //         "border":"solid green 2rpx"
    //     }
    //   )

    // }).exec()
    // wx.createSelectorQuery().select("#scroll-view_H").fields({
    //   scrollOffset: true,
    //   size: true,
    // },(res)=>
    // {
    //   console.log(res);
    //   console.log(res.scrollLeft);
    // })
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },
  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },

  randomCircle(i) {
    //第i个节点，坐标i-1
    let x, y, r = 50;

    // var left=dWidth*(i-8);
    var right = this.data.dWidth * (i - 1);

    let createCircleTimes = 0
    // console.log(right);
    while (true) {

      // console.log("createCircleTimes",createCircleTimes);
      // x = right-Math.floor(Math.random()*this.data.dWidth*4);
      x = right;
      y = Math.floor(50 + Math.random() * 300);
      r = Math.floor(Math.random() * 100 + 100);

      if ((y + r > 550)) {
        // console.log("position not","y",y,"r",r,)
        continue;
      }
      createCircleTimes++;

      if (this.check(x, y, r, i, createCircleTimes)) {
        break;
      }
      if ((createCircleTimes > 2000)) {
        console.log("times not")
        break;
      }
    }

    if (i == 1)
      r = 100;
    this.data.position.push({
      x,
      y,
      r,
      i
    });
    this.setData({
      position: this.data.position
    });

  },

  check(x, y, r, t, s) {

    for (let i = 2; i < 8; i++) {
      if (t - i < 0)
        continue;
      if (Math.pow(this.data.position[t - i].x - x, 2) +
        Math.pow(this.data.position[t - i].y - y, 2) <
        Math.pow(this.data.position[t - i].r + r, 2) * 0.8) {
        // console.log("check not",Math.pow(this.data.position[t-i].x-x,2),Math.pow(this.data.position[t-i].y-y,2),Math.pow(this.data.position[t-i].r+r,2)*1.5,
        // "x:",this.data.position[t-i].x-x,
        // "y:",this.data.position[t-i].y-y,
        // "r:",r,"last-r:",this.data.position[t-i].r)
        if (s > 2000)
          console.log("wrong with", t - i)
        return false;
      }
    }
    return true;
  },
  getOffset(i) {
    var offX = this.data.position[i - 1].x - this.data.dWidth * i;
    var offY = this.data.position[i - 1].y;
    offX = 0;
    // offY=100;

    return {
      offX,
      offY
    };
  },
  scrolltolower(e) {

  },

  search: function (e) {
    wx.redirectTo({
      url: '../search/search',
    })
  }
})