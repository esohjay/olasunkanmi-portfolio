import React from "react";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Project({ data }) {
  return (
    <Link href={`/project/${data._id}`}>
      <div
        className="group relative bg-white w-full cursor-pointer after:absolute 
        after:top-0 after:left-0 after:w-full after:h-full after:border-4 after:border-mainColor
        after:opacity-0 transition-all duration-700 hover:after:opacity-100 hover:after:scale-75
        after:transition-all after:duration-700"
      >
        <div className="group-hover:opacity-5 w-full transition-all duration-700">
          <Image
            src={urlFor(data?.imgUrl).url()}
            width="500"
            height="350"
            objectFit="cover"
          />
        </div>
        <div
          className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] 
        opacity-0 group-hover:opacity-100 w-full text-center transition-all duration-700"
        >
          <h3 className="font-bold text-mainColor text-2xl mb-2">
            {data?.title}
          </h3>
          <div className="">
            <button className="rounded-full p-3 mx-2 md:mx-3 bg-altColor text-white hover:bg-white hover:text-altColor">
              <FaExternalLinkAlt />
            </button>
            <button className="rounded-full p-3 mx-2 md:mx-3 bg-altColor text-white hover:bg-white hover:text-altColor">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Project;
