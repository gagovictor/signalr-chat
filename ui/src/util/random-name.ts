// Utility function to generate a random username
const adjectives = [
    "fast", "quick", "silent", "brave", "fierce", "mighty", "clever", "bright", "sharp", "gentle"
];

const nouns = [
    "lion", "tiger", "eagle", "wolf", "panther", "fox", "hawk", "bear", "shark", "dragon"
];

const capitalizeFirstLetter = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const getRandomElement = (arr: string[]): string => {
    return arr[Math.floor(Math.random() * arr.length)];
}

export const generateRandomUsername = (): string => {
    const adjective = capitalizeFirstLetter(getRandomElement(adjectives));
    const noun = capitalizeFirstLetter(getRandomElement(nouns));
    return `${adjective}${noun}`;
};

export default generateRandomUsername;