import mongoose, { Schema } from "mongoose";
import Review from "@/Libs/Models/Reviews";
import Specification from "@/Libs/Models/Specifications";

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
  bestMatch: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  discount: Number,
  Specifications: [
    {
      type: { type: mongoose.Schema.Types.ObjectId, ref: "Specification" },
      content: String,
    },
  ],
  care: {
    content: String,
    url: String,
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  about: String,
  updateTime: Date,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});
const Products =
  mongoose.models.Products || mongoose.model("Products", ProductsSchema);
export default Products;
