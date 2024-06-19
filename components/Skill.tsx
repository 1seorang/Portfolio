'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store'
import { HoverEffect } from "@/components/ui/card-hover-effect";
import './style.css'

interface dataSkill {
  icon: string,
  title: string,
  desc: string,
  tag?: string,
  link?: string
}
// const dataSkills: dataSkill[] = [
//   {
//     title: "Next.JS",
//     desc: "Java Script",
//     icon: "./icons/nextjs.svg",
//     tag: "Front End",
//     link: '#'
//   },
//   {
//     title: "ReactJS",
//     desc: "Java Script",
//     icon: "./icons/react.svg",
//     tag: "Front End",
//     link: '#'
//   },
//   {
//     title: "Tailwind",
//     desc: "CSS Framework",
//     icon: "./icons/tailwind.svg",
//     tag: "CSS",
//     link: '#'
//   },
//   {
//     title: "Sheet",
//     desc: "Google Sheet",
//     icon: "./icons/sheet.svg",
//     tag: "Database",
//     link: '#'
//   },
//   {
//     title: "Notion",
//     desc: "BaaS platform",
//     icon: "./icons/notion.svg",
//     tag: "Database",
//     link: '#'
//   },
//   {
//     title: "Firebase",
//     desc: "BaaS platform",
//     icon: "./icons/firebase.svg",
//     tag: "Database",
//     link: '#'
//   },
//   {
//     title: "Notion",
//     desc: "BaaS platform",
//     icon: "./icons/notion.svg",
//     tag: "Database",
//     link: '#'
//   },
//   {
//     title: "SQL",
//     desc: "MySQL Postgre",
//     icon: "./icons/sql.svg",
//     tag: "Database",
//     link: '#'
//   },
//   {
//     title: "NoSQL",
//     desc: "TSDB MongoDB",
//     icon: "./icons/mongo.svg",
//     tag: "Database",
//     link: '#'
//   },
// ];
const Skills: React.FC<{}> = () => {
  const dataSkills = useSelector((state: RootState) => state.api.data.skill);
  // const dataSkills: dataSkill[] = data.skill;

  return (
    <section id="skills" className="z-10 px-3">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        Tech Stack
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>

      <div className="mockup-browser border-[6px] border-indigo-300/60 mx-auto xl pb-2 max-w-6xl ">

        <div className="mockup-browser-toolbar pb-2 pt-0 md:pb-4 border-base-100/80  shadow-md shadow-base-300 border-b">

          <div className="input border border-base-300 caret-fuchsia-900 my-auto">My Porto skills</div>
        </div>

        {/* <div className="container flex-col content-center place-content-center items-center p-12 gap-5 sm:gap-8 flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mx-auto first-line:mt-10 grid-flow-row justify-items-stretch justify-stretch justify-content-stretch " key="skillContainer">
          {dataSkills.map((skill, index) => {
            return (
              <>
                <Tilt key={index}
                  className="parallax-effect flex-row h-auto  group card card-compact image-full w-fit m-0 p-0"
                  perspective={500}
                  glareEnable={true}
                  glareMaxOpacity={0.45}
                  glareBorderRadius="20px"
                  scale={1.12}
                >

                  <figure>
                    <Image height={200} width={200} src={skill.icon} alt={skill.title} />

                  </figure>
                  <div className="card-body inner-element">
                    <h2 className="card-title child">{skill.title}</h2>
                    <p className="text-sm text-opacity-90">{skill.desc} </p>
                    <div className="card-actions justify-end childx group-hover:translate-y-10 group-hover:backdrop-blur-xl">
                      <button className="badge badge-primary badge-outline bg-opacity-50">{skill.tag}</button>
                    </div>
                  </div>

                </Tilt>

                <div className="relative" key={Math.random() * index}>

                  <Tilt key={Math.random() * index}
                    className="parallax-effect flex-row h-auto w-full z-20 group card image-full "
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    glareBorderRadius="20px"
                    scale={1.02}
                  >


                    <figure className="glass" key={Math.random() * index}><Image width={400} height={400} src={skill.icon} alt="" className="opacity-50" /></figure>
                    <div className="card-body bg-transparent inner-element justify-evenly w-full p-0" key={Math.random() * index}>
                      <h2 className="card-title child text-xl group-hover:tracking-widest text-neutral-200  group-hover:-translate-y-5 duration-200 border-b-[1px] rounded-sm border-blue-900 px-1 py-0 shadow-blue-500/50 shadow-xl">{skill.title}</h2>
                      <p className="text-base group-hover:text-md group-hover:text-neutral-200 text-neutral-500 duration-500 transition-all">{skill.desc}</p>
                      <div className="card-actions justify-end childx duration-300">
                        <button className="badge badge-outline badge-primary shadow-blue-500/50 shadow-lg">{skill.tag}</button>
                      </div>
                    </div>


                  </Tilt>
                </div>
              </>

            )
          })}

          <Tilt key='234'
            className="parallax-effect flex-row h-auto w-auto z-20 group card image-full"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            glareBorderRadius="20px"
            scale={1.12}
          >

            <figure>
              <Image height={200} width={200} src='/next.svg' alt="image" />

            </figure>
            <div className="card-body bg-transparent inner-element">
              <h2 className="card-title child">jdl</h2>
              <p className="text-sm text-opacity-90">desc</p>
              <div className="card-actions justify-end childx">
                <button className=" badge badge-primary badge-outline bg-opacity-50">tag1</button>
              </div>
            </div>
            <div className="card-body bg-transparent inner-element">
              <h2 className="card-title child">Project 1</h2>
              <p>If a dog chews </p>
              <div className="card-actions justify-end childx">
                <button className="btn btn-primary">🍳Look</button>
              </div>
            </div>
          </Tilt>

          <Tilt key={123}
            className="parallax-effect flex-row h-auto w-auto z-20 group card image-full m-6"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            glareBorderRadius="20px"
            scale={1.12}
          >


            <figure><Image width={400} height={400} src="/next.svg" alt="Shoes" /></figure>
            <div className="card-body bg-transparent inner-element">
              <h2 className="card-title child">Project 1</h2>
              <p>If a d</p>
              <div className="card-actions justify-end childx">
                <button className="btn btn-primary">🍳Look</button>
              </div>
            </div>


          </Tilt>

        </div> */}
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <HoverEffect items={dataSkills?.map((skill: { link: string }) => ({ ...skill, link: skill.link || '' }))} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
