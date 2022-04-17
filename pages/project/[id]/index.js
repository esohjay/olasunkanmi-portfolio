import Link from "next/link";
import Nav from "../../../components/Nav";
import Image from "next/image";
import Meta from "../../../components/Meta";
import { urlFor } from "../../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../../lib/config";

function Project({ project }) {
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };
  return (
    <>
      <Meta title={project?.title} description={project?.summary} />
      <section>
        <Nav />
        <div className="w-full py-16 flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="font-bold text-3xl text-mainColor">
              {project?.title}
            </h2>
            <p className="text-lightColor mb-4 text-center">
              {project?.summary}
            </p>
            <div className="w-20 bg-lightColor h-[2px]"></div>
          </div>
          <div
            className=" flex flex-col justify-center bg-white items-center mb-12 md:px-14 py-10 lg:flex-row
    lg:h-[500px] lg:justify-between"
          >
            <div className="w-full p-5 lg:w-[45%]">
              <p className="text-md md:text-lg text-center text-lightColor mb-12">
                <BlockContent
                  blocks={project.description}
                  serializers={serializers}
                />
              </p>
              <Link href={project.projectLink}>
                <a
                  className="bg-mainColor block mb-5 text-white p-3 font-bold w-full text-center capitalize border-2 border-transparent hover:bg-transparent
        hover:text-mainColor transition-all duration-700  hover:border-mainColor"
                >
                  View Project
                </a>
              </Link>
              <Link href={project.codeLink}>
                <a
                  className="bg-transparent block  mb-5 text-mainColor p-3 font-bold w-full text-center capitalize border-2 border-mainColor hover:bg-mainColor
     transition-all duration-700   hover:text-white"
                >
                  View on Github
                </a>
              </Link>
            </div>
            <div className="w-full  p-5 lg:w-[45%] ">
              <Image
                src={urlFor(project?.imgUrl).url()}
                layout="responsive"
                width={500}
                height={350}
                objectFit="contain"
                alt={project.title}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center w-full p-5 mb-10">
            <div className="flex flex-col justify-center items-center p-5 w-full md:w-[45%] space-y-6">
              <h3 className="text-mainColor text 2xl">Project Goals</h3>
              <p className="text-lightColor">
                <BlockContent blocks={project.goal} serializers={serializers} />
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-5 w-full md:w-[45%] space-y-6">
              <h3 className="text-mainColor text 2xl">Project Goals</h3>
              <p className="text-lightColor">
                <BlockContent blocks={project.goal} serializers={serializers} />
              </p>
            </div>
          </div>
          <div className="w-full text-center">
            <Link href="/">
              <a
                className=" text-center font-medium text-white bg-mainColor py-3 px-16 hover:bg-transparent
              border-2 border-transparent hover:text-mainColor hover:border-mainColor transition-all duration-700"
              >
                Go Back
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export const getStaticProps = async (context) => {
  const { id = "" } = context.params;
  console.log(id);
  const project = await client.fetch(
    `
  *[_type == "projects" && _id == $id][0]`,
    { id }
  );

  //   //const project = await res.json();
  console.log(project);

  return {
    props: {
      project,
    },
    revalidate: 5,
  };
};
export const getStaticPaths = async () => {
  const projects = await client.fetch(`
  *[_type == "projects"] | order(title)`);

  const ids = projects.map((project) => project._id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  console.log(paths);
  return {
    paths,
    fallback: "blocking",
  };
};

export default Project;
