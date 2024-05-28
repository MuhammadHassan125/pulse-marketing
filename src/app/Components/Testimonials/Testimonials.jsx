"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Reveal } from "../../utils/Reveal";

const UpperTextTestimonials = () => {
  return (
    <>
      <main>
        <div className="w-full block lg:flex flex-row justify-between items-center md:py-20 pb-10 px-8 lg:px-0">
          <div className="w-[90%] lg:w-[30%] justify-center items-center">
            <Reveal>
            <h1 className="poppins-medium text-4xl">Our Happy Clients</h1>
            </Reveal>
          </div>

          <div className="w-[90%] lg:w-[35%] poppins-light font-light pt-8 md:pt-0">
            <Reveal>
            <p>
              Our clients are our biggest advocates. See what they have to say
              about working with us.
            </p>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      company: "Doe Inc.",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      company: "Doe Inc.",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "Peter Jones",
      company: "Jones & Co.",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/testimonial-3.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };

  return (
    <>
      <main className="w-full lg:w-[1200px] m-auto py-20">
        <UpperTextTestimonials />
        <div className="slider-container w-[80%] py-20 m-auto bg-[#050023] shadow-lg border-[#110351]  rounded-3xl ">
          <Slider {...settings}>
            {/* testimonial one */}
            <div className="text-center">
              {/* <h3 className=''>1</h3> */}
              <div className="flex justify-center">
                <Image src={"/tetimonial.jpeg.webp"} alt="asdsad" width={50} height={50} />
              </div>

              <h2 className="poppins-medium pt-4 text-[18px]">Stuart Holmes</h2>
              <span className="text-[#50A2D4] poppins-light text-[13px]">
                CEO, Green Collar Brigade
              </span>
              <div className="flex justify-center py-3">
                <Image src={"/Group 1000002716.png"} alt="asdsad" width={100} height={100} />
              </div>

              <div className="text-center poppins-light text-[13px] w-[80%] m-auto">
                <p>
                  Pulse, thank you for your outstanding work. My vision is now a
                  tangible reality. Five stars are an understatement for the
                  exceptional quality and service you provide. Truly amazing and
                  highly recommended.
                </p>
              </div>
            </div>

            {/* testimonial 2 */}
            <div className="text-center">
              <div className="flex justify-center">
                <Image src={"/tetimonial.jpeg.webp"} alt="asdsad" width={50} height={50} />
              </div>

              <h2 className="poppins-medium pt-4 text-[18px]">
                Joshua Mclennon
              </h2>
              <span className="text-[#50A2D4] poppins-light text-[13px]">
                Owner, Drear Cleaning Services
              </span>
              <div className="flex justify-center py-3">
                <Image src={"/Group 1000002716.png"} alt="asdsad" width={100} height={100} />
              </div>

              <div className="text-center poppins-light text-[13px] w-[80%] m-auto">
                <p>
                  Very good agency to work with, Pulse got my logo to me very
                  quickly which is what I needed and delivered a good product.
                  Highly recommend them. Quick, efficient, and very
                  professional. Truly a pleasure to work with Pulse. Excellent
                  job!
                </p>
              </div>
            </div>

            {/* testimonial 3  */}
            <div className="text-center">
              <div className="flex justify-center">
                <Image src={"/tetimonial.jpeg.webp"} alt="asdsad" width={50} height={50} />
              </div>

              <h2 className="poppins-medium pt-4 text-[18px]">
                Robert Jenkins
              </h2>
              <span className="text-[#50A2D4] poppins-light text-[13px]">
                CEO, Asap security
              </span>
              <div className="flex justify-center py-3">
                <Image src={"/Group 1000002716.png"} alt="asdsad" width={100} height={100} />
              </div>

              <div className="text-center poppins-light text-[13px] w-[80%] m-auto">
                <p>
                  Pulse was one of the best I have worked with on Upwork in 10
                  years. Very knowledgeable and has great communication. They
                  are also very reliable. Outstanding performance and highly
                  recommended. Consistently delivers high quality work.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </main>
      <hr/>
    </>
  );
};

export default Testimonial;
