import mongoose from "mongoose";

const SpecificationsSchema = new mongoose.Schema({
  title: String,
  icon: String,
});
const Specification =
  mongoose.models.Specifications ||
  mongoose.model("Specifications", SpecificationsSchema);
export default Specification;
