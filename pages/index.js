import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

import Nav from "../components/Nav";
import About from "../components/About";
import Service from "../components/Service";
import Project from "../components/Project";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import SocialBtns from "../components/SocialBtns";

import styles from "../styles/Home.module.css";
import client from "../lib/config";

export default function Home({ projects }) {
  // useEffect(() => {
  //   AOS.init({ once: true });
  // }, []);
  return (
    <div>
      <header className={`${styles.header} h-[80vh] md:h-[90vh]`}>
        <Nav background={"bg-transparent"} />
        <div className="z-0 mx-auto px-5 flex flex-col items-center justify-center gap-4 w-full h-full">
          <h2 className="text-center text-white font-medium  text-3xl">
            Hello
          </h2>
          <h1 className="text-center text-white text-4xl font-bold md:text-6xl">
            I&apos;m Olasunkanmi
          </h1>
          <em
            // data-aos="fade-up"
            // data-aos-offset="0"
            // data-aos-delay="50"
            // data-aos-duration="1000"
            className="text-center text-white text-md md:text-xl"
          >
            Analyzing and visualizing data to make better and informed business
            decisions
          </em>
          <SocialBtns />
        </div>
      </header>
      <About />
      <Service />
      <section id="project" className="w-full p-5 pb-20 mt-10  bg-white ">
        <div className="flex flex-col items-center justify-center my-16">
          <h2 className="font-bold text-3xl mb-5 text-mainColor">Projects</h2>
          <p className="text-lightColor mb-4">These are some of my works.</p>
          <div className="w-20 bg-lightColor h-[2px]"></div>
        </div>
        <div className=" grid  md:grid-cols-2 lg:grid-cols-3  gap-7 md:px-14">
          {projects.map((project) => (
            <Project data={project} key={project._id} />
          ))}
        </div>
      </section>
      <Testimonials />
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  const projects = await client.fetch(`
  *[_type == "projects"] | order(_updatedAt desc)
  `);

  return {
    props: {
      projects,
    },
    revalidate: 5,
  };
}
