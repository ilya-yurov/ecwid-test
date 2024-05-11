import { defineStore } from 'pinia';
import { ref } from 'vue';
import CategoryService from '@service/category/CategoryService';
import Category from '@entity/Category';

const useCategoryStore = defineStore('category', () => {
    const categories = ref([] as Category[]);
    const category = ref(Category.CreateEmpty());
    const isLoading = ref(false);

    const fetchCategories = async (parentId?: string) => {
        isLoading.value = true;
        categories.value = await CategoryService.fetchCategories(parentId);
        isLoading.value = false;
    };

    const fetchCategory = async (categoryId: string) => {
        isLoading.value = true;
        category.value = await CategoryService.fetchCategory(categoryId);
        isLoading.value = false;
    }

    const setCategories = (list: Category[]) => {
        categories.value = list;
    }

    return {
        categories,
        category,
        isLoading,
        fetchCategories,
        fetchCategory,
        setCategories,
    };
});

export default useCategoryStore;
