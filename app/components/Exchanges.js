"use client";
import { useInView } from "react-intersection-observer";

const Exchanges = () => {
  const inView = true;
  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: pRef, inView: pInView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images1Ref, inView: images1InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images12Ref, inView: images12InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images13Ref, inView: images13InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images2Ref, inView: images2InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images22Ref, inView: images22InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images23Ref, inView: images23InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images3Ref, inView: images3InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images32Ref, inView: images32InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images33Ref, inView: images33InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images4Ref, inView: images4InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images42Ref, inView: images42InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images43Ref, inView: images43InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: bottomTextRef, inView: bottomTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  return (
    <div
      className="border-b-4 bg-p-dark border-b-black md:pb-32 pb-20 md:px-0 px-2 relative z-[30] md:pt-0 pt-8"
      id="story"
    >
      <div className="max-w-1500 mx-auto relative md:pt-24 pt-14">
        <div className={`appear ${h1InView ? "animate" : ""}`}>
          <div className="md:text-[100px] text-[52px] text-center">
            <h1
              ref={h1Ref}
              className={`text-p-yellow font-luckiest-guy-regular md:leading-normal leading-[60px] appear ${
                h1InView ? "animate" : ""
              }`}
            >
              THE STORY
            </h1>
          </div>
        </div>
        <div className={`appear ${pInView ? "animate" : ""}`}>
          <div className="text-center mb-10 mt- md:text-xl text-lg md:max-w-[1000px] max-w-[340px] mx-auto text-white">
            <p ref={pRef} className="md:leading-[45px]">
              What is CHIBA? CHIBA, short for Chiba Wan, represents the very
              origins of the dog coin movement. It all began when Chiba Wan
              rescued Kabosu, the Shiba Inu who later became the face of the
              DOGE meme. This moment was not just the beginning of a meme but
              the genesis of an entire crypto revolution. The rescue of Kabosu
              laid the foundation for the rise of DOGE, SHIB, NEIRO, and many
              other iconic coins that followed, creating a billion-dollar
              industry around meme coins.
            </p>
          </div>
        </div>
        <div className=" w-full">
          <img
            className="h-[700px] border-8 border-p-yellow mx-auto"
            src="/images/the story.jpg"
            alt="the story"
          />
        </div>
        <div
          ref={bottomTextRef}
          className={`appear ${bottomTextInView ? "animate" : ""}`}
        >
          <div className="text-center md:mt-10 mt-20  text-xl mx-auto text-white md:max-w-[1000px] max-w-[300px]">
            <p className="md:leading-[45px]">
              But CHIBA is not just about the coins themselves — it&apos;s about
              honoring the story that started it all. Chiba Wan&apos;s
              compassionate rescue sparked a global movement that transcended
              both internet culture and finance. By holding CHIB, you&apos;re
              joining in the legacy of the dogs that transformed the meme
              economy into a crypto powerhouse. This is your opportunity to
              become part of the origin story, to own a piece of history, and to
              continue the legacy of the legendary dogs that changed everything.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
