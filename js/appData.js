import { LOCAL_STORAGE_DATA_KEY } from "./constans.js";
import data from "./dummyData.js";
import { product } from "./templates.js";

export const setData = (data) => localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(data));
export const getData = () => {
    let appData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY) || '{}');
    if (!appData.products) {
        setData(data);
        appData = data;
    }

    return appData;
}

export const deleteProduct = (productId) => {
    const appData = getData();
    setData({
        products: appData.products.filter(product => productId !== product.id)
    })
}

export const addProduct = (productData) => {
    const appData = getData();

    setData({
        products: [
            ...appData.products,
            productData,
        ],
    });
};

export const getProduct = (productId) => {
    const appData = getData();
    return appData.products.find(product => productId === product.id)
}

export const updateProduct = (productData) => {
    const appData = getData();
    setData({
        products: appData.products.map(product => {
            if (product.id === productData.id) {
                return productData;
            }
            return product;
        })
    })
}