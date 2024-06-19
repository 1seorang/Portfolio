'use client'
import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import Image from "next/image";


const SkyParallax: React.FC<any> = ({ children }: { children: any }, page: number = 3) => {
    const parallax = useRef<IParallax>(null!)

    return (
        < >

            <Parallax ref={parallax} pages={page}>
                {/* <ParallaxLayer className="flex align-center" offset={0} speed={2.5}>
                   <p>Parallax</p>
               </ParallaxLayer>
               <ParallaxLayer className="flex align-center" offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                   <Image alt="cloud" src={'/sky/moon.png'} width={25} height={25} />
               </ParallaxLayer>

               <ParallaxLayer className="flex align-center" offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                   <Image alt="cloud" src={'/sky/clouds.png'} width='38' height={38} className='absolute top-20 left-9' />
                   <Image alt="cloud" src={'/sky/cloud.png'} className='relative mx-auto' width='38' height={38} />
               </ParallaxLayer>

               <ParallaxLayer className="flex align-center" offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                   <Image alt="cloud" src={'/sky/cloud.png'} height={26} width={28} />
                   <Image alt="cloud" src={'/sky/clouds.png'} height={26} width={28} />
               </ParallaxLayer>

               <ParallaxLayer className="flex align-center" offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                   <Image alt="cloud" src={'/sky/cloud.png'} height={45} width={42} />
                   <Image alt="cloud" src={'/sky/clouds.png'} height={45} width={42} />
               </ParallaxLayer>
               <ParallaxLayer className="flex align-center" offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                   <Image alt="cloud" src={'/sky/cloud.png'} height={45} width={42} />
                   <Image alt="cloud" src={'/sky/clouds.png'} height={45} width={42} />
               </ParallaxLayer> */}
                {children}
            </Parallax>
        </>
    )
}
export default SkyParallax;


export const parallaxContent: React.FC<any> = ({ children }: { children: any }, { style }: { style: any }) => {
    return (
        <>
            <ParallaxLayer style={style}>
                {children}
            </ParallaxLayer>

        </>
    )
}

interface iconProps {
    icon: string,
    height?: number,
    width?: number
}
export const IconParallax: React.FC<iconProps> = ({ icon = '/icons/nextjs.svg', height = 25, width = 25, ...props }) => {
    return (

        <Image alt="image parallax" src={icon} height={height} width={width} {...props} />
    )
}