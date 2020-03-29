const Episode = require("../../models/Episode");

const getEpisodes = (req, res, next) => {
  Episode.find()
    .then(episodes => {
      res.json(episodes);
    })
    .catch(err => next(err));
};

const getEpisode = (req, res, next) => {
  Episode.findById(req.params.id)
    .then(episode => {
      res.json(episode);
    })
    .catch(err => next(err));
};

module.exports = {
  getEpisodes,
  getEpisode
};
