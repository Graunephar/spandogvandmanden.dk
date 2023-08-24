import React from 'react';
import { ImageRotator } from '@/components/ImageRotator';
import TobiPage from "@/components/TobiPage";
import {getRandomImage, getRandomQuote} from "@/utils/random";

function YourMainPage() {
    const initialImageSource = getRandomImage();
    const quote = getRandomQuote()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <TobiPage initialImageSource={initialImageSource} quote={quote} /> {/* Pass the initial image source */}
        </main>
    );
}

export default YourMainPage;
