<template>
    <button class="wrapper">
        <span v-show="count > 0" class="round">
            {{ count }}
        </span>
        <CartIcon class="icon" />
    </button>
</template>

<script setup lang="ts">
import CartIcon from '@presentation/assets/svg/cart.svg';

type CartButtonPropsT = {
    count?: number;
};

const { count = 0 } = defineProps<CartButtonPropsT>();

defineOptions({ name: 'CartIcon' });
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    height: 25px;
    width: 25px;
}

.round {
    position: absolute;
    top: -7px;
    right: -7px;
    background-color: $color-peachy;
    border-radius: 50%;
    height: 17px;
    width: 17px;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    fill: $color-black;
    height: 25px;
    width: 25px;
    transition: fill var(--transition-fast);
}
</style>
