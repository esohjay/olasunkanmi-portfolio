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
        <pre
          data-language={props.node.language}
          style={{
            background: "black",
            color: "white",
            padding: "8px",
            marginBottom: "16px",
            width: "100%",
            overflow: "auto",
          }}
        >
          <code>{props.node.code}</code>
        </pre>
      ),
      image: ({ node: { asset } }) => (
        <Image
          src={urlFor(asset).url()}
          layout="responsive"
          width={400}
          height={350}
          objectFit="contain"
          alt={project.title}
        />
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
            <p className="text-lightColor mb-2 text-center">
              {project?.summary}
            </p>
            {/* Buttons for project and code link */}
            <div className="flex flex-row  w-[60%] gap-2 p-2 mb-4 mx-auto justify-center">
              <Link href={project.projectLink}>
                <a
                  className="bg-mainColor block text-sm text-white px-2 py-1 font-bold text-center capitalize border-2 border-transparent hover:bg-transparent
            hover:text-mainColor transition-all duration-700   hover:border-mainColor"
                >
                  View Project
                </a>
              </Link>
              <Link href={project.codeLink}>
                <a
                  className="bg-transparent block  text-sm text-mainColor px-2 py-1 font-bold text-center capitalize border-2 border-mainColor hover:bg-mainColor
                transition-all duration-700   hover:text-white"
                >
                  View on Github
                </a>
              </Link>
            </div>
            {/*End of Buttons for project and code link */}
            <div className="w-20 bg-lightColor h-[2px]"></div>
          </div>
          {/* Start of content area */}
          <div
            className=" flex flex-col justify-center bg-white items-center mb-12 md:px-14 py-4 
  "
          >
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
            <div className="p-5 w-full md:w-[70%] space-y-6">
              <h3 className="text-mainColor text-3xl font-bold capitalize">
                About the project
              </h3>
              <p className="text-lightColor">
                <BlockContent blocks={project.goal} serializers={serializers} />
              </p>
            </div>
            <div className="w-full p-5 lg:w-[70%] space-y-6 mb-5">
              <h3 className="text-mainColor text-3xl font-bold mb-5 capitalize">
                project details
              </h3>
              <p className="text-md md:text-lg  text-lightColor">
                <BlockContent
                  blocks={project.description}
                  serializers={serializers}
                  dataset={client.clientConfig.dataset}
                  projectId={client.clientConfig.projectId}
                />
              </p>
            </div>
            <div className=" p-5 w-full md:w-[70%] mb-5 space-y-6">
              <h3 className="text-mainColor text-3xl font-bold">Conclusion</h3>
              <p className="text-lightColor">
                <BlockContent
                  blocks={project.result}
                  serializers={serializers}
                />
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  w-[60%] p-5 mx-auto justify-between">
            <Link href={project.projectLink}>
              <a
                className="bg-mainColor block mb-5 text-white p-3 font-bold w-full text-center capitalize border-2 border-transparent hover:bg-transparent
        hover:text-mainColor transition-all duration-700 md:w-1/4  hover:border-mainColor"
              >
                View Project
              </a>
            </Link>
            <Link href={project.codeLink}>
              <a
                className="bg-transparent block  mb-5 text-mainColor p-3 font-bold w-full text-center capitalize border-2 border-mainColor hover:bg-mainColor
     transition-all duration-700 md:w-1/4  hover:text-white"
              >
                View on Github
              </a>
            </Link>
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
  // console.log(paths);
  return {
    paths,
    fallback: "blocking",
  };
};

export default Project;
