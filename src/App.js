import "./App.css";
import Home from "./components/Home/Home";
import EnquireForm from "./components/EnquireForm";
import { Routes, Route } from "react-router-dom";
import Enquire from "./components/Enquire";
import { useState } from "react";
let check = true;
let timeout = function () {};

const handle = async (e) => {
  e.preventDefault();
  window.gtag("event", "conversion", {
    send_to: "AW-627427595/07PYCKXE-PgCEIuSl6sC",
  });

  // let response = await axios.post('https://propsource-mailer.herokuapp.com/', data);
  window.location.href = "/thank-you";
  // await axios.post('http://localhost:5000/', data);
};
function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
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

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Enquire handle={handle} setIsOpen={setIsOpen} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/enquireform" element={<EnquireForm />} />
      </Routes>
    </div>
  );
}

export default App;
