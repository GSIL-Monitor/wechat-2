//index.js
const index = require('../../controllers/indexController.js').controller

//获取应用实例
const app = getApp()

Page({
  data: {
    topScroll: [],
    footerNav: [],
    bannerIcon: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    pageIndex: 1,
    pageSize: 10,
    loading: true,
    loadtitle: '康康正在努力为你加载更多...',
    hasMore: true,
    guessProducts: []
  },
  loadMoreGuessLike: function () {

  },
  onLoad: function () {
    console.log('onLoad')
    var _this = this
    index.getBannerIcon().then(d => _this.setData({bannerIcon: d}))
    //index.getFooter().then(d => _this.setData(footerNav: d))
    index.getTopScroll().then(d => _this.setData({topScroll: d}))
    //_this.loadMoreGuessLike()
  },
  onShow () {
    wx.setNavigationBarTitle({
      title: '首页-商城'
    })
  },
  onReady () {
    var _this = this
    //index.getFooter2().then(d => _this.setData({footerNav: d}))
    wx.setNavigationBarTitle({
      title: '首页-商城'
    })
  }
})
