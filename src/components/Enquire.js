import axios from "axios";
import md5 from "md5";
import { useState } from "react";

function Enquire({ modalIsOpen, setIsOpen }) {
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formDataObj = Object.fromEntries(formData.entries());
      let url = "https://propsource.project-test.online/";
      formDataObj["project"] = "Majestique Enquiry Form";
      await axios.post(url, formDataObj);
      localStorage.setItem(md5("majestique"), md5("true"));
      window.location.href = "/thankyou.html";
    } catch (error) {
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`${modalIsOpen ? "" : "hidden"
          } fixed bg-white p-10 z-10 max-sm:left-[10vw] max-sm:right-[10vw] max-sm:h-[68vh] max-sm:top-[15vh] left-[35vw] right-[35vw] top-[10vh] `}
      >
        <div className="font-poppins  max-md:max-w-[15.625rem] max-md:h-[15.625rem] flex-col items-center justify-center">
          <img
            src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677235318/logo-11_1_sfx0qe.svg"
            className="w-[9rem] h-[3.3125rem] max-sm:w-[8rem] max-sm:h-[2.9375rem] m-auto mt-1"
            alt="Logo"
          />
          <button
            type="button"
            className="close absolute right-[.625rem] top-[.0625rem] mr-1"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
            }}
            style={{ fontSize: "2rem" }}
          >
            <span aria-hidden="true">×</span>
          </button>
          <h1 className=" font-semibold text-[1rem] font-poppins text-center mt-[0.379375rem]">
            Register Here and awail Best Offers !
          </h1>
          <input
            name="name"
            className="  mt-[1.113125rem] w-full max-w-[25.0625rem] h-[2.5rem] border-[0.03125rem] border-[#000000] p-[0.625rem] rounded-md"
            required
            placeholder="Name"
          />{" "}
          <br />
          <input
            name="mobile"
            className="mt-[1.113125rem] w-full max-w-[25.0625rem] h-[2.5rem] border-[0.03125rem] border-[#000000] p-[0.625rem] rounded-md"
            required
            placeholder="Mobile Number"
          />{" "}
          <br />
          <input
            type={"email"}
            name={"email"}
            className="mt-[1.113125rem] w-full max-w-[25.0625rem] h-[2.5rem] border-[0.03125rem] border-[#000000] p-[0.625rem] rounded-md"
            required
            placeholder="Email"
          />{" "}
          <br />
          <select
            name="Apartment"
            className="mt-[1.113125rem] w-full text-[#000000B2] text-[1rem] mt-1 block max-w-[25.0625rem] h-[2.5rem] rounded-md border border-gray-900 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            required
          >
            <option className="text-[#000000B2]">
              Apartment Interested In
            </option>
            <option value={"1 BHK"}>1 BHK</option>
            <option value={"1 BHK"}>2 BHK</option>
            <option value={"1 BHK"}>3 BHK</option>
          </select>
          <select
            name="Enquiry"
            required
            className=" w-full text-[#000000B2] text-[1rem] mt-4 block max-w-[25.0625rem] h-[2.5rem] rounded-md border border-gray-900 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option className="text-[#000000B2]">Purpose Of Enquiry</option>
            <option value="Schedule a Phone Call">Schedule a Phone Call</option>
            <option value="Schedule a Video Call">Schedule a Video Call</option>
            <option value="Schedule a Site Visit (subject to Govt. laws)">
              Schedule a Site Visit
            </option>
          </select>
          <button
            type="submit"
            className=" mt-[1rem] w-full max-sm:w-[15rem] w-[19.3125rem] h-[2.5rem] bg-[#A58850] text-[#ffffff] rounded-md"
          >
            Get Instant Callback
          </button>
        </div>
      </div>
    </form>
  );
}

export default Enquire;
