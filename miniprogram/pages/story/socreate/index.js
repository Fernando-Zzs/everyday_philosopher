Component({
  data: {
    currentStart: 0
  },

  ready() {
    this._animate()
  },
  methods: {
    scroll(e) {
      console.log(e.detail.scrollTop)
    },
    _animate() {
      // 0-400
      this.animate(".title",
        [{
            opacity: 1,
            offset: 0,
            transform: 'translateY(30px)',
          },
          {
            opacity: 1,
            offset: 0.4,
          },
          {
            opacity: 1,
            transform: 'translateY(-100px)',
            offset: 0.7,
          },
          {
            opacity: 0,
            transform: 'translateY(-100px)',
            offset: 1,
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0,
          endScrollOffset: 400,
        })
      //520-700
      this.animate(".p1",
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
          startScrollOffset: 520,
          endScrollOffset: 700,
        })
      //710-1100
      this.animate(".p2",
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
            offset: 0.8
          },
          {
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 710,
          endScrollOffset: 990,
        })
      //1210-1500
      this.animate(".p3",
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
          startScrollOffset: 1210,
          endScrollOffset: 1500,
        })
      //1510-1810
      this.animate(".p4",
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
          startScrollOffset: 1510,
          endScrollOffset: 1810,
        })
      //1850-2000
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
          startScrollOffset: 1850,
          endScrollOffset: 2000,
        })
      //2010-2290
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
          startScrollOffset: 2010,
          endScrollOffset: 2290,
        })
      //2810-3100
      this.animate(".p7",
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
          startScrollOffset: 2810,
          endScrollOffset: 3100,
        })
      //3110-3490
      this.animate(".p8",
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
          startScrollOffset: 3110,
          endScrollOffset: 3490,
        })
      //3500-3800
      this.animate(".p9",
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
          startScrollOffset: 3500,
          endScrollOffset: 3800,
        })
      //3810-4000

      this.animate(".p10",
        [{
            opacity: 0,
            offset: 0,
            transform: 'translateY(0px)',
          },
          {
            opacity: 1,
            offset: 0.08,
            transform: 'translateY(0px)',
          },
          {
            opacity: 1,
            transform: 'translateY(-50px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(-100px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(-200px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 3810,
          endScrollOffset: 4000,
        })
      //3950-4150
      this.animate(".p11",
        [{
            opacity: 0,
            offset: 0,
            transform: 'translateY(0px)',
          },
          {
            opacity: 1,
            offset: 0.08,
            transform: 'translateY(0px)',
          },
          {
            opacity: 1,
            transform: 'translateY(-50px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(-100px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(-200px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 3950,
          endScrollOffset: 4150,
        })
      //4100-4350
      this.animate(".p12",
        [{
            opacity: 0,
            offset: 0,
            transform: 'translateY(0px)',
          },
          {
            opacity: 1,
            offset: 0.08,
            transform: 'translateY(0px)',
          },
          {
            opacity: 1,
            transform: 'translateY(-50px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(-100px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(-200px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 4100,
          endScrollOffset: 4350,
        })
      //4360-4660
      this.animate(".p13",
        [{
            opacity: 0,
            offset: 0,
          },
          {
            opacity: 1,
            offset: 0.1,
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
          startScrollOffset: 4360,
          endScrollOffset: 4660,
        })
      //4670-4800
      this.animate(".p14",
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
          startScrollOffset: 4670,
          endScrollOffset: 4800,
        })
      //4810-5150
      this.animate(".p15",
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
          startScrollOffset: 4810,
          endScrollOffset: 5150,
        })
      //5150-5300
      this.animate(".p16",
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
          startScrollOffset: 5150,
          endScrollOffset: 5300,
        })
      //5310-5700
      this.animate(".p17",
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
          startScrollOffset: 5310,
          endScrollOffset: 5700,
        })
      //5710-6000
      this.animate(".p18",
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
          startScrollOffset: 5710,
          endScrollOffset: 6000,
        })

      //0-500
      this.animate(".i1-1",
        [{
            offset: 0,
            opacity: 1
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
          startScrollOffset: 0,
          endScrollOffset: 500,
        })
      //510-1200
      this.animate(".i2-1",
        [{
            opacity: 0,
            offset: 0,
            transform: 'translate(50px,0px)'
          },
          {
            opacity: 1,
            offset: 0.2,
            transform: 'translate(0px,0px)',
          },
          {
            opacity: 1,
            offset: 0.8,
            transform: 'translate(0px,0px)',
          },
          {
            opacity: 0,
            offset: 1,
            transform: 'translate(-50px, 0px)',
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 510,
          endScrollOffset: 1200,
        })
      //1210-1820
      this.animate(".i2-2",
        [{
            opacity: 0,
            offset: 0,
            transform: 'translateX(100px)'
          },
          {
            opacity: 1,
            offset: 0.5,
            transform: 'translateX(50px)'
          },
          {
            opacity: 1,
            offset: 0.9,
            transform: 'translateX(-50px)'
          },
          {
            opacity: 0,
            offset: 1,
            transform: 'translateX(-100px)'
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 1210,
          endScrollOffset: 1820,
        })
      //1830-2300
      this.animate(".i3-1",
        [{
            opacity: 0,
            offset: 0,
            transform: 'translate(-100px, -50px)'
          },
          {
            opacity: 1,
            offset: 0.2,
            transform: 'translate(-50px, -50px)'
          },
          {
            opacity: 1,
            offset: 0.9,
            transform: 'translate(50px, -50px)'
          },
          {
            opacity: 0,
            offset: 1,
            transform: 'translate(100px, -50px)'
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 1830,
          endScrollOffset: 2300,
        })
      //2310-2800
      this.animate(".i4-1",
        [{
            opacity: 0,
            offset: 0,
            transformOrigin: "50% 70%",
            transform: 'translate(0px,0px) scale(1,1)',
          },
          {
            opacity: 1,
            offset: 0.2,
            transformOrigin: "50% 70%",
            transform: 'translate(0px,0px) scale(0.6,0.6)',
          },
          {
            opacity: 1,
            offset: 0.5,
            transformOrigin: "50% 70%",
            transform: 'translate(0px,0px) scale(0.5,0.5)',
          },
          {
            opacity: 1,
            transformOrigin: "50% 70%",
            transform: 'translate(-50px,-50px) scale(0.4,0.4)',
            offset: 0.75
          },
          {
            opacity: 0,
            transformOrigin: "50% 70%",
            transform: 'translate(-50px,-50px) scale(0,0)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 2310,
          endScrollOffset: 2800
        })
      //2810-5700
      this.animate(".i4-2",
        [{
            opacity: 0,
            offset: 0,
            transform: 'translate(-200px)'
          },
          {
            opacity: 1,
            offset: 0.2,
            transform: 'translate(-100px)'
          },
          {
            opacity: 1,
            offset: 0.8,
            transform: 'translate(100px)'
          },
          {
            opacity: 0,
            offset: 1,
            transform: 'translate(200px)'
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 2810,
          endScrollOffset: 5700,
        })
      //5700-6000
      this.animate(".i5-1",
        [{
            opacity: 0,
            offset: 0,
          },
          {
            opacity: 1,
            offset: 0.2,
          },
          {
            opacity: 1,
            offset: 0.8,
          },
          {
            opacity: 0,
            offset: 1,
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 5700,
          endScrollOffset: 6000,
        })
    },

  },
})