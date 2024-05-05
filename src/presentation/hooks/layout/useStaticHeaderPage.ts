import { onMounted, onUnmounted } from 'vue';
import useLayoutStore from '@store/layout/useLayoutStore.ts';

const useStaticHeaderPage = () => {
    const store = useLayoutStore();

    onMounted(() => {
        store.setStaticHeaderPage(true);
    });

    onUnmounted(() => {
        store.setStaticHeaderPage(false);
    });
};

export default useStaticHeaderPage;
