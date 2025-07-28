"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import SiteHeaderNav from '@/components/siteHeaderNav';
import BackgroundCanvas from '@/components/threejs/BackgroundCanvas';

export default function Home() {

  return (
    <div>
      {/* First section - Home page */}
      <div id="home" className="min-h-screen flex flex-col p-4">
        {/* <BackgroundCanvas/> */}

        <SiteHeaderNav />
        
        <div className="flex justify-center" style={{ paddingTop: '20vh' }}>
          <div id="hero-content" className="flex flex-col gap-1">
            <Image src="/aligator.svg" alt="External link" width={500} height={500}/>
            <div id="name-display" className="flex flex-row justify-between">
              <span className="text-3xl font-crit font-bold pl-5">MICHAEL</span>
              <span className="text-3xl font-crit font-bold pr-1 sm:pr-0 md:pl-2">∙</span>
              <span className="text-3xl font-crit font-bold pr-3">MADDISON</span>
            </div>
          </div>      
        </div>
      </div>

      {/* Second section - Full screen on scroll */}
      <div id="projects" className="flex-1 flex-col p-4 bg-black justify-center items-center">
          {/* <div className="flex flex-row justify-start items-start">
            <div id="projects-header" className="relative inline-block">
              <Image src="/images/tape/painters-tape-stripe.png" alt="painters tape" width={200} height={100} className="opacity-80"/>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-2xl font-squidboy text-center px-4 tracking-widest">PROJECTS</h2>
              </div>
            </div>
          </div> */}

          <div className="flex-1 grid grid-cols-2 grid-rows-4" style={{ gridTemplateRows: 'repeat(4, 450px)', gridTemplateColumns: '40% 60%' }}>
            <div className="flex col-start-1 row-start-1 justify-center items-center">
              <div className="relative inline-block">
                <Image src="/images/paper-textures/yellow-collage-texture.jpg" alt="yellow paper texture" width={300} height={300} className="border-3"/>
                <div className="absolute inset-0 flex flex-col p-6 justify-between">
                  <div className="flex flex-col items-center justify-start gap-6">
                    <h2 className="text-2xl font-stamp-smudge font-bold text-center px-4 tracking-widest">GERONIMO STILTON</h2>
                    <span className="text-lg font-stamp-one text-center px-4 tracking-widest">Full-Stack Creative Coding Project</span>
                  </div>
                  <div className="flex flex-row">
                    <h2 className="text-sm font-bold font-stamp-one">2025</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col col-start-2 row-start-1 justify-center items-start gap-6">
              <div className="flex">
                <h2 className="text-white font-stamp-two">A creative text styling application that analyzes the emotional content of text and applies dynamic, emotion-based styling to individual words.</h2>
              </div>
              <div className="flex flex-row">
                <video 
                      src="/videos/geronimo-stilton/geronimo-stilton-general-demo-video-tv-overlay.mp4"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-[400px] object-contain border rounded-lg"
                  />
              </div>
            </div>

            <div className="flex col-start-2 row-start-2 justify-center items-center">
              <div className="relative inline-block">
                <Image src="/images/paper-textures/colorful-grid-texture.jpg" alt="yellow paper texture" width={300} height={300} className="border-3"/>
                <div className="absolute inset-0 flex flex-col items-center justify-start p-6 gap-4">
                  <h2 className="text-2xl font-stamp-smudge font-bold text-center px-4 tracking-widest">PULSELINK</h2>
                  <span className="text-lg font-stamp-one text-center px-4 tracking-widest">Bluetooth Friend Finding Watch</span>
                </div>
              </div>
            </div>

            <div className="flex col-start-2 row-start-2 justify-center items-center">
              <div className="relative inline-block">
                <Image src="/images/paper-textures/colorful-grid-texture.jpg" alt="yellow paper texture" width={300} height={300} className="border-3"/>
                <div className="absolute inset-0 flex flex-col items-center justify-start p-6 gap-4">
                  <h2 className="text-2xl font-stamp-smudge font-bold text-center px-4 tracking-widest">PULSELINK</h2>
                  <span className="text-lg font-stamp-one text-center px-4 tracking-widest">Bluetooth Friend Finding Watch</span>
                </div>
              </div>
            </div>


          </div>

      </div>


    </div>
  );
}
