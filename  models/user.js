const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  number: { type: String, required: true },
  city: String,
  hobbies: [{ type: String }],
  address: {
    city: String,
    street: String,
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
