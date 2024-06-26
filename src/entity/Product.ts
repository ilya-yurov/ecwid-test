import GalleryImage from '@entity/GalleryImage';

export default class Product {
    public static CreateEmpty(): Product {
        return new Product(NaN, '', '', '', '', [], '');
    }

    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly imageUrl: string,
        public readonly thumbnailUrl: string,
        public readonly defaultDisplayedPriceFormatted: string,
        public readonly galleryImages: GalleryImage[],
        public readonly description: string
    ) {}
}
