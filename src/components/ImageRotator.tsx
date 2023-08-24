'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export function ImageRotator() {
    const [rotationDegree, setRotationDegree] = useState(0);

    const handleImageClick = () => {
        setRotationDegree(rotationDegree + 45);
    };

    return (
        <div className="image-container" onClick={handleImageClick}>
            <Image
                src="/img/skovl.jpg"
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
      `}</style>
        </div>
    );
}
