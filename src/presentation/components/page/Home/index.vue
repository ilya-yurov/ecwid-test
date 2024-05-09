<template>
    <Layout :withHeaderOffset="false">
        <Intro />
        <CategoriesBlock />
        <ProductsBlock />
    </Layout>
</template>

<script setup lang="ts">
import useDynamicHeaderPage from '@presentation/hooks/layout/useDynamicHeaderPage.ts';

useDynamicHeaderPage();

defineOptions({ name: 'Home' });
</script>
