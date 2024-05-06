<template>
    <RouterLink :to="PRODUCT_LINK(id)">
        <div class="cart">
            <div class="image-container">
                <img
                    class="image"
                    :src="imageUrl"
                    alt="изображение категории"
                />
            </div>
            <span class="name">{{ name }}</span>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import type Category from '@entity/Category.ts';
import { PRODUCT_LINK } from '@helpers/linkBuilder';

type PropsT = {
    category: Category;
};

const { category } = defineProps<PropsT>();
const { name, id, imageUrl } = category;

defineOptions({ name: 'CategoryCart' });
</script>

<style lang="scss" scoped>
.cart {
    display: grid;
    row-gap: 5px;
    place-items: center;

    &:hover {
        opacity: 0.9;

        @include scale;
    }
}

.image-container {
    height: 200px;
    width: 200px;
    border-radius: 15px;
    overflow: hidden;
}

.image {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.name {
    @include h2;

    @include -lower(sm) {
        @include h3;
    }
}
</style>
