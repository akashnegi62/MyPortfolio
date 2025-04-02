import React from "react";
import { motion } from "motion/react";
motion;
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// Image
import Html from "../assets/Image/html5.svg";
import Css from "../assets/Image/css.svg";
import Js from "../assets/Image/js.svg";
import Re from "../assets/Image/react.svg";
import Redux from "../assets/Image/redux.webp";
import Tail from "../assets/Image/tailwind.svg";
import Mo from "../assets/Image/motion.webp";
import Node_icon from "../assets/Image/nodejs.svg";
import Exp_ico from "../assets/Image/express.svg";
import Mongo from "../assets/Image/mongodb.svg";
import Git from "../assets/Image/git.svg";
import Github from "../assets/Image/github.svg";
import Npm from "../assets/Image/npm.svg";
import Fig from "../assets/Image/figma.svg";
function Stack() {
  const data = [
    {
      name: "HTML",
      img: Html,
    },
    {
      name: "CSS",
      img: Css,
    },
    {
      name: "Javascript",
      img: Js,
    },
    {
      name: "React",
      img: Re,
    },
    {
      name: "Redux",
      img: Redux,
    },
    {
      name: "Tailwind css",
      img: Tail,
    },
  ];

  const data2 = [
    {
      name: "Motion",
      img: Mo,
    },
    {
      name: "Node. js",
      img: Node_icon,
    },
    {
      name: "Express. js",
      img: Exp_ico,
    },
    {
      name: "MongoDB",
      img: Mongo,
    },
  ];

  const data3 = [
    {
      name: "Git",
      img: Git,
    },
    {
      name: "Github",
      img: Github,
    },
    {
      name: "NPM",
      img: Npm,
    },
    {
      name: "Figma",
      img: Fig,
    },
  ];

  //
  useGSAP(() => {
    gsap.from(".stack_head h1", {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".stack_head h1",
        start: "top 60%",
        end: "top 30%",
        scrub: true,
        markers: false,
      },
    });
  });

  useGSAP(() => {
    gsap.from(".stack ", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".stack",
        start: "top 60%",
        end: "top 30%",
        scrub: true,
        markers: false,
      },
    });
  });

  return (
    <div className="Stack h-[50vh] w-full lg:w-[100%] flex flex-col py-10 mt-[10vw] lg:mt-[8vw]">
      <div className="stack_head text-3xl lg:text-[5vw] font-[gilsem] text-center text-[#393938]">
        <h1>My Tech Stack</h1>
      </div>

      {/* /// body */}

      <div className="stack_body flex flex-wrap justify-center gap-4 mt-[10vw] lg:mt-10">
        {data.map((i, id) => (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5, color: "#14cf92" }}
            key={id}
            className="stack h-[4vh] w-fit text-[#393938] border-1 border-gray-500 py-2 px-2 rounded-lg flex items-center gap-2 overflow-hidden"
          >
            <img className="h-6" src={i.img} alt="" />
            <h1>{i.name}</h1>
          </motion.div>
        ))}
      </div>

      <div className="stack_body flex flex-wrap justify-center gap-4 mt-[10vw] lg:mt-5">
        {data2.map((i, id) => (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5, color: "#14cf92" }}
            key={id}
            className="stack h-[4vh] w-fit text-[#393938] border-1 border-gray-500 py-2 px-2 rounded-lg flex items-center gap-2 overflow-hidden"
          >
            <img className="h-6" src={i.img} alt="" />
            <h1>{i.name}</h1>
          </motion.div>
        ))}
      </div>

      <div className="stack_body flex flex-wrap justify-center gap-4 mt-[10vw] lg:mt-5">
        {data3.map((i, id) => (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5, color: "#14cf92" }}
            key={id}
            className="stack h-[4vh] w-fit text-[#393938] border-1 border-gray-500 py-2 px-2 rounded-lg flex items-center gap-2 overflow-hidden"
          >
            <img className="h-6" src={i.img} alt="" />
            <h1>{i.name}</h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
