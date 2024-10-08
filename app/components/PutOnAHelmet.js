"use client";

import { useInView } from "react-intersection-observer";

const PutOnAHelmet = () => {
  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: imageRef, inView: imaegInView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  return (
    <div className="border-b-4 border-b-black md:pb-32 md:px-0 bg-yellow">
      <div className="max-w-1500 mx-auto relative md:pt-24 pt-20">
        <div ref={h1Ref} className={`appear ${h1InView ? "animate" : " "}`}>
          <div className="md:text-[100px] text-[52px] text-center px-5">
            <h1 className="text-black md:leading-normal leading-[44px] font-luckiest-guy-regular">
              PUT ON A HELMET!
            </h1>
          </div>
        </div>
        <div className="md:hidden pb-5">
          <div className={`appear ${h1InView ? "animate" : " "}`}>
            <div className="text-center mt-4 md:text-3xl text-xl max-w-[700px] mx-auto text-black">
              <p className="mx-auto tracking-wider font-bold max-w-[300px]">
                Join the <strong className="text-green">PONKE army</strong> by
                putting on a helmet using our tool.
              </p>
              <img
                alt="helmet"
                loading="lazy"
                width="140"
                height="140"
                decoding="async"
                data-nimg="1"
                className="mx-auto mt-8 mb-[-10px] wiggle text-transparent"
                src="/images/helmet.svg"
              />
              <a href="/helmet">
                <button className="font-luckiest-guy-regular text-white md:text-3xl text-2xl border-4 rounded-0 border-black shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all md:mt-20 mt-10 rotate-[2deg] bg-p-green flex mx-auto gap-1 opacity-100 md:hover:scale-105">
                  Helmet Tool{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right rotate-[-40deg] mt-[-4px]"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="md:mt-32 mt-14 flex md:flex-row flex-col items-center justify-center">
          <div className="relative md:w-[450px] h-auto w-full md:h-[600px]">
            <img
              className="object-contain md:h-full md:border-4 border-t-4 border-black shadow-md md:rotate-[-5deg]"
              src="/images/revolution.gif"
              alt="head"
            />
          </div>
          <div className="md:block hidden mt-[-100px]">
            <div
              ref={imageRef}
              className={`appear ${imaegInView ? "animate" : " "}`}
            >
              <img
                alt="helmet"
                loading="lazy"
                width="200"
                height="200"
                decoding="async"
                data-nimg="1"
                className="mx-auto text-transparent wiggle"
                src="/images/helmet.svg"
              />
              <div className="text-center mt-10 tracking-wider font-bold md:text-3xl text-xl max-w-[700px] mx-auto text-black">
                <p className="md:max-w-[500px] max-w-[300px]">
                  Join the <strong className="text-p-green">PONKE army</strong>{" "}
                  by putting on a helmet using our tool.
                </p>
                <a href="/helmet">
                  <button className="font-luckiest-guy-regular   text-white md:text-3xl text-2xl border-4 rounded-0 border-black shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all md:mt-20 mt-10 rotate-[2deg] bg-p-green opacity-100 md:hover:scale-105">
                    Helmet Tool
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PutOnAHelmet;
