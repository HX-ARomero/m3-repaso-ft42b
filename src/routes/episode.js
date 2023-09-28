const express = require("express");
const getEpisode = require("../controllers/getEpisode");
const episodeRouter = express.Router();

//* GET /episode
episodeRouter.get("/", (req, res) => {
    res.status(200).send("GET /episode");
})

//* POST /episode/:email/:id
episodeRouter.post("/:email/:id", getEpisode);

module.exports = episodeRouter;