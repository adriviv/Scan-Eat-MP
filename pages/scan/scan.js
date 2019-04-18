// pages/scan/scan.js
Page({

  /**
   * Page initial data
   */
  data: {
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  
  bindScan: function (options) {
  
    wx.scanCode({
      /** onlyFromCamera: true, */
      success: (res) => {
        console.log('gffg', res)
        let food = {
          barcode: res.result
        }
        console.log(food)
        let userId = wx.getStorageSync('user_id')
        console.log('scanCode userId', userId)
        wx.request({
          url: `http://localhost:3000/api/v1/users/${userId}/scans`,
          method: 'POST',
          data: food,
        })

        wx.switchTab({

          url: '/pages/profile/profile',
        
        })
      },
      error: () => {
        console.log('error')
      }
    })
  },



/**
  bindSubmit: function (e) {
    console.log(e)
    let food = {
      barcode: e.detail.value.barcode
    }

    wx.request({
      url: `http://localhost:3000/api/v1/users/1/foods`,
      method: 'POST',
      data: food,
      success: res => {
     
  
            wx.switchTab({
          
              url: '/pages/profile/profile',
            })
          
      } 
    })
  },
  */
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