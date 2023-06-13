<template>
    <div class="input-group">
        <input :value="inputSearch" @input="doRequest($event.target?.value)" type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username with two button addons">
        <button class="btn btn-outline-secondary" type="button" @click="inputSearch = '' ">Clear</button>
    </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import { useDebounceFn } from '@vueuse/core'
import { useFetch } from "../stores/fetch";

const inputSearch: Ref<String> = ref("")

const debouncedRequest = useDebounceFn((inputText) => inputText, 500)

async function doRequest(inputText: String ) {
  inputSearch.value = inputText
  const value = await debouncedRequest(inputText)
  if (value)
    await useFetch().searchProduct({term: value})
}

</script>

<style scoped>

</style>