import { defineStore } from 'pinia';
import { ref } from 'vue';
import CategoryService from '@service/product/ProductService';
import type Product from '@entity/Product';

const useProductStore = defineStore('product', () => {
    const products = ref([] as Product[]);
    const isLoading = ref(false);

    const fetchProducts = async () => {
        isLoading.value = true;
        products.value = await CategoryService.fetchCategories();
        isLoading.value = false;
    };

    return {
        products,
        isLoading,
        fetchProducts
    };
});

export default useProductStore;
