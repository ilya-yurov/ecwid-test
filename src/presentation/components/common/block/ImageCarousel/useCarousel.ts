import { ref } from 'vue';
import type GalleryImage from '@entity/GalleryImage';

const useCarousel = (images: GalleryImage[]) => {
    const image = ref<GalleryImage>(images[0]);
    const galleryImages = ref<GalleryImage[]>(images);

    const onImageChange = (imageId: number) => {
        const selectedImage = galleryImages.value.find(
            (image) => image.id === imageId
        );

        if (selectedImage) {
            image.value = selectedImage;
        }
    };

    watch(images, (newVal) => {
        if (newVal) {
            image.value = newVal[0];
            galleryImages.value = newVal;
        }
    });

    return { image, galleryImages, onImageChange };
};

export default useCarousel;
