import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema({
  composer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  time: Date,
  content: String,
  rate: Number,
});
const Review =
  mongoose.models.Reviews || mongoose.model("Reviews", ReviewsSchema);
export default Review;
