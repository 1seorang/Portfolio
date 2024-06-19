"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store'
// interface RootState {
//   api: {
//     data: any; // Gantos karo tipe data sing luwih spesifik yen perlu
//   };
// }

const Banner: React.FC<{}> = () => {
  const data = useSelector((state: RootState) => state.api.data);

  return (

    <>

      <div id='home' className="flex flex-row items-center justify-center md:px-20 px-5 mt-[150px] z-[20] ">
        <div className="flex flex-col  justify-center  text-center">
          <div className="justify-center flex cursor-pointer" >
            <motion.div
              whileHover={{ scale: 1.2, rotateX: 10 }}
              whileTap={{
                scale: 0.8,
                rotateY: -180,
                borderRadius: "100%"
              }}
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className=' '
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}

              transition={{

                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }}
            >
              <Image
                priority
                src="/be.jpg"
                height={300}
                width={300}
                alt="Elzio" className="mask mask-circle shadow-lg shadow-gray-300 "
              />
            </motion.div>
          </div>


          <div className="flex flex-col gap-6 mt-6 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto ">
            <span className="bg-clip-text bg-gradient-to-br text-transparent from-blue-500/95 to-90%  before:content-['Elzio'] before:-z-[1] before:text-white/30 before:absolute before:translate-x-[1px] before:translate-y-[2px] text-stroke" >Elzio</span>
          </div>
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            I do {" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400" >
              Design
            </span>{" & "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Code
            </span>{" "}
            🍿
          </p>
          <p className="text-md text-gray-200 my-5 max-w-[600px]">

            {data.passion}

          </p>

          <div className="text-md flex justify-center">
            <button
              onClick={() => window.open("mailto:aby@consultant.com")}
              className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent hover:scale-110 transition-all hover:translate-y-1"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>


    </>
  );
};

export default Banner;
