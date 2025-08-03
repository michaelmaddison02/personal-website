"use client"

import { useRouter, usePathname } from "next/navigation";

export default function siteHeaderNav() {
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigation = (path: string) => {
      router.push(path);
    };

    const isProjectsPage = pathname === '/projects';
    const buttonClass = isProjectsPage 
        ? "font-squidboy font-thin text-lg text-[#ececec] opacity-30 hover:opacity-50 transition-opacity"
        : "font-stamp-three text-lg font-bold text-black hover:opacity-70 transition-opacity";

    return (
        <div id="siteHeader" className="flex flex-row justify-end gap-3 pb-4">
            <button 
                className={buttonClass}
                onClick={() => handleNavigation('/')}
            >
                HOME
            </button>
            <button 
                className={buttonClass}
                onClick={() => handleNavigation('/projects')}
            >
                PROJECTS
            </button>
            <button 
                className={buttonClass}
                onClick={() => handleNavigation('/info')}
            >
                INFO
            </button>
        </div>
    );

}