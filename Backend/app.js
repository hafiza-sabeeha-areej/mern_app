const bodyParser = require("body-parser");
const express = require("express");
const { userRouter } = require("./src/services/Register/router/user");

const app = express();
const port = 3000; // Corrected the variable declaration
app.use(bodyParser.json()); // Added parentheses

app.use("/user", userRouter);

app.listen(port, function () {
  console.log("server is running");
});
