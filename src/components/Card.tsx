"use client"

import React from 'react';

interface CardProps {
    color?: string;
    children: React.ReactNode;
}

// Color mapping to hex values for background opacity
const colorMap: { [key: string]: string } = {
    customgray: '#3f3f46',
    customblue: '#006FEE',
    custompurple: '#9353d3',
    customgreen: '#17c964',
    customorange: '#f5a524',
    customred: '#f31260',
};

export default function Card({ color = 'customgray', children }: CardProps) {
    const hexColor = colorMap[color] || colorMap.customgray;
    const backgroundColorWithOpacity = `${hexColor}20`; // 20% opacity
    
    return (
        <div 
            className="border-2 rounded-lg"
            style={{ borderColor: hexColor }}
        >
            <div 
                className="p-3 rounded-lg"
                style={{ 
                    backgroundColor: backgroundColorWithOpacity,
                    color: hexColor 
                }}
            >
                {children}
            </div>
        </div>
    );
}