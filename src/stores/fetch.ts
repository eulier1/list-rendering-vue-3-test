import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFetch = defineStore('fetch', () => {
    const baseUrl = ref(`https://dummyjson.com/`)
    let products = ref([])

    async function getProducts({ limit = 10, skip = 0 }) {
        products.value.length = 0
        try {
            const response = await fetch(`${baseUrl.value}products?limit=${limit}&skip=${skip}`);
            const data = await response.json()
            console.log(data.products)
            products.value = data.products
            console.log(products.value)
        } catch (error) {
            console.error(error);
        }
    }

    async function searchProduct({ term = "" }) {
        products.value.length = 0
        try {
            const response = await fetch(`${baseUrl.value}products/search?q=${term}`);
            const data = await response.json()
            console.log(data)
            products.value = data.products
        } catch (error) {
            console.error(error);
        }
    }


    return { products, getProducts, searchProduct }
})
