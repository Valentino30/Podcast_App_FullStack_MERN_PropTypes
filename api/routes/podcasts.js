const express = require("express");
const controller = require("../controllers/podcasts");

const router = express.Router();

router.get("/", controller.getPodcasts);
router.get("/:id", controller.getPodcast);

module.exports = router;
