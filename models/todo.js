const mongoose = require("mongoose");
const todoSchema = mongoose.Schema(
  {
    title: { type: String, required: true, maxLength: 15 },
    description: { type: String, required: true, maxLength: 100 },
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: { type: Date, required: true, default: Date.now() },
  },
  { versionKey: false }
);
module.exports = mongoose.model("ToDo", todoSchema);
