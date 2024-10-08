"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Marquee = () => {
  return (
    <div className="bg-p-skin marquee-carousel text-black border-y-[3px] border-black flex overflow-hidden md:py-1 md:pt-3 py-[2px] pt-[8px] md:text-2xl text-lg font-pretty tracking-wide">
      <Carousel
        showArrows={false} // Hide navigation arrows
        showStatus={false} // Hide current slide status
        showThumbs={false} // Hide thumbnails
        infiniteLoop={true} // Enable infinite looping
        autoPlay={true} // Enable auto play
        interval={0} // Set interval between transitions
        transitionTime={2} // Control the speed of transition (scrolling effect)
        stopOnHover={false} // Prevent pausing on hover
        swipeable={false}
        centerMode={true}
        centerSlidePercentage={1}
        showIndicators={false}
      >
        <h3 className="mr-2 md:mr-5 text-xl uppercase font-luckiest-guy-regular whitespace-nowrap">
          I am Ponke, You are Ponke, We are Ponke!
        </h3>
        <h3 className="mr-2 md:mr-5 text-xl uppercase font-luckiest-guy-regular whitespace-nowrap">
          I am Ponke, You are Ponke, We are Ponke!
        </h3>
        <h3 className="mr-2 md:mr-5 text-xl uppercase font-luckiest-guy-regular whitespace-nowrap">
          I am Ponke, You are Ponke, We are Ponke!
        </h3>
        <h3 className="mr-2 md:mr-5 text-xl uppercase font-luckiest-guy-regular whitespace-nowrap">
          I am Ponke, You are Ponke, We are Ponke!
        </h3>
        <h3 className="mr-2 md:mr-5 text-xl uppercase font-luckiest-guy-regular whitespace-nowrap">
          I am Ponke, You are Ponke, We are Ponke!
        </h3>
        <h3 className="mr-2 md:mr-5 text-xl uppercase font-luckiest-guy-regular whitespace-nowrap">
          I am Ponke, You are Ponke, We are Ponke!
        </h3>
        <h3 className="mr-2 md:mr-5 text-xl uppercase font-luckiest-guy-regular whitespace-nowrap">
          I am Ponke, You are Ponke, We are Ponke!
        </h3>
        <h3 className="mr-2 md:mr-5 text-xl uppercase font-luckiest-guy-regular whitespace-nowrap">
          I am Ponke, You are Ponke, We are Ponke!
        </h3>
      </Carousel>
    </div>
  );
};

export default Marquee;
