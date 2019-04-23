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
    active: 1,  
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
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },


  

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

  tapName: function (event) {
    console.log(event)
  },
  /**
   * Called when user click on the top right corner to share
   */

  

  onShareAppMessage: function () {

  },
  
  del_bindtap: function (e) {
    console.log("delete", e)
    const favoriteId = e.currentTarget.dataset.id
    const page = this
    wx.request({
      url: `http://localhost:3000/api/v1/users/${page.data.userId}/favorites/${favoriteId}`,
      method: 'DELETE',
      success: res => {
        wx.showToast({
          title: 'Succeed',
          icon: 'success',
          duration: 3000
        })
       wx.reLaunch({
         url: '/pages/favorite/favorite',
       })
      },
      fail(error) {
        console.log(error)
      }
    })
  },


})