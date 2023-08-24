'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageRotatorProps {
    spin: boolean;
    src: string; // Add the prop for image source
}

export function ImageRotator({ spin, src }: ImageRotatorProps) {
    const [rotationDegree, setRotationDegree] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);

    useEffect(() => {
        if (spin) {
            setIsSpinning(true);
            setRotationDegree(rotationDegree + 360);
            setTimeout(() => {
                setIsSpinning(false);
            }, 5000); // Adjust the duration of spinning
        }
    }, [spin]);

    const handleImageClick = () => {
        setRotationDegree(rotationDegree + 45);
    };

    return (
        <div className={`tobiImage image-container ${isSpinning ? 'spin' : ''}`} onClick={handleImageClick}>
            <Image
                src={src} // Use the src passed as a prop
                alt="Background Image"
                layout="fill"
                objectFit="contain"
                quality={100}
                style={{ transform: `rotate(${rotationDegree}deg)` }}
            />
            <style jsx>{`
              .image-container {
                position: relative;
                width: 500px; /* Adjust width as needed */
                height: 500px; /* Adjust height as needed */
                transition: transform 1s ease-in-out;
                transform-origin: center;
              }

              .spin {
                animation: spinAnimation 5s linear infinite;
              }

              @keyframes spinAnimation {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(-360deg);
                }
                // Negative value for clockwise rotation
              }
            `}</style>
        </div>
    );
}
