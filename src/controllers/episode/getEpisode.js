const getActualUser = require("../../functions/getActualUser");
// const allUsers = require("../../utils/allUsers");

const getEpisode = (req, res) => {
    // const { email } = req.params;
    const { id } = req.query;

    const userEpisodes = getActualUser(req, res);

    if (id) {
        const filteredEpisode = userEpisodes.filter(
            (episode) => episode.id === id
        );
        if (filteredEpisode.length) {
            return res.status(200).json(filteredEpisode);
        }
        return res.status(404).json({ message: "Episodio no encontrado" });
    }
    return res.status(200).json(userEpisodes);
};

module.exports = getEpisode;
