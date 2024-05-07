import Product from '@entity/Product';
import api from '@core/api';
import { PRODUCTS } from '@constant/api';
import getResponseFields from '@helpers/getResponseFields';

type ResponseT = {
    items: Product[];
};

export default class CategoryService {
    static async fetchCategories(): Promise<Product[]> {
        try {
            const response = await api.get<ResponseT>(PRODUCTS, {
                params: {
                    responseFields: getResponseFields(Product.CreateEmpty())
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
}
