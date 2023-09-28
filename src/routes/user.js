const express = require("express");
const setUser = require("../controllers/setUser");
const userRouter = express.Router();

//* GET /user
userRouter.get("/", (req, res) => {
    res.status(200).send("GET /user");
})

userRouter.post("/", setUser);

module.exports = userRouter;