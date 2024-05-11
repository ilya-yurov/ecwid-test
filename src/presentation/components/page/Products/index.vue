<template>
    <Layout>
        <div class="wrapper">
            <Product v-if="isProductsPage" />
            <Category v-else />
        </div>
    </Layout>
</template>

<script setup lang="ts">
import useProductsPage from './useProductsPage';

const isProductsPage = useProductsPage();

defineOptions({ name: 'Products' });
</script>

<style lang="scss" scoped>
.wrapper {
    @include container-gutter;
}
</style>
