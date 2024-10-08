"use client";

import { useInView } from "react-intersection-observer";

const Tokenomics = () => {
  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div
      id="tokenomics"
      className="bg-p-dark border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-5"
    >
      <div className="max-w-1500 mx-auto relative md:pt-24 pt-20">
        <div ref={h1Ref} className={`appear ${h1InView ? "animate" : ""}`}>
          <div className="md:text-[100px] text-[52px] text-center">
            <h1 className="text-p-yellow md:leading-normal leading-[60px] font-luckiest-guy-regular">
              TOKENOMICS
            </h1>
          </div>
        </div>
        <div
          ref={imageRef}
          className={`appear ${imageInView ? "animate" : ""}`}
        >
          <div className="md:p-20 p-5 pt-10 w-full flex md:flex-row flex-col gap-10 items-center">
            <div className="relative md:w-1/2   overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 bg-transparent blink-bg right-0 z-10"></div>
              <img
                className="object-contain border-4 border-p-yellow"
                src="/images/chibatranding.png"
                alt="trading"
              />
            </div>
            <div className="flex flex-col items-center">
              <div>
                <div className="flex flex-col md:gap-5 gap-3 relative z-20">
                  <div>
                    <div className="flex-1 f p-5 border-4 border-p-yellow bg-p-yellow text-center">
                      <div className="md:text-4xl text-xl font-luckiest-guy-regular md:mb-[-14px] mb-[-10px]">
                        SYMBOL
                      </div>
                      <div className="md:text-xl md:mt-3 tracking-wider font-bold mt-2 break-normal  text-p-white">
                        CHIB
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex-1 p-5 border-4 border-p-yellow bg-p-yellow text-center">
                      <div className="md:text-4xl text-xl font-luckiest-guy-regular md:mb-[-14px] mb-[-10px]">
                        LIQUIDITY
                      </div>
                      <div className="md:text-lg text-xs md:mt-3 tracking-wider font-bold mt-2 break-normal  text-p-white">
                        BURNED
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex-1 p-5 border-4 border-p-yellow bg-p-yellow text-center">
                      <div className="md:text-4xl text-xl font-luckiest-guy-regular md:mb-[-14px] mb-[-10px]">
                        CONTRACT
                      </div>
                      <div className="md:text-lg text-xs md:mt-3 tracking-wider font-bold mt-2 break-normal  text-p-white">
                        RENOUNCED
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex-1 p-5 border-4 border-p-yellow bg-p-yellow text-center">
                      <div className="md:text-4xl text-xl font-luckiest-guy-regular md:mb-[-14px] mb-[-10px]">
                        TOTAL SUPPLY
                      </div>
                      <div className="md:text-lg text-xs md:mt-3 tracking-wider font-bold mt-2 break-normal  text-p-white">
                        200,000,000,000
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex-1 p-5 border-4 border-p-yellow bg-p-yellow text-center">
                      <div className="md:text-4xl text-xl font-luckiest-guy-regular md:mb-[-14px] mb-[-10px]">
                        CONTRACT ADDRESS
                      </div>
                      <div className="md:text-lg text-xs md:mt-3 tracking-wider font-bold mt-2 break-normal  text-p-white">
                        0xa5c45d48d36607741E90c0CCa29545A46f5eE121
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-[28px] md:mx-16 lg:mx-0 xl:mx-20  ">
          <div>
            <div className="flex-1 p-5 border-4 border-p-yellow bg-p-yellow text-center h-[120px] md:h-[175px] xl:h-[150px]">
              <div className="md:text-4xl text-xl font-luckiest-guy-regular md:mb-[-14px] mb-[-10px]">
                BUY TAX: 0%
              </div>
              <div className="md:text-lg text-xs md:mt-3 tracking-wider font-bold mt-2 break-normal  text-p-white">
                As part of the CHIBA legacy, we believe in the story — no taxes,
                just pure meme coin power!
              </div>
            </div>
          </div>
          <div>
            <div className="flex-1 p-5 border-4 border-p-yellow bg-p-yellow text-center h-[120px] md:h-[175px] xl:h-[150px]">
              <div className="md:text-4xl text-xl font-luckiest-guy-regular md:mb-[-14px] mb-[-10px]">
                SALE TAX: 0%
              </div>
              <div className="md:text-lg text-xs md:mt-3 tracking-wider font-bold mt-2 break-normal  text-p-white">
                When it&apos;s time to cash in, you keep it all. No penalties,
                no fees — just rewards, as the story of CHIBA continues to grow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
