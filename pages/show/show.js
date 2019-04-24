// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {
    userId: wx.getStorageSync('user_id'), 
    active_allergens: 1,
    fav_bindtap: 1,
  },

  active_allergens: function (e) {
    var a = e.currentTarget.dataset
    this.setData({
      active_allergens: this.data.active_allergens == 1 ? 2 : 1 
    }) 
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.showToast({
      title: 'Loading',
      icon: 'loading',
      duration: 2000
    });
    
    console.log('yihouuuuuuu', options)
    const page = this

  wx.request({
    url: `https://scaneat.wogengapp.cn/api/v1/users/${page.data.userId}/favorites`,
    method: 'GET',
    success(res) {

      console.log('data informations', res)
      page.setData({ 'favorites': res.data })

      const added = res.data.find(function(item){
        return item.food_id == options.id
      })

      console.log(added)

      if (added) {
        page.setData({
          fav_bindtap: 2,
          favorite_id: added.favorite_id
        })
      }

     

  }})

    wx.request({
      url: `https://scaneat.wogengapp.cn/api/v1/users/${page.data.userId}/scans/${options.id}`,
      success: res => {
        console.log('please', res)
        page.setData(res.data)
        //wx.setNavigationBarTitle({
        // title: page.data.name,
      }
    })
  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
  },
  
  notationMethod: function () {
    wx.navigateTo({
      url: '/pages/informations/informations',
    })
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
  /**  wx.reLaunch({
      url: '../profile/profile',
    })
    */
    
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

  },
  del_bindtap: function (e) {
    console.log("delete", e)
    const favoriteId = e.currentTarget.dataset.id
    const page = this
    wx.request({
      url: `https://scaneat.wogengapp.cn/api/v1/users/${page.data.userId}/favorites/${favoriteId}`,
      method: 'DELETE',
      success: res => {
        this.setData({
          fav_bindtap: 1,
        })
      }
    })
  },
  fav_bindtap: function (e) {
    const page = this
    console.log('yolo', e)
    console.log(this.data)
    let favorite = this.data.food.id
    let userId = wx.getStorageSync('user_id')
  wx.request({
    url: `https://scaneat.wogengapp.cn/api/v1/users/${userId}/favorites`,
    method: 'POST',
    data: { favorite: { food_id: favorite } },
    success: res => {
      console.log(res)
      const fav_bindtap = this.data.fav_bindtap
      console.log('Binding', fav_bindtap)
      this.setData({
        fav_bindtap: fav_bindtap==2 ? 1 : 2,
        favorite_id: res.data,
      })
      const del_bindtap = this.data.del_bindtap
      console.log('Binding', fav_bindtap)



    },
    fail: error => {
      console.log('error: ', error)
    }
    })
  },
})