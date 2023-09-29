const express = require("express");
const { postUser } = require("../controllers");

const userRouter = express.Router();

//* GET /user
userRouter.get("/", (req, res) => {
    res.status(200).send("GET /user");
})

//* POST /user
userRouter.post("/", postUser);

module.exports = userRouter;