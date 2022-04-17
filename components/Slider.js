import React, { useState, useEffect } from "react";
import Image from "next/image";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

import data from "../lib/data";

function Slider() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <>
      <section
        className="mx-auto  my-0 w-[80vw] max-w-[800px] h-[450px] text-center
  relative overflow-hidden flex  "
      >
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={`${position} text-center`} key={id}>
              <Image
                src={image}
                width={150}
                height={150}
                objectFit="cover"
                className="rounded-full"
                alt={name}
              />

              <h4 className="text-center text-white capitalize font-medium text-3xl mt-5">
                {name}
              </h4>
              <em className="text-center text-lightColor capitalize text-lg">
                {title}
              </em>
              <p className="mt-5 text-center text-white text-md">{quote}</p>
            </article>
          );
        })}

        <div className="flex w-full justify-center absolute bottom-0">
          {people.map((item, i) => (
            <div
              key={item.id}
              className={`mx-1 h-3 w-3 rounded-full cursor-pointer ${
                i === index ? "bg-white" : "bg-lightColor"
              }`}
              onClick={() => setIndex(i)}
            ></div>
          ))}
        </div>
        {/* <button
          className="absolute -translate-y-[50%] text-black w-5 h-5 p-2
         grid place-items-center cursor-pointer border-transparent text-lg transition-all duration-500
         hover:bg-altColor bg-transparent left-0 "
          onClick={() => setIndex(index - 1)}
        >
          <FiChevronLeft />
        </button>

        <button
          className="absolute -translate-y-[25%] text-black text-center  p-2
         cursor-pointer border-transparent text-lg transition-all duration-500
         hover:bg-altColor bg-transparent right-2 "
          onClick={() => setIndex(index + 1)}
        >
          <FiChevronRight />
        </button> */}
      </section>
      <style jsx>
        {`
          article {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: all 1s;
          }
          article.activeSlide {
            opacity: 1;
            transform: translateX(0);
          }
          article.lastSlide {
            transform: translateX(-100%);
          }
          article.nextSlide {
            transform: translateX(100%);
          }
        `}
      </style>
    </>
  );
}

export default Slider;
