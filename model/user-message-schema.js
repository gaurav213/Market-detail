import mongoose from "mongoose";

const userMessage = mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const contact = mongoose.model("contact", userMessage);

export default contact;
