import Category from '@entity/Category.ts';
import api from '@core/api';
import { CATEGORIES } from '@constant/api.ts';
import getResponseFields from '@helpers/getResponseFields.ts';

type ResponseT = {
    items: Category[];
};

export default class CategoryService {
    static async fetchCategories(): Promise<Category[]> {
        try {
            const response = await api.get<ResponseT>(CATEGORIES, {
                params: {
                    responseFields: getResponseFields(Category.CreateEmpty())
                }
            });

            return response.data.items.map(
                ({ id, name, imageUrl }) => new Category(id, name, imageUrl)
            );
        } catch (e) {
            console.error(e);

            return [];
        }
    }
}
