import { defineStore } from 'pinia';
import { ref } from 'vue';
import CategoryService from '@service/category/CategoryService';
import type Category from '@entity/Category';

const useCategoryStore = defineStore('category', () => {
    const categories = ref([] as Category[]);
    const isLoading = ref(false);

    const fetchCategories = async () => {
        isLoading.value = true;
        categories.value = await CategoryService.fetchCategories();
        isLoading.value = false;
    };

    return {
        categories,
        isLoading,
        fetchCategories
    };
});

export default useCategoryStore;
