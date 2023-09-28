const express = require("express");
const { getEpisode, postEpisode, putEpisode, deleteEpisode } = require("../controllers");

const episodeRouter = express.Router();

//* GET /episode/:email?id=2
episodeRouter.get("/:email", getEpisode);

//* POST /episode/:email/:id
episodeRouter.post("/:email/:id", postEpisode);

//* PUT /episode/:email
episodeRouter.put("/:email", putEpisode);

//* DELETE /episode/:email/:id
episodeRouter.delete("/:email/:id", deleteEpisode);

module.exports = episodeRouter;