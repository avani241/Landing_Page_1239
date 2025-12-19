import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  city: String
});

export default mongoose.model("Contact", contactSchema);
