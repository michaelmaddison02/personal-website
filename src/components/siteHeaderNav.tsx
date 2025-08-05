"use client"

import { useRouter, usePathname } from "next/navigation";
import InfoButton from "@/components/InfoButton";

export default function SiteHeaderNav() {
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigation = (path: string) => {
      router.push(path);
    };

    const pageStyles: { [key: string]: string } = {
        '/': "font-stamp-three text-lg font-bold text-black hover:opacity-70 transition-opacity", // Home page
        '/projects': "font-squidboy font-thin text-lg text-[#ececec] opacity-30 hover:opacity-50 transition-opacity", // Projects page
        default: "font-squidboy font-thin text-lg font-bold text-white opacity-85 hover:opacity-50 transition-opacity",
    };
    
    const buttonClass = pageStyles[pathname] || pageStyles.default;

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

            <InfoButton className={buttonClass}/>
        </div>
    );

}