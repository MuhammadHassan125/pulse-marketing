"use client";
import * as React from "react";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from "next/image";
import Link from "next/link";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabContentRef = useRef(null);

  useEffect(() => {
    if (tabContentRef.current) {
      gsap.fromTo(tabContentRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, [activeTab]);

  const tabs = [
    {
      label: 'Animated',
      content: (
        <div className="grid grid-cols-3 gap-4">
          <Link href="https://studio9p.com/en/" target="_blank">
              <Image src="/web-1.JPG" alt="Image 1" className="w-full h-auto rounded  hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.clouarchitects.com/" target="_blank">
              <Image src="/web-2.JPG" alt="Image 2" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 " width={180} height={400} />
          </Link>
          <Link href="https://www.bienvillecapital.com/" target="_blank">
              <Image src="/web-3.JPG" alt="Image 3" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://petertarka.com/" target="_blank">
              <Image src="/web-4.JPG" alt="Image 4" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.oneupstudio.it/" target="_blank">
              <Image src="/web-5.JPG" alt="Image 5" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.steelwavellc.com/" target="_blank">
              <Image src="/web-6.JPG" alt="Image 6" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
        </div>
      ),
    },
    {
      label: 'Hospitality',
      content: (
        <div className="grid grid-cols-3 gap-4">
          <Link href="https://studio9p.com/en/" target="_blank">
              <Image src="/web-1.JPG" alt="Image 1" className="w-full h-auto rounded  hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.clouarchitects.com/" target="_blank">
              <Image src="/web-2.JPG" alt="Image 2" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 " width={180} height={400} />
          </Link>
          <Link href="https://www.bienvillecapital.com/" target="_blank">
              <Image src="/web-3.JPG" alt="Image 3" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://petertarka.com/" target="_blank">
              <Image src="/web-4.JPG" alt="Image 4" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.oneupstudio.it/" target="_blank">
              <Image src="/web-5.JPG" alt="Image 5" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.steelwavellc.com/" target="_blank">
              <Image src="/web-6.JPG" alt="Image 6" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
        </div>
      ),
    },
    {
      label: 'Contractors',
      content: (
        <div className="grid grid-cols-3 gap-4">
          <Link href="https://studio9p.com/en/" target="_blank">
              <Image src="/web-1.JPG" alt="Image 1" className="w-full h-auto rounded  hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.clouarchitects.com/" target="_blank">
              <Image src="/web-2.JPG" alt="Image 2" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 " width={180} height={400} />
          </Link>
          <Link href="https://www.bienvillecapital.com/" target="_blank">
              <Image src="/web-3.JPG" alt="Image 3" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://petertarka.com/" target="_blank">
              <Image src="/web-4.JPG" alt="Image 4" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.oneupstudio.it/" target="_blank">
              <Image src="/web-5.JPG" alt="Image 5" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.steelwavellc.com/" target="_blank">
              <Image src="/web-6.JPG" alt="Image 6" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
        </div>
      ),
    },
    {
      label: 'E-Commerce',
      content: (
        <div className="grid grid-cols-3 gap-4">
          <Link href="https://studio9p.com/en/" target="_blank">
              <Image src="/web-1.JPG" alt="Image 1" className="w-full h-auto rounded  hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.clouarchitects.com/" target="_blank">
              <Image src="/web-2.JPG" alt="Image 2" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 " width={180} height={400} />
          </Link>
          <Link href="https://www.bienvillecapital.com/" target="_blank">
              <Image src="/web-3.JPG" alt="Image 3" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://petertarka.com/" target="_blank">
              <Image src="/web-4.JPG" alt="Image 4" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.oneupstudio.it/" target="_blank">
              <Image src="/web-5.JPG" alt="Image 5" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.steelwavellc.com/" target="_blank">
              <Image src="/web-6.JPG" alt="Image 6" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
        </div>
      ),
    },
    {
      label: 'Services',
      content: (
        <div className="grid grid-cols-3 gap-4">
          <Link href="https://studio9p.com/en/" target="_blank">
              <Image src="/web-1.JPG" alt="Image 1" className="w-full h-auto rounded  hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.clouarchitects.com/" target="_blank">
              <Image src="/web-2.JPG" alt="Image 2" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 " width={180} height={400} />
          </Link>
          <Link href="https://www.bienvillecapital.com/" target="_blank">
              <Image src="/web-3.JPG" alt="Image 3" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://petertarka.com/" target="_blank">
              <Image src="/web-4.JPG" alt="Image 4" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.oneupstudio.it/" target="_blank">
              <Image src="/web-5.JPG" alt="Image 5" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.steelwavellc.com/" target="_blank">
              <Image src="/web-6.JPG" alt="Image 6" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
        </div>
      ),
    },
    {
      label: 'Landing Pages',
      content: (
        <div className="grid grid-cols-3 gap-4">
          <Link href="https://studio9p.com/en/" target="_blank">
              <Image src="/web-1.JPG" alt="Image 1" className="w-full h-auto rounded  hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.clouarchitects.com/" target="_blank">
              <Image src="/web-2.JPG" alt="Image 2" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 " width={180} height={400} />
          </Link>
          <Link href="https://www.bienvillecapital.com/" target="_blank">
              <Image src="/web-3.JPG" alt="Image 3" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://petertarka.com/" target="_blank">
              <Image src="/web-4.JPG" alt="Image 4" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.oneupstudio.it/" target="_blank">
              <Image src="/web-5.JPG" alt="Image 5" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.steelwavellc.com/" target="_blank">
              <Image src="/web-6.JPG" alt="Image 6" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
        </div>
      ),
    },
    {
      label: 'Real Estate',
      content: (
        <div className="grid grid-cols-3 gap-4">
          <Link href="https://studio9p.com/en/" target="_blank">
              <Image src="/web-1.JPG" alt="Image 1" className="w-full h-auto rounded  hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.clouarchitects.com/" target="_blank">
              <Image src="/web-2.JPG" alt="Image 2" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 " width={180} height={400} />
          </Link>
          <Link href="https://www.bienvillecapital.com/" target="_blank">
              <Image src="/web-3.JPG" alt="Image 3" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://petertarka.com/" target="_blank">
              <Image src="/web-4.JPG" alt="Image 4" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.oneupstudio.it/" target="_blank">
              <Image src="/web-5.JPG" alt="Image 5" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.steelwavellc.com/" target="_blank">
              <Image src="/web-6.JPG" alt="Image 6" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
        </div>
      ),
    },
    {
      label: 'Dispensaries',
      content: (
        <div className="grid grid-cols-3 gap-4">
          <Link href="https://studio9p.com/en/" target="_blank">
              <Image src="/web-1.JPG" alt="Image 1" className="w-full h-auto rounded  hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.clouarchitects.com/" target="_blank">
              <Image src="/web-2.JPG" alt="Image 2" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 " width={180} height={400} />
          </Link>
          <Link href="https://www.bienvillecapital.com/" target="_blank">
              <Image src="/web-3.JPG" alt="Image 3" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://petertarka.com/" target="_blank">
              <Image src="/web-4.JPG" alt="Image 4" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.oneupstudio.it/" target="_blank">
              <Image src="/web-5.JPG" alt="Image 5" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.steelwavellc.com/" target="_blank">
              <Image src="/web-6.JPG" alt="Image 6" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
        </div>
      ),
    },
    {
      label: 'TurnKey Sites',
      content: (
        <div className="grid grid-cols-3 gap-4">
          <Link href="https://studio9p.com/en/" target="_blank">
              <Image src="/web-1.JPG" alt="Image 1" className="w-full h-auto rounded  hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.clouarchitects.com/" target="_blank">
              <Image src="/web-2.JPG" alt="Image 2" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 " width={180} height={400} />
          </Link>
          <Link href="https://www.bienvillecapital.com/" target="_blank">
              <Image src="/web-3.JPG" alt="Image 3" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://petertarka.com/" target="_blank">
              <Image src="/web-4.JPG" alt="Image 4" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.oneupstudio.it/" target="_blank">
              <Image src="/web-5.JPG" alt="Image 5" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.steelwavellc.com/" target="_blank">
              <Image src="/web-6.JPG" alt="Image 6" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
        </div>
      ),
    },
    {
      label: 'Apps',
      content: (
        <div className="grid grid-cols-3 gap-4">
          <Link href="https://studio9p.com/en/" target="_blank">
              <Image src="/web-1.JPG" alt="Image 1" className="w-full h-auto rounded  hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.clouarchitects.com/" target="_blank">
              <Image src="/web-2.JPG" alt="Image 2" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 " width={180} height={400} />
          </Link>
          <Link href="https://www.bienvillecapital.com/" target="_blank">
              <Image src="/web-3.JPG" alt="Image 3" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://petertarka.com/" target="_blank">
              <Image src="/web-4.JPG" alt="Image 4" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.oneupstudio.it/" target="_blank">
              <Image src="/web-5.JPG" alt="Image 5" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
          <Link href="https://www.steelwavellc.com/" target="_blank">
              <Image src="/web-6.JPG" alt="Image 6" className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300" width={180} height={400} />
          </Link>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const images = tabContentRef.current.querySelectorAll('img');
    gsap.fromTo(images, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.3 });
  }, [activeTab]);

  return (
    <>
      <main className=" w-full lg:w-[1200px] m-auto pb-14">
        <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 mx-auto px-4 w-full">
          {/* <div className="block md:flex flex-wrap items-start gap-4 space-x-10 mb-4 w-full md:max-w-[90%]"> */}
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`py-2 px-6 w-auto  rounded ${index === activeTab ? 'bg-my-blue-gradient text-white' : 'border'}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div ref={tabContentRef} className="px-6 md:px-2 py-2">
            {tabs[activeTab].content}
          </div>
        </div>
      </main>
      <style jsx>{`
        .image-hover {
          transition: transform 0.3s ease;
        }
        .image-hover:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}