//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 轮播图数据
    snow_packs: [
      {
        link: '/pages/index/index',
        url: 'https://p3.pstatp.com/large/43700001e49d85d3ab52'
      }, {
        link: '/pages/logs/logs',
        url: 'https://p3.pstatp.com/large/39f600038907bf3b9c96'
      }, {
        link: '/pages/test/test',
        url: 'https://p3.pstatp.com/large/31fa0003ed7228adf421'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    Height: "",
    width: "1000px",
    // 列表数据
    home_list: [
      { "id": 1, "name": "滑雪板", "imageUrl": "https://p3.pstatp.com/large/31fa0003ed7228adf421", "price": 100 }, 
      { "id": 2, "name": "滑雪板--加宽", "imageUrl": "https://p3.pstatp.com/large/31fa0003ed7228adf421", "price": 100 },
      { "id": 3, "name": "滑雪板--加长", "imageUrl": "https://p3.pstatp.com/large/31fa0003ed7228adf421", "price": 100 },
      { "id": 4, "name": "滑雪鞋", "imageUrl": "https://p3.pstatp.com/large/31fa0003ed7228adf421", "price": 100 },
      { "id": 5, "name": "滑雪杖", "imageUrl": "https://p3.pstatp.com/large/31fa0003ed7228adf421", "price": 100 },
      ]
  },
  // 查看商品详情
  showTradeDetail: function (e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/snow_pack_detail/snow_pack_detail?id=' + id,
    })
  },

  // 图片自适应
  imgHeight: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
    var imgh = e.detail.height;　　　　　　　　　　　　　　　　//图片高度
    var imgw = e.detail.width;
    var swiperH = winWid * imgh / imgw + "px"　　　　　　　　　　//等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度    ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    this.setData({
      Height: swiperH　　　　　　　　//设置高度
    })
  },
  
  //下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
