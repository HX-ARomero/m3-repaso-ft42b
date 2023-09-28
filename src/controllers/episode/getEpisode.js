const allEpisodes = require("../../utils/allEpisodes");

const getEpisode = (req, res) => {
    const { email } = req.params;
    const { id } = req.query;

    //* allEpisodes = [ {user1}, {user2}, {user3}, ... ]
    //* actualUser = { email: user2, name, password, episodes: [ {1}, {2}, ...] }
    //* filteredEpisode = [ { 1 } ]

    const actualUser = allEpisodes.find(user => user.email === email);
    if(actualUser) {
        if(id) {
            const filteredEpisode = actualUser.episodes.filter(episode => episode.id === id);
            if(filteredEpisode.length) {
                return res.status(200).json(filteredEpisode);
            }
            return res.status(404).json({ message: "Episodio no encontrado"});
        }
        return res.status(200).json(actualUser.episodes);
    }
    return res.status(404).json({ message: "Usuario no registrado"});
}

module.exports = getEpisode;