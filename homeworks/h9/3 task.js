//9-3. Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.
const h3Tags = document.querySelectorAll("h3");

h3Tags.forEach(h3Tag => {
    const nextElement = h3Tag.nextElementSibling;
    if (nextElement.tagName === "DIV") {
        h3Tag.parentNode.insertBefore(nextElement, h3Tag);
    }
});