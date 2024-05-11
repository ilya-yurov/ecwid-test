import { Ref, watchEffect } from 'vue';
import { NOT_FOUND } from '@constant/routes.ts';
import { useRouter, useRoute } from 'vue-router';
import useProductStore from '@store/product/useProductStore';
import useCategoryStore from '@store/category/useCategoryStore.ts';

type ReturnT = {
    isProductsPage: Ref<boolean>;
    isLoading: Ref<boolean>;
};

const useProductsPage = (): ReturnT => {
    const route = useRoute();
    const router = useRouter();
    const isLoading = ref(false);
    const productStore = useProductStore();
    const categoryStore = useCategoryStore();
    const isProductsPage = ref(!!route.query.id);

    watchEffect(async () => {
        const id = route.query.id as string;
        const categoryId = route.query.categoryId as string;

        isProductsPage.value = !!id;

        if (id) {
            await productStore.fetchProduct(id);

            return;
        }

        if (categoryId) {
            isLoading.value = true;

            await categoryStore.fetchCategory(categoryId);
            await productStore.fetchProducts(categoryId);

            if (categoryStore.category.parentId) {
                await categoryStore.fetchCategories(categoryId);
            } else {
                categoryStore.setCategories([]);
            }

            isLoading.value = false;

            return;
        }

        router.push(NOT_FOUND).then();
    });

    return {isLoading, isProductsPage};
};

export default useProductsPage;
