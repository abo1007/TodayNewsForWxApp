// pages/info/info.js

const listData = [
	{
		id:1,title:"石家庄再现高风险地区！这个春节还能过吗？",
		url:"../../assent/list/1.jpg",author:"新京报",num:8888
	},
	{
		id:2,title:"河北新增14例本土确诊和30例无症状",
		url:"../../assent/list/2.jpg",author:"中国新闻网",num:100000
	},
	{
		id:3,title:"拼多多知乎账号被禁言15天",
		url:"../../assent/list/3.jpg",author:"36氪",num:8888
	},
	{
		id:4,title:"虾米音乐宣布2月5日关停",
		url:"../../assent/list/2.jpg",author:"新京报",num:8888
	},
	{
		id:5,title:"推特宣布永久移除特朗普账号",
		url:"../../assent/list/1.jpg",author:"新京报",num:1000000
	}
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
		id:null,
		title:"",
		newsData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
			this.setData({id: options.id});
			for(let i = 0; i< listData.length; i++){
				if(listData[i].id == options.id){
					this.setData({newsData:listData[i]});
				}
			}
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