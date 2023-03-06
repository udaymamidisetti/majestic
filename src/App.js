import "./App.css";
import Home from "./components/Home/Home";
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
