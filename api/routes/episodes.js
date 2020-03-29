const express = require("express");
const controller = require("../controllers/episodes");

const router = express.Router();

router.get("/", controller.getEpisodes);
router.get("/:id", controller.getEpisode);

module.exports = router;
