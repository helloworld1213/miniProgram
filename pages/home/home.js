// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: 'coder',
    age: 22,
    movies: [
      {id: 1, name: '飞鹰计划'},
      {id: 2, name: '龙的心'},
      {id: 3, name: '新警察故事1'},
      {id: 4, name: '醉拳'}
    ],
    counter: 0
    
  },
  add() {
    //1.错误的做法:数据发生了变化,但是界面不会刷新
    //console.log(this);
    // console.log(this.data.counter);
    //注意,这里的this指的不是data,
    // this.data.counter++;

    //2.this.setData()
    this.setData({
      //这里不能使用counter++,不起作用
      counter: this.data.counter + 1,
    })
  },
  reduce() {
    this.setData({
      counter: this.data.counter - 1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})