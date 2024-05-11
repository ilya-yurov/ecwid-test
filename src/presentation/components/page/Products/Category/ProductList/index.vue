<template>
    <div class="products-wrapper">
        <h2 class="header">Products:</h2>
        <p class="description">This category includes these products:</p>
        <div class="list">
            <ProductCard
                v-if="products.length > 0"
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type Product from '@entity/Product';

type PropsT = {
    products: Product[];
};

defineProps<PropsT>();

defineOptions({ name: 'ProductList' });
</script>

<style lang="scss" scoped>
.header {
    @include title;
}

.products-wrapper {
    display: grid;
    row-gap: 20px;
}

.list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @include -lower(sm) {
        justify-content: center;
    }
}

.description {
    @include h2;

    @include -lower(sm) {
        @include h3;
    }
}
</style>
