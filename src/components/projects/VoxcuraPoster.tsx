"use client"

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import GLBModel from '../threejs/GLBModel';
import Card from '../Card';

interface VoxcuraPosterProps {
    windowWidth: number;
}

export default function VoxcuraPoster({ windowWidth }: VoxcuraPosterProps) {
    const [isHovered, setIsHovered] = React.useState(false);
    const router = useRouter();

    const handleModelClick = () => {
        router.push('/projects/voxcura');
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
                    <directionalLight position={[5, 5, 5]} intensity={0.8} />
                    <GLBModel 
                        modelPath="/3d-objects/voxcura_poster.glb" 
                        onHoverChange={setIsHovered}
                        onClick={handleModelClick}
                    />
                </Canvas>
                
                {/* Animated Cards */}
                <motion.div
                    className="absolute top-1/5 -translate-y-1/2 -left-20 z-10"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isHovered ? -75 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <Card color="customwhite">
                        <div className="flex flex-col text-sm text-center">
                            <div className="font-bold mt-2">TIMELINE</div>
                            <div className="text-xs">6 months</div>
                            <div className="font-bold mt-2">TECH STACK</div>
                            <div className="text-xs">Python</div>
                            <div className="text-xs">ChainLit</div>
                            <div className="font-bold mt-2">TEAM</div>
                            <div className="text-xs">3 People</div>
                            <div className="mb-2"></div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    className="absolute top-2/5 -translate-y-1/2 -left-20 z-10"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isHovered ? -40 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                >
                    <Card color="customwhite">
                        <div className="flex flex-col text-sm text-center">
                            <div className="font-bold mx-2">2024</div>
                        </div>
                    </Card>
                </motion.div>
                
                <motion.div
                    className="absolute top-2/5 -translate-y-1/2 -right-14 z-10"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isHovered ? 95 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                >
                    <div className="w-[120px]">
                        <Card color="customwhite">
                            <div className="text-center">
                                <div className="font-bold mt-2 mb-2">AWARDS</div>
                                <div className="text-xs">Won $50,000 at Dartmouth Health-Tech Accelerator</div>
                                <div className="mb-2"></div>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                <motion.div
                    className="absolute top-3/4 -translate-y-1/2 -right-18 z-10"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isHovered ? 130 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <div className="w-[170px]">
                        <Card color="customwhite">
                            <div className="font-bold mt-2 mb-2">WHAT IS THIS?</div>
                            <p className="text-sm text-justify">Voxcura is a multi-agent LLM chatbot that provides medical consultation through conversational symptom assessment and delivers differential diagnoses with great accuracy.
                            </p>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}