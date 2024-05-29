<template>
    <div class="carousel">
        <div class="main-image-wrapper">
            <img
                class="image"
                :src="image?.imageUrl"
                :alt="`${name} - main image`"
            />
        </div>
        <div v-if="galleryImages.length > 1" class="gallery">
            <div class="gallery-container">
                <div
                    class="image-wrapper"
                    :class="{
                        'image-wrapper__bordered':
                            galleryImage?.id === image?.id
                    }"
                    v-for="galleryImage in galleryImages"
                    :key="galleryImage.id"
                >
                    <img
                        class="image"
                        :src="galleryImage.imageUrl"
                        :alt="`${name} - gallery image`"
                        @click="onImageChange(galleryImage.id)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useCarousel from './useCarousel.ts';
import type GalleryImage from '@entity/GalleryImage';

type PropsT = {
    name: string;
    images: GalleryImage[];
};

const { images } = defineProps<PropsT>();
const { image, galleryImages, onImageChange } = useCarousel(images);

defineOptions({ name: 'ImageCarousel' });
</script>

<style lang="scss" scoped>
.carousel {
    display: grid;
    row-gap: 10px;
}

.main-image-wrapper {
    background-color: $color-mint;
    border-radius: 15px;
    height: 550px;
    overflow: hidden;

    @include box-shadow;
}

.image-wrapper {
    width: 80px;

    &__bordered {
        border: 3px solid $color-blue;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }

    @include flex-center;
}

.gallery {
    max-width: 100%;
    overflow: hidden;
    overflow-x: auto;
    padding: 0 10px;
    background-color: $color-mint;
    border-radius: 15px;
    height: 110px;

    @include custom-scrollbar;
    @include box-shadow;
    @include flex-center;
}

.gallery-container {
    display: grid;
    grid-auto-flow: column;
    column-gap: 10px;
    width: fit-content;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>
