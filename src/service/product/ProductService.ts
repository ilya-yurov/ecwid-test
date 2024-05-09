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
                        defaultDisplayedPriceFormatted
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
            const {} = response.data as unknown as Product;

            console.log(response);

            return Product.CreateEmpty();
            // return response.data.items.map(
            //     ({
            //         id,
            //         name,
            //         imageUrl,
            //         thumbnailUrl,
            //         defaultDisplayedPriceFormatted
            //     }) =>
            //         new Product(
            //             id,
            //             name,
            //             imageUrl,
            //             thumbnailUrl,
            //             defaultDisplayedPriceFormatted
            //         )
            // );
        } catch (e) {
            console.error(e);

            return Product.CreateEmpty();
        }
    }
}
