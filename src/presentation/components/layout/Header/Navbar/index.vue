<template>
    <ul class="wrapper" :class="{ 'wrapper-white': isWhite }">
        <li v-for="(link, index) in LINKS" :key="link.text">
            <RouterLink :to="link.url">{{ link.text }}</RouterLink>
            <span v-if="index !== LINKS.length - 1" class="divider">|</span>
        </li>
    </ul>
</template>

<script setup lang="ts">
import LINKS from './content';

type PropsT = {
    isWhite?: boolean;
};

const { isWhite } = defineProps<PropsT>();

defineOptions({ name: 'Navbar' });
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    color: $color-green;
    transition: color var(--transition-slow);

    @include h3;
}

.wrapper-white {
    color: $color-white;
}

.divider {
    margin: 0 10px;
}
</style>
