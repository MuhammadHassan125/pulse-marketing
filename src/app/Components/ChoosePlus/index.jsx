import React from "react";
import Image from "next/image";
import { Reveal } from "../../utils/Reveal";
import Slider from "react-slick";
import BrandsSlider from "./BrandsSlider";

export const ChooseCardsSlider = () => {
  const MySliderArr = [
    { image: "/17.png" },
    { image: "/1 (1).png" },
    // { image: "/13.png" },
    { image: "/19.png" },
    { image: "/1 (11).png" },
    { image: "/11.png" },
    { image: "/1 (6).png" },
    { image: "/10.png" },
    { image: "/15.png" },
    { image: "/1 (12).png" },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="w-full overflow-hidden lg:mt-15 ">
      <Slider {...settings}>
        {MySliderArr.map((item, index) => (
          <div key={index} className="flex justify-between">
            <div className="flex items-center justify-center w-[93%] md:w-[95%] h-[10vh] lg:h-[20vh] py-8 px-6 bg-custom-gradient rounded-md">
              <Image
                src={item.image}
                alt={`Slide ${index + 1}`}
                width={170}
                height={170}
                className="filter-invert"
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

      <main className="w-full lg:w-[75%] mx-auto px-8 ct-padding">
          <div className="md:flex flex-row justify-between items-center pb-10 md:pb-12">
          <div className=" w-[80%] md:w-[50%]">
            <Reveal>
              <h1 className="poppins-medium text-5xl ct-heading">
              Why Leaders <br /> Choose Pulse
              </h1>
            </Reveal>
          </div>
          <div className="w-[90%] mt-6 md:mt-0 md:w-[35%] poppins-light font-light">
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

      <ChooseCardsSlider />

      {/* <BrandsSlider /> */}
      <hr className="my-16" />

      <main className="w-full lg:w-[77%] mx-auto px-4  md:px-0">
        <div className="md:flex flex-row justify-between items-center pb-10 md:pb-12">
          <div className=" w-[80%] md:w-[50%]">
            <Reveal>
              <h1 className="poppins-medium text-5xl ct-heading">
                Let's Build <br /> Something Great!
              </h1>
            </Reveal>
          </div>
          <div className="w-[90%] mt-6 md:mt-0 md:w-[35%] poppins-light  font-light">
            <Reveal>
              <p>
                Join us on a journey to create something truly extraordinary.
                Together, we&apos;ll turn your dreams into reality.
              </p>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}

export default ChoosePlus;