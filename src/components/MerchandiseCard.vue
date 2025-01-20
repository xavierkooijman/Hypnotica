<template>
    <article class="product-card" @click="navigateToProduct">
        <div class="product-image-container">
            <img loading="lazy" :src="product.mainImage" :alt="`${product.name} product`" class="product-image" />
            <div class="product-overlay" tabindex="0" role="button" :aria-label="`View ${product.name} details`"></div>
            <button class="action-button" :aria-label="`View ${product.name} details`" tabindex="0">
                <ShoppingBag class="action-icon" />
            </button>
        </div>
        <div class="product-info">
            <div class="product-header">
                <h2 class="product-title">{{ product.name }}</h2>
                <span v-if="product.stock <= 0" class="stock-label">Out of stock</span>
            </div>
            <p class="product-price">{{ product.price }} €</p>
        </div>
    </article>
</template>

<script setup>
import { ShoppingBag } from 'lucide-vue-next';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const props = defineProps({
    product: {
        type: Object,
        required: true,
        validator: (product) => {
            return product.id &&
                product.name &&
                product.price &&
                product.mainImage;
        }
    }
});

const navigateToProduct = async () => {
    try {
        await router.push({
            name: 'MerchandisingProductPage', // Updated route name
            params: { productId: props.product.id }
        });

    } catch (err) {
        console.error('Navigation error:', err);
    }
};
</script>

<style scoped>
.product-card {
    display: flex;
    max-width: 427px;
    flex-direction: column;
    opacity: 0.8;
    transition: opacity 0.5s ease, transform 0.5s ease;
    cursor: pointer;
}

.product-card:hover {
    opacity: 1;
    transform: scale(1.01);
}

.product-image-container {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    position: relative;
    min-height: 427px;
    width: 100%;
    align-items: center;
}

.product-image {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
}

.product-overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(250, 250, 250, 0.05);
    border-radius: 16px;
    transition: background-color 0.3s ease;
}

.product-card:hover .product-overlay {
    background-color: rgba(250, 250, 250, 0.1);
}

.action-button {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(250, 250, 250, 0.3);
    width: 85px;
    /* Increased from 65px */
    height: 85px;
    /* Increased from 65px */
    left: 50%;
    top: 55%;
    transform: translate(-50%, 0);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease, background-color 0.5s ease;
}

.product-card:hover .action-button {
    opacity: 1;
    background-color: rgba(250, 250, 250, 0.4);
    transform: translate(-50%, -75%);
}

.action-icon {
    width: 35px;
    height: 35px;
    color: var(--gray800);
}

.product-title {
    color: var(--mainWhite);
    font: 500 24px Aspekta500, sans-serif;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
}

.product-price {
    color: var(--gray200);
    font: 400 20px Aspekta400, sans-serif;
    margin: 0;
}

.product-header {
    display: flex;
    align-items: start;
    gap: 12px;
    margin: 24px 0 12px;
}

.stock-label {
    color: #ff4444;
    font:  14px Aspekta400, sans-serif;
    padding: 4px 8px;
    border: 1px solid #ff4444;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    margin-top: 6px;
}

@media (max-width: 991px) {
    .product-card {
        max-width: 100%;
    }

    .product-title {
        font-size: 20px;
    }

    .product-price {
        font-size: 18px;
    }
}
</style>