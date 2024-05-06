import { PRODUCTS } from '@constant/routes.ts';

export const PRODUCT_LINK = (id: number) => `${PRODUCTS.slice(1)}/${id}`;
