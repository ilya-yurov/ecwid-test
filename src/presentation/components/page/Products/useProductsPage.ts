import { onMounted } from 'vue';
import { NOT_FOUND } from '@constant/routes.ts';
import useProductStore from '@store/product/useProductStore';

const useProductsPage = (): boolean => {
    const {
        query: { id, categoryId }
    } = useRoute();
    const router = useRouter();
    const store = useProductStore();

    onMounted(async () => {
        if (id) {
            await store.fetchProduct(Number(id));

            return;
        }

        if (categoryId) {
            //TODO: some fetch category logic
            console.log('fetching category');

            return;
        }

        router.push(NOT_FOUND).then();
    });

    return !!id;
};

export default useProductsPage;
