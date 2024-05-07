import { onMounted, Ref } from 'vue';
import useCategoryStore from '@store/category/useCategoryStore';
import type Category from '@entity/Category';

type ReturnT = {
    categories: Ref<Category[]>;
    isLoading: Ref<boolean>;
};

const useCategories = (): ReturnT => {
    const store = useCategoryStore();
    const { isLoading, categories } = storeToRefs(store);

    onMounted(async () => {
        await store.fetchCategories();
    });

    return { categories, isLoading };
};

export default useCategories;
