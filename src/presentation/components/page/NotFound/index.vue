<template>
    <div class="wrapper">
        <h1 class="header">Page Not Found</h1>
        <span class="error-code">404</span>
        <BaseButton :to="HOME">Go Home</BaseButton>
    </div>
</template>

<script setup lang="ts">
import { HOME } from '@constant/routes';

defineOptions({ name: 'NotFound' });
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - $header-height - $footer-height);
}

.header {
    @include h1;
}

.error-code {
    font-size: 300px;

    @include -lower(sm) {
        font-size: 200px;
    }
}
</style>
