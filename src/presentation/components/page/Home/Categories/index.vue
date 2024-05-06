<template>
    <div class="wrapper">
        <h2 class="title">Categories</h2>
        <Loader v-if="isLoading" :size="60" />
        <div v-else class="cart-wrapper">
            <CategoryCart
                v-for="category in categories"
                :key="category.id"
                :category="category"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import useCategories from '@presentation/hooks/categories/useCategories';

const { categories, isLoading } = useCategories();

defineOptions({ name: 'Categories' });
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    display: grid;
    background-color: $color-peachy;
    padding: 20px var(--container-gutter) 0;
    min-height: 355px;
}

.loader {
    fill: $color-white;
}

.cart-wrapper {
    display: grid;
    grid-auto-flow: column;
    column-gap: 20px;
    overflow-x: auto;
    max-width: 100%;
    width: fit-content;
}

.title {
    @include title;
}
</style>
