<template>
    <header
        class="header"
        :class="{
            'header-colored': isHeaderWithBackground || !isDynamicHeaderPage
        }"
    >
        <HeaderNavbar :isWhite="!isHeaderWithBackground && isDynamicHeaderPage" />
        <CartLink :isWhite="!isHeaderWithBackground && isDynamicHeaderPage" />
    </header>
</template>

<script setup lang="ts">
import useHeaderColorChange from '@presentation/hooks/layout/useHeaderColorChange';

const { isHeaderWithBackground, isDynamicHeaderPage } = useHeaderColorChange();

defineOptions({ name: 'BaseHeader' });
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
