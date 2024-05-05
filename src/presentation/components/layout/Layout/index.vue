<template>
    <div class="container">
        <Header />
        <main class="main">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '@presentation/components/layout/Header/index.vue';
import Footer from '@presentation/components/layout/Footer/index.vue';

defineOptions({ name: 'Layout' });
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @supports (min-height: 100svh) {
        min-height: 100svh;
    }
}

.main {
    flex-grow: 1;
}
</style>
