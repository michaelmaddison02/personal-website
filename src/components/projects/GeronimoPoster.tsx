"use client"

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import GLBModel from '../threejs/GLBModel';
import Card from '../Card';

interface GeronimoPosterProps {
    windowWidth: number;
}

export default function GeronimoPoster({ windowWidth }: GeronimoPosterProps) {
    const [isHovered, setIsHovered] = React.useState(false);
    const router = useRouter();

    const handleModelClick = () => {
        router.push('/projects/geronimo-stilton');
    };

    return (
        <div className="w-full h-full flex justify-center items-center flex-shrink-0 snap-start">
            <div className="relative max-w-[475px] w-full h-full">
                <Canvas camera={{ position: [0, 14, 0], fov: 90 }}>
                    <OrbitControls 
                        enableZoom={false} 
                        enablePan={false} 
                        enableRotate={false}
                        target={[0, 0, 0]}
                    />
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[5, 5, 5]} intensity={0.8} />
                    <GLBModel 
                        modelPath="/3d-objects/geronimo_stilton_poster.glb" 
                        onHoverChange={setIsHovered}
                        onClick={handleModelClick}
                    />
                </Canvas>
                
                {/* Animated Cards */}
                <motion.div
                    className="absolute top-1/4 -translate-y-1/2 -left-16 z-10"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isHovered ? -80 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                >
                    <Card color="customorange">
                        <div className="flex flex-col text-sm text-center">
                            <div className="font-bold mt-2">TIMELINE</div>
                            <div className="text-xs">1 week</div>
                            <div className="font-bold mt-2">TECH STACK</div>
                            <div className="text-xs">Next.js</div>
                            <div className="text-xs">Typescript</div>
                            <div className="text-xs">Tailwind CSS</div>
                            <div className="text-xs">Fast API</div>
                            <div className="font-bold mt-2">TEAM</div>
                            <div className="text-xs">Solo Project</div>
                            <div className="mb-2"></div>
                        </div>
                    </Card>
                </motion.div>
                
                <motion.div
                    className="absolute top-3/4 -translate-y-1/2 -right-16 z-10"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isHovered ? 105 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                >
                    <div className="w-[150px]">
                        <Card color="customorange">
                            <div className="font-bold mt-2 mb-2">WHAT IS THIS?</div>
                            <p className="text-sm text-justify">A creative text styling application that analyzes the emotional content of text and applies dynamic, emotion-based styling to individual words.</p>
                        </Card>
                    </div>
                </motion.div>

                <motion.div
                    className="absolute top-2/4 -translate-y-1/2 -right-16 z-10"
                    initial={{ x: -40, opacity: 0 }}
                    animate={{
                        x: isHovered ? 40 : -40,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                >
                    
                    <Card color="customorange">
                        <div className="font-bold mx-2">2025</div>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}