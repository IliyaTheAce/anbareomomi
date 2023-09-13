import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  phoneNumber: String,
  email: String,
  password: String,
});
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
