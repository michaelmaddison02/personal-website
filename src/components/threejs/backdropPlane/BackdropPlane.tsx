'use client'

import { Plane, shaderMaterial } from '@react-three/drei'
import { extend, useFrame, useThree } from '@react-three/fiber'
import React, { type FC, useRef } from 'react'
import { ShaderMaterial } from 'three'

import fragmentShader from './backdropPlane.frag'
import vertexShader from './backdropPlane.vert'

type Uniforms = {
    uTime: number
    iTime: number
    iResolution: [number, number, number]
    uScrollOffset: number
}

const INITIAL_UNIFORMS: Uniforms = {
    uTime: 0,
    iTime: 0,
    iResolution: [1, 1, 1],
    uScrollOffset: 0,
}

const CustomShaderMaterial = shaderMaterial(INITIAL_UNIFORMS, vertexShader, fragmentShader)
const BackdropPlaneShaderMaterial = extend(CustomShaderMaterial)

type Props = {
    scrollOffset: number
}

const BackdropPlane: FC<Props> = ({ scrollOffset }) => {
    const { viewport } = useThree()
    const shader = useRef<typeof BackdropPlaneShaderMaterial & Uniforms>(null)

    useFrame(({ clock }) => {
        if (!shader.current) return
        const time = clock.getElapsedTime()
        shader.current.uTime = time
        shader.current.iTime = time
        shader.current.iResolution = [viewport.width, viewport.height, 1]
        shader.current.uScrollOffset = scrollOffset * 0.001
    })

    return (
        <Plane args={[viewport.width, viewport.height, 1, 1]} position={[0, 0, 0]}>
            <BackdropPlaneShaderMaterial
            key={CustomShaderMaterial.key}
            ref={shader}
            {...INITIAL_UNIFORMS}
            uTime={0}
            iTime={0}
            iResolution={[1, 1, 1]}
            uScrollOffset={0}
        />
        </Plane>
    )
}

export default BackdropPlane
