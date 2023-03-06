import "./App.css";
import Home from "./components/Home/Home";
import EnquireForm from "./components/EnquireForm";
import { Routes, Route } from "react-router-dom";
import Enquire from "./components/Enquire";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/enquireform" element={<EnquireForm />} />
        <Route exact path="enquire" element={<Enquire />} />
      </Routes>
    </div>
  );
}

export default App;
