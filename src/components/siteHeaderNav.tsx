"use client"

import { useRouter } from "next/navigation";

export default function siteHeaderNav() {
    const router = useRouter();

    const handleNavigation = (path: string) => {
      router.push(path);
    };

    return (
        <div id="siteHeader" className="flex flex-row justify-end gap-3 pb-4">
            <button 
                className="font-stamp-three text-lg text-[#FFFFF0] hover:opacity-70 transition-opacity"
                onClick={() => handleNavigation('/')}
            >
                HOME
            </button>
            <button 
                className="font-stamp-three text-lg hover:opacity-70 transition-opacity"
                onClick={() => handleNavigation('/projects')}
            >
                PROJECTS
            </button>
            <button 
                className="font-stamp-three text-[#FFFAF0] text-lg hover:opacity-70 transition-opacity"
                onClick={() => handleNavigation('/info')}
            >
                INFO
            </button>
        </div>
    );

}