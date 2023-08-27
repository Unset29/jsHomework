export const generateID = (length) => [...Array(length)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');

