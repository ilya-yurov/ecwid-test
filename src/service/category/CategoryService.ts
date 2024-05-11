import Category from '@entity/Category.ts';
import api from '@core/api';
import { CATEGORIES, CATEGORY } from '@constant/api.ts';
import getResponseFields from '@helpers/getResponseFields.ts';

type ListResponseT = {
    items: Category[];
};

export default class CategoryService {
    static async fetchCategories(parentId?: string): Promise<Category[]> {
        try {
            const response = await api.get<ListResponseT>(CATEGORIES, {
                params: {
                    responseFields: getResponseFields(
                        Category.CreateEmpty(),
                        true
                    ),
                    ...(parentId && { parentCategoryId: parentId })
                }
            });

            return response.data.items.map(
                ({ id, name, imageUrl, parentId }) => new Category(id, name, imageUrl, parentId)
            );
        } catch (e) {
            console.error(e);

            return [];
        }
    }

    static async fetchCategory(categoryId: string): Promise<Category> {
        try {
            const response = await api.get<Category>(CATEGORY(categoryId), {
                params: {
                    responseFields: getResponseFields(
                        Category.CreateEmpty()
                    ),
                }
            });
            const { id, name, imageUrl, parentId } = response.data;

            return new Category(id, name, imageUrl, parentId);
        } catch (e) {
            console.error(e);

            return Category.CreateEmpty();
        }
    }
}
