import { defineStore } from 'pinia';
import { ref } from 'vue';
import type CartItem from '@entity/CartItem';
import type Product from '@entity/Product';
import { CART } from '@constant/localStorage.ts';
import getParsedPrice from '@helpers/price/parsePrice.ts';
import formatPrice from '@helpers/price/formatPrice.ts';

const saveCartToLocalStorage = (cartItems: CartItem[]) => {
    localStorage.setItem(CART, JSON.stringify(cartItems));
};

const useCartStore = defineStore('cart', () => {
    const cart = ref(JSON.parse(localStorage.getItem(CART) || '[]'));

    const findProductIndexInCart = (id: number): number => {
        return cart.value.findIndex((item: CartItem) => item.id === id);
    };

    const addToCart = (product: Product) => {
        const { id, name, defaultDisplayedPriceFormatted, thumbnailUrl } = product;
        const existingItemIndex = findProductIndexInCart(id);

        if (existingItemIndex !== -1) {
            cart.value[existingItemIndex].count++;
        } else {
            cart.value.push({
                id,
                name,
                defaultDisplayedPriceFormatted,
                thumbnailUrl,
                count: 1
            });
        }

        saveCartToLocalStorage(cart.value);
    };

    const removeFromCart = (id: number, isWhole = false) => {
        const existingItemIndex = findProductIndexInCart(id);

        if (existingItemIndex !== -1) {
            if (isWhole) {
                cart.value.splice(existingItemIndex, 1);
                saveCartToLocalStorage(cart.value);

                return;
            }

            cart.value[existingItemIndex].count--;

            if (cart.value[existingItemIndex].count === 0) {
                cart.value.splice(existingItemIndex, 1);
            }

            saveCartToLocalStorage(cart.value);
        }
    };

    const getTotalPrice = () => {
        const totalPrice = cart.value.reduce(
            (total: number, item: CartItem) => {
                if (!item.defaultDisplayedPriceFormatted) {
                    return total;
                }

                return (
                    total +
                    getParsedPrice(item.defaultDisplayedPriceFormatted) *
                        item.count
                );
            },
            0
        );

        return formatPrice(totalPrice);
    };

    const clearCart = () => {
        cart.value = [];

        saveCartToLocalStorage(cart.value);
    };

    return { cart, addToCart, removeFromCart, getTotalPrice, clearCart };
});

export default useCartStore;
