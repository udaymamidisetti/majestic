import React from "react";

import About from "../About";
import Aminities from "../Aminities";
import Brand from "../Brand";
import Footer from "../Footer";
import Header from "../Header";
import Luxury from "../Luxury";
import Overview from "../Overview";
import Slick from "../Slick";

const Home = ({ modalIsOpen, setIsOpen }) => {
  return (
    <div>
      <Header modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <Luxury modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <Overview modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <About modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <Aminities modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <Slick modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <Brand modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <Footer modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Home;
