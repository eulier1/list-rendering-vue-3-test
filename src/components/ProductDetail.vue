<template>
    <td scope="row">{{product.id}}</td>
    <td>{{product.title}}</td>
    <td>{{product.description}}</td>
    <td>{{product.price}}</td>
    <td>{{product.discountPercentage}}</td>
    <td>{{product.rating}}</td>
    <td>{{product.stock}}</td>
    <td>{{product.brand}}</td>
    <td>{{product.category}}</td>
</template>

<script setup lang="ts">
import { toRef } from 'vue';


export interface Product {
    id: number, 
    title: string, 
    description : string,
    price: number, 
    discountPercentage: number, 
    rating: number,
    stock: number,
    brand: string, 
    category: string
}

const props = defineProps<{product: Product}>()

const { product } = props

</script>

<style scoped>

</style>