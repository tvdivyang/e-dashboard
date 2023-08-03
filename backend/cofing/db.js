const mongoose = require("mongoose");

const dbconnect = () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/e-commerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      console.log("database connected!");
    });
};

module.exports = dbconnect;
