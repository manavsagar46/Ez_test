import React from "react";
import note from "../assets/secondSection/Note.png";
import india from "../assets/secondSection/IndiaGate.png";
import grp from "../assets/secondSection/Humangrp.png";
import Vector02 from "../assets/secondSection/Vector02.png";
import vector03 from "../assets/secondSection/Vector03.png";
import vector04 from "../assets/secondSection/Vector04.png";

const SecondSection = () => {
  return (
    <section className="w[100%] h-[100%] md:h-[90vh] mt-16 flex flex-col md:flex-row justify-center items-center">
      <div className="left   w-[40%] h-[100%] relative">
        <div className="">
          <img src={note} alt="" className="h-96 absolute left-50 z-30" />
        </div>
        <div>
          <img src={india} alt="" className="h-76  absolute bottom-0" />
        </div>
      </div>
      <div className="right  w-[60%] h-[100%] flex flex-col justify-center items-center gap-4 ">
        <div className="relative w-full h-[60px]">
          <span className="font-island-moments font-normal text-4xl h-20 absolute -top-8 left-58">
            Film Makers
          </span>
          <img src={Vector02} alt="" className="h-20 absolute top-2 left-80" />
          <span className="font-island-moments font-normal text-4xl h-20 absolute left-190 top-20">
            Art Curators
          </span>
          <img
            src={vector03}
            alt=""
            className="h-22 absolute left-190 top-30"
          />
          <span className="font-island-moments font-normal text-4xl h-20 absolute top-110 -left-26 z-100 ">
            Branding Experts
          </span>
          <img
            src={vector04}
            alt=""
            className="h-50 absolute top-60 -left-5 z-100"
          />
        </div>
        <div className="">
          <img src={grp} alt="" className="h-96 " />
        </div>
        <p className="font-halant text-2xl text-[#252729] font-normal">
          Take a closer look at the stories V bring to life.
        </p>
        <button className=" mt-3">
          <span className="font-instrument-sans font-normal text-base text-white bg-[#F36B2D] px-6 py-3 rounded-full hover:bg-[#e75f1f] transition-all duration-300 mt-4">
            View portfolio
          </span>
        </button>
      </div>
    </section>
  );
};

export default SecondSection;
