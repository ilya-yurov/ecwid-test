<template>
    <BaseButton class="button" :variant="variant" @click="handleButtonClick">
        <span class="content">
            <span v-if="count" class="cart-action" @click="removeFromCart">-</span>
            <span>{{ count ? `${count} in cart` : 'Add to cart' }}</span>
            <span v-if="count" class="cart-action" @click="addToCart">+</span>
        </span>
    </BaseButton>
</template>

<script setup lang="ts">
import type { PropsT as BaseButtonPropsT } from '@presentation/components/common/control/BaseButton/index.vue';
import type Product from '@entity/Product';
import useAddToCartButton from './useAddToCartButton';

type PropsT = Pick<BaseButtonPropsT, 'variant'> & {
    product: Product;
};

const { product } = defineProps<PropsT>();
const { addToCart, removeFromCart, count } = useAddToCartButton(product);

const handleButtonClick = () => {
    if (count.value === 0) {
        addToCart();
    }
};

defineOptions({ name: 'AddToCartButton' });
</script>

<style lang="scss" scoped>
.button {
    height: 54px;

    @include flex-center;
}

.content {
    display: grid;
    grid-auto-flow: column;
    column-gap: 10px;
    width: fit-content;
    align-items: center;

    @include h3;
}

.cart-action {
    width: 30px;
    height: 30px;
    background-color: $color-peachy;
    border-radius: 50%;

    &:hover {
        color: $color-white;
    }

    @include flex-center;
}
</style>
