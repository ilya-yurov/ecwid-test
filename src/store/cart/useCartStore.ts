import { defineStore } from 'pinia';
import { ref } from 'vue';
import type CartItem from '@entity/CartItem';
import type Product from '@entity/Product';
import { CART } from '@constant/localStorage.ts';

const saveCartToLocalStorage = (cartItems: CartItem[]) => {
    localStorage.setItem(CART, JSON.stringify(cartItems));
};

const useCartStore = defineStore('cart', () => {
    const cart = ref(JSON.parse(localStorage.getItem(CART) || '[]'));

    const findProductIndexInCart = (id: number): number => {
        return cart.value.findIndex((item: CartItem) => item.id === id);
    };

    const addToCart = (product: Product) => {
        const { id, name, defaultDisplayedPriceFormatted } = product;
        const existingItemIndex = findProductIndexInCart(id);

        if (existingItemIndex !== -1) {
            cart.value[existingItemIndex].count++;
        } else {
            cart.value.push({
                id,
                name,
                defaultDisplayedPriceFormatted,
                count: 1
            });
        }

        saveCartToLocalStorage(cart.value);
    };

    const removeFromCart = (product: Product) => {
        const { id } = product;
        const existingItemIndex = findProductIndexInCart(id);

        if (existingItemIndex !== -1) {
            cart.value[existingItemIndex].count--;

            if (cart.value[existingItemIndex].count === 0) {
                cart.value.splice(existingItemIndex, 1);
            }

            saveCartToLocalStorage(cart.value);
        }
    };

    return { cart, addToCart, removeFromCart };
});

export default useCartStore;
