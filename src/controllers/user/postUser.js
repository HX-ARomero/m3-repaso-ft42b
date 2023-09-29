const allUsers = require("../../utils/allUsers");

const postUser = (req, res) => {
    const { name, email, password } = req.body;

    //* Validamos que el email no esté registrado
    const userEmail = allUsers.filter((user) => user.email === email);
    if (userEmail.length) {
        return res.status(400).json({ message: "Email ya registrado" });
    }

    //* Si el email NO está registrado:
    if (name && email && password) {
        const newUser = { ...req.body, episodes: [] };
        allUsers.push(newUser);
        return res.status(200).json(newUser);
    }
    return res.status(400).json({ message: "Faltan datos" });
};

module.exports = postUser;
