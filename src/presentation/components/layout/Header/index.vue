<template>
    <header
        class="header"
        :class="{
            'header-colored': isHeaderWithBackground || !isDynamicHeaderPage
        }"
    >
        <Navbar :isWhite="!isHeaderWithBackground && isDynamicHeaderPage" />
        <CartLink
            :count="MOCK_CART_ITEMS_COUNT"
            :isWhite="!isHeaderWithBackground && isDynamicHeaderPage"
        />
    </header>
</template>

<script setup lang="ts">
import useHeaderColorChange from '@presentation/hooks/layout/useHeaderColorChange';

const { isHeaderWithBackground, isDynamicHeaderPage } = useHeaderColorChange();
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
    border-radius: 0 0 15px 15px;
    position: fixed;
    width: 100%;
    transition: background-color var(--transition-slow);
    z-index: var(--z-fixed);
}

.header-colored {
    background-color: $color-mint;

    @include box-shadow;
}
</style>
