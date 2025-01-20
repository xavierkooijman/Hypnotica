<template>
    <main>
        <div v-if="loading" class="loading">Loading...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else class="main-container">
            <!-- Shop Photos Section -->
            <div class="shop-photos-container">
                <div class="shop-photos-column">
                    <div class="vertical-images-container">
                        <img v-for="(image, index) in displayImages.slice(0, 3)" :key="index" :src="image"
                            :alt="`Product view ${index + 1}`" class="vertical-image" loading="lazy"
                            @click="swapMainImage(index)" />
                    </div>
                </div>
                <div class="horizontal-image-container">
                    <img :src="currentMainImage" alt="Main product view" class="horizontal-image" loading="lazy" />
                </div>
            </div>

            <!-- Product Details Section -->
            <div class="product-details-container">
                <div class="product-title-container">
                    <div class="product-title">{{ product?.name }}</div>
                    <span v-if="product?.stock <= 0" class="stock-label">Out of stock</span>
                </div>
                <div class="product-price">{{ product?.price }} €</div>

                <div class="product-description-container">
                    <div class="product-description-title">Description</div>
                    <div class="product-description">{{ product?.description }}</div>
                </div>

                <div class="size-section">
                    <div class="product-size-title">Size</div>
                    <div class="size-buttons">
                        <button v-for="size in availableSizes" :key="size.value" :class="['size-button', {
                            'disabled': !size.available || product?.stock <= 0,
                            'selected': selectedSize === size.value
                        }]" :disabled="!size.available || product?.stock <= 0" @click="selectSize(size.value)">
                            {{ size.value }}
                        </button>
                    </div>
                </div>

                <button class="buy-button" @click="handleBuyNow" :disabled="!selectedSize || product?.stock <= 0">
                    {{ product?.stock <= 0 ? 'Out of Stock' : 'Add to Cart' }} </button>
            </div>

            <!-- Related Products Section -->
            <section class="related-products">
                <h2 class="section-title">Customers Also Like</h2>
                <div class="related-grid">
                    <MerchandiseCard v-for="relatedProduct in relatedProducts" :key="relatedProduct.id"
                        :product="relatedProduct" />
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import { useMerchandiseStore } from '@/stores/merchandise'
import MerchandiseCard from '@/components/MerchandiseCard.vue'

export default {
    name: 'MerchandisingProductPageView',

    components: {
        MerchandiseCard
    },

    data() {
        const merchandiseStore = useMerchandiseStore()
        return {
            product: null,
            loading: true,
            error: null,
            relatedProducts: [],
            merchandiseStore,
            currentMainImage: null,
            selectedSize: null,
            availableSizes: [],
            displayImages: []
        }
    },

    created() {
        this.fetchProductDetails()
    },

    methods: {
        async fetchProductDetails() {
            try {
                this.loading = true
                this.error = null

                const productId = this.$route.params.productId
                if (!productId) throw new Error('No product ID provided')

                const product = this.merchandiseStore.getMerchandiseById(productId)
                if (!product) throw new Error('Product not found')

                this.product = product
                this.currentMainImage = product.mainImage
                this.displayImages = [...product.secondaryImages]

                this.availableSizes = product.sizes.map(size => ({
                    value: size,
                    available: product.stock > 0
                }))

                const allProducts = this.merchandiseStore.getAllMerchandise || []
                this.relatedProducts = allProducts
                    .filter(p => p.id !== productId)
                    .slice(0, 3)

            } catch (err) {
                console.error('Error details:', err)
                this.error = err.message || 'Failed to load product'
            } finally {
                this.loading = false
            }
        },

        swapMainImage(index) {
            const temp = this.currentMainImage
            this.currentMainImage = this.displayImages[index]
            this.displayImages = [
                ...this.displayImages.slice(0, index),
                temp,
                ...this.displayImages.slice(index + 1)
            ]
        },

        selectSize(size) {
            this.selectedSize = size
        },

        async handleBuyNow() {
            if (!this.selectedSize) {
                alert('Please select a size first')
                return
            }

            if (this.product.stock <= 0) {
                alert('This product is out of stock')
                return
            }

            try {
                await this.merchandiseStore.decreaseStock(this.product.id)
                alert('Product added to cart successfully!')
                await this.$router.push({ name: 'MerchandisingPage' })
            } catch (err) {
                console.error('Purchase error:', err)
                alert('Failed to process purchase: ' + err.message)
            }
        }
    },

    watch: {
        '$route.params.productId': {
            immediate: true,
            handler(newId) {
                if (newId) {
                    this.fetchProductDetails()
                }
            }
        }
    }
}
</script>

