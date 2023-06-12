<template>
    <div>
    <table class="table">
        <thead>
            <tr>
            <th v-for="headerItem in productItemsHeader" scope="col">{{ headerItem }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) of products" :key="index">
                <ProductDetail :product="product"></ProductDetail>
            </tr>
        </tbody>
    </table>
    <nav aria-label="Page navigation example">
    <ul class="pagination">
        <li v-for="number in totalPage" class="page-item" @click="getProducts({skip:(number-1)*10})" ><a class="page-link" href="#">{{ number }}</a></li>
    </ul>
    </nav>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import ProductDetail from "./ProductDetail.vue";

const productItemsHeader = ref([
    "id", "title", "description", "price", "discountPercentage", "rating", "stock", "brand", "category", "thumbnail"
])

let products = ref([])
let navigationData = ref({ limit: 10, total: 0, skip: 0 })
let totalPage = 10


onMounted( async () => {
    await getProducts({limit:10, skip:0})
})

async function getProducts({limit = 10, skip = 0}) {
    const url = ref(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    products.value.length = 0
    try {
        const response = await axios.get(url.value);    
        console.log(response)
        const len = products.value.length
        products.value = response.data.products

    } catch (error) {
        console.error(error);
    }
}


</script>

<style scoped>

</style>