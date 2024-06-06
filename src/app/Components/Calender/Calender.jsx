"use client";
import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Reveal} from '../../utils/Reveal';
const Calender = () => {
    
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <main className="w-full lg:w-[75%] m-auto py-16 md:px-10">
        <div className="lg:flex justify-between items-center">
          {/* left side content  */}
          <div className="w-[100%] px-8 lg:px-0 lg:w-[50%] mb-14 lg:mb-0">
            <Reveal>
            <h2 className="poppins-medium text-[1.5rem] md:text-[3rem]">
              Got a Project Or a <br />
              Partnership In Your Mind?
            </h2>
            </Reveal>

            <div className="poppins-light text-[16px] w-[70%] py-4">
              <Reveal>
              <p>
                Our clients are our biggest advocates. See what they have to say
                about working with us.
              </p>
              </Reveal>
            </div>

            <div className="md:flex ">
              <div className="flex items-center md:justify-between  md:border-r-2 pr-6 mr-6">
                <FaPhoneAlt />
                <Reveal>
                <h3 className="poppins-light ml-3">+1 844 330 3141</h3>
                </Reveal>
              </div>

              <div className="flex items-center md:justify-between ">
                <MdEmail className="text-xl" />
                <Reveal>
                <h3 className="poppins-light ml-3">hi@pulsemarketing.io</h3>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="w-[90%] mx-auto lg:mx-0 lg:w-[50%]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/Q9Y18JQCeAwL83TSLcsu"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="Q9Y18JQCeAwL83TSLcsu_1715938727826"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
};

export default Calender;
