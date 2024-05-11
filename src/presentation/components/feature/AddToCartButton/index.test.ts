import { expect, it, describe } from 'vitest';
import { mount } from '@vue/test-utils';
import useCartStore from '@store/cart/useCartStore.ts';
import Product from '@entity/Product';
import AddToCartButton from './index.vue';

describe('AddToCartButton', () => {
    it('adds product to cart when clicked', async () => {
        const pinia = createPinia();
        const store = useCartStore(pinia);
        const wrapper = mount(AddToCartButton, {
            props: {
                product: Product.CreateEmpty()
            }
        });

        await wrapper.trigger('click');
        expect(store.cart.length).toBe(1);
    });
});
