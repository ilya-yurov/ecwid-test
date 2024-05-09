import { defineStore } from 'pinia';
import { ref } from 'vue';

const useLayoutStore = defineStore('layout', () => {
    const isHeaderWithBackground = ref(false);
    const isDynamicHeaderPage = ref(false);

    const setIsHeaderWithBackground = (withBackground: boolean) => {
        isHeaderWithBackground.value = withBackground;
    };

    const setIsDynamicHeaderPage = (isStatic: boolean) => {
        isDynamicHeaderPage.value = isStatic;
    };

    return {
        isHeaderWithBackground,
        isDynamicHeaderPage,
        setIsHeaderWithBackground,
        setIsDynamicHeaderPage
    };
});

export default useLayoutStore;
