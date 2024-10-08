"use client";
import { useInView } from "react-intersection-observer";

const HowToBuy = () => {
  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: pRef, inView: pInView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  return (
    <div
      className="border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-5 bg-p-dark"
      id="howtobuy"
    >
      <div className="max-w-1500 mx-auto relative md:pt-24 pt-20 ">
        <div ref={h1Ref} className={`appear ${h1InView ? "animate" : ""}`}>
          <div className="md:text-[100px] text-[52px] text-center ">
            <h1 className="text-p-yellow md:leading-normal font-luckiest-guy-regular leading-[60px]">
              HOW TO BUY
            </h1>
          </div>
        </div>
        <div className="md:flex md:px-12 xl:px-0">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:mt-20 mt-16 text-white px-3 md:px-0 md:w-1/2">
            <div className="p-6 bg-black border-2 border-white/20">
              <div className="text-white font-luckiest-guy-regular md:text-3xl text-2xl mb-2">
                <strong className="text-p-yellow">1.</strong> GET A WALLET
              </div>
              <p className="text-white/80 cursor-pointer font-bold tracking-wider md:text-base text-sm">
                To begin your journey with CHIBA Coin, you&apos;ll need a secure
                wallet to store your CHIB tokens. We recommend using MetaMask
                for its simplicity and robust security. Set up your wallet, and
                prepare to hold a piece of meme coin history!
              </p>
            </div>
            <div className="p-6 bg-black border-2 border-white/20">
              <div className="text-white font-luckiest-guy-regular md:text-3xl text-2xl mb-2">
                <strong className="text-p-yellow">2.</strong> BUY ETHEREUM
              </div>
              <p className="text-white/80 md:text-base font-bold tracking-wider text-sm">
                To acquire CHIB tokens, you&apos;ll need Ethereum in your
                wallet. Purchase Ethereum from any major CEX or DEX. Fuel up and
                get ready to honor the origins of Doge!
              </p>
            </div>
            <div className="p-6 bg-black border-2 border-white/20">
              <div className="text-white font-luckiest-guy-regular md:text-3xl text-2xl mb-2">
                <strong className="text-p-yellow">3.</strong> SSWAP FOR CHIB
              </div>
              <p className="text-white/80 md:text-base font-bold tracking-wider text-sm">
                Visit a decentralized exchange such as Uniswap to trade your
                Ethereum for CHIB tokens. Simply enter the amount of Ethereum
                you wish to swap, confirm the transaction, and add the CHIB
                contract address to MetaMask to view your token balance. Welcome
                to the beginning of something legendary!
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-5 mb-[-50px] md:w-1/2">
            <img
              src="/images/Shiba.png"
              className="lg:w-[900px] w-[240px] object-contain"
            />
          </div>
        </div>
        <a
          href="https://app.uniswap.org/explore/tokens/ethereum/0xa5c45d48d36607741E90c0CCa29545A46f5eE121"
          className="flex sm:ml-4 mt-5 sm:mt-0 "
        >
          <button className="font-luckiest-guy-regular font-medium text-white md:text-3xl text-2xl bg-p-red border-4 rounded-0 border-black shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all md:mt-10 mt-10 md:rotate-[-4deg] rotate-[-2deg] w-full md:w-auto opacity-100 md:hover:scale-105">
            BUY ON UNISWAP
          </button>
        </a>
      </div>
    </div>
  );
};

export default HowToBuy;
