
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
      },
      quantity: {
        type: Number,
        required: true,
        default: 1
      }
    }
  ],
  total: {
    type: Number,
    required: true,
    default: 0
  }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;