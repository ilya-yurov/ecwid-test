<template>
    <Layout class="layout">
        <div class="wrapper">
            <h1>{{ id ? 'Product' : 'Category' }}</h1>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import ProductService from '@service/product/ProductService.ts';
import { NOT_FOUND } from '@constant/routes.ts';

// TODO: вынести все это в отдельный хук
// Кароч на этом роуте если есть id, то будут запрашиваться данные по продукту и рисоваться страница продукта,
// иначе запрашивается категория с субкатегориями, и выводиться содержащиеся в ней продукты
const {
    query: { id, categoryId }
} = useRoute();
const router = useRouter();

onMounted(() => {
    if (id) {
        ProductService.fetchProduct(Number(id));

        return;
    }

    if (categoryId) {
        //TODO: some fetch category logic
        console.log('fetching category');

        return;
    }

    router.push(NOT_FOUND);
});

defineOptions({ name: 'Products' });
</script>

<style lang="scss" scoped>
.layout {
    background-color: $color-grayishGreen;
}

.wrapper {
  @include container-gutter;
}
</style>
