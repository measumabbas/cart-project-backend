const mongoose = require("mongoose");

const productInCartSchema = new mongoose.Schema({
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "please enter product id"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  

const cartModel = new mongoose.Schema({
  products: [productInCartSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "please enter user id"],
  },
});

module.exports = mongoose.model("Cart", cartModel);
