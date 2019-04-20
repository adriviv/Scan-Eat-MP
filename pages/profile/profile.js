// pages/profile/profile.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    userInfo: {},
    hasUserInfo: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userId: wx.getStorageSync('user_id')
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    const page = this

    wx.request({
      url: `http://localhost:3000/api/v1/users/${page.data.userId}/scans`,
      success: res => {
        console.log('Product Data', res)

        page.setData(res.data)

        //wx.setNavigationBarTitle({
        // title: page.data.name,   
      }
    }) 
    
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
  },
  
   showScan: function (e) {
      const data = e.currentTarget.dataset;
      const scanId = data.scanId;

      wx.navigateTo({
        url: `../show/show?id=${scanId}`
      });
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
