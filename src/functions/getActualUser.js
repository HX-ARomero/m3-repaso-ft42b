const allEpisodes = require("../utils/allEpisodes");

const getActualUser = (req, res) => {
    const { email } = req.params;
    const actualUser = allEpisodes.find(user => user.email === email);
    if(actualUser) return actualUser.episodes;
    return res.status(404).json({ message: "Usuario no registrado"});
}

module.exports = getActualUser;