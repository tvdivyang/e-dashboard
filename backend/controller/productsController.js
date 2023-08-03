const express = require("express");
const Product = require("../schema/productSchema");
const app = express();

app.use(express.json());

const addproduct = async (req, res) => {
  let addProduct = new Product(req.body);
  let result = await addProduct.save();
  res.send(result);
};

const getproducts = async (req, res) => {
  let data = await Product.find();

  if (data.length > 0) {
    res.send(data);
  }
  // else {
  //   res.send((data = "Data not found"));
  // }
};

const deleteproducts = async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params._id });
  if (result) {
    res.send(result);
  } else {
    res.send("Data not found");
  }
};

const getproductsid = async (req, res) => {
  const result = await Product.findOne({ _id: req.params._id });
  res.send(result);
};

const updateproducts = async (req, res) => {
  const result = await Product.updateOne(
    { _id: req.params._id },
    { $set: req.body }
  );
  res.send(result);
};

module.exports = {
  addproduct,
  getproducts,
  deleteproducts,
  getproductsid,
  updateproducts,
};