<style scoped>
.main-container {
    display: flex;
    align-items: start;
    gap: 40px 64px;
    justify-content: start;
    flex-wrap: wrap;
    padding: 40px;
    max-width: 1440px;
    margin: 0 auto;
}

.shop-photos-container {
    display: flex;
    gap: 20px;
    height: 800px;
    width: 100%;
    max-width: 800px;
}

.vertical-images-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    width: 200px;
}

.vertical-image {
    width: 100%;
    height: calc((100% - 40px) / 3);
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.vertical-image:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.horizontal-image-container {
    flex: 1;
    height: 100%;
}

.horizontal-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.product-details-container {
    flex: 1;
    min-width: 300px;
    max-width: 500px;
}

.product-title-container {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
}

.product-title {
    color: var(--gray100, #bec7ce);
    font:  36px Aspekta700, sans-serif;
    letter-spacing: -0.5px;
}

.stock-label {
    color: #ff4444;
    font:  16px Aspekta600, sans-serif;
    padding: 4px 12px;
    border: 2px solid #ff4444;
    border-radius: 6px;
}

.product-price {
    color: var(--mainWhite, #fafafa);
    font:  48px Aspekta700, sans-serif;
    margin-top: 12px;
    letter-spacing: -0.5px;
}

.product-description-container {
    margin-top: 24px;
}

.product-description-title {
    color: var(--mainWhite, #fafafa);
    font:  30px Aspekta400, sans-serif;
}

.product-description {
    color: var(--gray100, #bec7ce);
    font:  16px Aspekta250, sans-serif;
    letter-spacing: 0.64px;
    margin-top: 8px;
    line-height: 1.6;
}

.size-section {
    margin-top: 40px;
}

.product-size-title {
    color: var(--mainWhite, #fafafa);
    font:  24px Aspekta400, sans-serif;
    margin-bottom: 16px;
}

.size-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.size-button {
    min-width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid var(--gray100, #bec7ce);
    background: transparent;
    color: var(--mainWhite, #fafafa);
    font:  16px Aspekta500, sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.size-button:hover:not(.disabled) {
    background: var(--mainWhite, #fafafa);
    color: var(--mainBlack, #010306);
    transform: translateY(-2px);
}

.size-button.selected {
    background: var(--mainWhite, #fafafa);
    color: var(--mainBlack, #010306);
    border-color: var(--mainWhite, #fafafa);
}

.size-button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border-color: var(--gray500, #52595f);
    background: var(--gray700, #373c40);
}

.buy-button {
    width: 80%;
    max-width: 300px;
    padding: 18px 32px;
    border-radius: 12px;
    background: var(--mainWhite, #fafafa);
    color: var(--mainBlack, #010306);
    font:  18px Aspekta700, sans-serif;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 48px 0;  /* Changed from margin: 48px auto */
    display: block;
}

.buy-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(250, 250, 250, 0.2);
}

.buy-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: var(--gray500, #52595f);
    transform: none !important;
    box-shadow: none !important;
}

.related-products {
    width: 100%;
    margin-top: 96px;
}

.section-title {
    color: var(--mainWhite, #fafafa);
    font:  48px Aspekta600, sans-serif;
    text-align: center;
    margin-bottom: 64px;
}

.related-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    width: 100%;
}

@media (max-width: 991px) {
    .shop-photos-container {
        flex-direction: column;
        height: auto;
    }

    .vertical-images-container {
        flex-direction: row;
        width: 100%;
        height: 120px;
    }

    .vertical-image {
        width: calc((100% - 40px) / 3);
        height: 100%;
    }

    .horizontal-image-container {
        width: 100%;
        height: 600px;
    }

    .related-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .product-title {
        font-size: 32px;
    }

    .stock-label {
        font-size: 14px;
    }
}

@media (max-width: 576px) {
    .main-container {
        padding: 20px;
    }

    .product-title {
        font-size: 28px;
    }

    .product-price {
        font-size: 36px;
    }

    .stock-label {
        font-size: 12px;
    }

    .section-title {
        font-size: 36px;
    }

    .related-grid {
        grid-template-columns: 1fr;
    }
}
</style>