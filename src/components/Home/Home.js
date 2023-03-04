import React from "react";

import About from "../About";
import Aminities from "../Aminities";
import Brand from "../Brand";
import Footer from "../Footer";
import Header from "../Header";
import Luxury from "../Luxury";
import Overview from "../Overview";
import Slick from "../Slick";

const Home = () => {
  return (
    <div>
      <Header />
      <Luxury />
      <Overview />
      <About />
      <Aminities />
      <Slick />
      <Brand />
      <Footer />
    </div>
  );
};

export default Home;
