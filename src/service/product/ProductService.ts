import Product from '@entity/Product';
import api from '@core/api';
import { PRODUCT, PRODUCTS } from '@constant/api';
import getResponseFields from '@helpers/getResponseFields';

type ListResponseT = {
    items: Product[];
};

export default class ProductService {
    static async fetchProducts(categoryId?: string): Promise<Product[]> {
        try {
            const response = await api.get<ListResponseT>(PRODUCTS, {
                params: {
                    responseFields: getResponseFields(
                        Product.CreateEmpty(),
                        true
                    ),
                    ...(categoryId && { categories: categoryId })
                }
            });

            return response.data.items.map(
                ({
                    id,
                    name,
                    imageUrl,
                    thumbnailUrl,
                    defaultDisplayedPriceFormatted
                }) =>
                    new Product(
                        id,
                        name,
                        imageUrl,
                        thumbnailUrl,
                        defaultDisplayedPriceFormatted,
                        [],
                        ''
                    )
            );
        } catch (e) {
            console.error(e);

            return [];
        }
    }

    static async fetchProduct(productId: string): Promise<Product> {
        try {
            const response = await api.get<Product>(PRODUCT(productId), {
                params: {
                    responseFields: getResponseFields(Product.CreateEmpty())
                }
            });
            const {
                id,
                name,
                imageUrl,
                thumbnailUrl,
                defaultDisplayedPriceFormatted,
                galleryImages,
                description
            } = response.data;

            return new Product(
                id,
                name,
                imageUrl,
                thumbnailUrl,
                defaultDisplayedPriceFormatted,
                [{id, imageUrl}, ...galleryImages],
                description
            );
        } catch (e) {
            console.error(e);

            return Product.CreateEmpty();
        }
    }
}
