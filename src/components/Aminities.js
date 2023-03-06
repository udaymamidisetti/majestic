import React from "react";

const Aminities = () => {
  return (
    <div>
      <div>
        <h1 className="mt-[2.27125rem] text-[2rem] font-semibold text-[#816A3D] text-center font-poppins">
          AMINITIES
        </h1>
        <div className=" w-full flex justify-center items-center gap-[1.625rem] mt-[0.875rem] max-md:flex-col">
          <img
            className="rounded-xl h-[23.25rem] w-[29rem]"
            src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1678097768/WhatsApp_Image_2023-03-01_at_15.45_1_dmmf0c.svg"
            alt=""
          />
          <div className="max-w-[31.875rem] w-full">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="pl-[0.625rem] pr-[0.625rem] w-full text-[#ffffff] text-[1.25rem] font-poppins font-medium mt-1 block max-w-[31.875rem] h-[3.75rem] bg-[#A58850] border-gray-900 py-2 px-3 shadow-sm focus:outline-none"
            >
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Environs For Kid
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Half Basketball Court
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Kids Play Area
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Infinity Pool
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff]">
                Skating Rink
              </option>
            </select>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="pl-[0.625rem] pr-[0.625rem] w-full text-[#ffffff] text-[1.25rem] font-poppins font-medium mt-1 block max-w-[31.875rem] h-[3.75rem] bg-[#A58850] border-gray-900 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            >
              <option className="text-[#ffffff]">Environs For Old Age</option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Grandparents Corner{" "}
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Meditation Garden
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Yoga Deck
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Walking Track
              </option>
            </select>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="pl-[0.625rem] pr-[0.625rem] w-full text-[#ffffff] text-[1.25rem] font-poppins font-medium mt-1 block max-w-[31.875rem] h-[3.75rem] bg-[#A58850] border-gray-900 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            >
              <option className="text-[#ffffff]">Luxury Environs</option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Party Hall
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Party Deck with Open Serving Counter
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Spillover Deck with Seating
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Lawn Area
              </option>
            </select>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="pl-[0.625rem] pr-[0.625rem] w-full text-[#ffffff] text-[1.25rem] font-poppins font-medium mt-1 block max-w-[31.875rem] h-[3.75rem] bg-[#A58850] border-gray-900 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            >
              <option className="text-[#ffffff]">Nature Environs</option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Boardwalk
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Hammock Garden
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Butterfly Garden
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border">
                Boardwalk
              </option>
            </select>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="pl-[0.625rem] pr-[0.625rem] w-full text-[#ffffff] text-[1.25rem] font-poppins font-medium mt-1 block max-w-[31.875rem] h-[3.75rem] bg-[#A58850] border-gray-900 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            >
              <option className="text-[#ffffff]">Overall Environs</option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Party Hall
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Yoga Lawn
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Gym
              </option>
              <option className="text-[#A58850] h-[3.75rem] bg-[#ffffff] border-b-2">
                Cafe
              </option>
            </select>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-wrap justify-center gap-[0.5825rem] w-full">
        <div className="w-[40.625rem] h-[32.875rem] bg-cover flex items-center justify-end max-md:h-auto max-md-w-full max-md:flex-col max-md:justify-start">
          <img
            className="w-[23.125rem] h-[32.875rem] max-md:h-[9.375rem] object-cover max-md:w-full"
            src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677350647/Frame_32954_ligbid.png"
            alt=""
          />
          <div className=" w-[17.5rem] h-[32.875rem] bg-[#A58850] max-md:h-auto max-md:pl-[1.55rem] max-md:w-full">
            <h1 className="font-semibold font-poppins text-[#ffffff] text-[1.125rem] text-center mt-[1.98rem]">
              FUN AND KIDS’ PLAY ARENAS
            </h1>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Tot Lot Area
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Swimming Pool
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Sunken Adventure Park
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Pool Side Deck
              </p>
            </div>
          </div>
        </div>
        <div className="w-[40.625rem] h-[32.875rem] bg-cover flex flex-row-reverse items-center justify-end max-md:h-auto max-md-w-full max-md:flex-col max-md:justify-start">
          <img
            className="w-[23.125rem] h-[32.875rem] max-md:h-[9.375rem] object-cover max-md:w-full"
            src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677381400/Indoor_Game_04_1_zth20z.png"
            alt=""
          />
          <div className=" w-[17.5rem] h-[32.875rem] bg-[#A58850] max-md:h-auto max-md:pl-[1.55rem] max-md:w-full">
            <h1 className="font-semibold font-poppins text-[#ffffff] text-[1.125rem] text-center mt-[1.98rem]">
              FITNESS AND SPORTS ARENAS
            </h1>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Indoor Games
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Squash Courts
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Yoga Deck
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Badminton Court
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Walking Track
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Practice Cricket Pitch
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Fitness Club (Gym)
              </p>
            </div>
          </div>
        </div>
        <div className="w-[40.625rem] h-[32.875rem] bg-cover flex items-center justify-end max-md:h-auto max-md-w-full max-md:flex-col max-md:justify-end">
          <img
            className="w-[23.125rem] h-[32.875rem] max-md:h-[9.375rem] object-cover max-md:w-full"
            src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677382171/Frame_32956_spy54h.png"
            alt=""
          />
          <div className=" w-[17.5rem] h-[32.875rem] bg-[#A58850] max-md:h-auto max-md:pl-[1.55rem] max-md:w-full">
            <h1 className="font-semibold font-poppins text-[#ffffff] text-[1.125rem] text-center mt-[1.98rem]">
              NATURE ARENAS
            </h1>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Boardwalk
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Meditarian Garden
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Hammock Garden
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Grass Graden
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Hammock Garden
              </p>
            </div>
          </div>
        </div>
        <div className="w-[40.625rem] h-[32.875rem] bg-cover flex flex-row-reverse items-center justify-end max-md:h-auto max-md-w-full max-md:flex-col max-md:justify-end">
          <img
            className="w-[23.125rem] h-[32.875rem] max-md:h-[9.375rem] object-cover max-md:w-full"
            src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677382205/Frame_32957_e0ur61.png"
            alt=""
          />
          <div className=" w-[17.5rem] h-[32.875rem] bg-[#A58850] max-md:h-auto max-md:pl-[1.55rem] max-md:w-full">
            <h1 className="font-semibold font-poppins text-[#ffffff] text-[1.125rem] text-center mt-[1.98rem]">
              OTHER ARENAS
            </h1>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Amphitheatre
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Multipurpose Hall
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Lawn Area
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem] border-b-[0.0625rem] ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Amphitheatre
              </p>
            </div>
            <div className="mt-[1.13rem] w-[14.375rem] h-[3.375rem]  ml-[0.3425rem] flex flex-col justify-center">
              <p className="font-poppins  text-[#ffffff] font-normal text-[1rem]">
                Party Deck with Open Serving Counter
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Aminities;
