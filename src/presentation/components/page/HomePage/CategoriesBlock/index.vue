<template>
    <CardContainer
        class="container"
        title="Categories"
        description="Explore Your Passions: Find Your Ideal Category Match"
        :descriptionCss="customDescriptionCss"
        :isLoading="isLoading"
    >
        <template v-if="categories.length > 0">
            <CategoryCard
                v-for="category in categories"
                :key="category.id"
                :category="category"
            />
        </template>
        <span v-else>No categories found</span>
    </CardContainer>
</template>

<script setup lang="ts">
import useCategories from '@presentation/hooks/categories/useCategories';
import type CustomStylesT from '@presentation/types/CustomStyles';
import ColorsEnum from '@presentation/enums/Colors';
import CardContainer from '@presentation/components/feature/CardContainer/index.vue';

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
