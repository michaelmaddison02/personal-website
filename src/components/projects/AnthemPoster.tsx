"use client"

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import GLBModel from '../threejs/GLBModel';
import Card from '../Card';

export default function AnthemPoster() {
    const [isHovered, setIsHovered] = React.useState(false);

    const router = useRouter();

    const handleModelClick = () => {
        router.push('/projects/anthem');
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
                        modelPath="/3d-objects/anthem_poster.glb" 
                        onHoverChange={setIsHovered}
                        onClick={handleModelClick}
                    />
                </Canvas>
                
                {/* Animated Cards */}
                <motion.div
                    className="absolute top-1/4 -translate-y-1/2 -left-18 z-10"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isHovered ? -70 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.0, ease: "easeOut" }}
                >
                    <Card color="customgreen">
                        <div className="flex flex-col text-sm text-center">
                            <div className="font-bold mt-2">TIMELINE</div>
                            <div className="text-xs">7 months</div>
                            <div className="font-bold mt-2">TECH STACK</div>
                            <div className="text-xs">React</div>
                            <div className="text-xs">Typescript</div>
                            <div className="text-xs">Express.js</div>
                            <div className="text-xs">MongoDB</div>
                            <div className="text-xs">Python FastAPI</div>
                            <div className="text-xs"></div>
                            <div className="font-bold mt-2">TEAM</div>
                            <div className="text-xs">4 People</div>
                            <div className="mb-2"></div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 -left-16 z-10"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isHovered ? -80 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                >
                    <Card color="customgreen">
                        <div className="text-sm font-bold mx-2">2024-2025</div>
                    </Card>
                </motion.div>
                
                <motion.div
                    className="absolute top-2/3 -translate-y-1/2 -right-20 z-10"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isHovered ? 100 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.0, ease: "easeOut" }}
                >
                    <div className="w-[160px]">
                        <Card color="customgreen">
                            <div className="font-bold mt-2 mb-2">WHAT IS THIS?</div>
                            <p className="text-sm text-justify">Anthem is the first end-to-end platform to discover, discuss and document live music experiences. This is a full-stack proof-of-concept project that my three teammates and I created to address that gaps we found in the live-music discovery process.
                            </p>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}