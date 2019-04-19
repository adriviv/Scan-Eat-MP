// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {
    ingredients: [
      {type: 'sugar'}, {type: 'salt'}, {type: 'protein'}, {type: 'fat'}, {type: 'fiber'}, {type: 'calories'}
    ],
    health: [
      {type: 'good'}, {type: 'medium'}, {type: 'bad'}
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  /*onLoad: function (options) {},
      const length = this.data.objectArray.length
      for (let i = 0; i < length; ++i) 





    // let page = this;

    // const page = this
    // wx.request({
    //   url: `http://localhost:3000/api/v1/foods/${options.id}`,
    //   method: 'GET',
    //   success: res => {
    //     page.setData(res.data)
    //     wx.setNavigationBarTitle({
    //       title: page.data.name,
    //       title: page.data.health,
    //       title: page.data.amount

    //     });
    //   }
    // })

  

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