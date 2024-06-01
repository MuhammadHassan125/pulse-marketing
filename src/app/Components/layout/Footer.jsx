import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Slider from "react-slick";

const Footer = () => {
  const settings = {
    dots: false, 
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <main className="w-full pb-12 ">
        <div className="w-full px-8 lg:px-0 lg:w-[1200px] mx-auto md:flex justify-between items-center">
          <div>
            <Image src={"/logo.png"} width={150} height={150} alt="Logo" />
          </div>

          <div>
            <div className="md:flex mt-3 md:mt-0">
              <div className="flex items-center md:border-r-2 pr-6 mr-6">
                <FaPhoneAlt />
                <h3 className="poppins-light ml-3 text-md">+1 844 330 3141</h3>
              </div>
              <div className="flex items-center">
                <MdEmail className="text-xl" />
                <h3 className="poppins-light ml-3 text-md">hi@pulsemarketing.io</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-4 lg:py-2 overflow-hidden">
          <Slider {...settings}>
            <div className="w-full">
              <h1 className="poppins-medium text-[120px] w-full text-center whitespace-nowrap overflow-hidden text-transparent border-text">
                Innovate. Create. Succeed: Your Journey Begins Here!
              </h1>
            </div>
            <div className="w-full">
              <h1 className="poppins-medium text-[120px] w-full text-center whitespace-nowrap overflow-hidden text-transparent border-text">
                Drive Your Business to New Heights!
              </h1>
            </div>
            <div className="w-full">
              <h1 className="poppins-medium text-[120px] w-full text-center whitespace-nowrap overflow-hidden text-transparent border-text">
                Join the Revolution in Marketing!
              </h1>
            </div>
          </Slider>
        </div>

        <div className="w-full px-8 lg:px-0 lg:w-[1200px] mx-auto md:flex justify-between items-center">
          <div>
            <h3 className="poppins-light text-[18px] md:text-[14px]">© 2024 Pulse Marketing Inc. All rights reserved.</h3>
          </div>
          <div className="sm:flex md:flex mt-3 md:mt-0">
            <div className="flex items-center md:border-r-2 pr-6 mr-6">
              <h3 className="poppins-light text-[18px] md:text-[14px]">Privacy Policy</h3>
            </div>
            <div className="flex items-center">
              <h3 className="poppins-light text-[18px] md:text-[14px]">Terms & Conditions</h3>
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        .border-text {
          -webkit-text-stroke: 2px #62c9d6; 
          text-stroke: 2px black; 
        }
      `}</style>
    </>
  );
};

export default Footer;