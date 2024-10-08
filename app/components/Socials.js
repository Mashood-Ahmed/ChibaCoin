"use client";
import { useInView } from "react-intersection-observer";

const Socials = () => {
  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  return (
    <div id="follow" className="bg-p-yellow">
      <div className="min-h-[500px] md:py-20 pt-12 mx-auto md:max-w-1500">
        <div ref={h1Ref} className={`appear ${h1InView ? "animate" : " "}`}>
          <div className="md:text-[120px] text-[50px] text-center">
            <h1 className="text-black font-luckiest-guy-regular">FOLLOW</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  lg:gap-6 gap-3 justify-center  md:pt-20 pt-10 z-[100] mx-3 xl:mx-4   text-center md:relative">
          <div className="bg-p-red mx-3 my-2 lg:my-0 py-2 max-w-[270px] text-xl md:text-4xl">
            <a rel="noopener noreferrer" target="_blank" href="t.me/chib_coin">
              Telegram
            </a>
          </div>
          <div className="bg-p-red mx-3 py-2 my-2 lg:my-0 max-w-[270px] text-xl md:text-4xl">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://x.com/chib_erc20"
            >
              Twitter/X
            </a>
          </div>
          <div className="bg-p-red mx-3 py-2 my-2 lg:my-0 max-w-[270px] text-xl md:text-4xl">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.dextools.io/app/en/ether/pair-explorer/0x7478621c285DCDfCf82CecbC3d18CB2a54404a96"
            >
              Dextools
            </a>
          </div>
          <div className="bg-p-red mx-3 py-2 my-2 lg:my-0 max-w-[270px] text-xl md:text-4xl">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://dexscreener.com/ethereum/0x7478621c285DCDfCf82CecbC3d18CB2a54404a96"
            >
              Dexscreener
            </a>
          </div>
          <div className="bg-p-red mx-3 py-2 mt-2 lg:mt-0 max-w-[270px] text-xl md:text-4xl">
            <a rel="noopener noreferrer" href="mailto:chibcoin@proton.me">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
