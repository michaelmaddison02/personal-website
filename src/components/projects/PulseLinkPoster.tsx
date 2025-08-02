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
                

                <motion.div
                    className="absolute top-3/4 -translate-y-1/2 -left-20 z-10"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isHovered ? -110 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.4, delay: 0.0, ease: "easeInOut" }}
                >
                    <div className="w-[160px]">
                        <Card color="customblue">
                            <div className="font-bold mt-2 mb-2">WHAT IS THIS?</div>
                            <p className="text-sm text-justify">A wearable device that helps people find friends in crowded indoor environments using Bluetooth positioning and LED directional cues.</p>
                        </Card>
                    </div>
                </motion.div>
                
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
                        <div className="flex flex-col font-crit text-sm text-center">
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

                <motion.div
                    className="absolute top-3/7 -translate-y-1/2 -right-18 z-10"
                    initial={{ x: -40, opacity: 0 }}
                    animate={{
                        x: isHovered ? 36 : -40,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
                >
                    <Card color="customblue">
                        <div className="font-crit font-bold mx-2">2025</div>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}