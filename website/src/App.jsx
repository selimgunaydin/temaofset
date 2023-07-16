import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Forbidden from "./pages/Forbidden";
import NotFound from "./pages/NotFound";
import Loader from "./pages/Loader";
import { loaderStore } from "./store/generalStore";


function App() {
  const { loader } = loaderStore();
  if (loader) {
    return(
      <Loader/>
    )
  } else {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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
