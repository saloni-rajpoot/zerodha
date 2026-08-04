const { model } = require("mongoose");
const {OrderssSchema} = require("..schemas/OrdersSchema");

const {OrdersModel} = new model("order" , OrdersSchema);

module.exports = {OrdersModel};