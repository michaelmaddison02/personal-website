"use client"

import SiteHeaderNav from "../../components/siteHeaderNav"
import ProjectTile from "../../components/ProjectTile"
import BackgroundCanvas from '@/components/threejs/BackgroundCanvas';
import Image from 'next/image';
import { motion } from "motion/react"

export default function Page() {
    const projects = [
        {
            projectName: "GERONIMO STILTON",
            shortDescription: "Full-stack Creative Coding Project",
            longDescription: "A creative text styling application that analyzes the emotional content of text and applies dynamic, emotion-based styling to individual words.",
            githubLink: "https://github.com/michaelmaddison02/geronimo-stilton",
            // videoLink: "/videos/geronimo-stilton-project-tile-demo.mov",
            projectPage: "/projects/geronimo-stilton"
        },
        {
            projectName: "PULSELINK",
            shortDescription: "Bluetooth Friend Finding Watch",
            longDescription: "PulseLink is a wearable device prototype that helps people find their friends in crowded indoor environments (like parties and festivals) where smartphones often fail. The device uses Bluetooth Low Energy (BLE) technology with fixed anchor points to triangulate user positions, and features a minimalist 8×8 LED matrix that displays real-time directional and proximity cues without requiring users to look at a screen. By combining BLE positioning with peer-to-peer signal strength measurements, PulseLink provides indoor location tracking that traditional GPS-based solutions cannot offer.",
            githubLink: "https://github.com/NPande25/PulseLink",
            projectPage: "/projects/pulselink"
        },
        {
            projectName: "ANTHEM",
            shortDescription: "Full-stack Creative Coding Project",
            longDescription: "A creative text styling application that analyzes the emotional content of text and applies dynamic, emotion-based styling to individual words. Inspired by the whimsical world of Geronimo Stilton, this app transforms plain text into visually expressive content by detecting emotions and applying appropriate colors and fonts.",
            demoLink: "#",
            githubLink: "#"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col p-4">
            <SiteHeaderNav />
            
            <div id="projectTileList" className="flex flex-col gap-5 items-end max-[700px]:items-center">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            opacity: { duration: 0.4, delay: index * 0.2 },
                            x: { duration: 0.4, delay: index * 0.2, type: "spring", bounce: 0.2 }
                        }}
                        whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.15, type: "tween" }
                        }}
                    >
                        <ProjectTile {...project} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
  }