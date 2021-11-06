import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  date: String,
  bajarpeth: String,
  shetimal: String,
  jat: String,
  pariman: String,
  aavak: Number,
  kami: Number,
  jast: Number,
  sarvsatharan: Number,
});

const user = mongoose.model("user", userSchema);
export default user;
