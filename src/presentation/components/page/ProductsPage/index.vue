<template>
    <BaseLayout>
        <div class="wrapper">
            <ProductView v-if="isProductsPage" />
            <CategoryView v-else :isLoading="isLoading" />
        </div>
    </BaseLayout>
</template>

<script setup lang="ts">
import useProductsPage from './useProductsPage';

const { isProductsPage, isLoading } = useProductsPage();

defineOptions({ name: 'ProductsPage' });
</script>

<style lang="scss" scoped>
.wrapper {
    @include container-gutter;
}
</style>
