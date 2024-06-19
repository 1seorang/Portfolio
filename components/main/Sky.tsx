"use client";
import React, { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { motion } from "framer-motion";

const Sky: React.FC = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 2.8,
                    delay: 0.4,
                    ease: [0.9, 0.71, 0.2, 1.01],
                }}
                className="flex flex-col h-1 w-full"
            >
                <Parallax
                    className="flex -mx-16"
                    speed={10}
                    scale={[1, 0.7]}
                    translateY={[-100, 55]}
                >
                    <motion.div
                        className=""
                        animate={{
                            rotate: [0, 1, 2, 1, 2, 0],
                            x: [0, 3, 1, 2, 4, 2, 5, 3, 1],
                            y: [0, 2, 4, 3, 4, 2],
                        }}
                        transition={{ repeat: Infinity, duration: 5.5, delay: 0.5 }}
                    >
                        <Image
                            src={"/sky/cloud.png"}
                            width={250}
                            height={220}
                            alt="clouds"
                        />
                    </motion.div>
                </Parallax>
                <Parallax
                    key={"sun"}
                    className="-m-12 flex z-20"
                    speed={20}
                    translateX={[110, 40]}
                    translateY={["-910px", "1500px"]}
                    scale={[1, 2.8]}
                >
                    <motion.div
                        animate={{ scale: [1.5, 1.4, 1.3, 1.2, 1.1], opacity: 0.6 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                            repeatType: "reverse",
                        }}
                    >
                        <Image
                            className="ml-9"
                            src={"/sky/sun.png"}
                            height={85}
                            width={70}
                            alt="sun"
                        />
                    </motion.div>
                </Parallax>
                <Parallax
                    className="flex -mt-14"
                    speed={13}
                    scale={[1, 0.7]}
                    translateY={[-120, 55]}
                >
                    <motion.div
                        className=""
                        animate={{
                            rotate: [0, 1, 2, 1, 2, 0],
                            x: [0, 10, 20, 10, 20, 0],
                            y: [1, 2, 4, 3, 5, 4, 2, 3, 1],
                        }}
                        transition={{ repeat: Infinity, duration: 5.5, delay: 0.5 }}
                    >
                        <Image
                            src={"/sky/clouds.png"}
                            width={150}
                            height={120}
                            alt="clouds"
                        />
                    </motion.div>
                </Parallax>
                <Parallax
                    className="flex [&>*]:-mx-5"
                    speed={15}
                    translateX={[80, 50]}
                    translateY={[99, -90]}
                >
                    <motion.div
                        className=""
                        animate={{
                            x: [0, 10, 20, 10, 20, 0],
                            y: [1, 2, 4, 3, 5, 4, 2, 3, 1],
                        }}
                        transition={{ repeat: Infinity, duration: 4.5, delay: 0.5 }}
                    >
                        <Image
                            src={"/sky/clouds.png"}
                            width={100}
                            height={70}
                            alt="cloud"
                        />
                    </motion.div>
                    <motion.div
                        className=""
                        animate={{
                            rotate: [1, 3, 1, 2, 3, 4, 2],
                            x: [0, 3, 2, 1, 4, 1, 2, 1],
                            y: [1, 2, 4, 3, 5, 4, 2, 3, 1],
                        }}
                        transition={{ repeat: Infinity, duration: 4.5, delay: 0.5 }}
                    >
                        <Image src={"/sky/cloud.png"} width={120} height={90} alt="cloud" />
                    </motion.div>
                    <motion.div
                        animate={{
                            rotate: [4, 3, 2, 1, 2, 3, 5],
                            x: [-5, -2, 1, 3, 5, 2, -1, -3],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        <Image
                            src={"/sky/clouds.png"}
                            width={150}
                            height={80}
                            alt="cloud"
                        />
                    </motion.div>
                </Parallax>
                <Parallax

                    speed={15}
                    translateX={[50, 80]}
                    translateY={[99, 50]}
                >
                    <motion.div
                        className=" flex-col flex -m-12 [&>*]:-my-8 even:-pl-5"
                        animate={{
                            // x: [0, 10, 20, 10, 20, 0],
                            translateX: [1, 100]
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "mirror", duration: 40.5, delay: 0.5
                        }}>

                        <Image src={"/sky/clouds.png"} width={130} height={70} alt="cloud" />
                        <Image src={"/sky/cloud.png"} width={120} height={80} alt="cloud" />
                        <Image src={"/sky/clouds.png"} width={150} height={90} alt="cloud" />
                    </motion.div>
                </Parallax>
                <Parallax
                    className="flex"
                    speed={-25}
                    translateX={["50", "120"]}
                    translateY={["100px", "2950px"]}
                    scale={[.31, 1.5]}
                >
                    <motion.div
                        animate={{ scale: [1, 1.02, 1.05, 1.1] }}
                        transition={{
                            repeatDelay: 0.2,
                            repeatType: "reverse",
                            repeat: Infinity,
                            duration: 2,
                            ease: 'easeInOut'
                        }}
                        className="relative"

                    >
                        <Image src={"/sky/moon.png"} height={155} width={150} alt="moon1" />
                    </motion.div>
                </Parallax>


                <Parallax
                    className="m-12 relative z-20 [&>*]:-my-16 [&>*]:flex"
                    speed={-10}
                    translateX={[10, -40]}
                    translateY={["100px", "1000px"]}
                    scale={[0.2, 1.52]}
                    opacity={[0.9, 0.5]}
                >
                    <motion.div
                        className=""
                        animate={{
                            rotate: [0, 1, 2, 1, 2, 0],
                            x: [0, 3, 1, 2, 4, 2, 5, 3, 1],
                            y: [0, 2, 4, 3, 4, 2],
                        }}
                        transition={{ repeat: Infinity, duration: 5.5, delay: 0.5 }}
                    >
                        <Image

                            src={"/sky/cloud.png"}
                            height={75}
                            width={120}
                            alt="cloud"
                        />
                        <Image

                            src={"/sky/cloud.png"}
                            height={65}
                            width={110}
                            alt="cloud"
                        />
                    </motion.div>
                    <motion.div
                        className="relative [&>*]:-my-16 first:z-10 -mx-6"
                        animate={{
                            rotate: [0, 1, 2, 1, 2, 0],
                            x: [0, 3, 10, 22, 24, 32, 45, 53, 61],
                            y: [0, 2, 4, 3, 4, 2],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 5.5,
                            delay: 0.5,
                        }}
                    >
                        <Image
                            className=""
                            src={"/sky/cloud.png"}
                            height={75}
                            width={120}
                            alt="cloud"
                        />
                        <Image
                            className=""
                            src={"/sky/clouds.png"}
                            height={175}
                            width={190}
                            alt="cloud"
                        />
                    </motion.div>
                </Parallax>

                {/* ! PLANET ! */}
                <Parallax
                    className="flex"
                    speed={-99}
                    translateX={["20", "120"]}
                    translateY={["1450px", "-500px"]}
                    scale={[1, 1.9]}
                    opacity={[1, 0.2]}
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1.05] }}
                        transition={{
                            repeatDelay: 0.2,
                            repeatType: "reverse",
                            repeat: Infinity,
                            duration: 2.65,
                        }}
                        className="relative"
                    >
                        <Image src={"/sky/saturn.png"} height={155} width={150} alt="saturn1" />
                    </motion.div>
                </Parallax>
                <Parallax
                    className="flex"
                    speed={17}
                    translateX={["50", "90"]}
                    translateY={["1110px", "2970px"]}
                    scale={[1, 1.9]}
                    opacity={[1, 0.1]}
                >
                    <motion.div
                        animate={{ scale: [1, 1.12, 1.45] }}
                        transition={{
                            repeatDelay: 0.2,
                            repeatType: "reverse",
                            repeat: Infinity,
                            duration: 2.2,

                        }}
                        className="relative"
                    >
                        <Image src={"/sky/mercury.png"} height={65} width={70} alt="mercury1" />
                    </motion.div>
                </Parallax>
                <Parallax
                    className="flex"
                    speed={20}
                    translateX={["30", "90"]}
                    translateY={["1000px", "2500px"]}
                    scale={[1, 1.9]}
                    opacity={[1, 0.6]}
                >
                    <motion.div
                        animate={{ rotate: [0, 10, 20, 15, 20, 10] }}
                        transition={{
                            repeatDelay: 0.2,
                            repeatType: "reverse",
                            repeat: Infinity,
                            duration: 5.2,

                        }}
                        className="relative"
                    >
                        <Image src={"/sky/little-astronaut.png"} height={95} width={90} alt="astroboy" />
                    </motion.div>
                </Parallax>
                <Parallax
                    className="flex"
                    speed={-15}
                    translateX={["150px", "700px"]}
                    translateY={["3150px", "1950px"]}
                    scale={[2, 0.9]}
                    opacity={[0.1, 1]}
                >
                    <motion.div
                        animate={{ scale: [1, 1.12, 1.45] }}
                        transition={{
                            repeatDelay: 0.2,
                            repeatType: "reverse",
                            repeat: Infinity,
                            duration: 1.2,
                        }}
                        className="relative"
                    >
                        <Image src={"/sky/earth.png"} height={55} width={50} alt="earth1" />
                    </motion.div>
                </Parallax>
                {/* ! PLANET ! */}


                <Parallax className="flex z-40"
                    speed={15}
                    translateX={["90", "45"]}
                    translateY={["750", "200"]}
                    scale={[2, 1.5]}
                    opacity={[0.6, 1]} >

                    <motion.div animate={{
                        scale: [1, 1.05, 1.25, 1, 1.3],
                        rotate: [0, 18, 9, 20, 30],
                        translate: [10, 20, 15, 25, 20, 15], opacity: [1, .9, 0.6, 1, 0.5]
                    }}
                        transition={{
                            duration: 16,
                            ease: "easeInOut",
                            repeatType: 'reverse',
                            repeat: Infinity,
                            repeatDelay: 1
                        }}>
                        <Image alt="astronot" height={150} width={150} src={'/sky/little-astronaut_2.png'} />
                    </motion.div>
                </Parallax>
                <Parallax className="flex"
                    speed={15}
                    translateX={["-10", "95"]}
                    translateY={["250", "500"]}
                    scale={[1, 1.4]}
                    opacity={[0.8, 0.5]} >
                    <motion.div animate={{
                        scale: [1, 1.02, 1.12, 1, 1],
                        rotate: [0, 10, 9, 13, 7],


                    }}
                        transition={{
                            duration: 20,
                            ease: "easeInOut",
                            repeatType: 'reverse',
                            repeat: Infinity,
                            repeatDelay: .5
                        }}>
                        <Image alt="roket" height={250} width={250} src={'/sky/rocket.png'} />
                    </motion.div>
                </Parallax>
            </motion.div>

        </>
    );
};
export default Sky;
