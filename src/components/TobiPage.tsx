'use client'
import React, { useState } from 'react';
import { ImageRotator } from '@/components/ImageRotator';

function TobiPage() {
    const [isSpinning, setIsSpinning] = useState(false);

    const handleButtonSpin = () => {
        setIsSpinning(true);
        setTimeout(() => {
            setIsSpinning(false);
        }, 1000); // Adjust the duration of spinning
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ImageRotator spin={isSpinning} />
            <button className="spin-button" onClick={handleButtonSpin}>
                Spin 360°
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
