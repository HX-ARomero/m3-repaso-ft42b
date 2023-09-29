const allUsers = require("../../utils/allUsers");

const deleteEpisode = (req, res) => {
    const { email, id } = req.params;

    //* episodes: [ { 1 }, { 2 }, { 3 }, ... ]
    //* filteredEpisodes: [ { 1 }, { 3 }, ... ]

    const actualUser = allUsers.find((user) => user.email === email);
    if (actualUser) {
        const filteredEpisodes = actualUser.episodes.filter(
            (episode) => episode.id !== id
        );
        if (filteredEpisodes.length !== actualUser.episodes.length) {
            actualUser.episodes = filteredEpisodes;
            return res.status(200).json(actualUser.episodes);
        }
        return res.status(404).json({ message: "Episodio no encontrado" });
    }
    return res.status(404).json({ message: "Usuario no registrado" });
};

module.exports = deleteEpisode;
