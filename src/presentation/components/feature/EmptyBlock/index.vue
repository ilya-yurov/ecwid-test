<template>
    <div class="not-found-wrapper">
        <h2 class="subtitle">{{ title }}</h2>
        <BaseButton class="button" :to="HOME" :variant="'secondary'">
            Go Home
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import { HOME } from '@constant/routes.ts';

type PropsT = {
    title: string;
};

defineProps<PropsT>();

defineOptions({ name: 'EmptyBlock' });
</script>

<style lang="scss" scoped>
.not-found-wrapper {
    display: grid;
    place-items: center;
    row-gap: 20px;
}

.button {
    width: fit-content;
}
</style>
