"use client"

import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface GLBModelProps {
    modelPath: string;
    rotation?: [number, number, number];
    position?: [number, number, number];
    onHoverChange?: (isHovered: boolean) => void;
    onClick?: () => void;
}

export default function GLBModel({ 
    modelPath, 
    rotation = [0, -Math.PI / 2, 0], 
    position = [0.9, 0, -7],
    onHoverChange,
    onClick
}: GLBModelProps) {
    const gltf = useGLTF(modelPath);
    const meshRef = React.useRef<THREE.Group>(null);
    const [isHovered, setIsHovered] = React.useState(false);
    const lastPulseTime = React.useRef(0);
    const [isPulsing, setIsPulsing] = React.useState(false);
    
    React.useEffect(() => {
        return () => {
            if (onClick) {
                document.body.style.cursor = 'default';
            }
        };
    }, [onClick]);
    
    useFrame((state) => {
        if (meshRef.current) {
            const currentTime = state.clock.elapsedTime;
            
            // Reset pulse timer when hovered
            if (isHovered) {
                lastPulseTime.current = currentTime;
                setIsPulsing(false);
            }
            
            // Trigger pulse every 3 seconds if not hovered
            if (!isHovered && currentTime - lastPulseTime.current > 6) {
                lastPulseTime.current = currentTime;
                setIsPulsing(true);
                setTimeout(() => setIsPulsing(false), 600); // Pulse duration
            }
            
            let targetScale = 1;
            if (isHovered) {
                targetScale = 1.1;
            } else if (isPulsing) {
                // Create a pulsing effect using sine wave
                const pulseProgress = ((currentTime - lastPulseTime.current) % 1) * Math.PI * 2;
                targetScale = 1 + Math.sin(pulseProgress) * 0.05;
            }
            
            const currentScale = meshRef.current.scale.x;
            const newScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.1);
            
            // Only update if there's a meaningful difference to reduce jittering
            if (Math.abs(currentScale - targetScale) > 0.001) {
                meshRef.current.scale.setScalar(newScale);
            }
        }
    });
    
    return (
        <group 
            ref={meshRef}
            rotation={rotation} 
            position={position}
            onPointerEnter={() => {
                setIsHovered(true);
                onHoverChange?.(true);
                if (onClick) {
                    document.body.style.cursor = 'pointer';
                }
            }}
            onPointerLeave={() => {
                setIsHovered(false);
                onHoverChange?.(false);
                if (onClick) {
                    document.body.style.cursor = 'default';
                }
            }}
            onClick={onClick}
        >
            <primitive object={gltf.scene.clone()} scale={1} />
        </group>
    );
}

// Preload all poster models
useGLTF.preload('/3d-objects/geronimo_poster.glb');
useGLTF.preload('/3d-objects/pulselink_poster.glb');
useGLTF.preload('/3d-objects/anthem_poster.glb');
useGLTF.preload('/3d-objects/voxcura_poster.glb');