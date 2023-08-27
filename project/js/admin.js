import { getData, deleteProduct } from "./appData.js";
import { renderAdminProducts } from "./render.js";

const render = (products) => {
    renderAdminProducts(products)

    document.querySelectorAll('.js-delete-product').forEach(button => {
        button.addEventListener('click', (element) => {
            const productId = element.target.dataset.productId;
            deleteProduct(productId);

            window.location.reload()
        })
    })
}

(() => {
    const appData = getData();
    render(appData.products)
})()
