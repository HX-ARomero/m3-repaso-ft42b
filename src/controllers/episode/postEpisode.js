const axios = require("axios");
const allEpisodes = require("../../utils/allEpisodes");

//* POST /episode/:email/:id
const postEpisode = async (req, res) => {
    try {
        const { email, id } = req.params;

        if(!id) return res.status(444).json({ message: "Debe ingresar id"});

        const actualUser = allEpisodes.find(user => user.email === email);
        //* actualUser = { email, ..., episodes: [] } || undefined
        if(actualUser) {
            const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
            const newEpisode = {
                id: id,
                name: data.name,
                episode: data.episode,
                completed: false
            };
            if(newEpisode.name && newEpisode.episode) {
                actualUser.episodes.push(newEpisode);
                return res.status(200).json(actualUser.episodes);
            }
            return res.status(404).json({ message: "Episodio no encontrado"})
        }
        return res.status(404).json({ message: "Usuario no registrado"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = postEpisode;