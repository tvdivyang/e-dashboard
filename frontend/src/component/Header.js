import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Header() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("token");
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-lights ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {auth ? (
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Products
              </Link>
              <Link className="nav-link active" aria-current="page" to="/add">
                Add Products
              </Link>
              {/* <Link
                className="nav-link active"
                aria-current="page"
                to="/update"
              >
                Update Products
              </Link> */}
              <Link
                className="nav-link active"
                aria-current="page"
                to="/profile"
              >
                Profile
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                onClick={logout}
                to="/signup"
              >
                Logout ({JSON.parse(auth).name})
              </Link>
            </div>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/signup"
              >
                signUp
              </Link>
              <Link className="nav-link active" aria-current="page" to="/login">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
