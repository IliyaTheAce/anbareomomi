import mongoose, { Schema } from "mongoose";

const ProductsSchema = new mongoose.Schema({
  type: String,
  title: String,
  images: [String],
  breed: String,
  sizes: {
    small: Number,
    medium: Number,
    large: Number,
    xl: Number,
    xxl: Number,
  },
  bestMatch: [String],
  discount: Number,
  Specifications: [
    {
      type: { type: mongoose.Schema.Types.ObjectId, ref: "Specifications" },
      content: String,
    },
  ],
  care: {
    content: String,
    url: String,
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reviews" }],
  about: String,
  updateTime: Date,
});
const Products =
  mongoose.models.Products || mongoose.model("Products", ProductsSchema);
export default Products;
