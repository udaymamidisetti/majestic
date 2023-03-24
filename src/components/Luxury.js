import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";
import { Link } from "react-router-dom";
import axios from "axios";
import md5 from "md5";
const Luxury = () => {
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
  const slides = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/drjnmxyd5/image/upload/v1677750121/WhatsApp_Image_2023-03-01_at_4.05_4_rujwke.png",
      title: "Slide 1",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/drjnmxyd5/image/upload/v1677750121/WhatsApp_Image_2023-03-01_at_4.05_4_rujwke.png",
      title: "Slide 2",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/drjnmxyd5/image/upload/v1677750121/WhatsApp_Image_2023-03-01_at_4.05_4_rujwke.png",
      title: "Slide 3",
    },
  ];
  const renderSlides = () => {
    return slides.map((slide) => {
      return (
        <div
          className="h-[64.3rem]"
          key={slide.id}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <h3>{slide.title}</h3>
        </div>
      );
    });
  };
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="max-md:hidden">
        <Slider {...settings}>
          <div className="bg-cover h-[64.3rem] flex flex-col items-center justify-center w-screen bg-center max-md:h-[40rem]">
            <img
              className="h-[64.3rem] w-screen absolute max-md:h-[40rem]"
              src={a1}
              alt=""
            />
            <div
              className="w-[10rem] rounded-md relative left-0 m-auto top-[85%] max-md:left-0 max-md:m-auto"
              style={{ backgroundColor: "#000000" }}
            >
              <div
                className="w-[10rem] flex items-center justify-center h-[3.1875rem] rounded-md"
                style={{ backgroundColor: "#000000" }}
              >
                <img
                  className="h-[1.9375rem]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png?20220228223904"
                  alt=""
                />
                <p
                  className="font-poppins font-bold"
                  style={{ color: "white" }}
                >
                  WhatsApp
                </p>
              </div>
            </div>
          </div>
          <div className="bg-cover h-[64.3rem] flex flex-col items-center justify-center w-screen bg-center max-md:h-[40rem]">
            <img
              className="h-[64.3rem] w-screen absolute max-md:h-[40rem]"
              src={a2}
              alt=""
            />
            <div
              className="w-[10rem] rounded-md relative left-0 m-auto top-[85%] max-md:left-0 max-md:m-auto"
              style={{ backgroundColor: "#000000" }}
            >
              <div
                className="w-[10rem] flex items-center justify-center h-[3.1875rem] rounded-md"
                style={{ backgroundColor: "#000000" }}
              >
                <img
                  className="h-[1.9375rem]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png?20220228223904"
                  alt=""
                />
                <p
                  className="font-poppins font-bold"
                  style={{ color: "white" }}
                >
                  WhatsApp
                </p>
              </div>
            </div>
          </div>
          <div className="bg-cover h-[64.3rem] flex flex-col items-center justify-center w-screen bg-center max-md:h-[40rem]">
            <img
              className="h-[64.3rem] w-screen absolute max-md:h-[40rem]"
              src={a3}
              alt=""
            />
            <div
              className="w-[10rem] rounded-md relative left-0 m-auto top-[85%] max-md:left-0 max-md:m-auto"
              style={{ backgroundColor: "#000000" }}
            >
              <div
                className="w-[10rem] flex items-center justify-center h-[3.1875rem] rounded-md"
                style={{ backgroundColor: "#000000" }}
              >
                <img
                  className="h-[1.9375rem]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png?20220228223904"
                  alt=""
                />
                <p
                  className="font-poppins font-bold"
                  style={{ color: "white" }}
                >
                  WhatsApp
                </p>
              </div>
            </div>
          </div>
          <div className="bg-cover h-[64.3rem] flex flex-col items-center justify-center w-screen bg-center max-md:h-[40rem]">
            <img
              className="h-[64.3rem] w-screen absolute max-md:h-[40rem]"
              src={a4}
              alt=""
            />
            <div
              className="w-[10rem] rounded-md relative left-0 m-auto top-[85%] max-md:left-0 max-md:m-auto"
              style={{ backgroundColor: "#000000" }}
            >
              <div
                className="w-[10rem] flex items-center justify-center h-[3.1875rem] rounded-md"
                style={{ backgroundColor: "#000000" }}
              >
                <img
                  className="h-[1.9375rem]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png?20220228223904"
                  alt=""
                />
                <p
                  className="font-poppins font-bold"
                  style={{ color: "white" }}
                >
                  WhatsApp
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="md:hidden">
        <Slider {...settings}>
          <div className="bg-cover h-[64.3rem] flex flex-col items-center justify-center w-screen bg-center max-md:h-[40rem]">
            <img
              className="h-[64.3rem] w-screen absolute max-md:h-[40rem]"
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1679299982/IMG-20230301-WA0002_hn07gx.jpg"
              alt=""
            />
            <div
              className="w-[10rem] rounded-md relative left-0 m-auto top-[85%] max-md:left-0 max-md:m-auto"
              style={{ backgroundColor: "#000000" }}
            >
              <div
                className="w-[10rem] flex items-center justify-center h-[3.1875rem] rounded-md"
                style={{ backgroundColor: "#000000" }}
              >
                <img
                  className="h-[1.9375rem]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png?20220228223904"
                  alt=""
                />
                <p
                  className="font-poppins font-bold"
                  style={{ color: "white" }}
                >
                  WhatsApp
                </p>
              </div>
            </div>
          </div>
          <div className="bg-cover h-[64.3rem] flex flex-col items-center justify-center w-screen bg-center max-md:h-[40rem]">
            <img
              className="h-[64.3rem] w-screen absolute max-md:h-[40rem]"
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1679299975/IMG-20230301-WA0022_ylnqpb.jpg"
              alt=""
            />
            <div
              className="w-[10rem] rounded-md relative left-0 m-auto top-[85%] max-md:left-0 max-md:m-auto"
              style={{ backgroundColor: "#000000" }}
            >
              <div
                className="w-[10rem] flex items-center justify-center h-[3.1875rem] rounded-md"
                style={{ backgroundColor: "#000000" }}
              >
                <img
                  className="h-[1.9375rem]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png?20220228223904"
                  alt=""
                />
                <p
                  className="font-poppins font-bold"
                  style={{ color: "white" }}
                >
                  WhatsApp
                </p>
              </div>
            </div>
          </div>
          <div className="bg-cover h-[64.3rem] flex flex-col items-center justify-center w-screen bg-center max-md:h-[40rem]">
            <img
              className="h-[64.3rem] w-screen absolute max-md:h-[40rem]"
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1679299970/IMG-20230301-WA0020_dnbabq.jpg"
              alt=""
            />
            <div
              className="w-[10rem] rounded-md relative left-0 m-auto top-[85%] max-md:left-0 max-md:m-auto"
              style={{ backgroundColor: "#000000" }}
            >
              <div
                className="w-[10rem] flex items-center justify-center h-[3.1875rem] rounded-md"
                style={{ backgroundColor: "#000000" }}
              >
                <img
                  className="h-[1.9375rem]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png?20220228223904"
                  alt=""
                />
                <p
                  className="font-poppins font-bold"
                  style={{ color: "white" }}
                >
                  WhatsApp
                </p>
              </div>
            </div>
          </div>
          <div className="bg-cover h-[64.3rem] flex flex-col items-center justify-center w-screen bg-center max-md:h-[40rem]">
            <img
              className="h-[64.3rem] w-screen absolute max-md:h-[40rem]"
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1679299965/IMG-20230301-WA0021_eswjyb.jpg"
              alt=""
            />
            <div
              className="w-[10rem] rounded-md relative left-0 m-auto top-[85%] max-md:left-0 max-md:m-auto"
              style={{ backgroundColor: "#000000" }}
            >
              <div
                className="w-[10rem] flex items-center justify-center h-[3.1875rem] rounded-md"
                style={{ backgroundColor: "#000000" }}
              >
                <img
                  className="h-[1.9375rem]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png?20220228223904"
                  alt=""
                />
                <p
                  className="font-poppins font-bold"
                  style={{ color: "white" }}
                >
                  WhatsApp
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <form onSubmit={handleSubmit}>

        <div className="container h-[13.9375rem] m-auto max-xl:h-[27.5625rem]">
          <div className="gap-[0.625rem] flex justify-center flex-wrap font-poppins mt-[1.625rem]">
            <h1 className="font-semibold text-[1rem] font-poppins md:hidden">
              Register Here and awail Best Offers
            </h1>
            <input
              className="w-full max-w-[25.0625rem] h-[2.5rem] border-[0.03125rem] border-[#000000] p-[0.625rem] rounded-md"
              placeholder="Name"
            />
            <input
              className=" w-full max-w-[25.0625rem] h-[2.5rem] border-[0.03125rem] border-[#000000] p-[0.625rem] rounded-md"
              placeholder="Mobile Number"
            />
            <input
              className="w-full max-w-[25.0625rem] h-[2.5rem] border-[0.03125rem] border-[#000000] p-[0.625rem] rounded-md"
              placeholder="Email"
            />
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="w-full text-[#000000B2] text-[1rem] mt-1 block max-w-[25.0625rem] h-[2.5rem] rounded-md border border-gray-900 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option className="text-[#000000B2]">
                Apartment Interested In
              </option>
              <option></option>
              <option></option>
            </select>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="w-full text-[#000000B2] text-[1rem] mt-1 block max-w-[25.0625rem] h-[2.5rem] rounded-md border border-gray-900 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option className="text-[#000000B2]">Purpose Of Enquiry</option>
              <option></option>
              <option></option>
            </select>
          </div>
          <button className="w-[19.3125rem] h-[2.5rem] bg-[#A58850] text-[#ffffff] rounded-md m-auto block mt-[2.9375rem]">
            Get Instant Callback
          </button>
        </div>
        <div className="bg-[#ffffff] h-[4rem] w-full flex md:hidden fixed bottom-0 items-center z-50 justify-evenly">
          <Link to="/enquireform">
            <button className="w-[9rem] h-[2.5rem] bg-[#A58850] text-[#ffffff]  block">
              Equire Now
            </button>
          </Link>
          <button className="w-[9rem] h-[2.5rem] bg-[#A58850] text-[#ffffff] block">
            Call Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Luxury;
