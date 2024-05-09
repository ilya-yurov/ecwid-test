import { onMounted, onUnmounted } from 'vue';
import useLayoutStore from '@store/layout/useLayoutStore.ts';

const useDynamicHeaderPage = () => {
    const store = useLayoutStore();

    onMounted(() => {
        store.setIsDynamicHeaderPage(true);
    });

    onUnmounted(() => {
        store.setIsDynamicHeaderPage(false);
    });
};

export default useDynamicHeaderPage;
