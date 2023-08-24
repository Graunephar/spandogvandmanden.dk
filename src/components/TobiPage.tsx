'use client'

import React, { useState } from 'react';
import { ImageRotator } from '@/components/ImageRotator';

function TobiPage() {
    const [isSpinning, setIsSpinning] = useState(false);

    const imageUrls = [
        '/img/flamingo.png',
        '/img/hest.png',
        '/img/mangespande.png',
        '/img/merehest.png',
        '/img/spande.png',
    ];

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        return imageUrls[randomIndex];
    };


    const handleButtonSpin = () => {
        setIsSpinning(true);
        setTimeout(() => {
            setIsSpinning(false);
        }, 5000); // Adjust the duration of spinning
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>"Jeg er snedker, men i Tivoli laver jeg blot spand og vand"</h1>
            <ImageRotator spin={isSpinning} src={getRandomImage()} /> {/* Pass the random image source */}
            <button className="spin-button" onClick={handleButtonSpin}>
                Drej mig rundt
            </button>
            <style jsx>{`
        .spin-button {
          margin-top: 1rem;
        }
      `}</style>
        </main>
    );
}

export default TobiPage;
