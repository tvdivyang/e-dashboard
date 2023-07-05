const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./User");
const dbconnect = require("./cofing/db");
dbconnect();
const app = express();

app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.listen("5000");
