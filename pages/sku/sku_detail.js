// pages/sku/sku_detail.js
// var Temp = require('../../template/contract.js');
// Page(Object.assign({}, Temp.Quantity, {
Page(Object.assign({}, {
  data: {
    quantity1: {
      quantity: 10,
      min: 1,
      max: 20
    },
  },
  //数量变化处理
  handleQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;
    this.setData({
      // {componentId}.quantity: quantity
    });
  },
})
)
