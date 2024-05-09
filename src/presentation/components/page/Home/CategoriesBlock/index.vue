<template>
    <HomeBlockContainer
        class="container"
        title="Categories"
        description="Explore Your Passions: Find Your Ideal Category Match"
        :descriptionCss="customDescriptionCss"
        :isLoading="isLoading"
    >
        <CategoryCard
            v-if="categories.length > 0"
            v-for="category in categories"
            :key="category.id"
            :category="category"
        />
        <span v-else>No categories found</span>
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

defineOptions({ name: 'CategoriesBlock' });
</script>

<style lang="scss" scoped>
.container {
    background-color: $color-lightGreen;
    height: 420px;
}
</style>
