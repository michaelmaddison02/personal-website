"use client"

import React, { useRef, useEffect, useState } from 'react';

interface LazyVideoProps {
  src: string;
  alt?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: string;
  playsInline?: boolean;
}

export default function LazyVideo({ 
  src, 
  alt, 
  className = "", 
  autoPlay = false, 
  loop = false, 
  muted = true,
  preload = "metadata",
  playsInline = false
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(video);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading when video is 50px away from viewport
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isInView && !isLoaded) {
      setIsLoaded(true);
    }
  }, [isInView, isLoaded]);

  return (
    <div className="relative">
      {!isLoaded && (
        <div className={`bg-gray-200 animate-pulse flex items-center justify-center absolute inset-0 ${className}`}>
          <div className="text-gray-400 text-sm">Loading video...</div>
        </div>
      )}
      <video
        ref={videoRef}
        src={isLoaded ? src : undefined}
        className={className}
        autoPlay={autoPlay && isLoaded}
        loop={loop}
        muted={muted}
        preload={isLoaded ? preload : "none"}
        playsInline={playsInline}
        onLoadedData={() => setIsLoaded(true)}
        style={{ opacity: isLoaded ? 1 : 0 }}
      >
        {alt && `Your browser does not support the video tag. ${alt}`}
      </video>
    </div>
  );
}