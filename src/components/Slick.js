import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick.css";
const Slick = () => {
  const [selected, setSelected] = useState("1");
  const handleItemClick = (item) => {
    setSelected(item);
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "#FFBE64",
          height: "2.25rem",
          width: "2.25rem",
          right: "0",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "#FFBE64",
          height: "2.25rem",
          width: "2.25rem",
          left: "0",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    arrows: false,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="bg-[#A588501A] h-[56.0625rem] max-md:h-[40.8125rem] mt-[8.09625rem]">
      <h1 className="text-center font-semibold font-poppins text-[#816A3D] text-[2rem] pt-[2.56625rem]">
        PROJECT HIGHLIGHT
      </h1>
      <div className="mt-[2.49625rem] container w-[62.1875rem] flex gap-[1.5625rem] justify-center flex-wrap mx-auto max-md:w-auto max-md:items-center max-md:justify-center max-md:gap-1">
        <div
          onClick={() => handleItemClick("1")}
          className="bg-[#ffffff] w-[14.375rem] h-[2.9375rem] shadow-2xl flex items-center justify-center cursor-pointer"
          style={{
            borderBottom: selected === "1" ? "5px solid #816A3D" : "none",
          }}
        >
          <p className="text-[1.125rem] font-poppins">E-Brocher</p>
        </div>
        <div
          onClick={() => handleItemClick("2")}
          className="bg-[#ffffff] w-[14.375rem] h-[2.9375rem] shadow-2xl flex items-center justify-center cursor-pointer"
          style={{
            borderBottom: selected === "2" ? "5px solid #816A3D" : "none",
          }}
        >
          <p className="text-[1.125rem] font-poppins">Flat Image</p>
        </div>
        <div
          onClick={() => handleItemClick("3")}
          className="bg-[#ffffff] w-[14.375rem] h-[2.9375rem] shadow-2xl flex items-center justify-center cursor-pointer"
          style={{
            borderBottom: selected === "3" ? "5px solid #816A3D" : "none",
          }}
        >
          <p className="text-[1.125rem] font-poppins">Renders and Layout</p>
        </div>
        <div
          onClick={() => handleItemClick("4")}
          className="bg-[#ffffff] w-[14.375rem] h-[2.9375rem] shadow-2xl flex items-center justify-center cursor-pointer"
          style={{
            borderBottom: selected === "4" ? "5px solid #816A3D" : "none",
          }}
        >
          <p className="text-[1.125rem] font-poppins">Location</p>
        </div>
      </div>
      {selected === "1" && (
        <div className="w-[62.1875rem] h-[41.875rem] container max-md:w-full m-auto mt-[0.618125rem] bg-[#ffffff] flex items-center">
          {/* <img
            className=" m-auto w-[57.6625rem] h-[38.875rem] rounded-2xl mt-[1.5rem] max-md:h-[19.18rem] max-md:w-[19.88rem] max-md:mt-[0rem] object-cover"
            src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1678099548/unsplash_IyaNci0CyRk_hsopcc.svg"
            alt=""
          /> */}
          <div
            className="flex items-center justify-center m-auto w-[57.6625rem] h-[38.875rem] rounded-2xl mt-[1.5rem] max-md:h-[19.18rem] max-md:w-[19.88rem] max-md:mt-[0rem] object-cover"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/drjnmxyd5/image/upload/v1678099548/unsplash_IyaNci0CyRk_hsopcc.svg')",
            }}
          >
            <div>
              <img
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1678100047/vscode-icons_file-type-pdf2_rkqknf.svg"
                alt=""
              />
              <button className="w-[13.899375rem] h-[2.0725rem] bg-[#ffffff] text-[#000000] font-poppins">
                Download Brochure Pdf
              </button>
            </div>
          </div>
        </div>
      )}
      {selected === "2" && (
        <div className="w-[62.1875rem] container max-md:w-full m-auto mt-[0.618125rem]">
          <Slider {...settings}>
            <div className="w-[62.1875rem] h-[41.875rem] bg-[#ffffff] flex items-center flex-col justify-center max-md:h-[19.18rem] max-md:w-[19.88rem]">
              <img
                className="m-auto w-[57.6625rem] h-[38.875rem] rounded-2xl mt-[1.5rem] max-md:h-[19.18rem] max-md:w-[19.88rem] max-md:mt-[0rem] object-cover"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1678100858/WhatsApp_Image_2023-03-01_at_15.45_3_gw5tgc.svg"
                alt=""
              />
            </div>
            <div className="w-[62.1875rem] h-[41.875rem] bg-[#ffffff] flex items-center flex-col justify-center max-md:h-[19.18rem] max-md:w-[19.88rem]">
              <img
                className="m-auto w-[57.6625rem] h-[38.875rem] rounded-2xl mt-[1.5rem] max-md:h-[19.18rem] max-md:w-[19.88rem] max-md:mt-[0rem] object-cover"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677506577/Indoor_Game_02-1_1_e1hbzs.svg"
                alt=""
              />
            </div>
            <div className="w-[62.1875rem] h-[41.875rem] bg-[#ffffff] flex items-center flex-col justify-center max-md:h-[19.18rem] max-md:w-[19.88rem]">
              <img
                className="m-auto w-[57.6625rem] h-[38.875rem] rounded-2xl mt-[1.5rem] max-md:h-[19.18rem] max-md:w-[19.88rem] max-md:mt-[0rem] object-cover"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677506607/Frame_32947_o5vgbg.svg"
                alt=""
              />
            </div>
          </Slider>
        </div>
      )}
      {selected === "3" && (
        <div className="w-[62.1875rem] container max-md:w-full m-auto mt-[0.618125rem]">
          <Slider {...settings}>
            <div className="w-[62.1875rem] h-[41.875rem] bg-[#ffffff] flex items-center flex-col justify-center max-md:h-[19.18rem] max-md:w-[19.88rem]">
              <img
                className="m-auto w-[57.6625rem] h-[38.875rem] rounded-2xl mt-[1.5rem] max-md:h-[19.18rem] max-md:w-[19.88rem] max-md:mt-[0rem] object-cover"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677753947/unsplash_IyaNci0CyRk_1_mbp06u.png"
                alt=""
              />
            </div>
            <div className="w-[62.1875rem] h-[41.875rem] bg-[#ffffff] flex items-center flex-col justify-center max-md:h-[19.18rem] max-md:w-[19.88rem]">
              <img
                className="m-auto w-[57.6625rem] h-[38.875rem] rounded-2xl mt-[1.5rem] max-md:h-[19.18rem] max-md:w-[19.88rem] max-md:mt-[0rem] object-cover"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677506577/Indoor_Game_02-1_1_e1hbzs.svg"
                alt=""
              />
            </div>
            <div className="w-[62.1875rem] h-[41.875rem] bg-[#ffffff] flex items-center flex-col justify-center max-md:h-[19.18rem] max-md:w-[19.88rem]">
              <img
                className="m-auto w-[57.6625rem] h-[38.875rem] rounded-2xl mt-[1.5rem] max-md:h-[19.18rem] max-md:w-[19.88rem] max-md:mt-[0rem] object-cover"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677506607/Frame_32947_o5vgbg.svg"
                alt=""
              />
            </div>
          </Slider>
        </div>
      )}
      {selected === "4" && (
        <div className="w-[62.1875rem] container max-md:w-full m-auto mt-[0.618125rem]">
          <Slider {...settings}>
            <div className="w-[62.1875rem] h-[41.875rem] bg-[#ffffff] flex items-center flex-col justify-center max-md:h-[19.18rem] max-md:w-[19.88rem]">
              <img
                className="m-auto w-[57.6625rem] h-[38.875rem] rounded-2xl mt-[1.5rem] max-md:h-[19.18rem] max-md:w-[19.88rem] max-md:mt-[0rem] object-cover"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1678100879/Balewadi-Google-Maps_1_stb3si.svg"
                alt=""
              />
            </div>
            <div className="w-[62.1875rem] h-[41.875rem] bg-[#ffffff] flex items-center flex-col justify-center max-md:h-[19.18rem] max-md:w-[19.88rem]">
              <img
                className="m-auto w-[57.6625rem] h-[38.875rem] rounded-2xl mt-[1.5rem] max-md:h-[19.18rem] max-md:w-[19.88rem] max-md:mt-[0rem] object-cover"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677506577/Indoor_Game_02-1_1_e1hbzs.svg"
                alt=""
              />
            </div>
            <div className="w-[62.1875rem] h-[41.875rem] bg-[#ffffff] flex items-center flex-col justify-center max-md:h-[19.18rem] max-md:w-[19.88rem]">
              <img
                className="m-auto w-[57.6625rem] h-[38.875rem] rounded-2xl mt-[1.5rem] max-md:h-[19.18rem] max-md:w-[19.88rem] max-md:mt-[0rem] object-cover"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677506607/Frame_32947_o5vgbg.svg"
                alt=""
              />
            </div>
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Slick;
