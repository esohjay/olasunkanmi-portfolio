import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import aboutImage from "../public/olasunkanmi.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div
      id="about"
      className=" flex flex-col justify-center bg-white items-center mb-20 md:px-14 py-10 lg:flex-row
    lg:h-[500px] lg:justify-between"
    >
      <div className="w-full p-5 lg:w-[45%]">
        <h2 className="text-left font-bold text-mainColor  text-4xl md:5xl mb-2">
          About Me
        </h2>
        <p className="text-2xl text-lightColor capitalize mb-7">
          data scientist
        </p>
        <p
          data-aos="slide-right"
          data-aos-duration="1000"
          className="text-xl text-lightColor mb-5"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi
          consequuntur harum molestias unde esse dicta fuga. Perferendis, odio
          facere.
        </p>
        <button
          data-aos="slide-right"
          data-aos-duration="1000"
          className="bg-mainColor text-white p-3 font-bold w-full text-center capitalize border-2 border-transparent hover:bg-transparent
        hover:text-mainColor transition-all duration-700  hover:border-mainColor"
        >
          Hire me
        </button>
      </div>
      <div
        data-aos="slide-left"
        data-aos-duration="1000"
        className="w-full  p-5 lg:w-[45%] "
      >
        <Image
          src={aboutImage}
          layout="responsive"
          width={500}
          height={350}
          objectFit="contain"
        />
        {/* <Image
          src="/../public/olasunkanmi.jpg"
          layout="fixed"
          width={500}
          height={500}
        /> */}
      </div>
    </div>
  );
};

export default About;
