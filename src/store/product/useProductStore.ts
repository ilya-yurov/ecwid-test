import { defineStore } from 'pinia';
import { ref } from 'vue';
import ProductService from '@service/product/ProductService';
import Product from '@entity/Product';

const useProductStore = defineStore('product', () => {
    const products = ref([] as Product[]);
    const product = ref(Product.CreateEmpty());
    const isLoading = ref(false);

    const fetchProducts = async () => {
        isLoading.value = true;
        products.value = await ProductService.fetchProducts();
        isLoading.value = false;
    };

    const fetchProduct = async (id: number) => {
        isLoading.value = true;
        product.value = await ProductService.fetchProduct(id);
        isLoading.value = false;
    };

    return {
        products,
        product,
        isLoading,
        fetchProducts,
        fetchProduct
    };
});

export default useProductStore;
