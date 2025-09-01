import React, { useState, useEffect } from "react";

function Header() {
  //
  const [isScrolledToLast, setIsScrolledToLast] = useState(false);

  const handleScroll = () => {
    const lastComponent = document.getElementById("footer");
    if (lastComponent) {
      const rect = lastComponent.getBoundingClientRect();
      setIsScrolledToLast(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //
  return (
    <div className="h-[15vh] w-full bg-[#fdfbf800] pt-[3vw] px-[5vw] fixed top-[0%] z-90 pointer-events-none">
      {/* //sm */}
      <div
        className={`flex justify-between pointer-events-auto lg:hidden px-1 ${
          isScrolledToLast ? "text-white" : "text-black"
        }`}
      >
        <div className="">
          <a href="#Home">
            <h1 className="text-[4vw] font-[gilroy] uppercase cursor-pointer underline underline-offset-3">
              Home
            </h1>
          </a>
        </div>
        <div className="">
          <a href="#Contact">
            <h1 className="text-[4vw] font-[gilroy] uppercase cursor-pointer underline underline-offset-3">
              Contact
            </h1>
          </a>
        </div>
      </div>
      {/* //lg */}
      <div
        className={`lg:flex justify-between underline underline-offset-3 hidden pointer-events-auto ${
          isScrolledToLast ? "text-white" : "text-black"
        }`}
      >
        <div className="Hover-text h-[2vh]">
          <a href="#Home">
            <h1 className="Move text-[.8vw] font-[gilroy] uppercase cursor-pointer ">
              Home <br />
              Home
            </h1>
          </a>
        </div>
        <div className="Hover-text h-[2vh]">
          <a href="#Project">
            <h1 className="Move text-[.8vw] font-[gilroy] uppercase cursor-pointer ">
              Project <br />
              Project
            </h1>
          </a>
        </div>
        <div className="Hover-text h-[2vh]">
          <a href="#About">
            <h1 className="Move text-[.8vw] font-[gilroy] uppercase cursor-pointer ">
              About <br />
              About
            </h1>
          </a>
        </div>
        <div className="Hover-text h-[2vh]">
          <a href="#Contact">
            <h1 className="Move text-[.8vw] font-[gilroy] uppercase cursor-pointer ">
              Contact <br />
              Contact
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

//bg-[#fdfbf8]
