import type Product from '@entity/Product';

type CartItem = Partial<Product> & {
    count: number;
};

export default CartItem;
