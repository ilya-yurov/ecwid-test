<template>
    <RouterLink v-if="to" :to="to" class="button">
        <slot />
    </RouterLink>
    <button v-else class="button">
        <slot />
    </button>
</template>

<script setup lang="ts">
type BaseButtonPropsT = {
    to?: string;
};

const { to } = defineProps<BaseButtonPropsT>();

defineOptions({ name: 'BaseButton' });
</script>

<style lang="scss" scoped>
.button {
    border-radius: 10px;
    padding: 10px 15px;
    border: 2px solid $color-mint;
    cursor: pointer;

    &:active {
        transition: transform var(--transition-fast);
        transform: scale(0.95);
    }

    &:hover {
        background-color: $color-mint;
    }
}
</style>
