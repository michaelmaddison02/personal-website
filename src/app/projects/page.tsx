"use client"
import SiteHeaderNav from "../../components/siteHeaderNav"

import React from 'react';
import GeronimoPoster from '../../components/projects/GeronimoPoster';
import PulseLinkPoster from '../../components/projects/PulseLinkPoster';
import AnthemPoster from '../../components/projects/AnthemPoster';
import VoxcuraPoster from '../../components/projects/VoxcuraPoster';

export default function Page() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [windowWidth, setWindowWidth] = React.useState(0);
    const scrollContainerRef = React.useRef(null);
    const totalItems = 4; // We have 3 canvas items
    
    const scrollToIndex = (index) => {
        if (scrollContainerRef.current) {
            const scrollPosition = window.innerWidth * index;
            scrollContainerRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
            setCurrentIndex(index);
        }
    };
    
    const handlePrevious = () => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1);
        }
    };
    
    const handleNext = () => {
        if (currentIndex < totalItems - 1) {
            scrollToIndex(currentIndex + 1);
        }
    };
    
    React.useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const scrollLeft = scrollContainerRef.current.scrollLeft;
                const newIndex = Math.round(scrollLeft / window.innerWidth);
                setCurrentIndex(newIndex);
            }
        };
        
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            return () => scrollContainer.removeEventListener('scroll', handleScroll);
        }
    }, []);

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        // Set initial width
        setWindowWidth(window.innerWidth);
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const projects = [
        {
            projectName: "GERONIMO STILTON",
            shortDescription: "Full-stack Creative Coding Project",
            longDescription: "A creative text styling application that analyzes the emotional content of text and applies dynamic, emotion-based styling to individual words.",
            githubLink: "https://github.com/michaelmaddison02/geronimo-stilton",
            // videoLink: "/videos/geronimo-stilton-project-tile-demo.mov",
            projectPage: "/projects/geronimo-stilton"
        },
        {
            projectName: "PULSELINK",
            shortDescription: "Bluetooth Friend Finding Watch",
            longDescription: "PulseLink is a wearable device prototype that helps people find their friends in crowded indoor environments (like parties and festivals) where smartphones often fail. The device uses Bluetooth Low Energy (BLE) technology with fixed anchor points to triangulate user positions, and features a minimalist 8×8 LED matrix that displays real-time directional and proximity cues without requiring users to look at a screen. By combining BLE positioning with peer-to-peer signal strength measurements, PulseLink provides indoor location tracking that traditional GPS-based solutions cannot offer.",
            githubLink: "https://github.com/NPande25/PulseLink",
            projectPage: "/projects/pulselink"
        },
        {
            projectName: "ANTHEM",
            shortDescription: "Full-stack Creative Coding Project",
            longDescription: "A creative text styling application that analyzes the emotional content of text and applies dynamic, emotion-based styling to individual words. Inspired by the whimsical world of Geronimo Stilton, this app transforms plain text into visually expressive content by detecting emotions and applying appropriate colors and fonts.",
            demoLink: "#",
            githubLink: "#"
        }
    ];

    return (
        <div className="h-screen flex flex-col p-4 relative">
            <SiteHeaderNav />
            
            {/* Previous Arrow */}
            {currentIndex > 0 && (
                <button 
                    onClick={handlePrevious}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-3 transition-all duration-200 hover:opacity-80"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            )}
            
            {/* Next Arrow */}
            {currentIndex < totalItems - 1 && (
                <button 
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-3 transition-all duration-200 hover:opacity-80"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            )}
            
            <div 
                ref={scrollContainerRef}
                className="overflow-x-scroll flex-1 snap-x snap-mandatory" 
                style={{scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth'}}
            >
                <div className="flex h-full">
                    <GeronimoPoster windowWidth={windowWidth} />
                    <PulseLinkPoster windowWidth={windowWidth} />
                    <AnthemPoster windowWidth={windowWidth} />
                    <VoxcuraPoster windowWidth={windowWidth} />
                </div>
            </div>
        </div>
    );
}