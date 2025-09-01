import { useState, useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import down from "../assets/Image/down.svg";
import About from "../Components/About.jsx";
import { motion } from "motion/react";
motion;
function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  const gmtOffset = "GMT (+5:30)";

  ////
  const textRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((textRef) => {
      const splitText = new SplitType(textRef, {
        types: "lines, words, chars",
      });

      gsap.from(splitText.words, {
        y: "100%",
        opacity: 0,
        duration: 1.5,
        ease: "back.out",
        stagger: 0.1,
        delay: 2.2,
      });

      // Cleanup the SplitType instance on component unmount
      return () => {
        splitText.revert();
      };
    });
  }, []);

  // bg-[#fdfbf8]

  return (
    <>
      <div
        className="home min-h-[60vh] lg:min-h-[100vh] w-full bg-[#fdfbf8] text-[#383939] pt-[15vh] lg:pt-[15vh] relative px-[5vw] overflow-hidden"
        id="Home"
      >
        {/* //sm */}
        <h1
          ref={(el) => (textRefs.current[2] = el)}
          className="hero-text text-[20vw] leading-[22vw] font-[gilsem] pl-4 overflow-hidden lg:hidden"
        >
          Creative
        </h1>
        {/* //lg */}
        <h1
          ref={(el) => (textRefs.current[0] = el)}
          className="hero-text text-[12vw] font-[gilsem] overflow-hidden hidden lg:block"
        >
          Creative
        </h1>

        {/* //sm */}
        <h1 className="hero-text text-[20vw] text-[#14cf92] font-[gilit] leading-18 ml-[36vw] lg:hidden">
          -Visual
        </h1>

        {/* //lg */}
        <h1 className="hero-text text-[10vw] text-[#14cf92] font-[gilit] absolute top-[25vh] right-[9vw] hidden lg:block">
          -Visual
        </h1>

        {/* //sm */}
        <h1
          ref={(el) => (textRefs.current[3] = el)}
          className="hero-text text-[20vw] ml-[1.5vw] leading-[22vw] pl-4 overflow-hidden font-[gilsem] lg:hidden"
        >
          Designer
        </h1>

        {/* //lg */}
        <h1
          ref={(el) => (textRefs.current[1] = el)}
          className="hero-text text-[15vw] leading-[12vw] ml-[15vw] font-[gilsem] overflow-hidden hidden lg:block"
        >
          developer
        </h1>

        <div className="h-[12vh] lg:h-[15vh] w-full bg-[#fdfbf8] flex items-center gap-[8vw] absolute bottom-0 lg:bottom-[2vw]">
          <div className="flex gap-[7vw]">
            {/* //sm */}
            <h1 className="text-[3vw] ml-[2vw] uppercase text-[#a2a2a3] pl-4 font-[gilroy] lg:hidden">
              currently available <br /> for freelance
            </h1>
            {/* //lg */}
            <h1 className="text-[.8vw] uppercase text-[#a2a2a3] font-[gilroy] hidden lg:block">
              currently available <br /> for freelance
            </h1>
            {/* //sm */}
            <h1 className="text-[3vw] uppercase text-[#a2a2a3] ml-5 font-[gilroy] lg:hidden ">
              My local Time {formattedTime} <br />
              {gmtOffset}
            </h1>
            {/* //lg */}
            <h1 className="text-[.8vw] uppercase text-[#a2a2a3] font-[gilroy] hidden lg:block">
              My local Time {formattedTime} <br />
              {gmtOffset}
            </h1>
          </div>
          <motion.div className="svg h-[10vh] w-[15vh] absolute top-[.8vw] right-[5vw] hidden lg:block">
            <motion.img
              drag
              dragConstraints={{
                top: -700,
                right: 20,
                bottom: 50,
                left: -1400,
              }}
              dragElastic={5}
              className="h-full z-80"
              src={down}
              alt=""
            />
          </motion.div>
        </div>
      </div>
      <About />
    </>
  );
}

export default Home;
