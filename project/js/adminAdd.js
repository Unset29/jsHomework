import { addProduct, getProduct, updateProduct } from "./appData.js";
import { generateID } from "./utils.js";


const render = () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (productId) {

        const form = document.querySelector('.js-product-data-form');
        const productData = getProduct(productId);

        form.querySelector('input[name=title]').value = productData.title;
        form.querySelector('input[name=price]').value = productData.price || 0;
        form.querySelector('input[name=image]').value = productData.imageUrl;
        form.querySelector('input[name=brand]').value = productData.brand;
        form.querySelector('input[name=model]').value = productData.model;
        form.querySelector('input[name=power]').value = productData.power;
        form.querySelector('input[name=temperature]').value = productData.temperature;
        form.querySelector('input[name=formFactor]').value = productData.formFactor;
        form.querySelector('input[name=socket]').value = productData.socket;
    }
};

(() => {
    render();

    document.querySelector('.js-product-data-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');

        const data = new FormData(event.target);
        const productData = {
            imageUrl: data.get('image'),
            title: data.get('title'),
            fullTitle: `${data.get('title')} ${data.get('brand')} ${data.get('model')} ${data.get('socket')} ${data.get('formFactor')} ${data.get('power')} ${data.get('temperature')}`,
            price: data.get('price'),
            brand: data.get('brand'),
            model: data.get('model'),
            socket: data.get('socket'),
            formFactor: data.get('formFactor'),
            power: data.get('power'),
            temperature: data.get('temperature'),
            id: productId || generateID(8),
        }

        if (productId) {
            updateProduct(productData);
        } else {
            addProduct(productData);
        }

        window.location.href = "/project/adminPage.html"
    });
})();
