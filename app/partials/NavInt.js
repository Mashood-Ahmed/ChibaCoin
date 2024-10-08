"use client";

import React, { useEffect, useState } from "react";

const NavInt = () => {
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
        isVisible ? "shadow-md" : "shadow-none md:py-8 py-5 px-5 "
      } fixed left-0 right-0 top-0 z-[200] transition-all ease-in-out md:px-14  flex items-center gradient border-b-[0px] md:py-3 py-0 border-b-black px-3`}
    >
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="3" // Fixed camelCase
          strokeLinecap="round" // Fixed camelCase
          strokeLinejoin="round" // Fixed camelCase
          className="lucide lucide-arrow-left absolute left-5 md:top-5 top-4  size-[25px] md:size-[34px]" // Corrected Tailwind classes
        >
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
      </a>
      <div className="flex justify-center w-full">
        <a href="/">
          <div className="relative z-20 md:ml-[-20px] ml-[-5px] p-5 transition-all ease-in-out md:w-[170px] md:h-12 w-[140px] h-14">
            <img
              alt="logo"
              fetchPriority="high"
              decoding="async"
              data-nimg="fill"
              className="object-contain"
              src="/images/logo-nav.svg"
              style={{
                position: "absolute", // Converted to object syntax
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default NavInt;
