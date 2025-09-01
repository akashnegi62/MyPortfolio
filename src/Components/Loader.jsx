import React from "react";
import { motion } from "motion/react";
motion;
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Loader() {
  useGSAP(() => {
    gsap.to(".Handler", {
      y: "-100%",
      duration: 1,
      delay: 1.5,
      ease: "power1.out",
    });
  });
  useGSAP(() => {
    gsap.to(".loader_end", {
      height: "0vh",
      duration: 1,
      delay: 2,
      ease: "power1.out",
    });
  });
  return (
    <div className="Handler min-h-screen w-full fixed top-0 left-0 z-99">
      <div className="load h-screen w-full bg-[#171617] flex justify-center items-center">
        <div className="text_loader text-[5vw] font-[gilsem] text-white flex items-center gap-4 lg:gap-7">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "backInOut" }}
            className="text-5xl lg:text-[5vw]"
          >
            Akash{" "}
            <span className="font-[gilit] text-5xl lg:text-[5vw] text-[#14cf92]">
              Negi
            </span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
            className="text-5xl lg:text-[5vw]"
          >
            is a
          </motion.h1>
        </div>
      </div>
      <div className="loader_end h-[70vh] w-full bg-[#14cf92]"></div>
    </div>
  );
}

export default Loader;
