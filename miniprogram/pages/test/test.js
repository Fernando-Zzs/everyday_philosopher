Component({
  data: {
    currentStart: 0
  },

  ready() {
    this._animate()
  },
  methods: {
    scroll(e) {
      console.log(e)
    },
    _animate() {
      // 0-200
      this.animate(".title",
        [{
            opacity: 1,
            offset: 0,
            transform: 'translateY(30px)',
          },
          {
            opacity: 1,
            offset: 0.4
          },
          {
            opacity: 1,
            transform: 'translateY(-100px)',
            offset: 0.7
          },
          {
            opacity: 0,
            transform: 'translateY(-100px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0,
          endScrollOffset: 400,
        })
      // 200-420
      this.animate(".p1",
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
          startScrollOffset: 420,
          endScrollOffset: 550,
        })

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
        1000, {
          scrollSource: '#scroller',
          timeRange: 1000,
          startScrollOffset: 560,
          endScrollOffset: 800,
        })

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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 450,
          endScrollOffset: 600,
        })

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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 650,
          endScrollOffset: 800,
        })

      this.animate(".p5",
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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 850,
          endScrollOffset: 1100,
        })

      this.animate(".p6",
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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 1200,
          endScrollOffset: 1400,
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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 1450,
          endScrollOffset: 1600,
        })
      
      this.animate(".p8",
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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 1650,
          endScrollOffset: 1800,
        })

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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 1850,
          endScrollOffset: 2000,
        })
      this.animate(".p10",
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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 2050,
          endScrollOffset: 2300,
        })
      this.animate(".p11",
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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 2100,
          endScrollOffset: 2300,
        })
      this.animate(".p12",
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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 2350,
          endScrollOffset: 2500,
        })
      this.animate(".p13",
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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 2550,
          endScrollOffset: 2700,
        })
      this.animate(".p14",
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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 2750,
          endScrollOffset: 3000,
        })
      this.animate(".p15",
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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 3050,
          endScrollOffset: 3200,
        })
      this.animate(".p16",
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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 3250,
          endScrollOffset: 3600,
        })
      this.animate(".p17",
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
            transform: 'translateY(0px)',
            offset: 0.3
          },
          {
            transform: 'translateY(250px)',
            offset: 0.65
          },
          {
            opacity: 1,
            transform: 'translateY(250px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(250px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 3650,
          endScrollOffset: 4000,
        })

      this.animate(".i1-1",
        [{
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
          startScrollOffset: 50,
          endScrollOffset: 400,
        })

      this.animate(".i2-1",
        [{
            opacity: 0,
            offset: 0,
            transform: 'translateX(50px)'
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
            transform: 'translateX(-50px)',
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 420,
          endScrollOffset: 900,
        })

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
          startScrollOffset: 950,
          endScrollOffset: 1200,
        })

      this.animate(".i3-1",
        [{
            opacity: 0,
            offset: 0,
            transform: 'translate(-100px, -50px)'
          },
          {
            opacity: 1,
            offset: 0.2,
            transform: 'translateX(-50px, -50px)'
          },
          {
            opacity: 1,
            offset: 0.9,
            transform: 'translateX(50px, -50px)'
          },
          {
            opacity: 0,
            offset: 1,
            transform: 'translateX(100px, -50px)'
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 1200,
          endScrollOffset: 1700,
        })

      this.animate(".i4-1",
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
            offset: 0.5
          },
          {
            opacity: 1,
            transformOrigin: "50% 70%",
            scale: 0.6,
            transform: 'translate(-50px,-50px)',
            offset: 0.95
          },
          {
            opacity: 0,
            transformOrigin: "50% 70%",
            transform: 'translate(-50px,-50px)',
            scale: 0.5,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 1700,
          endScrollOffset: 2300
        })

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
          startScrollOffset: 2100,
          endScrollOffset: 2650,
        })
    },

  },
})