"use client"

import React from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
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
    const gltf = useLoader(GLTFLoader, modelPath);
    const meshRef = React.useRef<THREE.Group>(null);
    const [isHovered, setIsHovered] = React.useState(false);
    
    useFrame(() => {
        if (meshRef.current) {
            const targetScale = isHovered ? 1.1 : 1;
            const currentScale = meshRef.current.scale.x;
            const newScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.05);
            
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