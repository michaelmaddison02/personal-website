"use client"

import React from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import SiteHeaderNav from "@/components/SiteHeaderNav";
import BackArrowIcon from "@/components/icons/BackArrowIcon";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  backgroundAlt: string;
  borderColor: string;
  githubUrl?: string;
  linkText?: string;
  rounded?: boolean;
  posterIndex?: number;
}

export default function ProjectHero({ 
  title, 
  subtitle, 
  backgroundImage, 
  backgroundAlt, 
  borderColor, 
  githubUrl,
  linkText = "GitHub",
  rounded = true,
  posterIndex
}: ProjectHeroProps) {
  const router = useRouter();

  const handleBack = () => {
    if (posterIndex !== undefined) {
      localStorage.setItem('scrollToPoster', posterIndex.toString());
      router.push('/projects');
    } else {
      router.back();
    }
  };

  return (
    <div 
      id="hero-section" 
      className={`h-[250px] w-full relative ${rounded ? 'sm:rounded-3xl' : 'rounded-3xl'} overflow-hidden border-2 ${borderColor}`}
    >
      <Image 
        src={backgroundImage} 
        alt={backgroundAlt} 
        fill 
        className="object-cover opacity-50"
      />
      <div className="absolute top-4 left-4 right-4 z-10">
        <SiteHeaderNav />
      </div>
      <button 
        onClick={handleBack}
        className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors z-20"
      >
        <BackArrowIcon className="w-5 h-5" />
      </button>
      <div className="absolute bottom-4 left-6 font-crit font-bold text-white opacity-80">
        <div className="text-3xl md:text-3xl">{title}</div>
        <div className="max-w-[200px] sm:max-w-full text-s font-light italic">{subtitle}</div>
      </div>
      {githubUrl && (
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-4 right-6 font-crit text-sm italic text-white opacity-80 hover:text-gray-300 transition-colors flex items-center gap-2"
        >
          {linkText}
          <ExternalLinkIcon className="w-5 h-5" />
        </a>
      )}
    </div>
  );
}