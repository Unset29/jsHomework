//9-2. На HTML-сторінці є посилання <a>. У випадку коли, href починається на https://, потрібно додати посиланню атрибут target="_blank".
const links = document.querySelectorAll("a");

links.forEach(link => {
    if (link.href.startsWith("https://")) {
        link.setAttribute("target", "_blank");
    }
});

//-------------------------------------------------------
