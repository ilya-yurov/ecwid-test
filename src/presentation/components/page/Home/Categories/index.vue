<template>
    <HomeBlockContainer
        class="container"
        title="Categories"
        description="Explore Your Passions: Find Your Ideal Category Match"
        :descriptionCss="customDescriptionCss"
        :isLoading="isLoading"
    >
        <CategoryCard
            v-for="category in categories"
            :key="category.id"
            :category="category"
        />
    </HomeBlockContainer>
</template>

<script setup lang="ts">
import useCategories from '@presentation/hooks/categories/useCategories';
import type CustomStylesT from '@presentation/types/CustomStyles';
import ColorsEnum from '@presentation/enums/Colors';

const { categories, isLoading } = useCategories();
const customDescriptionCss: CustomStylesT = {
    color: ColorsEnum.White
};

defineOptions({ name: 'Categories' });
</script>

<style lang="scss" scoped>
.container {
    background-color: $color-lightGreen;
    height: 420px;
}
</style>
