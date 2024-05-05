import { onMounted, onUnmounted, Ref } from 'vue';
import useLayoutStore from '@store/layout/useLayoutStore.ts';

const OFFSET = 100;

type ReturnT = {
    isHeaderWithBackground: Ref<boolean>;
    isStaticHeaderPage: Ref<boolean>;
};

const useHeaderColorChange = (): ReturnT => {
    const store = useLayoutStore();
    const { isHeaderWithBackground, isStaticHeaderPage } = storeToRefs(store);

    const handleScroll = () => {
        const scrollTop = window.scrollY;

        if (scrollTop > OFFSET) {
            store.setHeaderWithBackground(true);
        } else {
            store.setHeaderWithBackground(false);
        }
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    return { isHeaderWithBackground, isStaticHeaderPage };
};

export default useHeaderColorChange;
