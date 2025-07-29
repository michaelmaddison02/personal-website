'use client'

import { OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { type FC, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import BackdropPlane from '@/components/threejs/backdropPlane/BackdropPlane'

const BackgroundCanvas: FC = () => {
    const [scrollY, setScrollY] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isProjectsPage = pathname === '/projects' || pathname.startsWith('/projects/')

    return (
        <Canvas gl={{ alpha: false, antialias: false }} className='!fixed inset-0 z-0' style={{ zIndex: -1 }}>
            <OrthographicCamera makeDefault={true} position={[0, 0, 5]} />
            <BackdropPlane scrollOffset={scrollY} isProjectsPage={isProjectsPage} />
        </Canvas>
    )
}

export default BackgroundCanvas