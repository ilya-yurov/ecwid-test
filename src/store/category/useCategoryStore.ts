import { defineStore } from 'pinia';
import { ref } from 'vue';
import CategoryService from '@service/category/CategoryService';
import type Category from '@entity/Category';

const useCategoryStore = defineStore('category', () => {
    const categories = ref([] as Category[]);
    const isLoading = ref(false);

    const fetchCategoriesList = async () => {
        isLoading.value = true;
        categories.value = await CategoryService.fetchCategories();
        isLoading.value = false;
    };

    return {
        categories,
        isLoading,
        fetchCategoriesList
    };
});

export default useCategoryStore;
