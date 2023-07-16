import { Routes, Route, useNavigate } from "react-router-dom";
import Forbidden from "./pages/Forbidden";
import NotFound from "./pages/NotFound";
import { loaderStore } from "./store/generalStore";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Loader from "./pages/Loader";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Products from "./pages/Products";
import References from "./pages/References";
import Gallery from "./pages/Gallery";
import Settings from "./pages/Settings";
import NavbarInfo from "./components/NavbarInfo";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const { loader } = loaderStore();
  let navigate = useNavigate();
  useEffect(() => {
    let refreshTokenData = {
      refreshToken: localStorage.getItem("refresh_token"),
    };
    axios
      .post(
        "http://api.temaofset.online/api/Auth/RefreshToken",
        refreshTokenData
      )
      .then((response) => {
        localStorage.removeItem("user_token");
        localStorage.removeItem("refresh_token");
        localStorage.setItem("user_token", response.data.accessToken);
        localStorage.setItem("refresh_token", response.data.refreshToken);
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("user_token");
        localStorage.removeItem("refresh_token");
        navigate("/");
      });
  }, []);

  if (loader) {
    return <Loader />;
  } else {
    if (localStorage.getItem("refresh_token")) {
      return (
        <>
          <div className="d-flex">
            <Navbar />
            <div className="d-flex flex-column w-100">
              <NavbarInfo />
              <Routes>
                <Route path="/" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/references" element={<References />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/NotFound" element={<NotFound />} />
                <Route path="/Forbidden" element={<Forbidden />} />
              </Routes>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Forbidden />} />
        </Routes>
      );
    }
  }
}

export default App;
