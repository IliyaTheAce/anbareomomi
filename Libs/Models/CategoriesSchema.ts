import mongoose, { Schema } from "mongoose";

const CategoriesSchema = new Schema({
  name: String,
  icon: String,
});
const Category =
  mongoose.models.Category || mongoose.model("Category", CategoriesSchema);
export default Category;
