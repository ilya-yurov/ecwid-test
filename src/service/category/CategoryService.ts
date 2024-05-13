import Category from '@entity/Category';
import api from '@core/api';
import { CATEGORIES, CATEGORY, SORTED_CATEGORIES } from '@constant/api';
import getResponseFields from '@helpers/getResponseFields';

type CategoryIdListT = {
    sortedIds : number[];
}

type ListResponseT = {
    items: Category[];
};

export default class CategoryService {
    static async fetchCategories(childrenIds?: number[]): Promise<Category[]> {
        try {
            const response = await api.get<ListResponseT>(CATEGORIES, {
                params: {
                    responseFields: getResponseFields(
                        Category.CreateEmpty(),
                        true
                    ),
                    ...(childrenIds && childrenIds.length > 0 && { categoryIds  : childrenIds.join(',') })
                }
            });

            return response.data.items.map(
                ({ id, name, imageUrl }) =>
                    new Category(id, name, imageUrl)
            );
        } catch (e) {
            console.error(e);

            return [];
        }
    }

    static async fetchChildrenCategoryIds(parentId: string): Promise<number[]> {
        try {
            const response = await api.get<CategoryIdListT>(SORTED_CATEGORIES, {
                params: {
                    parentCategory: parentId
                }
            });

            return response.data.sortedIds;
        } catch (e) {
            console.error(e);

            return [];
        }
    }

    static async fetchCategory(categoryId: string): Promise<Category> {
        try {
            const response = await api.get<Category>(CATEGORY(categoryId), {
                params: {
                    responseFields: getResponseFields(Category.CreateEmpty())
                }
            });
            const { id, name, imageUrl } = response.data;

            return new Category(id, name, imageUrl);
        } catch (e) {
            console.error(e);

            return Category.CreateEmpty();
        }
    }
}
