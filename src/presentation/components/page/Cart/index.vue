<template>
    <Layout>
        <div class="wrapper">
            <div v-if="store.cart.length > 0" class="content">
                <h1>Cart:</h1>
                <div class="cart" :class="{ cart_loading: isLoading }">
                    <div class="list">
                        <div class="items-container">
                            <CartItem
                                v-for="item in store.cart"
                                :key="item.id"
                                :item="item"
                                :isSubmitting="isLoading"
                            />
                        </div>
                    </div>
                    <div class="total">
                        <span class="total__text">Total:</span>
                        <span class="total__text">
                            {{ store.getTotalPrice() }}
                        </span>
                    </div>
                    <Loader v-if="isLoading" />
                </div>
                <BaseButton :disabled="isLoading" @click="handleMockSubmit">
                    Place order
                </BaseButton>
            </div>
            <EmptyBlock v-else title="There is no products in cart" />
        </div>
    </Layout>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';
import useCartStore from '@store/cart/useCartStore.ts';

const store = useCartStore();
const isLoading = ref(false);

const handleMockSubmit = () => {
    isLoading.value = true;

    setTimeout(() => {
        isLoading.value = false;
        store.clearCart();
        toast.success('Congratulating you on your successful purchase!');
    }, 3000);
};

defineOptions({ name: 'Cart' });
</script>

<style lang="scss" scoped>
.wrapper {
    @include staticLayoutHeight100vh;
    @include flex-center;
}

.content {
    display: grid;
    grid-template-rows: auto 1fr auto;
    justify-items: center;
    row-gap: 20px;
    @include staticLayoutHeight100vh(100px);

    @include -lower(sm) {
        row-gap: 10px;

        @include staticLayoutHeight100vh(30px);
    }
}

.cart {
    display: grid;
    grid-template-rows: 1fr auto;
    background-color: $color-mint;
    padding: 20px;
    border-radius: 15px;
    width: 800px;
    position: relative;

    &_loading {
        opacity: 0.7;
    }

    @include -lower(md) {
        width: calc(100vw - (2 * var(--container-gutter)));
    }

    @include -lower(sm) {
        padding: 10px;
    }

    @include box-shadow;
}

.items-container {
    margin-right: 10px;
    display: grid;
    row-gap: 20px;
}

.list {
    overflow-y: auto;

    @include staticLayoutHeight100vh(300px);

    @include -lower(sm) {
        @include staticLayoutHeight100vh(200px);
    }

    @include custom-scrollbar;
}

.total {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    &__text {
        @include h3;
    }
}
</style>
