const express = require("express");
const cors = require("cors");
const dbconnect = require("./cofing/db");
dbconnect();
const app = express();
app.use(express.json());
app.use(cors());
const { user, product } = require("./route/index");

app.use("/user", user.route);
app.use("/product", product.route);

app.listen(5000, () => {
  console.log(`Server started at 5000`);
});
