// pages/scan/scan.js
Page({

  /**
   * Page initial data
   */
  data: {
    userId: wx.getStorageSync('user_id'),
    // scan: false,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  
  },


  // scan: function () {
    // let that = this
    // this.setData({
     //  scan: true
    // })
    bindScan: function (){
      const that = this
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
          url: `https://scaneat.wogengapp.cn/api/v1/users/${userId}/scans`,
          method: 'POST',
          data: food,



          success: (res) => {
            if (res.statusCode == 500) {
              wx.showModal({
                title: "Product Doesn't exit",
                content: 'Do you wan to add it ?',
                success: function (res) {
                   if (res.confirm) {
                    //that.setData({
                    //  scan: false
                   // }) 
                    wx.reLaunch({
                      url: '../form/form',

                    })
                  } else if (res.cancel) {
                    //that.setData({
                     // scan: false
                   // }) 
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
                  url: `https://scaneat.wogengapp.cn/api/v1/users/${that.data.userId}/scans`,
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
      // fail: (err) => {
        // this.setData({
        //   scan: false
       // }) 
      //}
    })
  },
  // },



  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    // if (this.data.scan == false) {
      // this.scan()
    // } else {
     //  console.log('yeah')
   //  }
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