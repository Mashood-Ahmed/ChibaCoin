import React from "react";

const TradingPov = () => {
  return (
    <div className="border-b-4 border-black relative">
      <div className="bg-pov bg-center bg-cover bg-no-repeat md:min-h-[1200px] flex-1">
        <div className="max-w-1500 mx-auto relative pt-[300px]">
          <div className="md:hidden block text-2xl absolute px-10 md:top-40 top-20 md:left-0 left-1/2 translate-x-[-50%] md:translate-x-0 whitespace-nowrap rotate-[-12deg] text-black bg-p-yellow border-4 border-black text-center max-w-[900px] mx-auto">
            <h1>PONKE TRADING POV</h1>
          </div>
          <div className="md:block hidden text-[40px] absolute px-10 top-40 rotate-[-12deg] text-black bg-p-yellow border-4 border-black text-center max-w-[900px] mx-auto fomnt">
            <h1>PONKE TRADING POV</h1>
          </div>
          <div className="text-center mt-10 text-2xl max-w-[600px] mx-auto"></div>
          <div className="p-20 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TradingPov;
