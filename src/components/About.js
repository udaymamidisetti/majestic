import React, { useState } from "react";

const About = ({ setIsOpen }) => {
  return (
    <div id="about">
      <div className="container mt-[14.283125rem] w-full lg:h-auto max-w-[62.5rem] mx-auto max-md:mt-[0rem]">
        <div
          id="costing"
          className="container w-full max-w-[62.5rem] max-md:h-auto mx-auto bg-[#A58850] bg-cover h-auto pb-[2.4125rem] left-0 right-0 bottom-[-30rem] max-md:bottom-[-9rem]"
          style={{ boxShadow: "8px 8px 22px 0px #00000040" }}
        >
          <h1 className="mt-[1.3275rem] text-[2rem] text-[#ffffff] font-semibold font-poppins text-center">
            COSTING
          </h1>
          <div className="flex justify-evenly items-center max-md:flex-col">
            <div>
              <table
                className="border max-w-[34.3125rem] w-full font-poppins overflow-hidden"
                style={{ borderCollapse: "collapse" }}
              >
                <tr className="h-[2.9375rem] border text-[1rem]">
                  <th className="w-[6rem] font-medium text-[#ffffff] border">
                    Type
                  </th>
                  <th className="w-[12.25rem] text-center font-medium text-[#ffffff] border">
                    Carpet Area
                  </th>
                  <th className="w-[16.0625rem] font-medium text-[#ffffff] border">
                    Price
                  </th>
                </tr>
                <tr className="h-[5.515rem] border text-[#ffffff]">
                  <td className="text-center border ">2BHK</td>
                  <td className="text-center border">821 Sq.ft.</td>
                  <td className="text-center border">
                    ₹ 1.14 cr * All Inc. <br />
                    <span>
                      <button
                        onClick={() => {
                          setIsOpen(true);
                        }}
                        className=" hover:cursor-pointer w-[8.125rem] h-[2.125rem] bg-[#ffffff] text-[#A58850] text-[1rem] cursor-pointer"
                      >
                        Price BreakUp
                      </button>
                    </span>
                  </td>
                </tr>
                <tr className="h-[5.515rem] border text-[#ffffff]">
                  <td className="text-center border">3BHK</td>
                  <td className="text-center border">1231 Sq. ft.</td>
                  <td className="text-center border">
                    ₹ 1.67Cr * All Inc.
                    <br />
                    <span>
                      <button
                        onClick={() => {
                          setIsOpen(true);
                        }}
                        className="w-[8.125rem] h-[2.125rem] bg-[#ffffff] text-[#A58850] text-[1rem] cursor-pointer"
                      >
                        Price BreakUp
                      </button>
                    </span>
                  </td>
                </tr>
              </table>
            </div>
            <div className="max-md:mt-[2rem]">
              <img
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1678096007/costing-details_1_scc5fs.svg"
                alt=""
              />
              <button
                onClick={() => {
                  setIsOpen(true);
                }}
                className="mt-[1.10875rem] flex items-center justify-center w-[20.4375rem] h-[2.5rem] bg-[#ffffff] text-[#A58850] text-[1rem] cursor-pointer"
              >
                <p>Download Cost sheet </p>

                <img
                  className="pt-[3px] pl-[0.78625rem]"
                  src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1678096089/Vector_7_p8vsct.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-center font-bold text-[2rem] text-[#816A3D] font-poppins mt-[3.80875rem]">
          ABOUT PROJECT
        </h1>
        <p className=" mt-[0.99625rem] text-center font-poppins text-[1.125rem] font-medium">
          27 GRAND RESIDENCES- By 27 Grand Residences Builder
        </p>
        <p className="max-md:w-[90%] max-md:m-auto mt-[0.685rem] text-center font-poppins text-[1.125rem] max-md:text-[12px]">
          MAJESTIQUE 27 GRAND RESIDENCES' Pre-dispatch project presented by
          Majestique Properties situated at Prominent Location of Balewadi Pune.
          Purchasing a property could be one of the main choices of your life,
          particularly in the event that it can possibly be the material for
          your fantasies. Welcome to MAJESTIQUE 27 GRAND RESIDENCES BALEWADI
          PUNE, where plentiful nature, unrivaled network and brilliant
          framework let you paint your fantasy home and Very soon, the Pune
          Metro will likewise go through Balewadi with metro stations.
        </p>
      </div>
      <div className="container mt-[0.39625rem] w-full max-md:w-[90%] lg:h-auto max-w-[62.5rem] mx-auto">
        <h1 className="text-center font-bold text-[2rem] text-[#816A3D] font-poppins">
          USP OF PROJECT
        </h1>
        <p className="mt-[0.685rem] text-center font-poppins text-[1.125rem] max-md:text-[12px]">
          Balewadi is a fast developing upcoming locality in north west Pune and
          is next to the upcoming localities of Hinjewadi,Baner, Aundh, Pimple
          Saudagar and Aundh. The Rajiv Gandhi Infotech Park and a good number
          of business, industrial and commercial parks in the region have driven
          the demand for good housing in this area. The Mumbai and the Nashik
          highways are close to this locality. Balewadi has problems of water
          logging, traffic jams, parking problems as well as irregular water.
          The PCMC municipal corporation is aware of these issues along with the
          shortcomings of transport infrastructure and a 1000 acre comprising
          Balewadi has been identified for infrastructure development at a cost
          of Rs 2200 crores. Residential accommodation is at a high demand due
          to the presence of so many parks and 2 and 3 Bedroom apartments are
          the most preferred accommodation here. Most of the accommodation is
          available here at an average cost of Rs 10000 to Rs 12000 per sq foot.
          The metro is developing in the main city of Pune and the next phase
          will cover the areas of Balewadi upto Hinjewadi and be a big boost to
          further development in the area .
        </p>
      </div>
    </div>
  );
};

export default About;
