"use client"

import Image from "next/image"
import SiteHeaderNav from '@/components/siteHeaderNav';

export default function Home() {

  return (
    <div>
      <div id="home" className="min-h-screen flex flex-col p-4">
        <SiteHeaderNav />
        
        <div className="flex justify-center" style={{ paddingTop: '20vh' }}>
          <div id="hero-content" className="flex flex-col gap-1">
            <Image src="/aligator.svg" alt="External link" width={350} height={350}/>
            <div id="name-display" className="flex flex-row justify-between">
              <span className="text-2xl font-stamp-smudge tracking-widest font-bold pl-5">MICHAEL</span>
              <span className="text-2xl font-stamp-smudge font-bold pr-1 sm:pr-0 md:pl-2">•</span>
              <span className="text-2xl font-stamp-smudge tracking-widest font-bold pr-3">MADDISON</span>
            </div>
          </div>      
        </div>
      </div>
    </div>
  );
}
