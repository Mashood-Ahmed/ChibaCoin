"use client";
import { useInView } from "react-intersection-observer";

const Utilities = () => {
  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: pRef, inView: pInView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: card3Ref, inView: card3InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  return (
    <div className="border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-2 relative z-[30] md:pt-0 pt-8 bg-yellow">
      <div className="max-w-1500 mx-auto relative md:pt-24 pt-14">
        <div className="opacity-[1] transform-[none]">
          <div className="md:text-[100px] text-[52px] text-center">
            <h1
              ref={h1Ref}
              className={`${
                h1InView ? "animate" : ""
              } md:leading-normal leading-[60px] font-luckiest-guy-regular px-5 appear`}
            >
              PONKE UTILITIES
            </h1>
          </div>
        </div>
        <div className="opacity-[1] transform-[none]">
          <div className="text-center mb-5 md:text-3xl tracking-wider font-bold text-lg md:max-w-[600px] max-w-[340px] mx-auto">
            <p
              ref={pRef}
              className={`${
                pInView ? "animate" : ""
              } md:leading-[45px] text-black appear`}
            >
              Seamlessly Integrated and Community Powered.
            </p>
          </div>
        </div>
        <div className="w-full mx-auto md:pt-20 pt-10 md:px-20 px-5">
          <div className="flex flex-col lg:flex-row md:gap-5 gap-2 w-full relative">
            <div className="flex-1">
              <div
                ref={card1Ref}
                className={`appear ${card1InView ? "animate" : ""}`}
              >
                <div className="bg-p-skin border-[3px] border-black rounded-xl text-center text-black p-8 py-10 md:min-h-[250px] flex-1 w-full">
                  <div className="font-luckiest-guy-regular md:text-3xl text-2xl text-black mb-2">
                    Expanding Ecosystem
                  </div>
                  <p className="max-w-[500px] tracking-wider font-bold mx-auto md:text-base text-sm">
                    PONKE&apos;s ecosystem continues to grow with partnerships
                    across CEXs, DEXs, and even travel platforms, enabling users
                    to leverage $PONKE for trading, asset management, and global
                    travel bookings.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div
                ref={card2Ref}
                className={`appear d3  ${card2InView ? "animate" : ""}`}
              >
                <div className="bg-p-skin border-[3px] border-black rounded-xl text-center text-black p-8 py-10 md:min-h-[250px] flex-1 w-full">
                  <div className="font-luckiest-guy-regular md:text-3xl text-2xl text-black mb-2">
                    Community-Driven Support
                  </div>
                  <p className="max-w-[500px] tracking-wider font-bold mx-auto md:text-base text-sm">
                    PONKE thrives on strong community backing, with continuous
                    support from both crypto enthusiasts and leading platforms,
                    driving its adoption and utility in the wider crypto space.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div
              ref={card3Ref}
              className={`appear ${card3InView ? "animate" : ""}`}
            >
              <div className="bg-p-skin border-[3px] border-black rounded-xl text-center text-black p-8 py-10 md:min-h-[250px] mt-5 mx-auto md:min-w-[710px] lg:max-w-[710px]">
                <div className="font-luckiest-guy-regular md:text-3xl text-2xl text-black mb-2">
                  Robust Integrations
                </div>
                <p className="max-w-[500px] tracking-wider font-bold mx-auto md:text-base text-sm">
                  PONKE has established integrations with top exchanges,
                  wallets, and services in the crypto space, ensuring seamless
                  accessibility and utility for users across various platforms.
                </p>
                <div className="flex gap-8 font-luckiest-guy-regular mb-[-4px] md:text-[22px] text-[20px] justify-center mt-8 md:rotate-[-2deg]">
                  <a href="/integrations">
                    <div className="bg-p-red md:border-[3px] border-2 border-black md:hover:scale-105 md:px-4 md:py-2 py-1 px-3 flex items-center gap-1 transition-all text-white">
                      <div className="mb-[-6px] flex">
                        <span className="">INTEGRATIONS</span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right md:block hidden rotate-[-40deg] mt-[-1px] mr-[-4px]"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right md:hidden rotate-[-40deg]"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utilities;
