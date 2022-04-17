import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import SocialBtns from "./SocialBtns";

function Footer() {
  const [date, setDate] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    setDate(year);
    AOS.init({ once: true });
  });
  return (
    <footer className="flex flex-col justify-center space-y-6 py-10 bg-altColor">
      <h3 className="text-center text-white text-xl font-medium">
        Olasunkanmi Daramola
      </h3>
      <div data-aos="fade-down" data-aos-duration="700">
        <SocialBtns style={"border-[1px] border-white bg-altColor"} />
      </div>
      <p className="text-center  uppercase text-md md:text-lg text-white">
        &copy; {date} 2DSTECH - All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
