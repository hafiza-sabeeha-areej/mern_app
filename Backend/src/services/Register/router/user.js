const express = require("express");
const router = express.Router();
const { registerUser, homePage } = require("../controller/register");

router.post("/", registerUser).get("/", homePage);

module.exports = { userRouter: router };
