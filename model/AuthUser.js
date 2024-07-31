const mongoose = require("mongoose");

const mongooseSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "manager", "staff"],
    default: "staff",
  },
});

const AuthUserSchemaData = mongoose.model("User", mongooseSchema);
module.exports = AuthUserSchemaData;
