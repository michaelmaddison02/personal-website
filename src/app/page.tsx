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
    </div>
  );
}
