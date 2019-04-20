// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {
    userId: wx.getStorageSync('user_id'),
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    
    console.log('yihouuuuuuu', options)
    const page = this

    wx.request({
      url: `http://localhost:3000/api/v1/users/${page.data.userId}/scans/${options.id}`,
      success: res => {
        console.log('please', res)
        page.setData(res.data)
        //wx.setNavigationBarTitle({
        // title: page.data.name,
      }
    })
  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
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
    wx.reLaunch({
      url: '../profile/profile',
    })
    
  },
  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

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
