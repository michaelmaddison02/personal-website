"use client"

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import GLBModel from '../threejs/GLBModel';
import Card from '../Card';

interface PulseLinkPosterProps {
    windowWidth: number;
}

export default function PulseLinkPoster({ windowWidth }: PulseLinkPosterProps) {
    const [isHovered, setIsHovered] = React.useState(false);
    const router = useRouter();

    const handleModelClick = () => {
        router.push('/projects/pulselink');
    };

    return (
        <div className="w-screen h-full flex justify-center items-center flex-shrink-0 snap-start">
            <div className="relative max-w-[475px] w-full h-full">
                <Canvas camera={{ position: [0, 14, 0], fov: 90 }}>
                    <OrbitControls 
                        enableZoom={false} 
                        enablePan={false} 
                        enableRotate={false}
                        target={[0, 0, 0]}
                    />
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[5, 5, 5]} intensity={1.8} />
                    <GLBModel 
                        modelPath="/images/pulseLink_poster.glb" 
                        onHoverChange={setIsHovered}
                        onClick={handleModelClick}
                    />
                </Canvas>
                
                {/* Animated Cards */}
                
                {/* <motion.div
                    className="absolute top-1/2 -translate-y-1/2 -left-16 z-10"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isHovered ? -80 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.4, delay: 0.15, ease: "easeInOut" }}
                >
                    <Card color="customblue">
                        <a 
                            href="https://github.com/NPande25/PulseLink" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-4 cursor-pointer hover:opacity-80"
                        >
                            <div className="text-sm font-bold">GitHub</div>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"/>
                            </svg>
                        </a>
                    </Card>
                </motion.div> */}

                <motion.div
                    className="absolute top-3/4 -translate-y-1/2 -left-20 z-10"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isHovered ? -110 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
                >
                    <div className="w-[160px]">
                        <Card color="customblue">
                            <div className="font-bold mt-2 mb-2">WHAT IS THIS?</div>
                            <p className="text-sm text-justify">A wearable device that helps people find friends in crowded indoor environments using Bluetooth positioning and LED directional cues.</p>
                        </Card>
                    </div>
                </motion.div>
                
                {/* <motion.div
                    className="absolute top-1/4 -translate-y-1/2 -right-18 z-10"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isHovered ? 60 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
                >
                    <Card color="customblue">
                        <div className="text-center">
                            <div className="font-bold mt-2 mb-2">AWARDS</div>
                            <div className="text-xs">Best Hardware</div>
                            <div className="text-xs">Project</div>
                            <div className="mb-2"></div>
                        </div>
                    </Card>
                </motion.div> */}
                
                <motion.div
                    className="absolute top-1/4 -translate-y-1/2 -right-18 z-10"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isHovered ? 70 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.4, delay: 0.0, ease: "easeInOut" }}
                >
                    <Card color="customblue">
                        <div className="flex flex-col text-sm text-center">
                            <div className="font-bold mt-2">TIMELINE</div>
                            <div className="text-xs">3 weeks</div>
                            <div className="font-bold mt-2">TECH STACK</div>
                            <div className="text-xs">Arduino</div>
                            <div className="text-xs">C++</div>
                            <div className="font-bold mt-2">TEAM</div>
                            <div className="text-xs">4 People</div>
                            <div className="mb-2"></div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}