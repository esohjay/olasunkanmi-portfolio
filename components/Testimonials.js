import React from "react";
import Slider from "./Slider";

function Testimonials() {
  return (
    <section
      className="w-full p-5  bg-sliderPattern bg-fixed bg-center bg-cover
     "
    >
      {/* <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="font-bold text-3xl text-mainColor">Testimonials</h2>
        <p className="text-lightColor mb-4 text-center">
          Here are some of the things my clients said about me.
        </p>
        <div className="w-20 bg-lightColor h-[2px]"></div>
      </div> */}
      <Slider />
    </section>
  );
}

export default Testimonials;
