"use client"
import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skill";
import Sky from "@/components/main/Sky";

import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from './apiSlice';
import { useEffect, useState } from "react";
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state: any) => state.api);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(fetchApiData() as any);
  }, [dispatch]);

  useEffect(() => {
    // Contoh: Tandai halaman telah selesai dimuat setelah 2 detik
    // setTimeout(() => {
    setIsLoaded(true);
    // }, 2000);
    // !IP
    // fetch('https://api.ipify.org?format=json')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(`Client IP: ${data.ip}`);
    //     setIsLoaded(true);
    //   })
    //   .catch(error => console.error('Error fetching IP:', error));
  }, []);

  if (status === 'loading') return <div className="w-full h-screen grid place-content-center"><span className="loading loading-spinner loading-lg text-primary transition-all duration-200">Loading Data</span></div>;
  if (status === 'failed') return <div className="w-screen h-screen grid place-content-center text-pretty text-red-950 text-2xl">Error: {error}</div>;
  // console.log()
  if (!isLoaded) {
    return <div className="w-screen h-screen grid place-content-center backdrop-blur-xl"><span className="loading loading-dots loading-lg text-secondary tracking-wide">Loading Page</span></div>;
  }

  return (

    <>

      <Sky />
      <main className="h-full w-svw md:w-full overflow-x-hidden  bg-[url('/LooperGroup2.png')] bg-no-repeat">
        <div className="flex flex-col gap-20">

          <Banner />

          <About />
          <Experience />
          <Projects />
          <Skills />
          <Footer />

        </div>
      </main>
    </>


  );
}

export default Home;