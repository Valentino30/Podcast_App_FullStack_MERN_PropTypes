const Podcast = require("../../models/Podcast");

const getPodcasts = (req, res, next) => {
  Podcast.find()
    .then(podcasts => {
      res.json(podcasts);
    })
    .catch(err => next(err));
};

const getPodcast = (req, res, next) => {
  Podcast.findById(req.params.id)
    .then(podcast => {
      res.json(podcast);
    })
    .catch(err => next(err));
};

module.exports = {
  getPodcasts,
  getPodcast
};
