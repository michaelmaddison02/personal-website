"use client"

import Image from "next/image"
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

interface ProjectTileProps {
    projectName: string
    shortDescription: string
    longDescription: string
    demoLink?: string
    githubLink?: string
    videoLink?: string
    projectPage?: string
}

export default function ProjectTile({ 
    projectName, 
    shortDescription, 
    longDescription, 
    demoLink, 
    githubLink,
    videoLink,
    projectPage,
}: ProjectTileProps) {
    const router = useRouter();

    const handleNavigation = (path: string) => {
      router.push(path);
    };
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 700);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    if (isMobile) {
        return (
            <div id={`${projectName}_Tile`} className="flex flex-col hover:opacity-75" style={{width: '80vw', minWidth: '300px'}}>
                <div id={`${projectName}_Information`} className="flex flex-col bg-white p-6 border border-gray-400 flex-grow" 
                    onClick={() => projectPage && handleNavigation(projectPage)}
                    >
                    <span id={`${projectName}_Name`} className="font-crit font-regular text-s mb-2">{projectName}</span>
                    <span id={`${projectName}_ShortDescription`} className="font-crit font-light italic text-xs mb-4">{shortDescription}</span>
                    <span id={`${projectName}_LongDescription`} className="font-crit font-light text-xs mb-4 text-justify">{longDescription}</span>
                    <div id={`${projectName}_DemoVideo`} className="p-4 border border-gray-400 mb-4">
                        {videoLink && (
                            <video 
                                src={videoLink} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="w-full h-48 object-cover rounded"
                            />
                        )}
                    </div>
                </div>
                
                <div id={`${projectName}_Links`} className="border-l border-r border-b border-gray-400 bg-white h-12 w-full flex flex-row justify-center items-center gap-6 py-2">
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex font-crit font-light text-xs justify-center items-center">
                            DEMO
                            <Image src="/external-link-svgrepo-com.svg" alt="External link" width={12} height={12} className="ml-1" />
                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex font-crit font-light text-xs">
                            GITHUB
                            <Image src="/external-link-svgrepo-com.svg" alt="External link" width={12} height={12} className="ml-1" />
                        </a>
                    )}
                </div>
            </div>
        );
    }

    // Desktop layout (≥ 900px)
    return (
        <div id={`${projectName}_Tile`} className="flex flex-row" style={{width: '80vw', minWidth: '600px'}}>
            <div id={`${projectName}_Information`} className="grid grid-cols-3 grid-rows-3 bg-white p-6 flex-grow hover:opacity-75" 
                style={{ 
                    gridTemplateRows: 'auto auto auto',
                    gridTemplateColumns: '250px 24px 1fr',
                }}
                onClick={() => projectPage && handleNavigation(projectPage)}>
                <span id={`${projectName}_Name`} className="col-span-1 font-crit font-regular text-s">{projectName}</span>
                <span id={`${projectName}_ShortDescription`} className="col-start-1 row-start-2 font-crit font-light italic text-xs">{shortDescription}</span>
                <span id={`${projectName}_LongDescription`} className="col-start-1 row-start-3 font-crit font-light text-xs pt-4 text-justify">{longDescription}</span>
                <div id={`${projectName}_DemoVideo`} className="col-start-3 row-start-1 row-span-full p-4 border border-gray-400">
                    {videoLink && (
                        <video 
                            src={videoLink} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-full object-cover rounded"
                        />
                    )}
                </div>
            </div>
            <div id={`${projectName}_Links`} className="border-l border-gray-400 bg-white w-9 flex flex-col justify-center items-center gap-25 hover:opacity-75">
                {demoLink && (
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex font-crit font-light text-xs transform rotate-270 mb-1 justify-center items-center">
                        DEMO
                        <Image src="/external-link-svgrepo-com.svg" alt="External link" width={12} height={12} className="ml-1" />
                    </a>
                )}
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex font-crit font-light text-xs transform rotate-270">
                        GITHUB
                        <Image src="/external-link-svgrepo-com.svg" alt="External link" width={12} height={12} className="ml-1" />
                    </a>
                )}
            </div>
        </div>
    );
}