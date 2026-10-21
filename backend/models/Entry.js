const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 100,

    },
    entryBody: {
      type: String,
      maxLength: 350,
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Entry = mongoose.model("Entry", EntrySchema);

module.exports = Entry;
