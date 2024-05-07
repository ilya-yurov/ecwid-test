<template>
    <div class="loader">
        <LoaderIcon class="icon" :width="size" />
    </div>
</template>

<script setup lang="ts">
import LoaderIcon from '@presentation/assets/svg/loader.svg';

type PropsT = {
    size?: number;
    loaderCss?: string;
};

const { size } = withDefaults(defineProps<PropsT>(), {
    size: 24
});

defineOptions({ name: 'Loader' });
</script>

<style lang="scss" scoped>
@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.icon {
    fill: var(--primary-700);
    animation: spin var(--transition-slow) linear infinite;
}

.loader {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    @include flex-center;
}
</style>
