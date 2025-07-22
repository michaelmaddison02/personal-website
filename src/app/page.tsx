import Image from "next/image"
import SiteHeaderNav from '@/components/siteHeaderNav';
import BackgroundCanvas from '@/components/threejs/BackgroundCanvas';

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col p-4">
      {/* <BackgroundCanvas/> */}

      <SiteHeaderNav />
      
      <div className="flex justify-center" style={{ paddingTop: '20vh' }}>
        <div className="flex flex-col gap-1">
          <Image src="/aligator.svg" alt="External link" width={500} height={500} className="ml-1" />
          <div className="flex flex-row justify-between">
            <span className="text-3xl font-crit font-bold pl-5">MICHAEL</span>
            <span className="text-3xl font-crit font-bold md:pl-1">∙</span>
            <span className="text-3xl font-crit font-bold pr-3">MADDISON</span>
          </div>
        </div>      
      </div>

      {/* White box with conditional positioning */}
      {/* <div className="flex-1 flex items-end justify-center [@media(min-width:500px)]:items-end [@media(min-width:500px)]:justify-start">
        <div className="flex bg-white p-6 border border-gray" style={{ minWidth: '361px', minHeight: '220.27px' }}>
        <span className="font-crit font-light text-xs">I am a software engineer</span>
        </div>
      </div> */}
      
    </div>
  );
}
