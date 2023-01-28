import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Career from "./components/Career";
import Community from "./components/Community";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import Magazine from "./components/Magazine";
import Register from "./components/Register";
import Reunion from "./components/Reunion";
import Footer from "./components/Footer";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Resource from "./components/Resource";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/community" element={<Community />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reunion" element={<Reunion />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
