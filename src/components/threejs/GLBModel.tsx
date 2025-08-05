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
    
    React.useEffect(() => {
        return () => {
            if (onClick) {
                document.body.style.cursor = 'default';
            }
        };
    }, [onClick]);
    
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

// Preload all poster models
useGLTF.preload('/3d-objects/geronimo_poster.glb');
useGLTF.preload('/3d-objects/pulselink_poster.glb');
useGLTF.preload('/3d-objects/anthem_poster.glb');
useGLTF.preload('/3d-objects/voxcura_poster.glb');