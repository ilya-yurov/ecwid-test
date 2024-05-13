export const CATEGORIES = '/categories';
export const SORTED_CATEGORIES = `${CATEGORIES}/sort`;
export const PRODUCTS = '/products';
export const PRODUCT = (id: string) => `${PRODUCTS}/${id}`;
export const CATEGORY = (id: string) => `${CATEGORIES}/${id}`;
