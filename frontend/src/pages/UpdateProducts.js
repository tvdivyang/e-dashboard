import axios from "axios";
import React, { useState } from "react";

function UpdateProducts() {
  const [inpval, setInpval] = useState({
    userId: localStorage.getItem("user_id"),
    name: "",
    price: "",
    category: "",
    company: "",
  });
  console.log(
    "🚀 ~ file: UpdateProducts.js:12 ~ UpdateProducts ~ inpval:",
    inpval
  );
  const [error, setError] = useState();

  const handlechange = (e) => {
    setInpval({ ...inpval, [e.target.name]: e.target.value });
  };
  const updateProduct = async () => {
    if (!inpval.name || !inpval.price || !inpval.category || !inpval.company) {
      setError(true);
      return false;
    }
    try {
      await axios
        .post("http://localhost:5000/addproduct", inpval)
        .then(function (result) {
          if (result.status === 200) {
            localStorage.setItem("user", JSON.stringify(result.data));
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div>
        <form className="container align-items-center d-flex flex-column">
          <h4 className="m-5 text-center">Update Products</h4>
          <div className="mb-3 w-50">
            <input
              className="form-control mb-3"
              type="text"
              name="name"
              placeholder="Enter Product name"
              value={inpval.name}
              onChange={(e) => handlechange(e)}
            />
            {error && !inpval.name && (
              <span className="text-danger">Enter Product name</span>
            )}
            <input
              className="form-control mb-3"
              type="text"
              name="price"
              placeholder="Enter Product price"
              value={inpval.price}
              onChange={(e) => handlechange(e)}
            />
            {error && !inpval.price && (
              <span className="text-danger">Enter Product Price</span>
            )}
            <input
              className="form-control mb-3"
              type="text"
              name="category"
              placeholder="Enter Product categroy"
              value={inpval.category}
              onChange={(e) => handlechange(e)}
            />
            {error && !inpval.category && (
              <span className="text-danger">Enter Product Categroy</span>
            )}
            <input
              className="form-control mb-3"
              type="text"
              name="company"
              value={inpval.company}
              placeholder="Enter Product company"
              onChange={(e) => handlechange(e)}
            />
            {error && !inpval.company && (
              <span className="text-danger">Enter Product company</span>
            )}
          </div>

          <button
            type="button"
            className="btn btn-lg btn-block "
            style={{ backgroundColor: "#87d3ec" }}
            onClick={updateProduct}
          >
            Update Product
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateProducts;
