import SiteHeaderNav from "@/components/siteHeaderNav"
import { David_Libre } from "next/font/google";

export default function Page() {
    return (
        <div className="min-h-screen bg-white flex flex-col p-4">
            <SiteHeaderNav />

            <div id="siteBody" className="flex flex-col items-center gap-4">
                <div className="flex flex-col gap-4">
                    <div id="projectHeader" className="flex flex-col">
                        <span className="font-crit font-regular text-xl">GERONIMO STILTON</span>
                        <span id="geronimoStilton_ShortDescription" className="font-crit font-light italic text-s">Full-stack Creative Coding Project</span>
                    </div>

                    <div id="projectDescription" className="flex flex-row">
                        <div id="sideBox" className="flex flex-col bg-white p-6 border border-gray w-72">
                            <span className="font-crit font-regular text-sm mb-2">TIMELINE</span>
                            <span className="font-crit font-regular text-xs text-gray-500">1 Week</span>

                            <span className="font-crit font-regular text-sm mt-4 mb-2">TECH STACK</span>
                            <span className="font-crit font-regular text-xs text-gray-500">Next.js</span>
                            <span className="font-crit font-regular text-xs text-gray-500">Typescript</span>
                            <span className="font-crit font-regular text-xs text-gray-500">Tailwind CSS</span>
                            <span className="font-crit font-regular text-xs text-gray-500">Fast API</span>
                        </div>
                        <div className="flex flex-col">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }