function rpxToPx(rpx) {
  return rpx / 750 * wx.getSystemInfoSync().windowWidth
}

Page({
  onLoad: function () {
    this.animate('.text', [{
      transform: 'translateY(' + rpxToPx(0) + 'px)',
      borderColor: '#fff',
      offset: 0
    }, {
      transform: 'translateY(' + rpxToPx(400) + 'px)',
      borderColor: 'red',
      offset: 1
    }], 10, {
      scrollSource: '#scroller',
      timeRange: 10,
      startScrollOffset: 0,
      endScrollOffset: rpxToPx(400)
    })

    this.animate('.ball1', [{
      opacity: 0,
      offset: 1
    }], 10, {
      scrollSource: '#scroller',
      timeRange: 10,
      startScrollOffset: 0,
      endScrollOffset: rpxToPx(400)
    })

    this.animate('.ball2', [{
      opacity: 0,
      offset: 1
    }], 10, {
      scrollSource: '#scroller',
      timeRange: 10,
      startScrollOffset: 0,
      endScrollOffset: rpxToPx(400)
    })
  }
})