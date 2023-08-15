//9-1.Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону, потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.

const headers = document.querySelectorAll("h2.head");

headers.forEach(header => {
    header.style.backgroundColor = "red";
    const elementsOfInner = header.querySelectorAll(".inner");
    elementsOfInner.forEach(innerElement => {
        elementsOfInner.style.fontSize = "35px";
    });
});

//---------------------------------------------------------




