import "./App.css";
import Home from "./components/Home/Home";
import EnquireForm from "./components/EnquireForm";
import { Routes, Route } from "react-router-dom";
import Enquire from "./components/Enquire";
import { useState } from "react";
import { toast } from "react-toastify";
import md5 from "md5";


function App() {
  const [modalIsOpen, setIsOpen] = useState(true);
  let check = localStorage.getItem(md5("majestique")) ? true : false;
  if (!check) {
    setTimeout(() => {
      openModal();
    }, 30000);
  } else {
    if (localStorage.getItem(md5("majestique")) == md5("true")) {
      toast.success("Thanks for your interest !");
    }
    localStorage.setItem(md5("majestique"), md5("false"));
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
