import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDatabase } from "react-icons/fa";
import { BsFillPieChartFill } from "react-icons/bs";
import { DiGoogleAnalytics } from "react-icons/di";
import { CgData } from "react-icons/cg";
import { GiTeacher } from "react-icons/gi";

function Service() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section id="service" className="w-full p-5 my-10 ">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="flex flex-col items-center justify-center mb-10"
      >
        <h2 className="font-bold text-3xl mb-5 text-mainColor">What I Do</h2>
        <p className="text-lightColor mb-4 text-center">
          Let me help make better use of your data. My expertise can be used to
          clean, analyse, interpret and visualize your data.
        </p>
        <div className="w-20 bg-lightColor h-[2px]"></div>
      </div>
      <div
        data-aos-duration="1000"
        data-aos="fade-up"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:px-14"
      >
        {/* Single Card */}
        <div className="text-center p-5 bg-white cursor-pointer hover:shadow-xl mb-6 transition-all duration-1000 ">
          <button className="rounded-full p-4 text-4xl  bg-transparent  text-lightColor border border-lightColor border-solid mb-5">
            <DiGoogleAnalytics />
          </button>
          <h3 className="text-2xl text-mainColor font-medium mb-5 ">
            Data Analysis
          </h3>
          <p className="text-lightColor text-lg">
            I am specialized in analyzing data. Results, trends and
            recommendations are clearly presented in reports or tools.
          </p>
        </div>
        {/* End of Single Card */}
        {/* Single Card */}
        <div className="text-center p-5 bg-white cursor-pointer hover:shadow-xl mb-6 transition-all duration-1000 ">
          <button className="rounded-full p-4 text-4xl  bg-transparent  text-lightColor border border-lightColor border-solid mb-5">
            <BsFillPieChartFill />
          </button>
          <h3 className="text-2xl text-mainColor font-medium mb-5 ">
            Data Visualization
          </h3>
          <p className="text-lightColor text-lg">
            Creation of static and interactive dataviz and dashboards, review of
            scientific figures.
          </p>
        </div>
        {/* End of Single Card */}
        {/* Single Card */}
        <div className="text-center p-5 bg-white cursor-pointer hover:shadow-xl mb-6 transition-all duration-1000 ">
          <button className="rounded-full p-4 text-4xl  bg-transparent  text-lightColor border border-lightColor border-solid mb-5">
            <FaDatabase />
          </button>
          <h3 className="text-2xl text-mainColor font-medium mb-5 ">
            Data Management
          </h3>
          <p className="text-lightColor text-lg">
            Data harvesting, cleaning and reshaping. Development of automated
            workflows.
          </p>
        </div>
        {/* End of Single Card */}
        {/* Single Card */}
        <div className="text-center p-5 bg-white cursor-pointer hover:shadow-xl mb-6 transition-all duration-1000 ">
          <button className="rounded-full p-4 text-4xl  bg-transparent  text-lightColor border border-lightColor border-solid mb-5">
            <CgData />
          </button>
          <h3 className="text-2xl text-mainColor font-medium mb-5 ">
            Data Mining
          </h3>
          <p className="text-lightColor text-lg">
            Data exploration, application of statistical methods, reproducible
            data analysis.
          </p>
        </div>
        {/* End of Single Card */}
        {/* Single Card */}
        <div className="text-center p-5 bg-white cursor-pointer hover:shadow-xl mb-6 transition-all duration-1000 ">
          <button className="rounded-full p-4 text-4xl  bg-transparent  text-lightColor border border-lightColor border-solid mb-5">
            <GiTeacher />
          </button>
          <h3 className="text-2xl text-mainColor font-medium mb-5 ">
            Teaching &#38; Training
          </h3>
          <p className="text-lightColor text-lg">
            Short talks or multi-day courses on data visualization, R, Python,
            data analytics and more.
          </p>
        </div>
        {/* End of Single Card */}
      </div>
    </section>
  );
}

export default Service;
