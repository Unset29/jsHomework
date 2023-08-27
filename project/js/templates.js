export const product = (productData) => ` 
<div class="cart_conteiner border rounded">
    <div class="cart_item flex flex-col items-center">
        <img src="${productData.imageUrl}" class="cart_img p-8" alt="img">
        <div class="cart_description pb-4 w-full">
            <p class="item_describe stroke-neutral-800 font-medium">
                ${productData.title} ${productData.brand} 
            </p>
            <p class="brand_item stroke-neutral-600 font-semibold">
                Brand: ${productData.brand}
            </p>
            <p class="brand_item stroke-neutral-600 font-semibold">
                Model: ${productData.model}
            </p>
            <p class="brand_item stroke-neutral-600 font-semibold">
                Power: ${productData.power}
            </p>
            <p class="brand_item stroke-neutral-600 font-semibold">
                Temperature: ${productData.temperature}
            </p>
        </div>
    </div>
    <div class="prices flex justify-between p-8 items-center">
        <div class="priceCounter flex">
            <span class="moneySymbol font-medium font">$</span>
            <h3 class="price font-bold stroke-neutral-800 uppercase">
                ${productData.price}
            </h3>
        </div>
        <div class="add_box flex items-center gap-2">
            <div class="decrease"></div>
            <p class="counter font-medium">1</p>
            <div class="increase"></div>
            <div class="add_cart_button text-gray-50 uppercase font-semibold">add</div>
        </div>
    </div>
</div>
`;

export const adminProduct = (productData) => `
<div class="description_box flex items-center">
    <div class="description_item text-gray-600 pt-6 pl-10">
        ${productData.id}
    </div>
    <div class="description_item text-gray-600 pt-6 pl-24">
        ${productData.title}
    </div>
    <div class="description_item text-gray-600 pt-6 pl-20">
        ${productData.brand}
    </div>
    <div class="description_item text-gray-600 pt-6 pl-28">
        ${productData.model}
    </div>
    <div class="description_item text-gray-600 pt-6 pl-40">
        ${productData.power}
    </div>
    <div class="description_item text-gray-600 pt-6 pl-48">
        ${productData.temperature}
    </div>
    <div class="description_buttons flex pl-10 gap-2 pt-6">
        <a href="/project/adminAdd.html?id=${productData.id}">    
            <div class="description_button_edit flex items-center bg-blue-600 py-2 px-10 rounded-lg uppercase font-semibold text-gray-50">
                edit
            </div>
        </a>
        <div data-product-id="${productData.id}" class="description_button_remove js-delete-product bg-red-600 py-2 px-10 rounded-lg uppercase font-semibold text-gray-50">
            delete
        </div>
    </div>
</div>
`

export const filterBlock = (title, values, activeFilters) => {
    let filterValues = '';

    values.forEach(value => {
        filterValues = filterValues + `
        <label class="label flex items-center pl-4 pb-1 gap-2 pt-2">
            <input type="checkbox" ${activeFilters.includes(value) ? 'checked="true"' : ''} data-filter="${title}" value="${value}" class="checkbox w-5 h-5">
            <span class="text">
                ${value}
            </span>
        </label>
    `
    })

    return `
    <div class="checkbox_items flex flex-col ps-6 pr-24 py-4">
        <h3 class="checkbox_title uppercase font-bold flex items-center gap-2">
            ${title}
        </h3>
        ${filterValues}
    </div>
    `;

}

