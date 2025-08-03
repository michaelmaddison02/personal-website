"use client"

import React from 'react';
import { motion } from 'motion/react';
import InfoIcon from '@/components/icons/InfoIcon';
import Image from 'next/image';

const ANIMATION_CONFIG = {
  duration: 0.15,
  ease: "easeOut" as const
};

const INITIAL_STATE = { scale: 0, x: 0, y: 0, opacity: 0 };
const RESET_STATE = { scale: 0, x: 0, y: 0, opacity: 0 };

export default function InfoButton() {
  const [isInfoHovered, setIsInfoHovered] = React.useState(false);

  return (
    <div className="absolute bottom-4 right-4">
      {/* Animated content containers */}
      
      {/* Image container moving up */}
      <motion.div
        className="absolute bottom-0 right-0 rounded-sm w-48 border-2 border-black z-10"
        style={{ transformOrigin: 'bottom right' }}
        initial={INITIAL_STATE}
        animate={isInfoHovered ? { 
          scale: 1,
          x: 0,
          y: -200, 
          opacity: 1
        } : RESET_STATE}
        transition={ANIMATION_CONFIG}
      >
        <Image 
          src="/images/home/yvonne-mike-mural-photo.png" 
          alt="painting mural" 
          width={400}
          height={300}
          className="object-contain"
        />
      </motion.div>
      
      {/* Image container moving left */}
      <motion.div
        className="absolute bottom-0 right-0 rounded-sm w-48 border-2 border-black z-0"
        style={{ transformOrigin: 'bottom right' }}
        initial={INITIAL_STATE}
        animate={isInfoHovered ? { 
          scale: 1, 
          x: -140, 
          y: 0,
          opacity: 1
        } : RESET_STATE}
        transition={ANIMATION_CONFIG}
      >
        <Image 
          src="/images/home/mike-painting-mural.png" 
          alt="mike painting mural" 
          width={400}
          height={300}
          className="object-contain"
        />
      </motion.div>

      {/* Text container moving diagonally */}
      <motion.div
        className="absolute bottom-0 right-0 rounded-sm w-48 border-2 border-black z-30"
        style={{ transformOrigin: 'bottom right' }}
        initial={INITIAL_STATE}
        animate={isInfoHovered ? { 
          scale: 1, 
          x: -170, 
          y: -170,
          opacity: 1
        } : RESET_STATE}
        transition={ANIMATION_CONFIG}
      >
        <div className="font-stamp-one text-sm text-white bg-black opacity-70 p-4">This home page, including the aligator icon, attempts to digitize a mural that my close friend Yvonne Chen and I made in college. Inspired by Minna Leunig, we created a wall-to-wall mural of bumpy animals</div>
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