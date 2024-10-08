"use client";
import content from "@/content/home.json";
import { useEffect, useState } from "react";
const Integration = () => {
  const { categories, cards } = content.Integration;
  const [isActive, setIsActive] = useState(0);
  const [filteredCards, setFilteredCards] = useState(cards);

  useEffect(() => {
    const TabId = isActive + 1;
    const tabCards = cards.filter((c) => c?.category?.includes(TabId));
    setFilteredCards(tabCards);
  }, [isActive]);

  console.log(filteredCards);

  return (
    <div className="md:flex items-center flex-col font-yantramanav-regular md:pt-24 pt-24  ">
      <div className="md:text-[85px] text-[40px] text-p-brown font-yantramanav-bold font-bold text-center">
        INTEGRATIONS
      </div>
      <p className="max-w-[670px] text-center md:text-xl md:mt-[-14px] text-p-brown">
        Discover the power of $PONKE. Trade on top exchanges, manage your assets
        with popular wallets, and even book travel. See where your $PONKE can
        take you!
      </p>
      <div className="mt-8 px-2 md:px-0">
        <div>
          <div className="flex md:gap-5 gap-4 flex-wrap justify-center">
            {categories.map((category, i) => (
              <div
                onClick={() => setIsActive(i)}
                key={i}
                className={` ${
                  isActive == i
                    ? "bg-p-red text-white"
                    : "bg-transparent md:hover:text-white"
                } md:text-xl px-2 pt-[1px] uppercase cursor-pointer text transition-all ease-in-out rounded font-yantramanav-semibold`}
              >
                {category}
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 max-w-[1200px] md:gap-5 gap-3 mt-8 pb-[7.2rem]">
            {filteredCards?.map((card, i) => (
              <a
                key={i}
                href={card.href}
                target="_blank"
                rel="noreferrer noopener"
                className="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
              >
                <div className="p-5 bg-p-skin text-black border-[3px] border-p-brown/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                  <div className="flex gap-4">
                    <img
                      src={card.img}
                      className="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                      alt="Coinbase Wallet"
                    />
                    <div>
                      <div className="uppercase md:text-xl text-lg font-yantramanav-bold">
                        {card.title}
                      </div>
                      <p className="text-wrap text-[17px] break-words leading-tight">
                        {card.info}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
