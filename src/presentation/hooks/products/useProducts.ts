import { onMounted, Ref } from 'vue';
import type Product from '@entity/Product';
import useProductStore from '@store/product/useProductStore';

type ReturnT = {
    products: Ref<Product[]>;
    isLoading: Ref<boolean>;
};

const useProducts = (): ReturnT => {
    const store = useProductStore();
    const { isLoading, products } = storeToRefs(store);

    onMounted(async () => {
        await store.fetchProducts();
    });

    return { products, isLoading };
};

export default useProducts;
