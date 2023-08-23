import Image from 'next/image'
import {inspect} from "util";
import './globals.css'

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="backgroundImage">
                    <Image
                        src="/img/skovl.jpg"
                        alt="Background Image"
                        layout="fill"
                        objectFit="contain"  // Use 'contain' instead of 'cover'
                        quality={100}
                    />
                </div>
            </main>
        </>
    )
}
