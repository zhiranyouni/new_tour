// pages/mine/mine.js
var app = getApp()
Page({
  data: {
    userInfo: {},
    motto: 'Hello World',
    // orderItems
    orderItems: [
      {
        typeId: 0,
        name: '待付款',
        url: 'bill',
        imageurl: '../../images/my_image/unpay.png',
      },
      {
        typeId: 1,
        name: '待发货',
        url: 'bill',
        imageurl: '../../images/my_image/onsend.png',
      },
      {
        typeId: 2,
        name: '已評價',
        url: 'bill',
        imageurl: '../../images/my_image/uneval.png'
      },
      {
        typeId: 3,
        name: ' 已完成',
        url: 'bill',
        imageurl: '../../images/my_image/completed.png'
      }
    ],
  },
  //事件处理函数
  toOrder: function () {
    wx.navigateTo({
      url: '../my_order/my_order'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})

