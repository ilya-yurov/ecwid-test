<template>
    <ul class="wrapper">
        <li v-for="(link, index) in LINKS" :key="link.text">
            <RouterLink :to="link.url">{{ link.text }}</RouterLink>
            <span v-if="index !== LINKS.length - 1" class="divider">|</span>
        </li>
    </ul>
</template>

<script setup lang="ts">
import LINKS from './content';

defineOptions({ name: 'Navbar' });
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    color: $color-green;

    @include h3;
}

.divider {
    margin: 0 10px;
}
</style>
