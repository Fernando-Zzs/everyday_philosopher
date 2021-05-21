Component({
  data: {

  },
  
  lifetimes:{
    ready() {
      setTimeout(function callback(){this._animate()}.bind(this), 2000)
    
  },
  },

  methods: {
    scroll(e) {
      console.log(e)
    },
    _animate() {
      this.animate(".title",
        [{
            opacity: 1,
            transform: 'translateY(-100px)',
            offset: 0
          },
          {
             opacity: 1,
            transform: 'translateY(-100px)',
            offset: 0.4
          },
          {
            opacity: 1,
            transform: 'translateY(-100px)',
            offset: 0.8
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
          startScrollOffset: 20,
          endScrollOffset: 150,
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
          startScrollOffset: 150,
          endScrollOffset: 400,
        })

      this.animate(".car-light",
      [{
        opacity: 1,
          width: '0px',
          height: '0px',
          transform: 'translateY(0px)',
          offset: 0
        },
        {
          opacity: 1,
          width: '300px',
          height: '300px',
          transform: 'translateY(-150px)',
          offset: 0.8
        },
        {
          opacity: 0,
          width: '300px',
          height: '300px',
          transform: 'translateY(-150px)',
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
          startScrollOffset: 350,
          endScrollOffset: 450,
        })

      this.animate(".i2-2",
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
          startScrollOffset: 400,
          endScrollOffset: 500,
        })

      this.animate(".i2-3",
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
          startScrollOffset: 400,
          endScrollOffset: 650,
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
          startScrollOffset: 400,
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
          startScrollOffset: 600,
          endScrollOffset: 800,
        })

      this.animate(".i3-1",
        [{
            opacity: 0,
            offset: 0,
            transform: 'translateY(0px)',
          },
          {
            opacity: 1,
            offset: 0.2,
            transform: 'translateY(0px)',
          },

          {
            opacity: 1,
            scale: 1.5,
            transform: 'translateY(50px)',
            offset: 0.9
          },
          {
            opacity: 0,
            offset: 1,
            transform: 'translateY(50px)',
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 600,
          endScrollOffset: 800,
        })


      this.animate(".i4-1",
        [{
            opacity: 0,
            offset: 0,
            transformOrigin: "50% 70%",
            scale: 1,
            transform: 'translate(0px,0px)'
          },
          {
            opacity: 1,
            offset: 0.2,
            transformOrigin: "50% 70%",
            scale: 1,
            transform: 'translate(0px,0px)'
          },
          {
            opacity: 1,
            offset: 0.5,
            transformOrigin: "50% 70%",
            scale: 1,
            transform: 'translate(0px,0px)'
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
          startScrollOffset: 750,
          endScrollOffset: 1050
        })

      this.animate(".i4-3",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.05
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
          startScrollOffset: 750,
          endScrollOffset: 1350,
        })

      this.animate(".i4-2",
        [{
            transformOrigin: "35% 50%",
            opacity: 0,
            scale: 4,
            offset: 0
          },
          {
            transformOrigin: "35% 50%",
            opacity: 1,
            scale: 3.8,
            offset: 0.2
          },

          {
            opacity: 1,
            transformOrigin: "35% 50%",
            scale: 1,
            // transform: 'translateY(-300px)',
            offset: 0.9
          },
          {
            transformOrigin: "35% 50%",
            scale: 1,
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 900,
          endScrollOffset: 1350,
        })

      this.animate(".p5",
        [{
            opacity: 0,
            color: 'black',
            offset: 0
          },
          {
            opacity: 1,
            color: 'black',
            offset: 0.2
          },
          {
            opacity: 1,
            color: 'antiquewhite',
            offset: 0.6
          },
          {
            opacity: 1,
            color: 'antiquewhite',
            offset: 0.9
          },
          {
            opacity: 0,
            color: 'antiquewhite',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 800,
          endScrollOffset: 1200,
        })

      this.animate(".p6",
        [{
            opacity: 0,
            transform: 'translateY(0px)',
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateY(0px)',
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
          endScrollOffset: 1700,
        })

      this.animate(".i5-1",
        [{
            opacity: 0,
            transform: 'translateX(300px)',
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateX(180px)',
            offset: 0.3
          },
          {
            opacity: 1,
            transform: 'translateX(-180px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateX(-200px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 1150,
          endScrollOffset: 1700,
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
          startScrollOffset: 1700,
          endScrollOffset: 2000,
        })

      this.animate(".i6-1",
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
          startScrollOffset: 1650,
          endScrollOffset: 1850,
        })

      this.animate(".i6-2",
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
          startScrollOffset: 1800,
          endScrollOffset: 2000,
        })

      this.animate(".i7-1",
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
          startScrollOffset: 1900,
          endScrollOffset: 2700,
        })

      this.animate(".eye",
        [{
            opacity: 0,
            height: '150px',
            transform: 'translateY(0px)',
            offset: 0
          },
          {
            opacity: 1,
            height: '150px',
            transform: 'translateY(0px)',
            offset: 0.2
          },
          {
            opacity: 1,
            height: '150px',
            transform: 'translateY(0px)',
            offset: 0.4
          },
          //开始眨眼
          {
            opacity: 1,
            transform: 'translateY(75px)',
            height: '0px',
            offset: 0.55
          },
          {
            opacity: 1,
            transform: 'translateY(0px)',
            height: '150px',
            offset: 0.7
          },
          //眨眼结束
          {
            opacity: 1,
            height: '150px',
            transform: 'translateY(0px)',
            offset: 0.9
          },
          {
            opacity: 0,
            height: '150px',
            transform: 'translateY(0px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 2000,
          endScrollOffset: 2700,
        })

      this.animate(".i7-2",
        [{
            opacity: 0,
            scale: 1.1,
            offset: 0
          },
          {
            opacity: 1,
            scale: 1.1,
            offset: 0.2
          },
          {
            opacity: 1,
            //  transform: 'translateY(-25px)',
            scale: 1.05,
            offset: 0.4
          },
          {
            opacity: 1,
            transform: 'translateY(-20px)',
            scale: 1,
            offset: 0.7
          },
          {
            opacity: 0,
            transform: 'translateY(-20px)',
            scale: 1,
            offset: 0.7
          },
          {
            opacity: 0,
            transform: 'translateY(-30px)',
            scale: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            scale: 1,
            transform: 'translateY(-40px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 2000,
          endScrollOffset: 2500,
        })

      this.animate(".i7-3",
        [{
            opacity: 0,
            transform: 'translateY(0px)',
            scale: 1.1,
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateY(-7px)',
            scale: 1.1,
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateY(-20px)',
            scale: 1.1,
            offset: 0.7
          },
          {
            opacity: 1,
            transform: 'translateY(-30px)',
            scale: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            scale: 1,
            transform: 'translateY(-40px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 2300,
          endScrollOffset: 2700,
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
          startScrollOffset: 1900,
          endScrollOffset: 2700,
        })

      this.animate(".i8-1",
        [{
            opacity: 0,
            transform: 'translateX(300px)',
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateX(180px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateX(-240px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateX(-300px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 2700,
          endScrollOffset: 3400,
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
          startScrollOffset: 2600,
          endScrollOffset: 3400,
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
          startScrollOffset: 3400,
          endScrollOffset: 4000,
        })

      this.animate(".i9-1",
        [{
            opacity: 0,
            transform: 'translateX(300px)',
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateX(180px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateX(-240px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateX(-300px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 3300,
          endScrollOffset: 4000,
        })

      this.animate(".i9-2",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.3
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
          startScrollOffset: 3450,
          endScrollOffset: 4000,
        })

      this.animate(".i10-1",
        [{
            opacity: 0,
            transform: 'translateX(50px)',
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateX(38px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateX(-4px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateX(-10px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 4000,
          endScrollOffset: 4400,
        })

      this.animate(".i10-2",
        [{
            opacity: 0,
            transform: 'translateY(40px)',
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateY(30px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateY(0px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(0px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 4350,
          endScrollOffset: 4550,
        })

      this.animate(".i10-3",
        [{
            opacity: 0,
            scale: 1,
            offset: 0
          },
          {
            opacity: 1,
            scale: 1,
            offset: 0.2
          },
          {
            opacity: 1,
            scale: 1.2,
            offset: 0.9
          },
          {
            opacity: 0,
            scale: 1.2,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 4500,
          endScrollOffset: 4700,
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
          startScrollOffset: 4000,
          endScrollOffset: 4700,
        })

      this.animate(".i11-1",
        [{
            opacity: 0,
            transform: 'translateX(300px)',
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateX(180px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateX(-240px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateX(-300px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 4700,
          endScrollOffset: 5300,
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
          startScrollOffset: 4700,
          endScrollOffset: 5300,
        })

      this.animate(".i12-1",
        [{
            opacity: 0,
            transform: 'translateX(50px)',
            scale: 1,
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateX(38px)',
            scale: 1.05,
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateX(-4px)',
            scale: 1.25,
            offset: 0.9
          },
          {
            opacity: 0,
            scale: 1.3,
            transform: 'translateX(-10px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 5300,
          endScrollOffset: 5700,
        })


      this.animate(".i12-2",
        [{
            opacity: 0,
            scale: 1,
            transform: 'translateX(0px)',
            offset: 0
          },
          {
            opacity: 1,
            scale: 1.05,
            transform: 'translateX(-2px)',
            offset: 0.2
          },
          {
            opacity: 1,
            scale: 1.25,
            transform: 'translateX(-9px)',
            offset: 0.9
          },
          {
            opacity: 0,
            scale: 1.3,
            transform: 'translateX(-10px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 5650,
          endScrollOffset: 6000,
        })

      this.animate(".p13",
        [{
            opacity: 0,
            transform: 'translateY(0px)',
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateY(10px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateY(45px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateY(50px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 5300,
          endScrollOffset: 6000,
        })

      this.animate(".i13-1",
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
          startScrollOffset: 6100,
          endScrollOffset: 6700,
        })

      this.animate(".i13-2",
        [{
            opacity: 0,
            transform: 'translateX(300px)',
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateX(180px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateX(-240px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateX(-300px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 6000,
          endScrollOffset: 6700,
        })

      this.animate(".p14",
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
          startScrollOffset: 6000,
          endScrollOffset: 6700,
        })

      this.animate(".i14-2",
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
          startScrollOffset: 6700,
          endScrollOffset: 7050,
        })

      this.animate(".i14-3",
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
          startScrollOffset: 6950,
          endScrollOffset: 7300,
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
          startScrollOffset: 6700,
          endScrollOffset: 7300,
        })

      var off15 = 7300;
      this.animate(".i15-1",
        [{
            opacity: 0,
            transform: 'translateX(110px)',
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateX(70px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateX(-40px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateX(-50px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0 + off15,
          endScrollOffset: 700 + off15,
        })

      this.animate(".i15-2",
        [{
            opacity: 0,
            scale: 0.7,
            transform: 'translateX(50px)',
            offset: 0
          },
          {
            scale: 0.75,
            opacity: 1,
            transform: 'translateX(38px)',
            offset: 0.2
          },
          {
            scale: 0.95,
            opacity: 1,
            transform: 'translateX(0px)',
            offset: 0.9
          },
          {
            opacity: 0,
            scale: 1,
            transform: 'translateX(-10px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0 + off15,
          endScrollOffset: 700 + off15,
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
          startScrollOffset: 0 + off15,
          endScrollOffset: 700 + off15,
        })

      var off16 = 8000
      this.animate(".i16-1",
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
          startScrollOffset: 0 + off16,
          endScrollOffset: 200 + off16,
        })

      this.animate(".i16-2",
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
          startScrollOffset: 150 + off16,
          endScrollOffset: 350 + off16,
        })

      this.animate(".i16-3",
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
          startScrollOffset: 300 + off16,
          endScrollOffset: 500 + off16,
        })

      this.animate(".i16-4",
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
          startScrollOffset: 450 + off16,
          endScrollOffset: 650 + off16,
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
          startScrollOffset: 0 + off16,
          endScrollOffset: 650 + off16,
        })

      var off17 = 8650
      this.animate(".i17-1",
        [{
            opacity: 0,
            transform: 'translateX(200px)',
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateX(155px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateX(15px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateX(-10px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0 + off17,
          endScrollOffset: 700 + off17,
        })

      this.animate(".i17-2",
      [{
        opacity: 0,
        transform: 'translateX(200px)',
        offset: 0
      },
      {
        opacity: 1,
        transform: 'translateX(155px)',
        offset: 0.2
      },
      {
        opacity: 1,
        transform: 'translateX(15px)',
        offset: 0.9
      },
      {
        opacity: 0,
        transform: 'translateX(-10px)',
        offset: 1
      }
    ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0 + off17,
          endScrollOffset: 700 + off17,
        })

      this.animate(".p18",
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
          startScrollOffset: 0 + off17,
          endScrollOffset: 650 + off17,
        })

      var off18 = 9300
      this.animate(".i18-1",
        [{
            opacity: 0,
            transform: 'translateX(-200px)',
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateX(-120px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateX(180px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateX(200px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0 + off18,
          endScrollOffset: 350 + off18,
        })

      this.animate(".i18-2",
        [{
            opacity: 0,
            transform: 'translateX(-200px)',
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateX(-120px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateX(180px)',
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateX(200px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 300 + off18,
          endScrollOffset: 650 + off18,
        })

      this.animate(".p19",
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
          startScrollOffset: 0 + off18,
          endScrollOffset: 650 + off18,
        })

      var off19 = 9950
      this.animate(".i19-1",
        [{
            opacity: 0,
            transform: 'translateX(200px)',
            offset: 0
          },
          {
            opacity: 1,
            transform: 'translateX(200px)',
            offset: 0.2
          },
          {
            opacity: 1,
            offset: 0.9
          },
          {
            opacity: 0,
            transform: 'translateX(-10px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0 + off19,
          endScrollOffset: 700 + off19,
        })

      this.animate(".p20",
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
          startScrollOffset: 0 + off19,
          endScrollOffset: 700 + off19,
        })

      var off20 = 10650
      this.animate(".i20-1",
        [{
            opacity: 0,
            transform: 'translateX(50px)',
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
            transform: 'translateX(-10px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0 + off20,
          endScrollOffset: 300 + off20,
        })

      this.animate(".i20-2",
        [{
            opacity: 0,
            transform: 'translateX(100px)',
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
            transform: 'translateX(-50px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 250 + off20,
          endScrollOffset: 550 + off20,
        })

      this.animate(".i20-3",
        [{
            opacity: 0,
            transform: 'translateX(-70px)',
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
            scale: 1.1,
            transform: 'translateX(20px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 250 + off20,
          endScrollOffset: 550 + off20,
        })

      this.animate(".i20-4",
        [{
            opacity: 0,
            transform: 'translateX(250px)',
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateX(0px)',
            offset: 0.5
          },
          {
            opacity: 1,
            offset: 0.8
          },
          {
            opacity: 0,
            transform: 'translateX(-300px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 500 + off20,
          endScrollOffset: 900 + off20,
        })

      this.animate(".i20-5",
        [{
            opacity: 0,
            transform: 'translateX(300px)',
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateX(0px)',
            offset: 0.5
          },
          {
            opacity: 1,
            offset: 0.8
          },
          {
            opacity: 0,
            transform: 'translateX(-300px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 500 + off20,
          endScrollOffset: 900 + off20,
        })

      this.animate(".i20-6",
        [{
            opacity: 0,
            transform: 'translateX(300px)',
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateX(0px)',
            offset: 0.5
          },
          {
            opacity: 1,
            offset: 0.8
          },
          {
            opacity: 0,
            transform: 'translateX(-300px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 500 + off20,
          endScrollOffset: 900 + off20,
        })

      this.animate(".i20-7",
        [{
            opacity: 0,
            transform: 'translateX(350px)',
            offset: 0
          },
          {
            opacity: 1,
            offset: 0.2
          },
          {
            opacity: 1,
            transform: 'translateX(0px)',
            offset: 0.5
          },
          {
            opacity: 1,
            offset: 0.8
          },
          {
            opacity: 0,
            transform: 'translateX(-300px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 500 + off20,
          endScrollOffset: 900 + off20,
        })

      this.animate(".p21",
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
          startScrollOffset: 0 + off20,
          endScrollOffset: 900 + off20,
        })

      var off21 = 11550
      this.animate(".i21-1",
        [{
            opacity: 0,
            transform: 'translateX(-250px)',
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
            transform: 'translateX(150px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0 + off21,
          endScrollOffset: 400 + off21,
        })

      this.animate(".i21-2",
        [{
            opacity: 0,
            transform: 'translateX(-200px)',
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
            transform: 'translateX(200px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 300 + off21,
          endScrollOffset: 700 + off21,
        })

      this.animate(".p22",
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
          startScrollOffset: 0 + off21,
          endScrollOffset: 700 + off21,
        })

      var off22 = 12250

      this.animate(".i22-1",
        [{
            opacity: 0,
            transform: 'translateX(250px)',
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
            transform: 'translateX(-150px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0 + off22,
          endScrollOffset: 500 + off22,
        })

      this.animate(".i22-2",
        [{
            opacity: 0,
            scale: 1.1,
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
            scale: 1,
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 350 + off22,
          endScrollOffset: 850 + off22,
        })

      this.animate(".p23",
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
          startScrollOffset: 0 + off22,
          endScrollOffset: 550 + off22,
        })
    },
  },
})