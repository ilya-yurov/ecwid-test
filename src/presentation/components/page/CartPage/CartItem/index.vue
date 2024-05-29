<template>
    <div class="item-wrapper">
        <div class="image-wrapper">
            <img class="image" :src="item.thumbnailUrl" :alt="item.name" />
        </div>
        <div class="container">
            <span class="name">{{ item.name }}</span>
            <span class="bold">
                Price: <span class="blue">{{ item.defaultDisplayedPriceFormatted }}</span>
            </span>
            <span>
                <span class="bold">Count: </span>{{ item.count }}
            </span>
            <BaseButton
                :disabled="isSubmitting"
                @click="store.removeFromCart(item.id!, true)"
            >
                Delete
            </BaseButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import type CartItem from '@entity/CartItem';
import useCartStore from '@store/cart/useCartStore.ts';

type PropsT = {
    item: CartItem;
    isSubmitting: boolean;
};

const store = useCartStore();
const { item } = defineProps<PropsT>();

defineOptions({ name: 'CartItem' });
</script>

<style lang="scss" scoped>
.item-wrapper {
    display: grid;
    grid-template-columns: 100px auto;
    column-gap: 20px;
    align-items: center;
    height: 100px;
    overflow: hidden;
    background-color: $color-white;
    border-radius: 15px;
    padding-right: 20px;

    @include -lower(md) {
        height: 150px;
        grid-template-columns: 150px auto;
    }
}

.name {
    @include clamp;
}

.container {
    display: grid;
    align-items: center;
    grid-template-columns: 4fr 2fr 1fr 100px;
    column-gap: 20px;

    @include -lower(md) {
        grid-template-columns: none;
        row-gap: 5px;
    }
}

.bold {
    @include h3;
}

.blue {
    color: $color-blue;
}

.image-wrapper {
    width: 100px;
    height: 100px;

    @include -lower(md) {
        width: 150px;
        height: 150px;
    }
}

.image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>
