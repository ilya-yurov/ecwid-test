<template>
    <div class="image-container">
        <img class="image" :src="imageUrl" :alt="altText" />
    </div>
</template>

<script setup lang="ts">
type PropsT = {
    imageUrl: string;
    altText: string;
};

defineProps<PropsT>();

defineOptions({ name: 'CardImage' });
</script>

<style lang="scss" scoped>
.image-container {
    height: 200px;
    width: 200px;
    border-radius: 15px;
    overflow: hidden;

    @include box-shadow;
}

.image {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>
