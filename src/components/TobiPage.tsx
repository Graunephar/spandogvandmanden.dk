'use client'

import { getRandomImage } from '@/utils/random'; // Replace with the actual path to your utility function
import React, { useState } from 'react';
import { ImageRotator } from '@/components/ImageRotator';

function TobiPage({ initialImageSource }: { initialImageSource: string }) {
    const [isSpinning, setIsSpinning] = useState(false);



    const handleButtonSpin = () => {
        setIsSpinning(true);
        setTimeout(() => {
            setIsSpinning(false);
        }, 5000); // Adjust the duration of spinning
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>"Jeg er snedker, men i Tivoli laver jeg blot spand og vand"</h1>
            <ImageRotator spin={isSpinning} src={initialImageSource} /> {/* Pass the random image source */}
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
