<template>
    <RouterLink class="link-wrapper" :to="to">
        <slot></slot>
    </RouterLink>
</template>

<script setup lang="ts">
type PropsT = {
    to: string;
};

const { to } = defineProps<PropsT>();

defineOptions({ name: 'BaseLink' });
</script>

<style lang="scss" scoped>
.link-wrapper {
    &:hover {
        opacity: 0.8;
    }
}
</style>
