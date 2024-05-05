<template>
    <Layout>
        <Intro />
        <div class="mock-container" />
    </Layout>
</template>

<script setup lang="ts">
import Layout from '@presentation/components/layout/Layout/index.vue';
import Intro from './Intro/index.vue';
</script>

<style lang="scss" scoped>
.mock-container {
    height: 700px;
    background-color: $color-mint;
}
</style>
