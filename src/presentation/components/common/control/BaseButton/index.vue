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
    <button
        v-else
        class="button"
        :class="{
            'button-primary': rcVariant === 'primary',
            'button-secondary': rcVariant === 'secondary'
        }"
        :type="type"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
type PropsT = {
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit';
    to?: string;
};

const { variant } = withDefaults(defineProps<PropsT>(), {
    variant: 'primary',
    type: 'button'
});
const rcVariant = ref(variant);

defineOptions({ name: 'BaseButton' });
</script>

<style lang="scss" scoped>
.button {
    border-radius: 10px;
    padding: 10px 15px;

    &:active {
        @include scale;
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
