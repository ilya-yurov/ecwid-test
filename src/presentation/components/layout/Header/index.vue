<template>
    <header
        class="header"
        :class="{
            'header-colored': isHeaderWithBackground || isStaticHeaderPage
        }"
    >
        <Navbar :isWhite="!isHeaderWithBackground && !isStaticHeaderPage" />
        <CartButton
            :count="MOCK_CART_ITEMS_COUNT"
            :isWhite="!isHeaderWithBackground && !isStaticHeaderPage"
        />
    </header>
</template>

<script setup lang="ts">
import useHeaderColorChange from '@presentation/hooks/layout/useHeaderColorChange.ts';
import CartButton from './CartButton/index.vue';
import Navbar from './Navbar/index.vue';

const { isHeaderWithBackground, isStaticHeaderPage } = useHeaderColorChange();
const MOCK_CART_ITEMS_COUNT = 10;

defineOptions({ name: 'Header' });
</script>

<style lang="scss" scoped>
.header {
    height: $header-height;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 10px 10px;
    position: fixed;
    width: 100%;
    transition: background-color var(--transition-slow);
}

.header-colored {
    background-color: $color-lightGreen;
}
</style>
