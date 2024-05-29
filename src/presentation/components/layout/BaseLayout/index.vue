<template>
    <div class="container">
        <BaseHeader />
        <main
            class="main"
            :class="{
                'main-with-header-offset': withHeaderOffset
            }"
        >
            <slot></slot>
        </main>
        <BaseFooter />
    </div>
</template>

<script setup lang="ts">
type PropsT = {
    withHeaderOffset?: boolean;
};

const { withHeaderOffset } = withDefaults(defineProps<PropsT>(), {
    withHeaderOffset: true
});

defineOptions({ name: 'BaseLayout' });
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @supports (min-height: 100dvh) {
        min-height: 100dvh;
    }
}

.main {
    flex-grow: 1;
}

.main-with-header-offset {
    margin-top: $header-height;
}
</style>
