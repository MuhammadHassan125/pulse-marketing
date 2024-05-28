"use client";
import React, { useState } from "react";
import Header from "../layout/Header";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { Reveal } from "../../utils/Reveal";

export const HeroLeftContent = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <main className="w-full mt-16 px-5">
        {/* upper logos container*/}
        <div className=" flex ">
          <Reveal>
            <Image
              alt="image"
              className="mr-8"
              src={"/bb-logo.png"}
              width={125}
              height={125}
            />
          </Reveal>

          <Reveal>
            <Image
              alt="image"
              src={"/google-logo.png"}
              width={125}
              height={125}
            />
          </Reveal>
        </div>

        {/* Content Heading  */}
        <div>
          <Reveal>
            <h1 className="text-[40px] md:text-[55px]  mt-8 poppins-medium leading-[49px] md:leading-[70px]">
              Crafting Digital Excellence Web <br /> App Branding
            </h1>
          </Reveal>

          <div className="w-[90%] border-l-2 my-4 pl-3">
            <Reveal>
              <p className="poppins-light">
                Boost your brand with our expert websites, apps, and branding
                solutions. Bring your vision to life with Pulse.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Contact Us button  */}
        <Reveal>
          <button className="bg-white hover:bg-my-blue-gradient hover:text-white hover:transition-all ease-in-out poppins-regular text-black py-2 px-4 mt-8 rounded-3xl flex justify-between items-center border-none outline-none">
            Contact Us
            <div className="bg-[#6EE3D7] p-[2px] ml-2 h-full rounded-full">
              <MdArrowForward />
            </div>
          </button>
        </Reveal>

        <div className="md:hidden">
          {showForm && (
            <div className="bg-white rounded-lg overflow-x-hidden overflow-y-scroll h-[60%] w-[80%] -translate-y-[65px] absolute bottom-0 right-0">
              <div className="w-full inset-0 flex justify-center items-center">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/g60hp5MgZ6QhOlBTdRFX"
                  style={{
                    width: "80%",
                    height: "80%",
                    border: "none",
                    borderRadius: "3px",
                  }}
                  title="BookingFormWithWebsite"
                ></iframe>
              </div>
            </div>
          )}

          <div
            onClick={toggleForm}
            className="absolute bottom-0 right-0 w-[30%] -translate-y-16"
          >
            <div className="bg-[#50A2D4] px-6 rounded-tl-[40px] py-3">
              <h3 className="poppins-light text-white text-lg">Get in touch</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export const HeroRightContent = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <div className=" h-[88%]">
        <Image
          alt="image"
          src={"/Group 285.png"}
          width={1000}
          height={1000}
        />

        {showForm && (
          <div className="bg-white rounded-lg overflow-x-hidden overflow-y-scroll h-[60%] w-[30%] -translate-y-20 absolute bottom-0 right-0">
            <div className="w-full inset-0 flex justify-center items-center">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/g60hp5MgZ6QhOlBTdRFX"
                style={{
                  width: "80%",
                  height: "80%",
                  border: "none",
                  borderRadius: "3px",
                }}
                title="BookingFormWithWebsite"
              ></iframe>
            </div>
          </div>
        )}

        <div
          onClick={toggleForm}
          className="absolute bottom-0 right-0 w-[30%] -translate-y-16"
        >
          <div className="bg-[#50A2D4] px-6 rounded-tl-[40px] py-3">
            <h3 className="poppins-light text-white text-lg">Get in touch</h3>
          </div>
        </div>
      </div>
    </>
  );
};

const HeroSection = () => {
  return (
    <>
      <main className="w-full lg:w-[1200px] m-auto relative">
        <div className="flex flex-row relative w-[100%] justify-between ">
          {/* my header component  */}

          <Header />

          <div className="my-20 lg:my-0 flex flex-row  items-center w-[100%] lg:w-[50%]">
            {/* social icon component  */}
            <div className="w-[8%] flex flex-col gap-1 justify-center -translate-x-10 left-0">
              <div className="hover:bg-blue-400  hover:duration-100 hover:ease-in-out hover:cursor-pointer rounded-full flex items-center justify-center py-2 px-0">
                <Image
                  src={"/Facebook.png"}
                  alt="facebook"
                  width={8}
                  height={8}
                />
              </div>

              <div className="hover:bg-blue-400 hover:duration-100  hover:ease-in-out hover:cursor-pointer  rounded-full flex items-center justify-center py-[10px]">
                <Image
                  src={"/Subtract.png"}
                  alt="subtract"
                  width={12}
                  height={12}
                />
              </div>

              <div className="hover:bg-blue-400 hover:duration-100 hover:ease-in-out hover:cursor-pointer rounded-full flex items-center justify-center py-[10px]">
                <Image
                  alt="image"
                  src={"/Vector (1).png"}
                  width={12}
                  height={12}
                />
              </div>

              <div className="hover:bg-blue-400  hover:duration-100 hover:ease-in-out hover:cursor-pointer rounded-full flex items-center justify-center py-[10px]">
                <Image
                  src={"/Linkedin.png"}
                  alt="linkedin"
                  width={12}
                  height={12}
                />
              </div>

              <div className="hover:bg-blue-400  hover:duration-100 hover:ease-in-out hover:cursor-pointer rounded-full flex items-center justify-center py-3">
                <Image
                  src={"/Youtube.png"}
                  alt="youtube"
                  width={12}
                  height={12}
                />
              </div>
            </div>

            <div>
              <HeroLeftContent />
            </div>
          </div>

          <div className="w-[50%] overflow-y-hidden hidden lg:block">
            <HeroRightContent />
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
