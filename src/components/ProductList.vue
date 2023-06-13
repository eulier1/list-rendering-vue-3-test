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
import { ref, onMounted, toRef, computed } from "vue";
import ProductDetail from "./ProductDetail.vue";
import { useFetch } from "../stores/fetch";
import { storeToRefs } from "pinia";

const productItemsHeader = ref([
    "id", "title", "description", "price", "discountPercentage", "rating", "stock", "brand", "category", "thumbnail"
])

const fetchStore = useFetch()

const { products } = storeToRefs(fetchStore)
let totalPage = 10

onMounted( async () => {
    await useFetch().getProducts({ limit:10, skip:0 })
})

function getProducts({ limit = 10, skip = 0 }) {
    useFetch().getProducts({ limit, skip })
}


</script>

<style scoped>

</style>