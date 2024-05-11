<template>
    <div class="not-found-wrapper">
        <h2 class="subtitle">There is no products in this category</h2>
        <BaseButton
            class="button"
            :to="HOME"
            :variant="'secondary'"
        >
            Go Home
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import { HOME } from '@constant/routes.ts';

defineOptions({ name: 'EmptyCategory' });
</script>

<style lang="scss" scoped>
.not-found-wrapper {
    display: grid;
    row-gap: 20px;
}

.button {
    width: fit-content;
}
</style>
