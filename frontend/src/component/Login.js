import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const navigate = useNavigate();
  const handlechange = (e) => {
    setInpval({ ...inpval, [e.target.name]: e.target.value });
  };
  const handaleLogin = async () => {
    try {
      await axios
        .post("http://localhost:5000/user/login", inpval)
        .then(function (result) {
          console.log("🚀 ~ file: Login.js:19 ~ result:", result);
          if (result.data === "No User Found") {
            alert("please enter vaild data");
          } else {
            navigate("/");
            localStorage.setItem("user", JSON.stringify(result.data));
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("🚀 ~ file: Login.js:9 ~ Login ~ inpval:", inpval);
  return (
    <div>
      <form className="container align-items-center d-flex flex-column">
        <h4 className="m-5 text-center"> Login Form</h4>
        <div className="mb-3 w-50">
          <input
            className="form-control mb-3"
            type="email"
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
          onClick={handaleLogin}
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
