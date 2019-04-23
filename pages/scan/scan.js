// pages/scan/scan.js
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

  let that = this
  
    wx.scanCode({
      /** onlyFromCamera: true, */
      success: (res) => {
        console.log("super1", res)
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

          success:(res) => {
            if (res.statusCode == 500) {
              wx.showModal({
                title: "Product Doesn't exit",
                content: 'Do you wan to add it ?',
                success: function (res) {
                  if (res.confirm) {
                   wx.reLaunch({
                     url: '../form/form',
                   
                    })
                  } else if (res.cancel) {
                    console.log('User clicks cancel')
                  }
                }
              });
            } else {
              wx.showToast({
                title: 'Succeed',
                icon: 'success',
                duration: 3000
              });
              setTimeout(function (e) {
                wx.request({
                  url: `http://localhost:3000/api/v1/users/${that.data.userId}/scans`,
                  success: res => {
                    that.setData(res.data)
                    var last = res.data.scans.slice(-1)[0]
                    wx.navigateTo({
                      url: `../show/show?id=${last.id}`
                    });   
                  }
                })
              }, 3000);
            } 
          },
        }) 
      },
    })
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