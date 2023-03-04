import React from "react";

const Footer = () => {
  return (
    <div className="mt-[3.25rem]">
      <div className="w-full flex items-center max-md:flex-col-reverse">
        <div className="w-3/6 bg-[#A58850]  h-[32.1875rem] max-md:w-full max-md:h-[30.6875rem]">
          <div className="ml-[8.75rem] max-xl:ml-[3.394375rem]">
            <h1 className="font-semibold text-[2rem] font-poppins text-[#ffffff] mt-[3.04rem] max-md:text-[1.125rem] max-md:w-[8.25rem]">
              LETS CONNECT
            </h1>
            <div className="flex gap-[2.265625rem] mt-[2.1825rem]">
              <div className="flex items-center gap-[0.44125rem]">
                <img
                  src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677594873/Group_17_dmj7a0.svg"
                  alt=""
                />
                <p className="font-poppins text-[#ffffff] text-[1rem] font-medium">
                  +91 9191919191
                </p>
              </div>
              <div className="flex items-center gap-[0.44125rem]">
                <img
                  src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677594845/Group_14_efpred.svg"
                  alt=""
                />
                <p className="font-poppins text-[#ffffff] text-[0.625rem] font-medium">
                  Abc1241@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center mt-[0.875rem] gap-[0.44125rem]">
              <img
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677594895/Group_16_x7a9hw.svg"
                alt=""
              />
              <div>
                <p className="font-poppins text-[#ffffff] text-[0.875rem] font-medium">
                  Site Address
                </p>
                <p className="font-poppins text-[#ffffff] text-[0.625rem] font-medium">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center mt-[0.875rem] gap-[0.44125rem]">
              <img
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677594928/Group_18_lmrkn4.svg"
                alt=""
              />
              <div>
                <p className="font-poppins text-[#ffffff] text-[0.875rem] font-medium">
                  Corporate Address
                </p>
                <p className="font-poppins text-[#ffffff] text-[0.625rem] font-medium">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center mt-[0.875rem] gap-[0.44125rem]">
              <img
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677463744/Group_18_lpoz7a.png"
                alt=""
              />
              <div>
                <p className="font-poppins text-[#ffffff] text-[0.625rem] font-medium">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                </p>
              </div>
            </div>
          </div>
          <img
            className="bg-[#ffffff] h-[5rem] w-[13.6875rem] ml-[8.75rem] mt-[0.875rem] max-md:m-auto max-xl:ml-[3.394375rem]"
            src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677235318/logo-11_1_sfx0qe.svg"
            alt=""
          />
          <div className="h-[1.5rem] w-[9.25rem] flex justify-center gap-1 items-center ml-[8.75rem] mt-[0.875rem] max-md:m-auto max-md:mt-[1.415rem] max-xl:ml-[3.394375rem]">
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677756436/entypo-social_youtube-with-circle_yoppes.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677464145/entypo-social_linkedin-with-circle_r7ugfl.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677464152/entypo-social_twitter-with-circle_lxwvcv.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677464157/ic_baseline-facebook_kfi0vw.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677464163/ri_instagram-fill_zdjqo9.svg"
              alt=""
            />
          </div>
          <div
            style={{ borderBottom: "1px solid #FFFFFF80" }}
            className="w-[30.7625rem] ml-[8.75rem] mt-[1.099375rem] max-md:hidden"
          ></div>
          <p className="overflow-scroll font-poppins text-[#ffffff] ml-[8.75rem] mt-[1.138125rem] mb-[3.1275rem] max-md:w-[18.27rem] max-md:text-center max-md:m-auto max-xl:ml-[3.394375rem]">
            <span className="font-bold font-poppins text-[#ffffff]">
              Disclaimer & Privacy
            </span>{" "}
            - 2022 All Rights Reserved 27 GRAND RESIDENCES
          </p>
        </div>
        <div className="w-3/6 max-md:w-full">
          <img
            className=" object-cover w-full  h-[32.1875rem] max-md:h-[9.50625rem]"
            src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677462849/image_2_eqfihr.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
