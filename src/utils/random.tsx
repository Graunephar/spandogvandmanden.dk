const imageUrls = [
    '/img/flamingo.png',
    '/img/hest.png',
    '/img/mangespande.png',
    '/img/merehest.png',
    '/img/spande.png',
];



export function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}
