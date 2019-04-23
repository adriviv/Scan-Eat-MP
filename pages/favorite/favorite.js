const app = getApp()
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
    const page = this
    wx.request({
      url: `http://localhost:3000/api/v1/users/${page.data.userId}/favorites`,
      method: 'GET',
      success(res) {

        console.log('data informations',res)
        page.setData({ 'favorites' :res.data})
      },
    });
  },


  

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

  tapName: function (event) {
    console.log(event)
  },
  /**
   * Called when user click on the top right corner to share
   */

  

  onShareAppMessage: function () {

  }


})