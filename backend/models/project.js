const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  tags: {
    type: [String],
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  demo: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Project", projectSchema);
