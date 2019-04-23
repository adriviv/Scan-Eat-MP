// pages/form/form.js
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
  bindSubmit: function (e) {
    console.log('eeeee', e.detail)
    let page = this
          //Add barcode:  That is the tuff question

    let food = {
      product_name: e.detail.value.name,
      brand: e.detail.value.brand,
      calories_quantity: e.detail.value.calories_slider,
      sugar_quantity: e.detail.value.sugar_slider,
      salt_quantity: e.detail.value.salt_slider,
      saturated_fat_quantity: e.detail.value.saturated_fat_slider,
      protein_quantity: e.detail.value.protein_slider,
      sugar_quantity: e.detail.value.sugar_slider,
    }

    wx.request({
      url: `http://localhost:3000/api/v1/users/${page.data.userId}/foods`,
      method: 'POST',
     
      data: { food: food },
      success: res => {

        wx.showToast({
          title: 'Added to Checking',
          icon: 'success',
          duration: 3000
        });
      setTimeout(function (e) {
        wx.reLaunch({
          url: '/pages/profile/profile'
        });
        }, 2000);
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