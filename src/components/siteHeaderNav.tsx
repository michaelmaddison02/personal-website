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
                className="font-crit italic hover:opacity-70 transition-opacity"
                onClick={() => handleNavigation('/')}
            >
                home
            </button>
            <button 
                className="font-crit italic hover:opacity-70 transition-opacity"
                onClick={() => handleNavigation('/projects')}
            >
                projects
            </button>
            <button 
                className="font-crit italic hover:opacity-70 transition-opacity"
                onClick={() => handleNavigation('/info')}
            >
                info
            </button>
        </div>
    );

}