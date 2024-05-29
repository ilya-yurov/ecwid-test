<template>
    <section class="wrapper">
        <div class="container">
            <h2 class="title">{{ title }}</h2>
            <p class="description" :style="descriptionCss">
                {{ description }}
            </p>
            <BaseLoader v-if="isLoading" class="loader" />
            <div v-else class="card-wrapper">
                <div class="card-container">
                    <slot></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type CustomStyles from '@presentation/types/CustomStyles';

type PropsT = {
    title: string;
    description: string;
    isLoading: boolean;
    descriptionCss?: CustomStyles;
};

defineProps<PropsT>();

defineOptions({ name: 'CardContainer' });
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    padding: 20px var(--container-gutter);
}

.container {
    height: fit-content;
    display: grid;
    row-gap: 15px;
}

.card-wrapper {
    overflow-x: auto;
    max-width: 100%;

    @include custom-scrollbar;
}

.card-container {
    display: grid;
    grid-auto-flow: column;
    column-gap: 20px;
    width: fit-content;
}

.description {
    @include h2;

    @include -lower(sm) {
        @include h3;
    }
}

.title {
    @include title;
}

.loader {
    fill: $color-white;
}
</style>
