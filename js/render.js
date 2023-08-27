import { product as productTemplate, filterBlock, adminProduct } from "./templates.js";


export const renderFilters = (filters) => {

    let filtersToRender = '';


    Object.keys(filters).forEach(key => {
        filtersToRender = filtersToRender + filterBlock(key, filters[key].values, filters[key].selected)
    })

    document.querySelector('.js-filters-block').innerHTML = filtersToRender;
}

export const renderProducts = (products, filters, sort, search) => {
    let productsToRender = '';
    const cartHolder = document.querySelector('.js-cart-holder');
    let filteredProducts = products;


    if (filters.brand.selected.length) {
        filteredProducts = filteredProducts.filter(product => filters.brand.selected.includes(product.brand))
    }

    if (filters.temperature.selected.length) {
        filteredProducts = filteredProducts.filter(product => filters.temperature.selected.includes(product.temperature))
    }

    if (filters.power.selected.length) {
        filteredProducts = filteredProducts.filter(product => filters.power.selected.includes(product.power))
    }

    if (sort && sort !== 'default') {
        if (sort === 'lowest') {
            filteredProducts = filteredProducts.sort((a, b) => {
                if (Number(a.price) > Number(b.price)) {
                    return 1;
                }
                if (Number(a.price) < Number(b.price)) {
                    return -1;
                }
                return 0;
            })
        }
        if (sort === 'highest') {
            filteredProducts = filteredProducts.sort((a, b) => {
                if (Number(a.price) > Number(b.price)) {
                    return -1;
                }
                if (Number(a.price) < Number(b.price)) {
                    return 1;
                }
                return 0;
            })
        }
    }

    if (search) {
        filteredProducts = filteredProducts.filter(product =>
            product.fullTitle.toLowerCase().includes(search.toLowerCase())
        )
    }

    filteredProducts.forEach((product) => {
        productsToRender = productsToRender + productTemplate(product);
    });

    cartHolder.innerHTML = productsToRender;
}

export const renderAdminProducts = (products) => {
    let productsToRender = '';
    const cartHolder = document.querySelector('.js-admin-products');

    products.forEach((product) => {
        productsToRender = productsToRender + adminProduct(product);
    });

    cartHolder.innerHTML = cartHolder.innerHTML + productsToRender;
}


