import { defineStore } from 'pinia';
import { ref } from 'vue';

const useLayoutStore = defineStore('layout', () => {
    const isHeaderWithBackground = ref(false);
    const isStaticHeaderPage = ref(false);

    const setHeaderWithBackground = (withBackground: boolean) => {
        isHeaderWithBackground.value = withBackground;
    };

    const setStaticHeaderPage = (isStatic: boolean) => {
        isStaticHeaderPage.value = isStatic;
    };

    return {
        isHeaderWithBackground,
        isStaticHeaderPage,
        setHeaderWithBackground,
        setStaticHeaderPage
    };
});

export default useLayoutStore;
