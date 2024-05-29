<template>
    <CardContainer
        class="wrapper"
        title="Subcategories:"
        :isLoading="false"
        description="This category includes these subcategories:"
    >
        <CategoryCard
            v-for="subcategory in subcategories"
            :key="subcategory.id"
            :category="subcategory"
        />
    </CardContainer>
</template>

<script setup lang="ts">
import type Category from '@entity/Category';

type PropsT = {
    subcategories: Category[];
};

defineProps<PropsT>();

defineOptions({ name: 'SubcategoriesList' });
</script>

<style lang="scss" scoped>
.wrapper {
}
</style>
