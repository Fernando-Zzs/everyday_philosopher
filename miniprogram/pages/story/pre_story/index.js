Component({
  data: {
    broad_state:false
  },
  ready() {
    this._animate()
  },
  show(){this.setData({broad_state:false})  },
  methods: {
    scroll(e) {
      console.log(e)
    },
    broad(e){
      if(!this.data.broad_state){

      this.animate('.broadside',
      [
        {
          left:'-60vw',
          offset:0,
          ease:'ease-in'
        },
        {
          left:'0vw',
          offset:0,
          ease:'ease-in'
        }
      ],300,()=>{this.setData({broad_state:true})})

    }
    else{
       
        this.animate('.broadside',
        [
          {
            left:'0vw',
            offset:0,
            ease:'ease-out'
          },
          {
            left:'-60vw',
            offset:0,
            ease:'ease-out'
          }
        ],300,()=>{this.setData({broad_state:false})  })

    }
    },
    _animate() {
      this.animate(".t1",
        [{
            opacity: 1,
            transform:"scale(1.2)",
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.2
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            transform:"scale(1.5)",
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0,
          endScrollOffset: 700,
        })
        var off1=500
        // this.animate(".i1-1",
        // [{
        //     opacity: 1,
        //     offset: 0
        //   },
        //   {
        //     opacity: 1,
        //     offset: 0.1
        //   },
        //   {
        //     opacity: 1,
        //     offset: 0.9
        //   },
        //   {
        //     opacity: 0,
        //     offset: 1
        //   }
        // ],
        // 2000, {
        //   scrollSource: '#scroller',
        //   timeRange: 2000,
        //   startScrollOffset: 0+off1,
        //   endScrollOffset: 6000+off1,
        // })
        this.animate(".i1-2",
        [{
            opacity: 1,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off1,
          endScrollOffset: 2500+off1,
        })
        
        this.animate(".i1-3",
        [{
            opacity: 0,
            transform:"translate(0px,400px)",
            offset: 0
          },
          {
            opacity: 1,
            transform:"translate(0px,340px)",
            offset: 0.1
          },
          {
            opacity: 1,
            transform:"translate(0px,0px)",
            offset: 0.8//1200
          },
          {
            opacity: 1,
            transform:"translate(0px,0px)",
            offset: 0.9
          },
          {
            opacity: 0,
            transform:"translate(0px,0px)",
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off1,
          endScrollOffset: 2500+off1,
        })
        this.animate(".p1",
        [{
            opacity: 0,
            transform:"translate(0px,300px)",
            offset: 0
          },
          {
            opacity: 0,
            offset: 0.1
          },
          {
            opacity: 1,
            offset: 0.2
          },
          {
            opacity: 1,
            transform:"translate(0px,0px)",
            offset: 0.8
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off1,
          endScrollOffset: 2500+off1,
        })
        this.animate(".p2",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 0,
            offset: 0.1
          },
          {
            opacity: 0,
            transform:"translate(30px,300px)",
            offset: 0.2
          },
          {
            opacity: 1,
            transform:"translate(20px,200px)",
            offset: 0.4
          },
          {
            opacity: 1,
            transform:"translate(0px,0px)",
            offset: 0.8
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off1,
          endScrollOffset: 2500+off1,
        })
        this.animate(".p3",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 0,
            offset: 0.1
          },
          {
            opacity: 0,
            transform:"translate(-20px,200px)",
            offset: 0.4
          },
          {
            opacity: 1,
            transform:"translate(-10px,100px)",
            offset: 0.6
          },
          {
            opacity: 1,
            transform:"translate(0px,0px)",
            offset: 0.8
          },
          {
            opacity: 1,
            transform:"translate(0px,0px)",
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off1,
          endScrollOffset: 2500+off1,
        })
        this.animate(".i1-4",
        [{
            opacity: 0,
            transform:"scale(0.8) translate(-200px,-200px)",
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.1
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            transform:"scale(1.2) translate(10px,10px)",
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off1,
          endScrollOffset: 2500+off1,
        })

        var off2=3000
        this.animate(".i2-1",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.1
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off2,
          endScrollOffset: 1500+off2,
        })

        this.animate(".i2-3",
        [{
            opacity: 0,
            transform:"scale(0.8) translate(200px,0px)",
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.1
          },
          {
            opacity: 1,
            transform:"scale(1.2) translate(0px,0px)",
            offset: 0.7
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            transform:"scale(1.2) translate(0px,0px)",
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off2,
          endScrollOffset: 1500+off2,
        })

        this.animate(".i2-2",
        [{
            opacity: 0,
            transform:"translate(-200px,100px)",
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.1
          },
          {
            opacity: 1,
            transform:"translate(0px,0px)",
            offset: 0.7
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            transform:"translate(0px,0px)",
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off2,
          endScrollOffset: 1500+off2,
        })
        this.animate(".p4",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.1
          },
          {
            opacity: 1,
            offset: 0.7
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off2,
          endScrollOffset: 1500+off2,
        })
      
        var off3=4500
        this.animate(".p5",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.1
          },
          {
            opacity: 1,
            offset: 0.7
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off3,
          endScrollOffset: 1500+off3,
        })
        this.animate(".i3-1",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.1
          },
          {
            opacity: 1,
            offset: 0.7
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off3,
          endScrollOffset: 1500+off3,
        })
        this.animate(".i3-2",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.1
          },
          {
            opacity: 1,
            offset: 0.7
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off3,
          endScrollOffset: 1500+off3,
        })

        var off4=6000
        this.animate(".i4-1",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.1
          },
          {
            opacity: 1,
            offset: 0.7
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off4,
          endScrollOffset: 1500+off4,
        })
        this.animate(".i4-2",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.1
          },
          {
            opacity: 1,
            offset: 0.7
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off4,
          endScrollOffset: 1500+off4,
        })
        this.animate(".i4-5",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.1
          },
          {
            opacity: 1,
            offset: 0.7
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off4,
          endScrollOffset: 1500+off4,
        })
        this.animate(".p6",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.1
          },
          {
            opacity: 1,
            offset: 0.7
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 200+off4,
          endScrollOffset: 1500+off4,
        })
        this.animate(".i4-3",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.5
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off4,
          endScrollOffset: 1500+off4,
        })
        this.animate(".i4-4",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 0,
            scale:0.7,
            transformOrigin:"60% 60%",
            offset: 0.3
          },
          {
            opacity: 1,
            scale:1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off4,
          endScrollOffset: 1500+off4,
        })
        
        var off5=7500
        this.animate(".i5-1",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.2
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off5,
          endScrollOffset: 1000+off5,
        })
        this.animate(".p7",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.2
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off5,
          endScrollOffset: 1000+off5,
        })
        this.animate(".i5-2",
        [{
            opacity: 0,
            transform:"translate(40px,0px)",
            offset: 0
          },
          {
            opacity: 1,

            offset: 0.2
          },
          {
            opacity: 1,

            offset: 0.4
          },
          {
            opacity: 1,

            offset: 0.6
          },
          {
            opacity: 1,

            offset: 0.8
          },
          {
            opacity: 0,
            transform:"translate(0px,0px)",
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off5,
          endScrollOffset: 1000+off5,
        })
      }


  },
})