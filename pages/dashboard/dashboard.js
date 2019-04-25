// pages/dashboard/dashboard.js
Page({

  /**
   * Page initial data
   */
  data: {
    userInfo: {},
    hasUserInfo: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userId: wx.getStorageSync('user_id'),
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.showToast({
      title: 'Loading',
      icon: 'loading',
      duration: 1000
    })
    const page = this
    wx.request({
      url: `http://localhost:3000/api/v1/users/${page.data.userId}/scans/statisitics`,
      success: res => {
        console.log('percentage', res)

        page.setData(res.data)

        //wx.setNavigationBarTitle({
        // title: page.data.name,
      }
    })
    wx.getUserInfo({
      success: res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    var that = this;
    that.canvasRing = that.selectComponent("#canvasVeryBad");
    that.canvasRing.showCanvasRing();
    that.canvasRing = that.selectComponent("#canvasBad");
    that.canvasRing.showCanvasRing();
    that.canvasRing = that.selectComponent("#canvasMedium");
    that.canvasRing.showCanvasRing();
    that.canvasRing = that.selectComponent("#canvasGood");
    that.canvasRing.showCanvasRing();
    that.canvasRing = that.selectComponent("#canvasVeryGood");
    that.canvasRing.showCanvasRing();
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {
    wx.showToast({
      title: 'Loading',
      icon: 'loading',
      duration: 2000
    })
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
