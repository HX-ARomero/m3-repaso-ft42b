const allEpisodes = require("../../utils/allEpisodes");

const putEpisode = (req, res) => {
    const { email } = req.params;
    const { id, name, episode } = req.body;
    //console.log(req.body);

    //* allEpisodes = [ {user1}, {user2}, {user3}, ... ]
    //* actualUser = { email: user2, name, password, episodes: [ { 1 }, { 2 }, ...] }
    //* foundEpisode = { 1 } || undefined
    const actualUser = allEpisodes.find(user => user.email === email); //* {...} || undefined
    if(actualUser) {
        if(id && name && episode) {
            const foundEpisode = actualUser.episodes.find(
                episode => {
                    console.log("episode.id", typeof episode.id, "id", typeof id);
                    return episode.id === id;
                }
            );
            if(foundEpisode) {
                // console.log(foundEpisode);
                foundEpisode.name = name;
                foundEpisode.episode = episode;
                return res.status(200).json(actualUser.episodes);
            } else {
                return res.status(404).json({ message: "Episodio no encontrado"});
            }
        } else {
            return res.status(404).json({ message: "Faltan datos"});
        }
    } else {
        return res.status(404).json({ message: "Usuario no registrado"});
    }
}

module.exports = putEpisode;