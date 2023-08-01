import axios from "axios";
import React, { useEffect, useState } from "react";
import AddProducts from "./AddProducts";
import UpdateProducts from "./UpdateProducts";
import { Link, useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const history = useNavigate();
  const getProducts = async () => {
    try {
      await axios.get("http://localhost:5000/products").then(function (result) {
        if (result.status === 200) {
          setProducts(result.data);
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  const deleteProducts = async (_id) => {
    try {
      await axios
        .delete(`http://localhost:5000/products/${_id}`)
        .then(function (result) {
          if (result.status === 200) {
            getProducts();
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div>Products List</div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => {
            return (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    className="btn btn-lg btn-block"
                    onClick={() => deleteProducts(item._id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/update/${item._id}`}
                    className="btn btn-lg btn-block"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Products;
