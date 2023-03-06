import React from "react";
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
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="h-[4.375rem]">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
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
            <ul className="hidden lg:block p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <div className="flex gap-5">
                <Link to="/enquireform">
                  <li className="text-[#000000] font-poppins text-[1.125rem] block py-2 pl-3 pr-4 rounded  md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Enquire Now
                  </li>
                </Link>

                <li className="text-[#000000] font-poppins text-[1.125rem] block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Call Now
                </li>
              </div>
            </ul>
            <button
              ref={btnRef}
              onClick={onOpen}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                <p className="mt-[2.3125rem] cursor-pointer h-[2.75rem] font-poppins font-normal text-[1rem] leading-6 border-b-2 flex items-center">
                  Cost
                </p>
                <p className="cursor-pointer h-[2.75rem] font-poppins font-normal text-[1rem] leading-6  border-b-2 flex items-center">
                  About
                </p>
                <p className="cursor-pointer h-[2.75rem] font-poppins font-normal text-[1rem] leading-6  border-b-2 flex items-center">
                  Highlights
                </p>
                <p className="cursor-pointer h-[2.75rem] font-poppins font-normal text-[1rem] leading-6  border-b-2 flex items-center">
                  Overview
                </p>
                <p className="cursor-pointer h-[2.75rem] font-poppins font-normal text-[1rem] leading-6  border-b-2 flex items-center">
                  Enquire
                </p>
                <p className="cursor-pointer h-[2.75rem] font-poppins font-normal text-[1rem] leading-6  border-b-2 flex items-center">
                  Call Now
                </p>
                <p className="cursor-pointer h-[2.75rem] font-poppins font-normal text-[1rem] leading-6  border-b-2 flex items-center">
                  Aminities
                </p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[1.125rem] rounded md:bg-transparent md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[1.125rem] rounded  md:hover:bg-transparent md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Aminities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[1.125rem] text-[#000000] rounded md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Cost
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[1.125rem]  text-[#000000] rounded md:hover:bg-transparent md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[1.125rem]  text-[#000000] rounded md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Highlights
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
