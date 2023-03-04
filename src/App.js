import "./App.css";
import About from "./components/About";
import Aminities from "./components/Aminities";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Luxury from "./components/Luxury";
import Overview from "./components/Overview";
import Slick from "./components/Slick";
import EnquireForm from "./components/EnquireForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/enquireform" element={<EnquireForm />} />
      </Routes>
    </div>
  );
}

export default App;
