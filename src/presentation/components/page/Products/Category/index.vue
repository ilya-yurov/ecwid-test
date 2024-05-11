<template>
    <section v-if="!isLoading" class="wrapper">
        <h1 class="header">Category: {{ category.name }}</h1>
        <Subcategories v-if="categories.length > 0" :subcategories="categories" />
        <ProductList v-if="products.length > 0" :products="products"/>
        <EmptyCategory v-else />
    </section>
    <Loader v-else />
</template>

<script setup lang="ts">
import useCategoryStore from '@store/category/useCategoryStore';
import useProductStore from '@store/product/useProductStore';
import EmptyCategory from '@presentation/components/page/Products/Category/EmptyCategory/index.vue';

type PropsT = {
    isLoading: boolean;
};

defineProps<PropsT>();
const productStore = useProductStore();
const categoryStore = useCategoryStore();
const { category, categories } = storeToRefs(categoryStore);
const { products } = storeToRefs(productStore);

defineOptions({ name: 'Category' });
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 50px 0;
    display: grid;
    row-gap: 40px;
    height: 100%;

    @include -lower(sm) {
        padding: 20px 0;
    }
}

.header {
    color: $color-blue;
    @include title;
}
</style>
