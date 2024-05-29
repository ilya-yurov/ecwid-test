<template>
    <BaseLink :to="CART" class="wrapper">
        <span v-show="cart.length > 0" class="round">
            {{ cart.length }}
        </span>
        <CartIcon class="icon" :class="{ 'icon-white': isWhite }" />
    </BaseLink>
</template>

<script setup lang="ts">
import { CART } from '@constant/routes.ts';
import CartIcon from '@presentation/assets/svg/cart.svg';
import useCartStore from '@store/cart/useCartStore';

type PropsT = {
    isWhite?: boolean;
};

defineProps<PropsT>();

const store = useCartStore();
const { cart } = storeToRefs(store);

defineOptions({ name: 'CartLink' });
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    height: 25px;
    width: 25px;

    &:active {
        @include scale;
    }
}

.round {
    position: absolute;
    top: -7px;
    right: -7px;
    background-color: $color-orange;
    border-radius: 50%;
    height: 17px;
    width: 17px;
    font-size: 12px;
    font-weight: 700;

    @include flex-center;
}

.icon {
    fill: $color-black;
    height: 25px;
    width: 25px;
    transition: fill var(--transition-slow);
}

.icon-white {
    fill: $color-white;
}
</style>
