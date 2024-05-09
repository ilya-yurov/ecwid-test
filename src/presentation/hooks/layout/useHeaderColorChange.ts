import { onMounted, onUnmounted, Ref } from 'vue';
import useLayoutStore from '@store/layout/useLayoutStore.ts';

const OFFSET = 100;

type ReturnT = {
    isHeaderWithBackground: Ref<boolean>;
    isDynamicHeaderPage: Ref<boolean>;
};

const useHeaderColorChange = (): ReturnT => {
    const store = useLayoutStore();
    const { isHeaderWithBackground, isDynamicHeaderPage } = storeToRefs(store);

    const handleScroll = () => {
        const scrollTop = window.scrollY;

        if (scrollTop > OFFSET) {
            store.setIsHeaderWithBackground(true);
        } else {
            store.setIsHeaderWithBackground(false);
        }
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    return { isHeaderWithBackground, isDynamicHeaderPage };
};

export default useHeaderColorChange;
