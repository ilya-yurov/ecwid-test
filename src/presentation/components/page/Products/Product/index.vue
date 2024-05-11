<template>
    <section v-if="!isLoading" class="wrapper">
        <h1 class="header-mobile">{{ product.name }}</h1>
        <Carousel :images="product.galleryImages" :name="product.name" />
        <div class="content">
            <h1 class="header">{{ product.name }}</h1>
            <p class="about-item">
                <span class="bold">Price:</span>
                <span class="bold blue-color">{{
                    product.defaultDisplayedPriceFormatted
                }}</span>
            </p>
            <p class="bold">Description:</p>
            <p
                id="product-description"
                class="description"
                v-html="product.description"
            />
            <AddToCartButton :product="product" />
        </div>
    </section>
    <Loader v-if="isLoading" />
</template>

<script setup lang="ts">
import Carousel from '@presentation/components/common/block/Carousel/index.vue';
import useProductStore from '@store/product/useProductStore.ts';

const store = useProductStore();
const { isLoading, product } = storeToRefs(store);

defineOptions({ name: 'Product' });
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 50px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;

    @include -lower(sm) {
        grid-template-columns: none;
        row-gap: 20px;
    }
}

.content {
    max-width: 400px;
    display: grid;
    row-gap: 10px;
    height: fit-content;

    & p {
        line-height: 1.5;
    }
}

.header-mobile {
    display: none;

    @include -lower(sm) {
        display: block;
    }
}

.header {
    @include -lower(sm) {
        display: none;
    }
}

.bold {
    @include h2;
}

.blue-color {
    color: $color-blue;
}

.about-item {
    display: grid;
    grid-auto-flow: column;
    column-gap: 10px;
    width: fit-content;
}

.description {
    display: grid;
    row-gap: 10px;
}
</style>
