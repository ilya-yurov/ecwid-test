import type { ComputedRef } from 'vue';
import type Product from '@entity/Product';
import type CartItem from '@entity/CartItem.ts';
import useCartStore from '@store/cart/useCartStore.ts';

type ReturnT = {
    addToCart: () => void;
    removeFromCart: (event: MouseEvent) => void;
    count: ComputedRef<number>;
};

const useAddToCartButton = (product: Product): ReturnT => {
    const store = useCartStore();
    const { cart } = storeToRefs(store);

    const addToCart = () => {
        store.addToCart(product);
    };

    const removeFromCart = (event: MouseEvent) => {
        event.stopPropagation();
        store.removeFromCart(product.id);
    };

    const count = computed(() => {
        const item = cart.value.find(
            (item: CartItem) => item.id === product.id
        );

        return item ? item.count : 0;
    });

    return { addToCart, removeFromCart, count };
};

export default useAddToCartButton;
