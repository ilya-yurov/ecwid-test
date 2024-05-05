<template>
    <div class="container">
        <Header />
        <main class="main">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '@presentation/components/layout/Header/index.vue';
import Footer from '@presentation/components/layout/Footer/index.vue';
</script>

<style  scoped>
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main {
    flex-grow: 1;
}
</style>
