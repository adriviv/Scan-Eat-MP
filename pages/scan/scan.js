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

        wx.showToast({
          title: 'Succeed',
          icon: 'success',
          duration: 3000
        });


        setTimeout(function (e) {
          wx.request({
            url: `http://localhost:3000/api/v1/users/${that.data.userId}/scans`,
            success: res => {
              console.log('Product Data', res)

              that.setData(res.data)
             
              var last = res.data.scans[0]

              wx.navigateTo({
                url: `../show/show?id=${last.id}`
              });
              //wx.setNavigationBarTitle({
              // title: page.data.name,   
            }
          }) 
          
         
        }, 3000);

       
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