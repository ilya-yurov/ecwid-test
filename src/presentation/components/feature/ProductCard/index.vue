<template>
    <div class="card">
        <RouterLink :to="{ path: PRODUCTS, query: { id } }">
            <CardImage
                class="image-wrapper"
                altText="product image"
                :imageUrl="thumbnailUrl"
            />
        </RouterLink>
        <span class="name">{{ name }}</span>
        <span class="price">{{ defaultDisplayedPriceFormatted }}</span>
        <BaseButton variant="secondary" class="button">Buy</BaseButton>
    </div>
</template>

<script setup lang="ts">
import type Product from '@entity/Product';
import { PRODUCTS } from '@constant/routes.ts';

type PropsT = {
    product: Product;
};

const { product } = defineProps<PropsT>();
const { name, id, thumbnailUrl, defaultDisplayedPriceFormatted } = product;

defineOptions({ name: 'ProductCard' });
</script>

<style lang="scss" scoped>
.card {
    display: grid;
    row-gap: 10px;
    place-items: center;
    margin-bottom: 15px;
}

.image-wrapper {
    height: 250px;

    @include -greater(sm) {
        &:hover {
            opacity: 0.9;

            @include scale;
        }
    }
}

.name {
    text-align: center;

    @include clamp();
}

.price {
    @include h3;
}

.button {
    width: 100%;
}
</style>
