import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// component
import Card from "../Extra/Card";
import Stack from "../Extra/Stack";

function About() {
  //
  const textRef = useRef(null);
  const textsmRef = useRef(null);
  useEffect(() => {
    const splitText = new SplitType(textRef.current, {
      types: "words, chars, lines",
    });

    gsap.from(splitText.words, {
      opacity: 0,
      x: 50,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
        end: "top 0%",
        scrub: true,
        markers: false,
      },
    });
    return () => {
      splitText.revert();
    };
  }, []);

  useEffect(() => {
    const splitText = new SplitType(textsmRef.current, {
      types: "words, chars, lines",
    });

    gsap.from(splitText.lines, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: textsmRef.current,
        start: "top center",
        end: "top 0%",
        scrub: true,
        markers: false,
      },
    });
    return () => {
      splitText.revert();
    };
  }, []);

  //
  return (
    <div
      id="About"
      className="min-h-[170vh] lg:min-h-[120vh] w-full bg-[#fbfbfa] relative px-[5vw] py-[15vw] lg:py-0"
    >
      <div className="Handle min-h-[50vh] lg:h-[50vh] w-full flex flex-col lg:flex-row gap-[10vw] lg:gap-0 items-center">
        <div className="Profile_Text lg:h-[50vh] w-full lg:w-[100%] flex flex-col-reverse lg:flex-row lg:justify-evenly items-center mt-[5vw] text-[#383838]">
          <div className="hidden lg:block">
            <Card />
          </div>
          {/* //sm */}
          <h1
            ref={textsmRef}
            className="font-[gilroy] text-3xl uppercase mt-15 text-center lg:hidden"
          >
            I am Akash Negi, I create
            <span className="text-[#14cf92] font-[gilit] ml-2 mr-2 capitalize">
              Unconventional
            </span>{" "}
            yet functional & visually pleasing interfaces for the mobile and
            web.
          </h1>
          {/* //lg */}
          <h1
            ref={textRef}
            className="font-[gilroy] text-[2.5vw] leading-[2.5vw] uppercase hidden lg:block"
          >
            I am Akash Negi, I <br />
            create <br />{" "}
            <span className="text-[#14cf92] font-[gilit] capitalize">
              Unconventional
            </span>{" "}
            <br />
            yet functional & <br />
            visually pleasing <br /> interfaces for the <br />
            mobile and web.
          </h1>
          <div className=" lg:hidden">
            <Card />
          </div>
        </div>
      </div>

      {/* stack */}
      <Stack />
    </div>
  );
}

export default About;

// bg-[#fbfbfa]
