import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Header() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-lights ">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" aria-current="page" to="/">
              Products
            </Link>
            <Link class="nav-link active" aria-current="page" to="/add">
              Add Products
            </Link>
            <Link class="nav-link active" aria-current="page" to="/update">
              Update Products
            </Link>
            <Link class="nav-link active" aria-current="page" to="/profile">
              Profile
            </Link>
            {auth ? (
              <Link
                class="nav-link active"
                aria-current="page"
                onClick={logout}
                to="/signup"
              >
                Logout
              </Link>
            ) : (
              <Link class="nav-link active" aria-current="page" to="/signup">
                signUp
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
