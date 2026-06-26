const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user", 
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please add a note title"],
      trim: true,
      maxLength: [100, "Title cannot be more than 100 characters"],
    },
    content: {
      type: String,
      required: [true, "Please add some content for your note"],
      trim: true,
    },
    isEncrypted: {
      type: Boolean,
      default: false, 
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("note", noteSchema);
