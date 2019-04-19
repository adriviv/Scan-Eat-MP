

App({
  onLaunch: function () {
    var that = this
    this.getUserCode(function (res) { 
      console.log('app.js', 'getUserCode success', res)
      
      // that.getUserInfo(function (res) {
      //   console.log(res)
      // })

      wx.getUserInfo({
        success: res => {
          console.log('getUserInfo', res)
          // app.globalData.userInfo = res.userInfo
          // this.setData({
          //   userInfo: res.userInfo,
          //   hasUserInfo: true
          // })

          // TODO: CREATE user record in backend if it doesnot exist yet
        }
      })
    })
  },

  getUserCode: function (cb) {
    const page = this
    wx.login({
      success: res => {
        console.log('app.js', 'getUserCode', 'login success', res)
        wx.request({
          url: `${this.globalData.API_URL}/users`,
          method: 'POST',
          data: {
            code: res.code
          },
          success: function(res) {        
            console.log('please',res.data.id)
            wx.setStorageSync('user_id', res.data.id)
            
            
            // cb(res.data)
            
          }
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

