import "./App.css";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";
import UpdateProducts from "./pages/UpdateProducts";
import Profiles from "./pages/Profile";
import Footer from "./component/Footer";
import SignUp from "./pages/SignUp";
import Private from "./component/Private";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route element={<Private />}>
          <Route path="/" element={<Products />}></Route>
          <Route path="/add" element={<AddProducts />}></Route>
          <Route path="/update" element={<UpdateProducts />}></Route>
          <Route path="/Profile" element={<Profiles />}></Route>
        </Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
