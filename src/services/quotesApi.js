export const getQuote = () => {
    return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(res => res.json())
        .then(([{ quote, character, image }]) => ({
            text: quote,
            name: character,
            img: image
        }));
};