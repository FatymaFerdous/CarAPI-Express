const { Schema, model } = require('mongoose')


const productSchema = new Schema({
  ProductName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  modelYear: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true, 
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
    required: true, 
  },
  thumbnail: {
    type: String,
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
  imageArray: {
    type: [String],
    required: true,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;