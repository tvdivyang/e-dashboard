const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./User");
const dbconnect = require("./cofing/db");
const Product = require("./Product");
dbconnect();
const app = express();

app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send("No User Found");
    }
  } else {
    res.send("No User Found");
  }
});

app.post("/addproduct", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});

app.get("/products", async (req, res) => {
  let data = await Product.find();

  if (data.length > 0) {
    res.send(data);
  } else {
    res.send((data = "Data not found"));
  }
});

app.delete("/products/:_id", async (req, res) => {
  await Product.deleteOne({ _id: req.params._id });
  res.send(data);
});

app.listen("5000");
