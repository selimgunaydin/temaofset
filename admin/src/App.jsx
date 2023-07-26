import { Routes, Route, useNavigate } from "react-router-dom";
import Forbidden from "./pages/Forbidden";
import NotFound from "./pages/NotFound";
import { generalStore, loaderStore } from "./store/generalStore";
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
import { useState } from "react";
import MobileError from "./pages/MobileError";

function App() {
  const { loader } = loaderStore();
  const {baseUrl}=generalStore();
  let navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobil cihaz için eşik değeri (768 piksel)
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Komponent yüklendiğinde başlangıç genişliği kontrol edilir

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let refreshTokenData = {
      refreshToken: localStorage.getItem("refresh_token"),
    };
    axios
      .post(
        `${baseUrl}/api/Auth/RefreshToken`,
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
      if(!isMobile){
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
      }else{
          return(
            <MobileError/>
          )
      }
  }
}

export default App;
