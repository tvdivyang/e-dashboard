const express = require("express");
const router = express.Router();
const {
  addproduct,
  getproducts,
  deleteproducts,
  getproductsid,
  updateproducts,
} = require("../controller/productsController");

const app = express();

// app.use(express.json());
// app.use(cors()); /*  */

router.post("/addproduct", addproduct);
router.get("/products", getproducts);
router.delete("/products/:_id", deleteproducts);
router.get("/products/:_id", getproductsid);
router.put("/products/:_id", updateproducts);

module.exports = {
  route: router,
};
