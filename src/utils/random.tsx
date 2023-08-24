export const runtime = 'edge';


const imageUrls = [
    '/img/flamingo.png',
    '/img/hest.png',
    '/img/mangespande.png',
    '/img/merehest.png',
    '/img/spande.png',
];

const quotes = [
    "Hvem sagde spand og vand?",
    "Jeg er snedker, men i Tivoli laver jeg bare spand og vand",
    "SpandOgVandManden det er mig!",
    "Mit speciale er spand og vand!",
]


export function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

export function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
