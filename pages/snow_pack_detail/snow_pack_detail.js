// pages/snow_pack_detail/snow_pack_detal.js

Page({
  data: {
    isLike: true,
    // banner
    imgUrls: [
      "../../images/snow_pack_img/C1.jpg",
      "../../images/snow_pack_img/C2.jpg",
      "../../images/snow_pack_img/C3.jpg",
      "../../images/snow_pack_img/C4.jpg",
      "../../images/snow_pack_img/C5.jpg"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    // 商品详情介绍
    detailImg: [
      "../../images/snow_pack_img/D1.jpg",
      "../../images/snow_pack_img/D2.jpg",
      "../../images/snow_pack_img/D3.jpg",
      "../../images/snow_pack_img/D4.jpg",
      "../../images/snow_pack_img/D5.jpg",
      "../../images/snow_pack_img/D6.jpg",
    ],
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 跳到购物车
  toCar() {
    wx.switchTab({
      url: '/pages/shopping_cart/shopping_cart'
    })
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },
})



