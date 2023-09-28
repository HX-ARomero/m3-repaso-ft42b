const getActualUser = require("../../functions/getActualUser");
const allEpisodes = require("../../utils/allEpisodes");

const getEpisode = (req, res) => {
    const { email } = req.params;
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
