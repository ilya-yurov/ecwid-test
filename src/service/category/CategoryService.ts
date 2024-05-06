import type Category from '@entity/Category.ts';
import api from '@core/api';
import { CATEGORIES } from '@constant/api.ts';

type ResponseT = {
    items: Category[];
};

const RESPONSE_FIELDS = `items(id,name,imageUrl)`;

export default class CategoryService {
    static async fetchCategories(): Promise<Category[]> {
        try {
            const response = await api.get<ResponseT>(CATEGORIES, {
                params: { responseFields: RESPONSE_FIELDS }
            });

            return response.data.items;
        } catch (e) {
            console.error(e);

            return [];
        }
    }
}
