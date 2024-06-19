"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store'

const Projects: React.FC<{}> = () => {
  const data = useSelector((state: RootState) => state.api.data);
  // console.log(data.project)
  return (
    <section id="projects" className="z-50 relative">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="px-3 md:px-5 w-full z-50 cursor-pointer">

        {/* <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mt-7">
          <Link
            href="https://web.hr/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="WebHR Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">WebHR</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website comprising more than 50 screens,
                  along with the integration of a blog using Next.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://web.hr/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="WebHR Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">WebHR</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website comprising more than 50 screens,
                  along with the integration of a blog using Next.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://web.hr/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="WebHR Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">WebHR</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website comprising more than 50 screens,
                  along with the integration of a blog using Next.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://web.hr/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="WebHR Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">WebHR</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website comprising more than 50 screens,
                  along with the integration of a blog using Next.js.
                </p>
              </div>
            </div>
          </Link>


        </div> */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-2 sm:gap-3 mt-5 place-content-center w-full sm:p-2 px-4 max-w-6xl mx-auto">
          {/* ! OLD */}
          {/* {data.project?.map((item: any, index: number) => (
            <div className="inter-var" key={index}>
              <CardContainer className="m-2">

                <CardBody className="size-fit p-2  backdrop-blur-md  bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] dark:bg-black/75 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-2 md:p-4 border  dark:hover:border-yellow-500/15">
                  <CardItem
                    translateZ="90" translateX={-5}
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {item.name}
                  </CardItem>
                  <CardItem translateZ="150" className="mt-2 size-full">
                    <Image
                      src={item.image}
                      height="250"
                      width="250"
                      className="h-36 max-w-sm w-auto object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="50"
                    className="text-neutral-500 text-sm max-w-sm  dark:text-neutral-400 line-clamp-3"
                  >
                    {item.description}
                  </CardItem>

                  <div className="flex justify-between items-center mt-2">
                    <CardItem
                      translateZ={30} rotateX={-10}
                      as={Link}
                      href=""
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal border border-b-2 dark:text-white"
                    >
                      # {item.tag}
                    </CardItem>

                    <CardItem
                      translateZ={70}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Lihat  →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

            </div>
          ))} */}

          {data.project?.map((item: any, index: number) => (
            <CardContainer key={index} className="">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.name}
                </CardItem>
                <CardItem translateZ="150" className="w-full mt-4 justify-center">
                  <Image
                    src={item.image}
                    height="1000"
                    width="1000"
                    className="h-44 w-auto object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60" translateY={-2}
                  className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-400 text-pretty line-clamp-3"
                >
                  {item.description}
                </CardItem>

                <div className="flex justify-between items-center mt-2">
                  <CardItem
                    translateZ={20} translateX={-10} translateY={10}
                    as={Link}
                    href="#"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    {item.tag}
                  </CardItem>
                  <CardItem
                    translateZ={100} translateX={2}
                    as="button"
                    className="btn btn-primary btn-sm px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Open →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Projects;
