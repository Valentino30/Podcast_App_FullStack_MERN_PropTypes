const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  podcast: {
    type: Schema.Types.ObjectId,
    ref: "Podcast"
  },
  duration: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Episode = mongoose.model("Episode", EpisodeSchema);

module.exports = Episode;
