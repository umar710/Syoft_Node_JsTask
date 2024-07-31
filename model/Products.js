const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  inventoryCount: {
    type: Number,
    required: true,
  },
});

const ProductSchemaData = mongoose.model("Product", productSchema);
module.exports = ProductSchemaData;
