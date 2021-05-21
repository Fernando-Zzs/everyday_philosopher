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
            transform: 'translateY(60px)',
          },
          {
            opacity: 1,
            offset: 0.4,
            transform: 'translateY(0px)',
          },
          {
            opacity: 1,
            transform: 'translateY(-200px)',
            offset: 0.7,
          },
          {
            opacity: 0,
            transform: 'translateY(-200px)',
            offset: 1,
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0,
          endScrollOffset: 400,
        })
      //420-780
      this.animate(".introduction",
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
          startScrollOffset: 420,
          endScrollOffset: 780,
        })
      //860-1160
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
          startScrollOffset: 860,
          endScrollOffset: 1160,
        })
      //960-1260
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
          startScrollOffset: 960,
          endScrollOffset: 1260,
        })
      //1280-1500
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
          startScrollOffset: 1280,
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
      //2300-2600
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
          startScrollOffset: 2300,
          endScrollOffset: 2600,
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
      //2830-3120
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
          startScrollOffset: 2830,
          endScrollOffset: 3120,
        })
      //3330-3550
      this.animate(".p9",
        [{
            opacity: 0,
            offset: 0,
            transform: 'translateY(0px)',
          },
          {
            opacity: 1,
            transform: 'translateY(0px)',
            offset: 0.2
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
          startScrollOffset: 3330,
          endScrollOffset: 3550,
        })
      //3550-3950
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
          startScrollOffset: 3550,
          endScrollOffset: 3950,
        })
      //3950-4250
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
          endScrollOffset: 4250,
        })
      //4250-4580
      this.animate(".p12",
        [{
            opacity: 0,
            offset: 0,
          },
          {
            opacity: 1,
            offset: 0.08,
          },
          {
            opacity: 1,
            offset: 0.65
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
          startScrollOffset: 4250,
          endScrollOffset: 4580,
        })
      //4600-4900
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
          startScrollOffset: 4600,
          endScrollOffset: 4900,
        })
      //5050-5350
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
          startScrollOffset: 5050,
          endScrollOffset: 5350,
        })
      //5450-5750
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
          startScrollOffset: 5450,
          endScrollOffset: 5750,
        })
      //5850-6200
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
          startScrollOffset: 5850,
          endScrollOffset: 6200,
        })
      //6200-6400
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
          startScrollOffset: 6200,
          endScrollOffset: 6400,
        })
      //6400-6700
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
          startScrollOffset: 6400,
          endScrollOffset: 6700,
        })

      this.animate(".paper",
        [{
            offset: 0,
            opacity: 1
          },
          {
            opacity: 1,
            offset: 0.05
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
          endScrollOffset: 7000,
        })
      //0-800
      this.animate(".i0",
        [{
            offset: 0,
            opacity: 1,
            transform: 'translateY(-400px)'
          },
          {
            opacity: 1,
            offset: 0.05,
            transform: 'translateY(-400px)'
          },
          {
            opacity: 1,
            offset: 0.5,
            transform: 'translateY(-400px)'
          },
          {
            opacity: 1,
            offset: 0.95,
            transform: 'translateY(-400px)'
          },
          {
            opacity: 0,
            offset: 1,
            transform: 'translateY(-400px)'
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 0,
          endScrollOffset: 800,
        })
      //850-2000
      this.animate(".i1",
        [{
            offset: 0,
            opacity: 0,
            transform: 'translateX(500px)'
          },
          {
            opacity: 1,
            offset: 0.05,
            transform: 'translateX(500px)'
          },
          {
            opacity: 1,
            offset: 0.5,
            transform: 'translateX(0px)'
          },
          {
            opacity: 0.3,
            offset: 0.95,
            transform: 'translateX(-300px)'
          },
          {
            opacity: 0,
            offset: 1,
            transform: 'translateX(-300px)'
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 850,
          endScrollOffset: 2300,
        })
      //2050-2700
      this.animate(".i2",
        [{
            opacity: 0,
            offset: 0,
            transform: 'translate(-170px, 98px) scale(0.54)'
          },
          {
            opacity: 1,
            offset: 0.2,
            transform: 'translate(-170px, 98px) scale(0.54)'
          },
          {
            opacity: 1,
            offset: 0.8,
            transform: 'translate(-170px, 98px) scale(0.54)'
          },
          {
            opacity: 0,
            offset: 1,
            transform: 'translate(-170px, 98px) scale(0.54)'
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 2050,
          endScrollOffset: 2700,
        })
      //2710-3120
      this.animate(".i3",
        [{
            opacity: 0,
            offset: 0,
            transform: 'translate(140px, 90px) scale(0.6)'
          },
          {
            opacity: 1,
            offset: 0.5,
            transform: 'translate(140px, 90px) scale(0.6)'
          },
          {
            opacity: 1,
            offset: 0.9,
            transform: 'translate(140px, 90px) scale(0.6)'
          },
          {
            opacity: 0,
            offset: 1,
            transform: 'translate(140px, 90px) scale(0.6)'
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 2710,
          endScrollOffset: 3120,
        })
      //3120-4200
      this.animate(".i4",
        [{
            opacity: 0,
            offset: 0,
            transformOrigin: "50% 70%",
            transform: 'translate(-75px,0px) scale(1)',
          },
          {
            opacity: 1,
            offset: 0.1,
            transformOrigin: "50% 70%",
            transform: 'translate(-75px,0px)  scale(0.6)',
          },
          {
            opacity: 1,
            offset: 0.9,
            transformOrigin: "50% 70%",
            transform: 'translate(-175px,-50px) scale(0.5)',

          },
          {
            opacity: 0,
            offset: 1,
            transformOrigin: "50% 70%",
            transform: 'translate(-525px,-50px) scale(0.2)',
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 3120,
          endScrollOffset: 4200,
        })
      //4200-4950
      this.animate(".i5",
        [{
            opacity: 0,
            offset: 0,
            transform:'translate(-100px, 100px) scale(0.6)'
          },
          {
            opacity: 1,
            offset: 0.2,
            transform:'translate(-100px, 100px) scale(0.6)'
          },
          {
            opacity: 1,
            offset: 0.5,
            transform:'translate(-120px, 100px) scale(0.6)'
          },
          {
            opacity: 1,
            offset: 0.95,
            transform:'translate(-140px, 0px) scale(0.75)'
          },
          {
            opacity: 0,
            offset: 1,
            transform:'translate(-900px, 0px) scale(0.8)'
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 4200,
          endScrollOffset: 4950
        })
      //5000-5400
      this.animate(".i6",
        [{
            opacity: 0,
            offset: 0,
            transform:"translateY(-100px) scale(0.4)"
          },
          {
            opacity: 1,
            offset: 0.2,
            transform:"translateY(-100px) scale(0.4)"
          },
          {
            opacity: 1,
            offset: 0.8,
            transform:"translateY(-100px) scale(0.4)"
          },
          {
            opacity: 0,
            offset: 1,
            transform:"translateY(-100px) scale(0.4)"
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 5000,
          endScrollOffset: 5400,
        })
      //5400-5800
      this.animate(".i7",
        [{
            opacity: 0,
            offset: 0,
            transform:'translate(-15px, 150px) scale(0.5)'
          },
          {
            opacity: 1,
            offset: 0.2,
            transform:'translate(-15px, 150px) scale(0.5)'
          },
          {
            opacity: 1,
            offset: 0.8,
            transform:'translate(-15px, 150px) scale(0.5)'
          },
          {
            opacity: 0,
            offset: 1,
            transform:'translate(-15px, 150px) scale(0.5)'
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 5400,
          endScrollOffset: 5800,
        })
      //5850-6700
      this.animate(".i8",
        [{
            opacity: 0,
            offset: 0,
            transform:'translateY(50px) scale(0.5)'
          },
          {
            opacity: 1,
            offset: 0.2,
            transform:'translateY(50px) scale(0.5)'
          },
          {
            opacity: 1,
            offset: 0.9,
            transform:'translateY(50px) scale(0.5)'
          },
          {
            opacity: 0,
            offset: 1,
            transform:'translateY(50px) scale(0.5)'
          }
        ],
        2000, {
          scrollSource: '#scroller',
          timeRange: 2000,
          startScrollOffset: 5850,
          endScrollOffset: 6700,
        })
    },
  },
})