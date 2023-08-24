// components/ImageRotator.js
'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export function ImageRotator() {
    const [rotationDegree, setRotationDegree] = useState(0);

    const handleImageClick = () => {
        setRotationDegree(rotationDegree + 45);
    };

    return (
        <div className="" onClick={handleImageClick}>
            <Image
                src="/img/skovl.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="contain"
                quality={100}
                style={{ transform: `rotate(${rotationDegree}deg)` }}
            />
        </div>
    );
}
