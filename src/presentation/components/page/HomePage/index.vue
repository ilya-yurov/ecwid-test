<template>
    <BaseLayout :withHeaderOffset="false">
        <IntroBlock />
        <CategoriesBlock />
        <ProductsBlock />
    </BaseLayout>
</template>

<script setup lang="ts">
import useDynamicHeaderPage from '@presentation/hooks/layout/useDynamicHeaderPage.ts';

useDynamicHeaderPage();

defineOptions({ name: 'HomePage' });
</script>
