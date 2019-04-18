

App({
  onLaunch: function () {
    var that = this
    this.globalData.code = wx.getStorageSync('code')
    
    this.getUserCode(function (res) { 
      
        })
  },

getUserCode: function (cb) {
wx.login({
  success: res => {
    console.log(res)
    wx.request({
      url: `${this.globalData.API_URL}/sessions`,
      method: 'POST',
      data: { code: this.globalData.code },
    })
    }
  })
},

  

  globalData: {
    wechatUserType: 'normal',
    featureManager: {},
    userInfo: null,
    currentCustomer: null,
    API_URL: 'http://localhost:3000/api/v1'

  }
})

