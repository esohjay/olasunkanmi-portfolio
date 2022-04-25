import React from "react";
import SocialBtns from "./SocialBtns";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="w-full p-5 py-14 mb-10 bg-white" id="contact">
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="font-bold text-3xl mb-5 text-mainColor">Get In Touch</h2>
        <p className="text-lightColor mb-4 text-center">
          As a data expert, I know exactly how you can use data optimally within
          your business. Based on your objectives, we will make a plan to reach
          the right insight.
        </p>
        <div className="w-20 bg-lightColor h-[2px]"></div>
      </div>
      <div className="w-full py-10 px-5 max-w-[800px] mx-auto ">
        <div className="flex items-center ">
          <FaMapMarkerAlt className="text-2xl text-altColor mx-2" />
          <p className="text-md md:text-xl text-center text-mainColor">
            <span className="text-xl font-medium  md:text-2xl text-altColor mx-2">
              {" "}
              Address:
            </span>{" "}
            Woolmanhill, Aberdeen Scotland. United Kingdom or Remote.
          </p>
        </div>
        <div className="flex items-center ">
          <FaPhoneAlt className=" text-2xl text-altColor mx-2" />
          <p className="text-md md:text-xl text-mainColor">
            {" "}
            <span className="text-xl font-medium  md:text-2xl text-altColor mx-2">
              {" "}
              Phone:
            </span>{" "}
            +44-07517420811
          </p>
        </div>
        <div className="flex items-center mb-5">
          <FaEnvelope className="text-2xl text-altColor mx-2" />
          <a href="mailto:olasunkanmi@gmail.com">
            <p className="text-md md:text-xl text-mainColor">
              <span className="text-xl font-medium md:text-2xl text-altColor mx-2">
                Email:
              </span>{" "}
              olasunkanmi@gmail.com
            </p>{" "}
          </a>
        </div>
        <div className="flex justify-center w-full">
          <SocialBtns style={"bg-altColor bg-opacity-75"} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
