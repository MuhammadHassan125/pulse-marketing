"use client";
import React, { useState } from "react";
import Header from "../layout/Header";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { Reveal } from "../../utils/Reveal";
import Link from "next/link";
export const HeroLeftContent = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <main className="w-full mt-16 lg:mt-0 px-5 hre-section">
        {/* upper logos container*/}
        <div className=" flex ">
          <Reveal>
            <Link
              href={
                "https://www.bbb.org/ca/bc/vancouver/profile/digital-marketing/pulse-marketing-inc-0037-2428735/#sealclick"
              }
              target="_blank"
            >
              <Image
                alt="image"
                className="mr-8"
                src={"/accrebited-bussiness-logo.png"}
                width={125}
                height={125}
              />
            </Link>
          </Reveal>

          <Reveal>
            <Link
              href={
                "https://www.google.com/search?sca_esv=09379ecd0b6efd91&sca_upv=1&q=Pulse+Marketing+Inc.&ludocid=8690602816288484550&lsig=AB86z5VS1uhD8C0TEf_4MQU5HsGp&kgs=dd8e1417abb4f44a&shndl=30&shem=lnole,lsde,lsp&source=sh/x/loc/act/m1/1"
              }
              target="_blank"
            >
              <Image
                alt="image"
                src={"/google-review-logo.png"}
                width={125}
                height={125}
              />
            </Link>
          </Reveal>
        </div>

        {/* Content Heading  */}
        <div>
          <Reveal>
            <h1 className="text-[1.5em] md:text-[60px] lg:text-[55px]  mt-8 lg:mt-2 poppins-medium leading-[49px] md:leading-[1.3em]">
              Our Objective
              <br /> Increase Your Revenue.
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
          <button className="bg-white hidden border border-main shadow-lg hover:bg-my-blue-gradient hover:text-white hover:transition-all ease-in-out poppins-regular text-black py-2 px-4 mt-8 rounded-3xl md:flex justify-between items-center border-none outline-none contact-btn">
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
                    width: "100%",
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
            className="absolute bottom-0 right-0 w-[40%] md:w-[30%]-translate-y-16"
          >
            <div className="bg-[#50A2D4] px-6 rounded-tl-[40px] py-3 flex items-center justify-end get-mv-btbn">
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

  const firstImageUrl = "/web banner-01.png";

  return (
    <>
      <div className=" h-[120vh]">
        {/* <div className="flex justify-between w-full">
        <div className="w-[33%] h-[120vh] overflow-hidden relative">
          <div className="absolute inset-0 gallery-image">
            <Image
              alt="image"
              src="/web banner-01.png"
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
          </div>
        </div>
      
          <div className="w-[33%] h-[120vh] overflow-hidden">
            <Image
              alt="image"
              src={"/web banner-02.png"}
              width={1000}
              height={400}
            />
          </div>
          <div className="w-[33%] h-[120vh] overflow-hidden">
            <Image
              alt="image"
              src={"/web banner-03.png"}
              width={1000}
              height={400}
            />
          </div>
        </div>  */}
        <div class="block-33 display--inline-top">
          <div class="gutter relative">
            <div class="gallery-h">
              <div class="gallery-image relative">
                <div class="gallery-image__img relative">
                  <div
                    class="fill-dimensions cover-img first-banner"
                    style={{ backgroundImage: "/web banner-04.jpg" }}
                  ></div>
                </div>
              </div>
              <div class="gallery-image">
                <div class="gallery-image__img relative">
                  <div
                    class="fill-dimensions cover-img first-banner"
                    style={{ backgroundImage: "/web banner-05.jpg" }}
                  ></div>
                </div>
              </div>

              <div class="gallery-image">
                <div class="gallery-image__img relative">
                  <div
                    class="fill-dimensions cover-img first-banner"
                    style={{ backgroundImage: "/web banner-06.jpg" }}
                  ></div>
                </div>
              </div>

              <div class="gallery-image">
                <div class="gallery-image__img relative">
                  <div
                    class="fill-dimensions cover-img first-banner"
                    style={{ backgroundImage: "/web banner-07.jpg" }}
                  ></div>
                </div>
              </div>

              <div class="gallery-image">
                <div class="gallery-image__img relative">
                  <div
                    class="fill-dimensions cover-img first-banner"
                    style={{ backgroundImage: "/web banner-08.jpg" }}
                  ></div>
                </div>
              </div>

              <div class="gallery-image">
                <div class="gallery-image__img relative">
                  <div
                    class="fill-dimensions cover-img first-banner"
                    style={{ backgroundImage: "/web banner-09.jpg" }}
                  ></div>
                </div>
              </div>

              <div class="gallery-image">
                <div class="gallery-image__img relative">
                  <div
                    class="fill-dimensions cover-img first-banner"
                    style={{ backgroundImage: "/web banner-10.jpg" }}
                  ></div>
                </div>
              </div>

              <div class="gallery-image">
                <div class="gallery-image__img relative">
                  <div
                    class="fill-dimensions cover-img first-banner"
                    style={{ backgroundImage: "/web banner-11.jpg" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="block-33 display--inline-top">
          <div class="gutter relative">
            <div class="gallery-h gallery-h--tb">
              <div class="gallery-image relative">
                <div class="gallery-image__img relative">
                  <div
                    class="fill-dimensions cover-img second-banner"
                    style={{ backgroundImage: "/web banner-02.png" }}
                  ></div>
                </div>
              </div>
              <div class="gallery-image">
                <div class="gallery-image__img relative">
                  <div
                    class="fill-dimensions cover-img second-banner"
                    style={{ backgroundImage: "/web banner-02.png" }}
                  ></div>
                </div>
              </div>
              <div class="gallery-image">
                <div class="gallery-image__img relative">
                  <div
                    class="fill-dimensions cover-img second-banner"
                    style={{ backgroundImage: "/web banner-02.png" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="block-33 display--inline-top">
          <div class="gutter relative">
            <div class="gallery-h">
              <div class="gallery-image relative">
                <div class="gallery-image__img relative">
                  <div
                    class="fill-dimensions cover-img third-banner"
                    style={{ backgroundImage: "/web banner-02.png" }}
                  ></div>
                </div>
              </div>
              <div class="gallery-image">
                <div class="gallery-image__img relative">
                  <div
                    class="fill-dimensions cover-img third-banner"
                    style={{ backgroundImage: "/web banner-02.png" }}
                  ></div>
                </div>
              </div>
              <div class="gallery-image">
                <div class="gallery-image__img relative">
                  <div
                    class="fill-dimensions cover-img third-banner"
                    style={{ backgroundImage: "/web banner-02.png" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
          className="absolute bottom-0 right-0 w-[30%] -translate-y-16 get-btn"
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
      <main className="w-full lg:w-full m-auto relative">
        <div className="flex flex-row relative w-[100%] justify-between ">
          {/* my header component  */}

          <Header />

          <div className="my-20 lg:my-0 flex flex-row  items-center w-[100%] lg:w-[50%]">
            {/* social icon component  */}
            <div className="w-[8%] flex flex-col gap-1 justify-center translate-x-0. social-logos">
              <Link
                href={"https://www.facebook.com/pulsemarketing.io/"}
                target="_blank"
              >
                <div
                  className="hover:bg-blue-400  hover:duration-100 hover:ease-in-out
               hover:cursor-pointer rounded-full flex items-center justify-center py-3 px-0"
                >
                  <Image
                    src={"/Facebook.png"}
                    alt="facebook"
                    width={8}
                    height={8}
                  />
                </div>
              </Link>

              <Link
                href={"https://www.instagram.com/pulsemarketing.io/"}
                target="_blank"
              >
                <div
                  className="hover:bg-blue-400 hover:duration-100  hover:ease-in-out hover:cursor-pointer 
               rounded-full flex items-center justify-center py-3"
                >
                  <Image
                    src={"/Subtract.png"}
                    alt="subtract"
                    width={12}
                    height={12}
                  />
                </div>
              </Link>

              <Link
                href={"https://www.linkedin.com/company/pulse-marketing-inc/"}
                target="_blank"
              >
                <div
                  className="hover:bg-blue-400  hover:duration-100 hover:ease-in-out hover:cursor-pointer 
              rounded-full flex items-center justify-center py-3"
                >
                  <Image
                    src={"/Linkedin.png"}
                    alt="linkedin"
                    width={12}
                    height={12}
                  />
                </div>
              </Link>

              <Link
                href={"https://www.youtube.com/@ianslater3586"}
                target="_blank"
              >
                <div
                  className="hover:bg-blue-400  hover:duration-100 hover:ease-in-out hover:cursor-pointer
               rounded-full flex items-center justify-center py-[14px]"
                >
                  <Image
                    src={"/Youtube.png"}
                    alt="youtube"
                    width={12}
                    height={12}
                  />
                </div>
              </Link>
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
