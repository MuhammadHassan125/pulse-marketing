import { Reveal } from "../../utils/Reveal";
import Image from "next/image";
import React from "react";

const UpperTextComponent = () => {
  return (
    <>
      {/* <main>
        <div className="w-full px-6 lg:px-0 lg:flex flex-row justify-between items-center py-20 md:pt-0">
          <div className="w-[90%] lg:w-[30%] justify-center items-center">
            <Reveal>
            <h1 className="poppins-medium text-4xl">
            </h1>
            </Reveal>
          </div>

          <div className="w-[90%] pt-6 lg:pt-0 lg:w-[35%] poppins-light font-light">
            <Reveal>
            <p>
              Elevate your brands success with Pulse - Your trusted partner for
              cutting-edge digital solutions and unparalleled customer care in
              the USA.{" "}
            </p>
            </Reveal>
          </div>
        </div>
      </main> */}

<main>
          <div className="lg:w-[85%] md:flex flex-row justify-between items-center pb-10 md:pb-12 m-auto">
          <div className=" w-[80%] md:w-[50%]">
            <Reveal>
              <h1 className="poppins-medium text-5xl ct-heading">
              We are a full-service <br /> digital agency.
              </h1>
            </Reveal>
          </div>
          <div className="w-[90%] mt-6 md:mt-0 md:w-[50%] poppins-light font-light">
            <Reveal>
              <p className="md:w-[60%] float-right">
              Elevate your brands success with Pulse - Your trusted partner for
              cutting-edge digital solutions and unparalleled customer care in
              the USA.{" "}
              </p>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
};

const Cards = () => {
  return (
    <>
      <main className="w-full lg:w-[85%] m-auto pt-16 card-section">
        <div className="w-full  m-auto px-10">
          <UpperTextComponent />

          <div className="lg:w-[85%] w-full flex flex-wrap justify-between items-center px-8 lg:px-0 mx-auto">
            {/* card -one  */}
            <div className="w-[48%] lg:w-[16%] py-12 rounded-2xl relative bg-my-blue-gradient rotate-[-8deg] z-10 hover:scale-110 hover:rotate-0 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300">
              <div className="flex flex-col gap-4 justify-center translate-x-6">
                <Image alt="img-alt" src={"/img (1).png"} width={40} height={40} />
                <h3 className="poppins-medium sm:text-[2xl] md:text-[3xl]">
                  Web Design <br />
                  Development
                </h3>
              </div>

              <h2 className="absolute top-0 right-0 text-8xl poppins-bold opacity-[50%] px-[15px] pt-3">
                1
              </h2>
            </div>

            <div className="w-[48%] lg:w-[16%] translate-y-3 py-12 rounded-2xl relative bg-my-green-gradient rotate-[5deg] hover:scale-110 hover:rotate-0 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300">
              <div className="flex flex-col gap-4 justify-center translate-x-6">
                <Image alt="img-alt" src={"/img (6).png"} width={40} height={40} />
                <h3 className="poppins-medium text-[2xl] md:text-[3xl]">
                  Search Engine <br />
                  Optimization
                </h3>
              </div>
              <h2 className="absolute top-0 right-0 text-8xl poppins-bold opacity-[50%] px-[15px] pt-3">
                2
              </h2>
            </div>

            <div className="w-[48%] lg:w-[16%]  -translate-y-4 py-12 rounded-2xl relative bg-my-purple-gradient rotate-[-6deg] hover:scale-110 hover:rotate-0 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300">
              <div className="flex flex-col gap-4 justify-center translate-x-6">
                <Image alt="img-alt" src={"/img (5).png"} width={40} height={40} />
                <h3 className="poppins-medium text-[2xl] md:text-[3xl]">
                  Photography & <br />
                  Videography
                </h3>
              </div>
              <h2 className="absolute top-0 right-0 text-8xl poppins-bold opacity-[50%] px-[15px] pt-3">
                3
              </h2>
            </div>

            <div className="w-[48%] lg:w-[16%] translate-y-3 z-10 py-12 rounded-2xl relative bg-my-blue-gradient rotate-[8deg] hover:scale-110 hover:rotate-0 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300">
              <div className="flex flex-col gap-4 justify-center translate-x-6">
                <Image alt="img-alt" src={"/img (4).png"} width={40} height={40} />
                <h3 className="poppins-medium text-[xl] w-[50%] md:w-full">
                  Online Reputation <br />
                  Management
                </h3>
              </div>
              <h2 className="absolute top-0 right-0 text-8xl poppins-bold opacity-[50%] px-[15px] pt-3">
                4
              </h2>
            </div>

            <div className="w-[48%] lg:w-[16%]  -translate-y-3 py-12 rounded-2xl relative bg-my-green-gradient rotate-[-6deg] hover:scale-110 hover:rotate-0 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300">
              <div className="flex flex-col gap-4 justify-center translate-x-6">
                <Image alt="img-alt" src={"/img (3).png"} width={40} height={40} />
                <h3 className="poppins-medium text-[2xl] md:text-[3xl]">
                  Branding <br />
                  Packages
                </h3>
              </div>
              <h2 className="absolute top-0 right-0 text-8xl poppins-bold opacity-[50%] px-[15px] pt-3">
                5
              </h2>
            </div>

            <div className="w-[48%] lg:w-[16%] translate-y-4 py-12 rounded-2xl relative bg-my-purple-gradient rotate-[8deg] hover:scale-110 hover:rotate-0 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300">
              <div className="flex flex-col gap-4 justify-center translate-x-6">
                <Image alt="img-alt" src={"/img (2).png"} width={40} height={40} />
                <h3 className="poppins-medium text-[2xl] md:text-[3xl]">
                  Mobile App <br />
                  Development
                </h3>
              </div>
              <h2 className="absolute top-0 right-0 text-8xl poppins-bold opacity-[50%] px-[15px] pt-3">
                6
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cards;
