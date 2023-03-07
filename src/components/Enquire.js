import { useState } from "react";

function Enquire() {
  // const [modalIsOpen, setIsOpen] = useState(false);
  // if (check) {
  //   openModal();
  //   check = false;
  // }
  // if (!check) {
  //   setTimeout(() => {
  //     openModal();
  //   }, 30000);
  // }

  return (
    <div className=" m-10 p-2 border border-black max-w-[31.625rem] w-full h-[33.625rem] bg-[#ffffff] rounded-md flex justify-center fixed left-[30%] top-[8%] z-10">
      <div className="font-poppins">
        <img
          src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677235318/logo-11_1_sfx0qe.svg"
          className="w-[9rem] h-[3.3125rem] max-md:w-[8rem] max-md:h-[2.9375rem] m-auto mt-[1.03875rem]"
          alt="Logo"
        />
        <button
          type="button"
          className="close absolute right-[10px] top-[1px] mr-1"
          data-dismiss="modal"
          aria-label="Close"
          style={{ fontSize: "2rem" }}
        >
          <span aria-hidden="true">×</span>
        </button>
        <h1 className="font-semibold text-[1rem] font-poppins text-center mt-[0.379375rem]">
          Register Here and awail Best Offers !
        </h1>
        <input
          className="mt-[1.113125rem] w-full max-w-[25.0625rem] h-[2.5rem] border-[0.03125rem] border-[#000000] p-[0.625rem] rounded-md"
          placeholder="Name"
        />{" "}
        <br />
        <input
          className="mt-[1.113125rem] w-full max-w-[25.0625rem] h-[2.5rem] border-[0.03125rem] border-[#000000] p-[0.625rem] rounded-md"
          placeholder="Mobile Number"
        />{" "}
        <br />
        <input
          className="mt-[1.113125rem] w-full max-w-[25.0625rem] h-[2.5rem] border-[0.03125rem] border-[#000000] p-[0.625rem] rounded-md"
          placeholder="Email"
        />{" "}
        <br />
        <select
          id="country"
          name="country"
          autoComplete="country-name"
          className="mt-[1.113125rem] w-full text-[#000000B2] text-[1rem] mt-1 block max-w-[25.0625rem] h-[2.5rem] rounded-md border border-gray-900 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option className="text-[#000000B2]">Apartment Interested In</option>
          <option></option>
          <option></option>
        </select>
        <select
          id="country"
          name="country"
          autoComplete="country-name"
          className=" w-full text-[#000000B2] text-[1rem] mt-4 block max-w-[25.0625rem] h-[2.5rem] rounded-md border border-gray-900 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option className="text-[#000000B2]">Purpose Of Enquiry</option>
          <option></option>
          <option></option>
        </select>
        <button className="mt-[2rem] w-[19.3125rem] h-[2.5rem] bg-[#A58850] text-[#ffffff] rounded-md">
          Get Instant Callback
        </button>
      </div>
    </div>
  );
}

export default Enquire;
