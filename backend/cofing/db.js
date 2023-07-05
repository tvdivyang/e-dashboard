const mongoose = require("mongoose");

const dbconnect = async () => {
  const db = await mongoose.connect("mongodb://0.0.0.0:27017/e-commerce");
};

module.exports = dbconnect;
