// pages/form/form.js
Page({

  /**
   * Page initial data
   */
  data: {
    userId: wx.getStorageSync('user_id')

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  bindSubmit: function (e) {
    let food = {
      // name: e.detail.value.name,
      // description: e.detail.value.description,
      // location: e.detail.value.location,
      // category: e.detail.value.category,
    }

    wx.request({
      url: `http://localhost:3000/api/v1/users/${userId}/foods`,
      method: 'POST',
     
      data: { food: food },
      success: res => {
        
          wx.reLaunch({
            url: '/pages/profile/profile'
          });
         
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