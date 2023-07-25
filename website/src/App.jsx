import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Forbidden from "./pages/Forbidden";
import NotFound from "./pages/NotFound";
import Loader from "./pages/Loader";
import { loaderStore, generalStore } from "./store/generalStore";
import About from "./pages/About";
import Maintenance from "./pages/Maintenance";
import { useEffect } from "react";

function App() {
  const { loader } = loaderStore();
  const { getOptions, getCategories, getSliders, options } = generalStore();
  useEffect(() => {
    getOptions();
    getCategories();
    getSliders();
  }, []);

  if (options && options.isMaintenance) {
    return <Maintenance />;
  } else {
    return (
      <>
        {loader ? <Loader /> : null}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:defination" element={<Category />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/Forbidden" element={<Forbidden />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
