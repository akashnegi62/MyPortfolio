"use client";
import React, { useRef, useState, useEffect } from "react";
// SPLIT + GSAP
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// MOTION
import { easeIn, motion } from "motion/react";
motion;

// VIDEO
import work1 from "../assets/Video/work1.mp4";
import work2 from "../assets/Video/work2.mp4";
function Project() {
  const Textref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [mouse, setmouse] = useState(false);
  const [mouse2, setmouse2] = useState(false);
  const handleHover = () => {
    setVisible(true);
    setmouse(true);
  };
  const handleHoverLeave = () => {
    setVisible(false);
    setmouse(false);
  };
  const handleHover2 = () => {
    setVisible2(true);
    setmouse2(true);
  };
  const handleHoverLeave2 = () => {
    setVisible2(false);
    setmouse2(false);
  };

  // HANDLE MOUSE
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [position1, setPosition1] = useState({ x: 0, y: 0 });
  const mouseref = useRef(null);
  const mouseref1 = useRef(null);
  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = mouseref.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setPosition({ x, y });
    };
    const mouseElement = mouseref.current;
    mouseElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      mouseElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove1 = (event) => {
      const rect = mouseref1.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setPosition1({ x, y });
    };
    const mouseElement = mouseref1.current;
    mouseElement.addEventListener("mousemove", handleMouseMove1);

    return () => {
      mouseElement.removeEventListener("mousemove", handleMouseMove1);
    };
  }, []);

  // TEXT ANIMATIONS

  const workRefs = useRef([]);

  useEffect(() => {
    workRefs.current.forEach((workRefs) => {
      const splitText = new SplitType(workRefs, {
        types: "lines, words, chars",
      });

      gsap.from(splitText.lines, {
        y: "100%",
        opacity: 0,
        ease: "back.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: workRefs,
          start: "top center",
          end: "top 0%",
          scrub: true,
          markers: false,
        },
      });
      return () => {
        splitText.revert();
      };
    });
  }, []);

  // Open Link
  const openLink = () => {
    // Open the link in a new tab
    window.open("https://akash-internship-project.netlify.app/", "_blank");
  };

  const openLink2 = () => {
    // Open the link in a new tab
    window.open("https://akashnegi62.github.io/Lazarev/", "_blank");
  };

  return (
    <div
      id="Project"
      className="min-h-screen w-full bg-[#f2f2f2] text-[#383939] pb-[30vw] lg:py-[5vw] px-[5vw]"
    >
      <div className="min-h-[40vh] lg:h-full text pl-[0vw] lg:pl-[8vw] relative flex items-center lg:overflow-hidden">
        {/* //sm */}
        <h1
          ref={(el) => (workRefs.current[2] = el)}
          className="text-[20vw] font-[gilroy] leading-[16vw] lg:hidden"
        >
          Feat{" "}
          <span className="ml-[30vw]">
            Wo<span className="font-[gilit] text-[#14cf92]">r</span>
          </span>
          ks
        </h1>

        {/* //lg */}
        <h1
          ref={(el) => (workRefs.current[0] = el)}
          className="text-[10vw] font-[gilroy] hidden lg:block"
        >
          Feat Wo<span className="font-[gilit] text-[#14cf92]">r</span>ks
        </h1>

        <span
          ref={(el) => (workRefs.current[1] = el)}
          className="font-[gilsem] text-[1.2vw] ml-[1vw] mt-[5vw] hidden lg:block"
        >
          (02)
        </span>
        {/* svg */}
        {/* //sm */}
        <svg
          className="stroke-black rotate-45 absolute bottom-[5%] left-[10%] lg:hidden"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path d="M3.10162 3.10156L62.9999 62.9999"></path>{" "}
          <path d="M63 1.00001L63 63L0.999989 63"></path>{" "}
        </svg>
        {/* //lg */}
        <svg
          className="stroke-black rotate-90 absolute top-[40%] right-[10%] hidden lg:block"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path d="M3.10162 3.10156L62.9999 62.9999"></path>{" "}
          <path d="M63 1.00001L63 63L0.999989 63"></path>{" "}
        </svg>
      </div>
      <div className="corner flex flex-col lg:flex-row gap-[6vw] items-end mt-[8vw]">
        {/* corner1 */}

        <div
          ref={mouseref}
          onMouseEnter={() => handleHover()}
          onMouseLeave={() => handleHoverLeave()}
          onClick={() => openLink()}
          className="work1 h-[50vh] lg:h-[80vh] w-full lg:w-[55%] bg-amber-200 rounded-[10vw] lg:rounded-[2.5vw] relative cursor-pointer"
        >
          {/* role */}
          <div className="role">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: visible ? 1 : 0,
                y: visible ? 0 : -20,
                display: visible ? "block" : "none",
              }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className="bg-white rounded-2xl lg:rounded-[2.5vw] px-[4vw] py-[2vw] lg:px-[2vw] lg:py-[.7vw] absolute bottom-[34vw] left-[5vw] lg:bottom-[10vw] lg:left-[1.5vw]"
            >
              <p className="text-[3vw] lg:text-[.8vw] font-[gilsem] uppercase">
                year: &nbsp; 2025
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: visible ? 1 : 0,
                y: visible ? 0 : -20,
                display: visible ? "block" : "none",
              }}
              transition={{ duration: 0.5, delay: 0.2, ease: "backInOut" }}
              className="bg-white rounded-2xl lg:rounded-[2.5vw] px-[4vw] py-[2vw] lg:px-[2vw] lg:py-[.7vw] absolute bottom-[24vw] left-[5vw] lg:bottom-[7vw] lg:left-[1.5vw]"
            >
              <p className="font-[gilsem] text-[3vw] lg:text-[.8vw] uppercase">
                role: &nbsp; frontend
              </p>
            </motion.div>
          </div>

          {/* info */}
          <div className="info flex items-center lg:items-start gap-[1vw] absolute bottom-[5vw] left-[4vw] lg:bottom-[1.2vw] lg:left-[1vw]">
            <div className="capsule h-[8vh] w-[40vw] lg:h-[9vh] lg:w-[15vw] bg-white rounded-[12vw] flex items-center justify-center text-lg lg:text-2xl font-[gilsem] lg:rounded-[2.5vw]">
              AdMyBrand
            </div>
            <div className="h-[7vh] w-[7vh] lg:h-[9vh] lg:w-[9vh] rounded-full bg-white flex items-center justify-center">
              <svg
                className="arrow h-5 lg:h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 9.56 9.56"
              >
                {" "}
                <line
                  id="line1"
                  x1="0.27"
                  y1="9.29"
                  x2="9.18"
                  y2="0.38"
                  fill="#4e4e4e"
                  stroke="#4e4e4e"
                  strokeMiterlimit="10"
                  strokeWidth="0.75"
                ></line>{" "}
                <line
                  id="line2"
                  x1="0.27"
                  y1="9.29"
                  x2="9.18"
                  y2="0.38"
                  fill="#4e4e4e"
                  stroke="#4e4e4e"
                  strokeMiterlimit="10"
                  strokeWidth="0.75"
                ></line>{" "}
                <polyline
                  id="arrow-head-1"
                  points="5.01 0.38 9.18 0.38 9.18 4.55"
                  fill="none"
                  stroke="#4e4e4e"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.75"
                ></polyline>{" "}
                <polyline
                  className="arrow-head"
                  points="5.01 0.38 9.18 0.38 9.18 4.55"
                  fill="none"
                  stroke="#4e4e4e"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.75"
                ></polyline>{" "}
              </svg>
            </div>
          </div>
          {/* holder */}
          <motion.div
            style={{
              left: `${position.x - 240}px`,
              top: `${position.y - 15}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: mouse ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: easeIn }}
            className="holder w-full m-auto hidden lg:block"
          >
            <div className="mouse w-full flex gap-[.5vw] ml-[13.5vw] mb-[1vw]">
              <div className="h-[4vh] w-[3.5vh] border-2 border-white rounded-full"></div>
              <div className="bg-[#ffffff] rounded-[2.5vw] px-[2vw] py-[.5vw] inline-block">
                <p className="font-[gilroy] text-[.8vw] uppercase">NEXT JS</p>
              </div>
            </div>
            <div className="showcase h-[28vh] w-[45%] bg-[#ffffff83] rounded-[.5vw] rounded-b-[.1vw] px-[.1vw] pb-[.1vw] m-auto">
              <div className="dot flex gap-[.1vw] py-[.5vw] px-[.5vw]">
                <span className="h-[.5vw] w-[.5vw] rounded-full bg-[#ffffff] inline-block"></span>
                <span className="h-[.5vw] w-[.5vw] rounded-full bg-[#ffffff] inline-block"></span>
                <span className="h-[.5vw] w-[.5vw] rounded-full bg-[#ffffff] inline-block"></span>
              </div>
              <div className="view h-[25.2vh] w-full bg-[#ffffffa6] rounded-[.2vw] overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  className="h-full w-full object-cover"
                  src={work1}
                ></video>
              </div>
            </div>
          </motion.div>
        </div>

        {/* corner2 */}

        <motion.div
          ref={mouseref1}
          onMouseEnter={() => handleHover2()}
          onMouseLeave={() => handleHoverLeave2()}
          onClick={() => openLink2()}
          className="work2 h-[50vh] w-full lg:h-[55vh] lg:w-[32%] bg-amber-200 rounded-[10vw] lg:rounded-[2.5vw] relative cursor-pointer"
        >
          {/* role */}
          <div className="role">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: visible2 ? 1 : 0,
                y: visible2 ? 0 : -20,
                display: visible2 ? "block" : "none",
              }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className="bg-white rounded-2xl lg:rounded-[2.5vw] px-[4vw] py-[2vw] lg:px-[2vw] lg:py-[.7vw] absolute bottom-[34vw] left-[5vw] lg:bottom-[10vw] lg:left-[1.5vw]"
            >
              <p className="font-[gilsem] text-[3vw] lg:text-[.8vw] uppercase">
                year: &nbsp; 2025
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: visible2 ? 1 : 0,
                y: visible2 ? 0 : -20,
                display: visible2 ? "block" : "none",
              }}
              transition={{ duration: 0.5, delay: 0.2, ease: "backInOut" }}
              className="bg-white rounded-2xl lg:rounded-[2.5vw] px-[4vw] py-[2vw] lg:px-[2vw] lg:py-[.7vw] absolute bottom-[24vw] left-[5vw] lg:bottom-[7vw] lg:left-[1.5vw]"
            >
              <p className="font-[gilsem] text-[3vw] lg:text-[.8vw] uppercase">
                role: &nbsp; frontend , backend
              </p>
            </motion.div>
          </div>
          {/* info */}
          <div className="info flex items-center lg:items-start gap-[1vw] absolute bottom-[5vw] left-[4vw] lg:bottom-[1.2vw] lg:left-[1vw]">
            <div className="capsule h-[8vh] w-[40vw] lg:h-[9vh] lg:w-[15vw] bg-white rounded-[12vw] flex items-center justify-center text-lg lg:text-2xl font-[gilsem] lg:rounded-[2.5vw]">
              ChatSphere
            </div>
            <div className="h-[7vh] w-[7vh] lg:h-[9vh] lg:w-[9vh] rounded-full bg-white flex justify-center items-center">
              <svg
                className="arrow h-5 lg:h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 9.56 9.56"
              >
                {" "}
                <line
                  id="line1"
                  x1="0.27"
                  y1="9.29"
                  x2="9.18"
                  y2="0.38"
                  fill="#4e4e4e"
                  stroke="#4e4e4e"
                  strokeMiterlimit="10"
                  strokeWidth="0.75"
                ></line>{" "}
                <line
                  id="line2"
                  x1="0.27"
                  y1="9.29"
                  x2="9.18"
                  y2="0.38"
                  fill="#4e4e4e"
                  stroke="#4e4e4e"
                  strokeMiterlimit="10"
                  strokeWidth="0.75"
                ></line>{" "}
                <polyline
                  id="arrow-head-1"
                  points="5.01 0.38 9.18 0.38 9.18 4.55"
                  fill="none"
                  stroke="#4e4e4e"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.75"
                ></polyline>{" "}
                <polyline
                  className="arrow-head"
                  points="5.01 0.38 9.18 0.38 9.18 4.55"
                  fill="none"
                  stroke="#4e4e4e"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.75"
                ></polyline>{" "}
              </svg>
            </div>
          </div>
          {/* holder */}
          <motion.div
            style={{
              left: `${position1.x - 75}px`,
              top: `${position1.y - 15}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: mouse2 ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: easeIn }}
            className="holder w-full m-auto hidden lg:block"
          >
            <div className="mouse w-full flex gap-[.5vw] ml-[3.5vw] mb-[1vw]">
              <div className="h-[4vh] w-[3.5vh] border-2 border-white rounded-full"></div>
              <div className="bg-white rounded-[2.5vw] px-[2vw] py-[.5vw] inline-block">
                <p className="font-[gilroy] text-[.8vw] uppercase">NEXT JS</p>
              </div>
            </div>
            <div className="showcase h-[28vh] w-[75%] bg-[#ffffff83] rounded-[.5vw] rounded-b-[.1vw] px-[.1vw] pb-[.1vw] m-auto">
              <div className="dot flex gap-[.1vw] py-[.5vw] px-[.5vw]">
                <span className="h-[.5vw] w-[.5vw] rounded-full bg-[#ffffff] inline-block"></span>
                <span className="h-[.5vw] w-[.5vw] rounded-full bg-[#ffffff] inline-block"></span>
                <span className="h-[.5vw] w-[.5vw] rounded-full bg-[#ffffff] inline-block"></span>
              </div>
              <div className="view h-[25.2vh] w-full bg-[#ffffffa6] rounded-[.2vw]">
                <video
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover"
                  src={work2}
                ></video>
              </div>
            </div>
          </motion.div>
          {/* // */}
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
