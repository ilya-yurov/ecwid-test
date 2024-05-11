<template>
    <RouterLink
        v-if="to"
        :to="to"
        class="button"
        :class="{
            'button-primary': refVariant === 'primary',
            'button-secondary': refVariant === 'secondary'
        }"
    >
        <slot />
    </RouterLink>
    <button
        v-else
        class="button"
        :class="{
            'button-primary': refVariant === 'primary',
            'button-secondary': refVariant === 'secondary'
        }"
        :type="type"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
export type PropsT = {
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit';
    to?: string;
};

const { variant } = withDefaults(defineProps<PropsT>(), {
    variant: 'primary',
    type: 'button'
});
const refVariant = ref(variant);

defineOptions({ name: 'BaseButton' });
</script>

<style lang="scss" scoped>
.button {
    border-radius: 10px;
    padding: 10px 15px;

    &:not(:disabled) {
        &:active {
            @include scale;
        }
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
}

.button-primary {
    border: 2px solid $color-mint;

    &:not(:disabled) {
        &:hover {
            background-color: $color-mint;
        }
    }
}

.button-secondary {
    background-color: $color-grayishGreen;

    &:not(:disabled) {
        &:hover {
            background-color: $color-lightGreen;
        }
    }
}
</style>
