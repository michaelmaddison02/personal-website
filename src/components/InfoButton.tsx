"use client"

import React from 'react';
import { motion } from 'motion/react';
import InfoIcon from '@/components/icons/InfoIcon';
import Image from 'next/image';

export default function InfoButton() {
  const [isInfoHovered, setIsInfoHovered] = React.useState(false);

  return (
    <div className="absolute bottom-4 right-4">
      {/* Animated Rectangles */}
      
      {/* Rectangle moving up */}
      <motion.div
        className="absolute bottom-0 right-0 rounded-sm w-48 border-3 border-black z-1"
        style={{ transformOrigin: 'bottom right' }}
        initial={{ scale: 0, y: 0, x: 0, opacity: 0 }}
        animate={isInfoHovered ? { 
          scale: 1,
          x: 0,//65,
          y: -200, 
          opacity: 1
        } : { 
          scale: 0, 
          y: 0, 
          x: 0,
          opacity: 0 
        }}
        transition={{ 
          duration: 0.15, 
          ease: "easeOut"
        }}
      >
        <Image 
          src="/images/home/yvonne-mike-mural-photo.png" 
          alt="painting mural" 
          width={400}
          height={300}
          className="object-contain"
        />
      </motion.div>
      
      {/* Rectangle moving left */}
      <motion.div
        className="absolute bottom-0 right-0 rounded-sm w-48 border-2 border-black z-0"
        style={{ transformOrigin: 'bottom right' }}
        initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
        animate={isInfoHovered ? { 
          scale: 1, 
          x: -140, 
          y: 15,
          opacity: 1
        } : { 
          scale: 0, 
          x: 0, 
          y: 0,
          opacity: 0 
        }}
        transition={{ 
          duration: 0.15,
          ease: "easeOut"
        }}
      >
        <Image 
          src="/images/home/mike-painting-mural.png" 
          alt="Image 2" 
          width={400}
          height={300}
          className="object-contain"
        />
      </motion.div>

      {/* Rectangle moving left */}
      <motion.div
        className="absolute bottom-0 right-0 rounded-sm w-48 border-3 border-black z-3"
        style={{ transformOrigin: 'bottom right' }}
        initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
        animate={isInfoHovered ? { 
          scale: 1, 
          x: -170, 
          y: -170,
          opacity: 1
        } : { 
          scale: 0, 
          x: 0, 
          y: 0,
          opacity: 0 
        }}
        transition={{ 
          duration: 0.15,
          ease: "easeOut"
        }}
      >
        <div className="font-stamp-one text-sm text-white bg-black opacity-70 p-4">This home page, including the aligator icon, attempts to digitize a mural that my good friend Yvonne Chen and I made in college. Inspired by Minna Leunig, we created a wall-to-wall mural of bumpy animals</div>
      </motion.div>
      
      {/* InfoIcon */}
      <div 
        onMouseEnter={() => setIsInfoHovered(true)}
        onMouseLeave={() => setIsInfoHovered(false)}
      >
        <InfoIcon width={18} height={18} className="hover:opacity-70 transition-opacity cursor-pointer" />
      </div>
    </div>
  );
}