const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PodcastSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  numberOfEpisodes: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Podcast = mongoose.model("Podcast", PodcastSchema);

module.exports = Podcast;