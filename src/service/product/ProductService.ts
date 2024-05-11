import Product from '@entity/Product';
import api from '@core/api';
import { PRODUCT, PRODUCTS } from '@constant/api';
import getResponseFields from '@helpers/getResponseFields';

type ResponseT = {
    items: Product[];
};

export default class ProductService {
    static async fetchProducts(): Promise<Product[]> {
        try {
            const response = await api.get<ResponseT>(PRODUCTS, {
                params: {
                    responseFields: getResponseFields(
                        Product.CreateEmpty(),
                        true
                    )
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

    static async fetchProduct(productId: number): Promise<Product> {
        try {
            const response = await api.get<ResponseT>(PRODUCT(productId), {
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
            } = response.data as unknown as Product;

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
