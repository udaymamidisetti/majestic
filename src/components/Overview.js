import React, { useState } from "react";

const Overview = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://res.cloudinary.com/drjnmxyd5/image/upload/v1677511469/m-1_1_wwfdz0.svg",
    "https://res.cloudinary.com/drjnmxyd5/image/upload/v1677249796/img-1_1_zbn9ep.png",
    "https://res.cloudinary.com/drjnmxyd5/image/upload/v1677511469/m-1_1_wwfdz0.svg",
  ];
  let intervalId;
  function handleImageHover(index) {
    setCurrentImageIndex(index);
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 100);
    return () => clearInterval(interval);
  }
  function handleImageLeave() {
    clearInterval(intervalId);
  }

  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <div
        className="h-[35.375rem] bg-cover max-md:h-[46.329375rem]"
        // style={{
        //   backgroundImage:
        //     "url(https://res.cloudinary.com/drjnmxyd5/image/upload/v1677249796/img-1_1_zbn9ep.png)",
        // }}
      >
        {/* <img
          className="h-[37.5rem] absolute object-cover w-full max-md:h-[17.391875rem]"
          src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677249796/img-1_1_zbn9ep.png"
          alt=""
        /> */}
        {images.map((src, index) => (
          <img
            className="h-[37.5rem] absolute object-cover w-full max-md:h-[17.391875rem] cursor-pointer transition ease-in-out delay-150"
            key={index}
            src={src}
            alt={`Hoverable image ${index + 1}`}
            style={{ opacity: currentImageIndex === index ? 1 : 0 }}
            onMouseEnter={() => handleImageHover(index)}
            onMouseLeave={() => handleImageLeave()}
          />
        ))}
        <div
          className="container w-full max-w-[62.5rem] max-md:h-auto max-md:w-[20rem] mx-auto bg-[#A58850] bg-cover relative h-auto pb-[2.4125rem] left-0 right-0 bottom-[-30rem] max-md:bottom-[-9rem]"
          style={{ boxShadow: "8px 8px 22px 0px #00000040" }}
        >
          <h1 className="mt-[1.3275rem] text-[2rem] text-[#ffffff] font-semibold font-poppins text-center">
            QUICK OVERVIEW
          </h1>
          <div className="flex flex-wrap gap-2.5 justify-center max-md:pb-[0.625rem]">
            <div>
              <p className="font-poppins text-[#ffffff] w-[18.75rem] text-center">
                Location
              </p>
              <p className="text-[#ffffff] text-[1.125rem] h-[2.93125rem] w-[18.75rem] text-center justify-center border flex items-center">
                Pune
              </p>
            </div>
            <div>
              <p className="font-poppins text-[#ffffff] w-[18.75rem] text-center">
                Unit Type
              </p>
              <p className="text-[#ffffff] text-[1.125rem] h-[2.93125rem] w-[18.75rem] text-center justify-center border flex items-center">
                2 BHK ,3BHK
              </p>
            </div>
            <div>
              <p className="font-poppins text-[#ffffff] w-[18.75rem] text-center">
                Carpet
              </p>
              <p className="text-[#ffffff] text-[1.125rem] h-[2.93125rem] w-[18.75rem] text-center justify-center border flex items-center">
                880-1120 Sq .ft
              </p>
            </div>
            <div>
              <p className="font-poppins text-[#ffffff] w-[18.75rem] text-center">
                Total Flats
              </p>
              <p className="text-[#ffffff] text-[1.125rem] h-[2.93125rem] w-[18.75rem] text-center justify-center border flex items-center">
                1234
              </p>
            </div>
            <div>
              <p className="font-poppins text-[#ffffff] w-[18.75rem] text-center">
                Total Area
              </p>
              <p className="text-[#ffffff] text-[1.125rem] h-[2.93125rem] w-[18.75rem] text-center justify-center border flex items-center">
                11.10 Acres
              </p>
            </div>
            <div>
              <p className="font-poppins text-[#ffffff] w-[18.75rem] text-center">
                Bulding and Floors
              </p>
              <p className="text-[#ffffff] text-[1.125rem] h-[2.93125rem] w-[18.75rem] text-center justify-center border flex items-center">
                4 Towers p+ 15 Floors
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
