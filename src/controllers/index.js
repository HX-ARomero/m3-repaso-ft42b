const postUser = require("./user/postUser");
const postEpisode = require("./episode/postEpisode");
const getEpisode = require("./episode/getEpisode");
const putEpisode = require("./episode/putEpisode");
const deleteEpisode = require("./episode/deleteEpisode");

module.exports = {
    postUser, postEpisode, getEpisode, putEpisode, deleteEpisode
}