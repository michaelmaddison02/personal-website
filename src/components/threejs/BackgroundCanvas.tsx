'use client'

import { OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { type FC, useEffect, useState } from 'react'

import BackdropPlane from '@/components/threejs/backdropPlane/BackdropPlane'

type Props = {}

const BackgroundCanvas: FC<Props> = ({} : Props) => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Canvas gl={{ alpha: false, antialias: false }} className='!fixed inset-0 z-0' style={{ zIndex: -1 }}>
            <OrthographicCamera makeDefault={true} position={[0, 0, 5]} />
            <BackdropPlane scrollOffset={scrollY} />
        </Canvas>
    )
}

export default BackgroundCanvas