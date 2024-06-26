'use client';
import Image from "next/image";
import React from "react";
import ContentTab from "./ContentTab";
import { Reveal } from "../../utils/Reveal";

const Projects = () => {
  const [tabImage, setTabImage] = React.useState(0);

  return (
    <>
      <main className="w-full flex-col-reverse md:flex md:flex-row lg:flex justify-between ">
        {/* project section left box  */}
        <div className="w-[90%] rounded-md p-5 md:p-0 mx-auto md:mx-0 md:w-[40%] flex items-center justify-center ">
          {tabImage === 0 && (
            <Image src={"/mob-app01.png"} alt="mob1" width={200} height={200} />
          )}
          {tabImage === 1 && (
            <Image src={"/mob-app03.png"} alt="mob2" width={200} height={200} />
          )}
          {tabImage === 2 && (
            <Image src={"/mob-app02.png"} alt="mob3" width={200} height={200} />
          )}
        </div>

        {/* project section right box */}
        <div className="w-[100%] px-6 md:px-0 md:w-[56%] flex flex-row justify-between relative ct-projects">
          {/* tab box for project  */}
          <div className="w-[100%] md:w-[70%]">
            {/* top heading */}
            <main className=" w-full m-auto">
              <div className=" justify-between items-center py-8 md:py-20">
                <div className="w-[100%] justify-center items-center">
                  <Reveal>
                    <h1 className="poppins-medium text-4xl">
                      Some of our <br /> favorite projects
                    </h1>
                  </Reveal>
                </div>

                <div className="w-[90%]">
                  <Reveal>
                    <p className=" poppins-light font-light text-[14px] my-3">
                      Join us on a journey to create something truly
                      extraordinary. Together, we&apos;ll turn your dreams into
                      reality.
                    </p>
                  </Reveal>
                </div>
              </div>
            </main>

            <ContentTab tabImage={tabImage} setTabImage={setTabImage} />
          </div>

          <div className="w-[28%] absolute bottom-0 right-0">
            {tabImage === 0 && (
              <Image src={"/mob-app-mock01.png"} alt="mob" width={300} height={300} />
            )}
            {tabImage === 1 && (
              <Image src={"/mob-app-mock03.png"} alt="mob4" width={300} height={300} />
            )}
            {tabImage === 2 && (
              <Image src={"/mob-app-mock02.png"} alt="mob5" width={300} height={300} />
            )}

            
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;