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
    favorites: false,
  },



  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.showToast({
      title: 'Loading',
      icon: 'loading',
      duration: 1000
    })
  },




  onReady: function () {

  },


  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    // if (this.data.favorites == true) {
      // wx.reLaunch({
      //   url: '/pages/favorite/favorite',
      // })
    // }
    const page = this
    wx.request({
      url: `https://scaneat.wogengapp.cn/api/v1/users/${page.data.userId}/favorites`,
      method: 'GET',
      success(res) {

        console.log('data informations', res)
        page.setData({ 'favorites': res.data })
      },
    });
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



  showFav: function (e) {
    console.log("hello", e)
    const data = e.currentTarget.dataset;
    const favoriteId = data.favoriteId;
    console.log("Go to id: ", favoriteId)
    wx.navigateTo({
      url: `../show/show?id=${favoriteId}&favorited=true`
    });
  }


})
