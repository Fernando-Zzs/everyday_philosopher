Component({
  data: {
  },
  ready() {
    this._animate()
  },
  methods: {
    scroll(e) {
      console.log(e)
    },
    _animate() {
      var off1=0
      this.animate(".i0",
        [{
            opacity: 1,
            scale:1.2,
            offset: 0
          },
          {
            opacity: 1,
            scale:1.2,
            offset: 0.2
          },
          {
            opacity: 1,
            scale:1.2,
            offset: 0.8
          },
          {
            opacity: 0,
            scale:1.2,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0,
          endScrollOffset: 700,
        })

        this.animate(".i1-1",
        [{
            opacity: 1,
            transform:'translate(200px,0px)',
            offset: 0
          },
          {
            opacity: 1,
            transform:'translate(120px,0px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform:'translate(-120px,0px)',
            offset: 0.8
          },
          {
            opacity: 0,
            transform:'translate(-200px,0px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0,
          endScrollOffset: 800,
        })
        
        this.animate(".p1",
        [{
            opacity: 0,
            offset: 0
          },
          {
            opacity: 0,
            offset: 0.2
          },
          {
            opacity: 1,
            offset: 0.4
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
          startScrollOffset: 0,
          endScrollOffset: 750,
        })

        var off2=700;
        this.animate(".i2-1",
        [{
            opacity: 1,
            transform:'translate(100px,0px)',
            offset: 0
          },
          {
            opacity: 1,
            transform:'translate(80px,0px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform:'translate(-80px,0px)',
            offset: 0.8
          },
          {
            opacity: 0,
            transform:'translate(-100px,0px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off2,
          endScrollOffset: 700+off2,
        })

        this.animate(".i2-2",
        [{
            opacity: 0,
            scale:1,
            offset: 0
          },
          {
            scale:1.04,
            opacity: 1,
            offset: 0.2
          },
          {
            scale:1.16,
            opacity: 1,
            offset: 0.8
          },
          {
            scale:1.2,
            opacity: 0,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off2,
          endScrollOffset: 700+off2,
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
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off2,
          endScrollOffset: 700+off2,
        })

        var off3=1300
        this.animate(".i3-1",
        [{
            opacity: 0,
            transform:'translate(-150px,0px)',
            offset: 0
          },
          {
            opacity: 1,
            transform:'translate(-90px,0px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform:'translate(90px,0px)',
            offset: 0.8
          },
          {
            opacity: 0,
            transform:'translate(150px,0px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off3,
          endScrollOffset: 700+off3,
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
          startScrollOffset: 0+off3,
          endScrollOffset: 700+off3,
        })

        var off4=1900
        this.animate(".i4-1",
        [{
            opacity: 0,
            transform:'translate(-150px,0px)',
            offset: 0
          },
          {
            opacity: 1,
            transform:'translate(-90px,0px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform:'translate(90px,0px)',
            offset: 0.8
          },
          {
            opacity: 0,
            transform:'translate(150px,0px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off4,
          endScrollOffset: 700+off4,
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
          startScrollOffset: 0+off4,
          endScrollOffset: 700+off4,
        })

        var off5=2500
        this.animate(".i5-1",
        [{
            opacity: 0,
            transform:'translate(-150px,0px)',
            offset: 0
          },
          {
            opacity: 1,
            transform:'translate(-90px,0px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform:'translate(160px,0px)',
            offset: 0.8
          },
          {
            opacity: 0,
            transform:'translate(200px,0px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off5,
          endScrollOffset: 700+off5,
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
          startScrollOffset: 0+off5,
          endScrollOffset: 700+off5,
        })

        var off6=3100
        this.animate(".i6-2",
        [{
            opacity: 0,
            scale:1,
            offset: 0
          },
          {
            opacity: 1,
            scale:0.98,
            offset: 0.2
          },
          {
            opacity: 1,
            scale:0.92,
            offset: 0.8
          },
          {
            opacity: 0,
            scale:0.9,
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off6,
          endScrollOffset: 700+off6,
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
          startScrollOffset: 0+off6,
          endScrollOffset: 700+off6,
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
          startScrollOffset: 0+off6,
          endScrollOffset: 800+off6,
        })

        var off7=3800;
        this.animate(".i7-1",
        [{
            opacity: 0,
            transform:'translate(0px,0px)',
            offset: 0
          },
          {
            opacity: 1,
            transform:'translate(0px,-4px)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform:'translate(0px,-16px)',
            offset: 0.8
          },
          {
            opacity: 0,
            transform:'translate(0px,-20px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off7,
          endScrollOffset: 700+off7,
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
          startScrollOffset: 0+off7,
          endScrollOffset: 700+off7,
        })

        var off8=4500
        this.animate(".i8-1",
        [{
            opacity: 0,
            transform:'translate(-10px,0px)',
            offset: 0
          },
          {
            opacity: 1,
            transform:'translate(-6px,0x)',
            offset: 0.2
          },
          {
            opacity: 1,
            transform:'translate(6px,0px)',
            offset: 0.8
          },
          {
            opacity: 0,
            transform:'translate(10px,0px)',
            offset: 1
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off8,
          endScrollOffset: 1000+5500,
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
          startScrollOffset: 0+off8,
          endScrollOffset: 1000+off8,
        })

        var off9=5500
        this.animate(".i9-1",
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
          startScrollOffset: 0+off9,
          endScrollOffset: 1000+off9,
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
          startScrollOffset: 0+off9,
          endScrollOffset: 1000+off9,
        })

        var off10=6400
        this.animate(".i10-1",
        [{
          opacity: 0,
          transform:'translate(-100px,0px)',
          offset: 0
        },
        {
          opacity: 1,
          transform:'translate(-60px,0px)',
          offset: 0.2
        },
        {
          opacity: 1,
          transform:'translate(80px,0px)',
          offset: 0.9
        },
        {
          opacity: 0,
          transform:'translate(100px,0px)',
          offset: 1
        }
      ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off10,
          endScrollOffset: 1000+off10,
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
          startScrollOffset: 0+off10,
          endScrollOffset: 1000+off10,
        })

        var off11=7400
        this.animate(".i11-1",
        [{
          opacity: 0,
          transform:'translate(150px,0px)',
          offset: 0
        },
        {
          opacity: 1,
          transform:'translate(80px,0px)',
          offset: 0.2
        },
        {
          opacity: 1,
          transform:'translate(-80px,0px)',
          offset: 0.9
        },
        {
          opacity: 0,
          transform:'translate(-100px,0px)',
          offset: 1
        }
      ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off11,
          endScrollOffset: 1200+off11,
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
          startScrollOffset: 0+off11,
          endScrollOffset: 1200+off11,
        })

        var off12=8400
        this.animate(".i12-1",
        [{
          opacity: 0,
          transform:'translate(-100px,0px)',
          offset: 0
        },
        {
          opacity: 1,
          transform:'translate(-80px,0px)',
          offset: 0.2
        },
        {
          opacity: 1,
          transform:'translate(100px,0px)',
          offset: 0.9
        },
        {
          opacity: 0,
          transform:'translate(120px,0px)',
          offset: 1
        }
      ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off12,
          endScrollOffset: 2000+off12,
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
          startScrollOffset: 0+off12,
          endScrollOffset: 1000+off12,
        })

        var off13=9400
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
          startScrollOffset: 0+off13,
          endScrollOffset: 1000+off13,
        })

        var off14=10400
        this.animate(".i14-1",
        [{
          opacity: 0,
          transform:'translate(100px,0px)',
          offset: 0
        },
        {
          opacity: 1,
          transform:'translate(80px,0px)',
          offset: 0.2
        },
        {
          opacity: 1,
          transform:'translate(-100px,0px)',
          offset: 0.9
        },
        {
          opacity: 0,
          transform:'translate(-120px,0px)',
          offset: 1
        }
      ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off14,
          endScrollOffset: 2100+off14,
        })
        this.animate(".i14-2",
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
          startScrollOffset: 0+off14,
          endScrollOffset: 1100+off14,
        })
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
          startScrollOffset: 0+off14,
          endScrollOffset: 1000+off14,
        })
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
          startScrollOffset: 1000+off14,
          endScrollOffset: 2000+off14,
        })

        var off16=12400
        this.animate(".i16-1",
        [{
          opacity: 0,
          transform:'translate(100px,0px)',
          offset: 0
        },
        {
          opacity: 1,
          transform:'translate(80px,0px)',
          offset: 0.2
        },
        {
          opacity: 1,
          transform:'translate(-100px,0px)',
          offset: 0.9
        },
        {
          opacity: 0,
          transform:'translate(-120px,0px)',
          offset: 1
        }
      ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: -100+off16,
          endScrollOffset: 2100+off16,
        })
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
          startScrollOffset: 0+off16,
          endScrollOffset: 1000+off16,
        })
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
          startScrollOffset: 1000+off16,
          endScrollOffset: 2000+off16,
        })

        var off18=14400
        this.animate(".i18-1",
        [{
          opacity: 0,
          transform:'translate(100px,0px)',
          offset: 0
        },
        {
          opacity: 1,
          transform:'translate(80px,0px)',
          offset: 0.2
        },
        {
          opacity: 1,
          transform:'translate(-100px,0px)',
          offset: 0.9
        },
        {
          opacity: 0,
          transform:'translate(-120px,0px)',
          offset: 1
        }
      ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0+off18,
          endScrollOffset: 2100+off18,
        })
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
          startScrollOffset: 0+off18,
          endScrollOffset: 1000+off18,
        })
        this.animate(".p19",
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
          startScrollOffset: 1000+off18,
          endScrollOffset: 2000+off18,
        })
      }


  },
})