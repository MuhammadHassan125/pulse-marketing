import React from "react";
import Image from "next/image";
const BrandsSlider = () => {
  const brandImagesArr = [
    { img: "/01-1.png" },
    { img: "/2.webp" },
    { img: "/3.webp" },
    { img: "/4.webp" },
    { img: "/5.webp" },
    { img: "/6.webp" },
    { img: "/7.webp" },
    { img: "/8.webp" },
    { img: "/9.webp" },
    { img: "/10.png" },
  ];

  const SecondSliderArr = [
    { img: "/10.png" },
    { img: "/11.png" },
    { img: "/12.webp" },
    { img: "/13.png" },
    { img: "/14.webp" },
    { img: "/15.png" },
    { img: "/16.webp" },
    { img: "/17.png" },
    { img: "/18.png" },
    { img: "/19.png" },
    { img: "/20.webp" },
  ];

  return (
    <main className="w-full lg:w-[1200px] px-4 m-auto overflow-hidden">
      <div className="md:w-[100%] flex flex-wrap justify-between items-center">
        {brandImagesArr.map((item, index) => (
          <div
            key={index}
            className="bg-[#f5f5f5] transition-all duration-500 hover:rounded-none ease-in-out
             hover:scale-110 w-[45%] md:w-[30%] lg:w-[18%] mx-2 my-2 flex items-center justify-center h-[220px]
              md:h-[270px] rounded-lg p-4"
          >
            <Image
              src={item.img}
              width={170}
              height={170}
              placeholder="blur"
              blurDataURL={item.img}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default BrandsSlider;
