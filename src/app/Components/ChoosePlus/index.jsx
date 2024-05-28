"use client";
import Image from "next/image";
import React from "react";
import { Reveal } from "../../utils/Reveal";
import Slider from "react-slick";
import BrandsSlider from "./BrandsSlider";
export const ChooseCardsSlider = () => {
  const MySliderArr = [
    { image: "/Mask group (9).png" },
    { image: "/Mask group (10).png" },
    { image: "/Mask group (11).png" },
    { image: "/Vector.png" },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="w-full overflow-hidden lg:mt-24 ">
      <Slider {...settings}>
        {MySliderArr.map((item, index) => (
          <div className="flex justify-between">
          <div
            key={index}
            className="flex items-center justify-center w-[93%] md:w-[80%] h-[10vh] lg:h-[20vh] py-8 px-6 bg-custom-gradient rounded-md"
          >
            <Image
              src={item.image}
              alt={`Slide ${index + 1}`}
              width={170}
              height={170}
            />
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function ChoosePlus() {
  return (
    <>
          <ChooseCardsSlider />

      <main className="w-full lg:w-[1200px] mx-auto px-8">
        <div className="lg:flex flex-row justify-between items-center py-20">
          <div className="w-[80%] lg:w-[30%]">
            <Reveal>
              <h1 className="poppins-medium text-4xl">
                Why Leaders <br /> Choose Pulse
              </h1>
            </Reveal>
          </div>
          <div className=" w-[90%] mt-6 lg:mt-0 lg:w-[35%] poppins-light font-light">
            <Reveal>
              <p>
                Pulse empowers business leaders to achieve their objectives more
                swiftly and effectively. Our primary focus is to enhance client
                revenue.
              </p>
            </Reveal>
          </div>
        </div>
      </main>

      <BrandsSlider/>
      <hr className="my-16" />

      <main className="w-full lg:w-[1200px] mx-auto px-4">
        <div className="md:flex flex-row justify-between items-center pb-10 md:py-20">
          <div className=" w-[80%] md:w-[30%]">
            <Reveal>
              <h1 className="poppins-medium text-4xl">
                Let's Build <br /> Something Great!
              </h1>
            </Reveal>
          </div>
          <div className="w-[90%] mt-6 md:mt-0 md:w-[35%] poppins-light font-light">
            <Reveal>
              <p>
                Join us on a journey to create something truly extraordinary.
                Together, we'll turn your dreams into reality.
              </p>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}

export default ChoosePlus;
