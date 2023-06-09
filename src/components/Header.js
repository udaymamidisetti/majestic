import React, { useState, useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Enquire from "./Enquire";
const Header = ({ setIsOpen }) => {
  // const { onOpen } = useDisclosure();
  const [isOpen, setisOpen] = useState(false);
  const btnRef = React.useRef();

  const aboutSectionRef = useRef(null);

  // const aboutRef = useRef(null);
  // const costRef = useRef(null);
  // const highlightRef = useRef(null);
  // const overviewRef = useRef(null);
  // const amenitiesRef = useRef(null);

  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  // const handleScrollToAbout = () => {
  //   scrollToRef(aboutRef);
  //   setisOpen(!isOpen);
  // };
  // const handleScrollTocost = () => scrollToRef(costRef);
  // const handleScrolltoHightlight = () => scrollToRef(highlightRef);
  // const handleOVerviewRef = () => scrollToRef(overviewRef);
  // const handleScrolltoAmenities = () => scrollToRef(amenitiesRef);

  function onClose() {
    setisOpen(!isOpen);
  }
  const handleNavItemClick = (sectionId) => {
    const sectionRef = document.getElementById(sectionId);
    sectionRef.scrollIntoView({ behavior: "smooth" });
    setisOpen(false);
  };
  return (
    <div className="h-[4.375rem]">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap items-center justify-between m-auto">
          <a href="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677235318/logo-11_1_sfx0qe.svg"
              className="w-[9rem] h-[3.3125rem] mr-3 max-md:w-[8rem] max-md:h-[2.9375rem]"
              alt="Logo"
            />
          </a>
          <div className="flex md:order-2">
            {/* <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button> */}
            <ul className="hidden lg:block p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:border-0 md:bg-white ">
              <div className="flex gap-5">
                <li
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className=" hover:cursor-pointer text-[#000000] font-poppins text-[1.125rem] block py-2 pl-3 pr-4 rounded  md:p-0 "
                >
                  Enquire Now
                </li>
                <li
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className=" hover:cursor-pointer text-[#000000] font-poppins text-[1.125rem] block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Call Now
                </li>
              </div>
            </ul>
            <button
              ref={btnRef}
              onClick={onClose}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />

              <DrawerBody>
                <a
                  onClick={() => handleNavItemClick("overview")}
                  className="cursor-pointer mt-[2.3125rem] cursor-pointer h-[2.75rem] font-poppins font-normal text-[1rem] leading-6 border-b-2 flex items-center"
                >
                  Overview
                </a>
                <a
                  onClick={() => handleNavItemClick("costing")}
                  className="cursor-pointer h-[2.75rem] font-poppins font-normal text-[1rem] leading-6  border-b-2 flex items-center"
                >
                  Costing
                </a>
                <a
                  onClick={() => handleNavItemClick("about")}
                  className="cursor-pointer h-[2.75rem] font-poppins font-normal text-[1rem] leading-6  border-b-2 flex items-center"
                >
                  About
                </a>
                <a
                  onClick={() => handleNavItemClick("aminities")}
                  className="cursor-pointer h-[2.75rem] font-poppins font-normal text-[1rem] leading-6  border-b-2 flex items-center"
                >
                  Amenities
                </a>
                <p
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className="cursor-pointer h-[2.75rem] font-poppins font-normal text-[1rem] leading-6  border-b-2 flex items-center"
                >
                  Enquire
                </p>
                <p
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className="cursor-pointer h-[2.75rem] font-poppins font-normal text-[1rem] leading-6  border-b-2 flex items-center"
                >
                  Call Now
                </p>
                <a
                  onClick={() => handleNavItemClick("projecthighlight")}
                  className="cursor-pointer h-[2.75rem] font-poppins font-normal text-[1rem] leading-6  border-b-2 flex items-center"
                >
                  Highlights
                </a>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:border-0 md:bg-white ">
              <li>
                <a
                  href="#overview"
                  className="block py-2 pl-3 pr-4 text-[1.125rem] rounded md:bg-transparent md:p-0 cursor-pointer"
                  aria-current="page"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#costing"
                  className="block py-2 pl-3 pr-4 text-[1.125rem] rounded  md:hover:bg-transparent md:p-0 cursor-pointer"
                >
                  Costing
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 pl-3 pr-4 text-[1.125rem] text-[#000000] rounded md:p-0 cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#aminities"
                  className="block py-2 pl-3 pr-4 text-[1.125rem]  text-[#000000] rounded md:hover:bg-transparent md:p-0 cursor-pointer"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href="#projecthighlight"
                  className="block py-2 pl-3 pr-4 text-[1.125rem]  text-[#000000] rounded md:p-0 cursor-pointer"
                >
                  Highlights
                </a>
              </li>
              <li>
                <a
                  href="#neighbourhood"
                  className="block py-2 pl-3 pr-4 text-[1.125rem]  text-[#000000] rounded md:p-0 cursor-pointer"
                >
                  Neighbourhood
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
