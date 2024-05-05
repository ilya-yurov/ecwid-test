<template>
    <header class="header">
        <Navbar />
        <CartButton :count="MOCK_CART_ITEMS_COUNT" />
    </header>
</template>

<script setup lang="ts">
import CartButton from './CartButton/index.vue';
import Navbar from './Navbar/index.vue';

const MOCK_CART_ITEMS_COUNT = 10;

defineOptions({ name: 'Header' });
</script>

<style lang="scss" scoped>
.header {
    height: $header-height;
    background-color: $color-grayishGreen;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 10px 10px;
}
</style>
