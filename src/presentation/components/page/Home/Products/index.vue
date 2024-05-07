<template>
    <HomeBlockContainer
        class="container"
        title="Products"
        description="Discover Your Perfect Fit: Tailored Selection Just for You"
        :descriptionCss="customDescriptionCss"
        :isLoading="isLoading"
    >
        <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
    </HomeBlockContainer>
</template>

<script setup lang="ts">
import type CustomStylesT from '@presentation/types/CustomStyles';
import ColorsEnum from '@presentation/enums/Colors';
import useProducts from '@presentation/hooks/products/useProducts';

const { products, isLoading } = useProducts();
const customDescriptionCss: CustomStylesT = {
    color: ColorsEnum.Blue
};

defineOptions({ name: 'Products' });
</script>

<style lang="scss" scoped>
.container {
    background-color: $color-mint;
    min-height: 547px;

    @include -lower(sm) {
        min-height: 553px;
    }

    @include rounded-corners;
}
</style>
