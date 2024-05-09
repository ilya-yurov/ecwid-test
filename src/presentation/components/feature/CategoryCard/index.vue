<template>
    <RouterLink :to="{ path: PRODUCTS, query: { categoryId: id } }">
        <div class="card">
            <CardImage altText="category image" :imageUrl="imageUrl" />
            <span class="name">{{ name }}</span>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import type Category from '@entity/Category';
import { PRODUCTS } from '@constant/routes.ts';

type PropsT = {
    category: Category;
};

const { category } = defineProps<PropsT>();
const { name, id, imageUrl } = category;

defineOptions({ name: 'CategoryCard' });
</script>

<style lang="scss" scoped>
.card {
    display: grid;
    row-gap: 5px;
    place-items: center;
    margin-bottom: 15px;

    @include -greater(sm) {
        &:hover {
            opacity: 0.9;

            @include scale;
        }
    }
}

.name {
    @include h2;

    @include -lower(sm) {
        @include h3;
    }
}
</style>
