"use client"
import SiteHeaderNav from "@/components/SiteHeaderNav"

import React from 'react';
import GeronimoPoster from '@/components/projects/GeronimoPoster';
import PulseLinkPoster from '@/components/projects/PulseLinkPoster';
import AnthemPoster from '@/components/projects/AnthemPoster';
import VoxcuraPoster from '@/components/projects/VoxcuraPoster';

export default function Page() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const totalItems = 4; // We have 3 canvas items
    
    const scrollToIndex = (index: number) => {
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

    // Set initial position based on saved poster index
    React.useEffect(() => {
        const savedIndex = localStorage.getItem('scrollToPoster');
        if (savedIndex) {
            const index = parseInt(savedIndex);
            if (index >= 0 && index < totalItems) {
                // Small delay to ensure container is ready
                setTimeout(() => {
                    if (scrollContainerRef.current) {
                        const scrollPosition = window.innerWidth * index;
                        scrollContainerRef.current.scrollLeft = scrollPosition;
                        setCurrentIndex(index);
                    }
                }, 100);
            }
            localStorage.removeItem('scrollToPoster');
        }
    }, []);

    
    return (
        <div className="h-screen flex flex-col p-4 relative">
            <SiteHeaderNav />
            
            {/* Previous Arrow */}
            {currentIndex > 0 && (
                <button 
                    onClick={handlePrevious}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-3 transition-all duration-200 hover:opacity-80 z-30"
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
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-3 transition-all duration-200 hover:opacity-80 z-30"
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
                    <GeronimoPoster/>
                    <PulseLinkPoster/>
                    <AnthemPoster/>
                    <VoxcuraPoster/>
                </div>
            </div>
        </div>
    );
}