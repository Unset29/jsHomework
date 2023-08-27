import { getData } from "./appData.js";
import { renderProducts, renderFilters } from "./render.js";

const render = (products) => {
    const params = new URLSearchParams(window.location.search);
    const sortParam = params.get('sort');
    const searchParam = params.get('search');
    const filters = {
        brand: {
            values: [],
            selected: params.get('brand') ? params.get('brand').split('+') : [],
        },
        temperature: {
            values: [],
            selected: params.get('temperature') ? params.get('temperature').split('+') : [],
        },
        power: {
            values: [],
            selected: params.get('power') ? params.get('power').split('+') : [],
        }
    };

    products.forEach(product => {
        if (!filters.brand.values.includes(product.brand)) {
            filters.brand.values.push(product.brand);
        }
        if (!filters.temperature.values.includes(product.temperature)) {
            filters.temperature.values.push(product.temperature);
        }
        if (!filters.power.values.includes(product.power)) {
            filters.power.values.push(product.power);
        }
    });

    renderProducts(products, filters, sortParam, searchParam);
    renderFilters(filters);

    document.querySelectorAll('.js-filters-block input[type=checkbox]').forEach(checkbox => {
        checkbox.addEventListener('change', (element) => {
            const isChecked = element.target.checked;
            const filterKey = element.target.dataset.filter;
            const filterValue = element.target.value;
            const currentParam = params.get(filterKey) || '';

            if (isChecked && !currentParam.split('+').includes(filterValue)) {
                params.set(filterKey, currentParam.length ? `${currentParam}+${filterValue}` : filterValue)
                window.location.search = params;
            } else if (!isChecked && currentParam.split('+').includes(filterValue)) {
                const filteredParams = currentParam.split('+').filter(value => value !== filterValue);

                if (filteredParams.length) {
                    params.set(filterKey, filteredParams.join('+'))
                } else {
                    params.delete(filterKey)
                }

                window.location.search = params;
            }
        })
    });

    const sort = document.querySelector('#sortBy');
    const search = document.querySelector('#search');


    if (sortParam) {
        sort.value = sortParam;
    }

    if (searchParam) {
        search.value = searchParam;
    }

    search.addEventListener('change', (event) => {
        const searchValue = event.target.value;

        if (searchValue.length > 3) {
            params.set('search', event.target.value);
            window.location.search = params;
        } else {
            params.delete('search');
            window.location.search = params;
        }
    });

    sort.addEventListener('change', (event) => {
        params.set('sort', event.target.value);
        window.location.search = params;
    });
}

(() => {
    const appData = getData();

    render(appData.products);
})();




