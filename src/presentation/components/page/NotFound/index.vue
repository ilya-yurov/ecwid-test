<template>
    <Layout>
        <div class="wrapper">
            <h1 class="header">Page Not Found</h1>
            <span class="error-code">404</span>
            <BaseButton :to="HOME" :variant="'secondary'">Go Home</BaseButton>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import { HOME } from '@constant/routes';
import useStaticHeaderPage from '@presentation/hooks/layout/useStaticHeaderPage.ts';

useStaticHeaderPage();

defineOptions({ name: 'NotFound' });
</script>

<style lang="scss" scoped>
.wrapper {
    flex-direction: column;
    height: calc(100vh - $footer-height);

    @supports (height: 100dvh) {
        height: calc(100dvh - $footer-height);
    }

    @include flex-center;
}

.header {
    @include h1;
}

.error-code {
    font-size: 300px;

    @include -lower(md) {
        font-size: 250px;
    }

    @include -lower(sm) {
        font-size: 200px;
    }
}
</style>
