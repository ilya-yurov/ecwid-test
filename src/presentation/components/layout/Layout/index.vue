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
