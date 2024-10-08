import React from "react";

const Banner = () => {
  return (
    <div className="bg-yellow relative overflow-hidden">
      <div className="relative p-5 md:px-14 min-h-screen max-w-[2000px] mx-auto pt-[100px]">
        <div className="relative flex justify-center items-center flex-col md:pt-0 pt-[10px] z-10">
          <div className="relative md:size-[58vh] size-[50vh] z-20">
            <div className="absolute size-[200vh] left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]">
              <img
                alt="rays"
                fetchpriority="high"
                decoding="async"
                data-nimg="fill"
                className=" position: absolute height: 100% width: 100% inset: 0px color: transparent"
                src="/images/shade.png"
              />
            </div>
            <img
              alt="hero"
              fetchpriority="high"
              decoding="async"
              data-nimg="fill"
              className="object-contain absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent"
              src="/images/Shiba face 1.png"
            />
          </div>
          <div className="relative font-bold tracking-wider z-20 flex flex-col items-center mb-3">
            <div className="font-mt md:text-[50px] text-[30px] ">
              CHIBA - The Origin Story
            </div>
            <p className="max-w-[1000px] mt-8 leading-loose text-center ">
              Before there was DOGE, SHIB, KABOSU, NEIRO and others, there was
              CHIBA, the group that sparked the entire dog coin movement. As the
              rescuers of Kabosu and her companions, CHIBA, or Chiba Wan, paved
              the way for the legendary rise of meme coins. CHIBA celebrates the
              original story, honoring the dogs that changed the world of crypto
              and internet culture forever.
            </p>
            <a
              href="https://app.uniswap.org/explore/tokens/ethereum/0xa5c45d48d36607741E90c0CCa29545A46f5eE121"
              className="flex justify-center w-full"
            >
              <button className="font-luckiest-guy-regular font-medium text-white md:text-3xl text-2xl bg-p-red border-4 rounded-0 border-black shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all md:mt-10 mt-10 md:rotate-[-4deg] rotate-[-2deg] w-full md:w-auto opacity-100 md:hover:scale-105">
                BUY ON UNISWAP
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
