<template>
    <RouterLink
        v-if="to"
        :to="to"
        class="button"
        :class="{
            'button-primary': rcVariant === 'primary',
            'button-secondary': rcVariant === 'secondary'
        }"
    >
        <slot />
    </RouterLink>
    <button v-else class="button">
        <slot />
    </button>
</template>

<script setup lang="ts">
type BaseButtonPropsT = {
    variant?: 'primary' | 'secondary';
    to?: string;
};

const { variant = 'primary', to } = defineProps<BaseButtonPropsT>();
const rcVariant = ref(variant);

defineOptions({ name: 'BaseButton' });
</script>

<style lang="scss" scoped>
.button {
    border-radius: 10px;
    padding: 10px 15px;

    &:active {
        transition: transform var(--transition-fast);
        transform: scale(0.95);
    }
}

.button-primary {
    border: 2px solid $color-mint;

    &:hover {
        background-color: $color-mint;
    }
}

.button-secondary {
    background-color: $color-grayishGreen;

    &:hover {
        background-color: $color-lightGreen;
    }
}
</style>
