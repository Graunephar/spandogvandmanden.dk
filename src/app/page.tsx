import React from 'react';
import { ImageRotator } from '@/components/ImageRotator';
import TobiPage from "@/components/TobiPage";
import {getRandomImage} from "@/utils/random";

function YourMainPage() {
    const initialImageSource = getRandomImage();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <TobiPage initialImageSource={initialImageSource} /> {/* Pass the initial image source */}
        </main>
    );
}

export default YourMainPage;
