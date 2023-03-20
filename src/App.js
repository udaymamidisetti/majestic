import "./App.css";
import Home from "./components/Home/Home";
import EnquireForm from "./components/EnquireForm";
import { Routes, Route } from "react-router-dom";
import Enquire from "./components/Enquire";
import { useState } from "react";
let check = true;
let timeout = function () { };

function App() {
  const [modalIsOpen, setIsOpen] = useState(true);
  if (check) {
    openModal();
    check = false;
  }
  if (!check) {
    setTimeout(() => {
      openModal();
    }, 30000);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <Enquire modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route exact path="/" element={<Home modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />} />
        <Route exact path="/enquireform" element={<EnquireForm />} />
      </Routes>
    </div>
  );
}

export default App;
