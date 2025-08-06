"use client"

import Image from "next/image"
import SiteHeaderNav from '@/components/SiteHeaderNav';
import AnimatedInfoIcon from '@/components/AnimatedInfoIcon';

export default function Home() {

  return (
    <div>
      <div id="home" className="min-h-screen flex flex-col p-4 relative">
        <SiteHeaderNav />
        
        <div className="flex justify-center" style={{ paddingTop: '20vh' }}>
          <div id="hero-content" className="flex flex-col gap-1">
            <Image src="/aligator.svg" alt="External link" width={350} height={350} className="w-54 h-20 sm:w-80 sm:h-30 md:w-[350px] md:h-[140px] transition-all duration-300 ease-out"/>
            <div id="name-display" className="flex flex-row justify-between">
              <span className="text-l sm:text-xl md:text-2xl font-stamp-smudge tracking-widest font-bold pl-5">MICHAEL</span>
              <span className="text-l sm:text-xl md:text-2xl font-stamp-smudge font-bold pr-1 sm:pr-0 md:pl-2">•</span>
              <span className="text-l sm:text-xl md:text-2xl font-stamp-smudge tracking-widest font-bold pr-3">MADDISON</span>
            </div>
          </div>      
        </div>
        <AnimatedInfoIcon />
      </div>
    </div>
  );
}
