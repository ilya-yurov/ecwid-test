<template>
    <Layout>
        <div class="wrapper">
            <h1 class="header">{{ errorText }}</h1>
            <span class="error-code">{{ errorCode }}</span>
            <BaseButton :to="HOME" :variant="'secondary'">Go Home</BaseButton>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import { HOME } from '@constant/routes';
import useErrorPage from './useErrorPage';

const [errorCode, errorText] = useErrorPage();

defineOptions({ name: 'ErrorPage' });
</script>

<style lang="scss" scoped>
.wrapper {
    flex-direction: column;
    height: calc(100vh - $footer-height - $header-height);

    @supports (height: 100dvh) {
        height: calc(100dvh - $footer-height - $header-height);
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
