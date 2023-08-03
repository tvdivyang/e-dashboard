import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setInpval({ ...inpval, [e.target.name]: e.target.value });
  };
  const addDate = async () => {
    try {
      await axios
        .post("http://localhost:5000/user/register", inpval)
        .then(function (result) {
          if (result.status === 200) {
            navigate("/");
            localStorage.setItem("user", JSON.stringify(result.data));
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <form className="container align-items-center d-flex flex-column">
        <h4 className="m-5 text-center"> SignUP Form</h4>
        <div className="mb-3 w-50">
          <input
            className="form-control mb-3"
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={(e) => handlechange(e)}
          />
          <input
            className="form-control mb-3"
            type="text"
            name="email"
            placeholder="Enter email"
            onChange={(e) => handlechange(e)}
          />
          <input
            className="form-control mb-3"
            type="password"
            name="password"
            onChange={(e) => handlechange(e)}
            placeholder="Enter passwoed"
          />
        </div>

        <button
          type="button"
          className="btn btn-lg btn-block "
          style={{ backgroundColor: "#87d3ec" }}
          onClick={addDate}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
