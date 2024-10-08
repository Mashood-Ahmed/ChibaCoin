"use client";

import { useEffect, useState } from "react";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={` ${
        isVisible
          ? "bg-p-yellow border-b-2 md:py-3 py-1 border-b-black shadow-xl px-3"
          : "bg-transparent md:py-5 py-5"
      } fixed left-0 right-0 top-0 z-[200] transition-all ease-in-out md:px-14 px-5`}
    >
      <div className="flex justify-between items-center relative z-20 max-w-[2000px] mx-auto">
        <a href="#">
          <div
            className={`${
              isVisible
                ? "md:w-[80px] md:h-12 w-[140px]"
                : "md:w-[180px] md:h-20"
            } relative  z-20 md:ml-[-20px] ml-[-5px] transition-all ease-in-out  w-[80px] h-14`}
          >
            <img
              alt="logo"
              fetchpriority="high"
              decoding="async"
              data-nimg="fill"
              classNameName="object-contain"
              src="/images/logo2.svg"
            />
          </div>
        </a>
        <div
          className={` ${
            isVisible ? "md:text-[20px]" : "md:text-[22px]"
          } flex gap-4 sm:gap-8 font-luckiest-guy-regular mb-[-4px] text-[16px]`}
        >
          <a href="#story">
            <div className=" md:hover:scale-105 md:px-4 md:py-2 py-1 px-0  items-center gap-1 transition-all">
              <div className="mb-[-6px] flex">
                <span className="">THE STORY</span>
              </div>
            </div>
          </a>
          <a href="#tokenomics">
            <div className=" md:hover:scale-105 md:px-4 md:py-2 py-1 px-0  gap-1 transition-all">
              <div className="mb-[-6px] flex">
                <span className="">TOKENOMICS</span>
              </div>
            </div>
          </a>
          <a href="#howtobuy">
            <div className=" md:hover:scale-105 md:px-4 md:py-2 py-1 px-0   gap-1 transition-all">
              <div className="mb-[-6px] flex">
                <span className="">HOW TO BUY</span>
              </div>
            </div>
          </a>
          <a href="#follow">
            <div className=" md:hover:scale-105 md:px-4 md:py-2 py-1 px-0  gap-1 transition-all">
              <div className="mb-[-6px] flex">
                <span className="">FOLLOW</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
