<template>
    <main>
        <div v-if="loading" class="loading">Loading...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else class="main-container">
            <PopUpGeneral :is-visible="showPopup" :timeout="3" title="Purchase successful!" type="success"
                @close="showPopup = false" />
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
                <div class="product-price">
                    <span v-if="discountedPrice !== product?.price" class="original-price">
                        {{ product?.price }} €
                    </span>
                    {{ discountedPrice }} €
                </div>

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

                <div class="promo-code-section">
                    <div class="product-description-title">Available Promo Codes</div>
                    <div v-if="Object.keys(groupedUserCodes).length > 0" class="available-codes">
                        <button v-for="(count, code) in groupedUserCodes" :key="code" class="code-button"
                            :class="{ 'selected': enteredCode === code }" @click="toggleCode(code)">
                            {{ code }} ({{ count }})
                        </button>
                    </div>
                    <div v-else class="no-codes-message">
                        No promo codes available
                    </div>
                </div>
                <button class="buy-button" @click="handleBuyNow"
                    :disabled="!isAuthenticated || !selectedSize || product?.stock <= 0">
                    {{ !isAuthenticated ? 'Login to Purchase' : product?.stock <= 0 ? 'Out of Stock' : 'Add to Cart' }}
                        </button>

            </div>

            <section class="related-products">
                <h2 class="section-title">Customers Also Like</h2>
                <div class="related-grid">
                    <MerchandiseCard v-for="product in relatedProducts" :key="product.id" :product="product" />
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import { useMerchandiseStore } from '@/stores/merchandise'
import { useUsersStore } from '@/stores/user'
import MerchandiseCard from '@/components/MerchandiseCard.vue'
import PopUpGeneral from '@/components/PopUpGeneral.vue'

export default {
    name: 'MerchandisingProductPageView',

    components: {
        MerchandiseCard,
        PopUpGeneral
    },

    data() {
        const merchandiseStore = useMerchandiseStore()
        const usersStore = useUsersStore()
        return {
            product: null,
            loading: true,
            error: null,
            relatedProducts: [],
            merchandiseStore,
            usersStore,
            currentMainImage: null,
            selectedSize: null,
            availableSizes: [],
            displayImages: [],
            appliedDiscount: null,
            validPromoCode: null,
            showPopup: false
        }
    },

    computed: {
        userCodes() {
            return this.usersStore?.authenticatedUser?.promoCodesRedeemed || []
        },
        discountedPrice() {
            if (!this.product?.price || !this.appliedDiscount) return this.product?.price
            return (this.product.price * (1 - this.appliedDiscount / 100)).toFixed(2)
        },
        isAuthenticated() {
            return !!this.usersStore?.authenticatedUser
        },
        groupedUserCodes() {
            const codes = this.usersStore?.authenticatedUser?.promoCodesRedeemed || []
            const grouped = codes.reduce((acc, code) => {
                acc[code] = (acc[code] || 0) + 1
                return acc
            }, {})

            return Object.fromEntries(
                Object.entries(grouped).sort((a, b) => {
                    const discountA = this.merchandiseStore.getpromoCodes.find(p => p.code === a[0])?.discount || 0
                    const discountB = this.merchandiseStore.getpromoCodes.find(p => p.code === b[0])?.discount || 0
                    return discountA - discountB
                })
            )
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

                const allProducts = this.merchandiseStore.merchandise || []
                this.relatedProducts = allProducts
                    .filter(p => p.id !== product.id) // Exclude current product
                    .sort(() => 0.5 - Math.random()) // Randomize array
                    .slice(0, 3) // Get first 3 items

            } catch (err) {
                this.error = err.message
                console.error('Error fetching product:', err)
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

        resetPurchaseState() {
            this.selectedSize = null
            this.appliedDiscount = null
            this.validPromoCode = null
        },

        toggleCode(code) {
            if (this.validPromoCode === code) {
                this.appliedDiscount = null
                this.validPromoCode = null
            } else {
                const promoCode = this.merchandiseStore.getpromoCodes.find(
                    pc => pc.code === code
                )
                if (promoCode) {
                    this.appliedDiscount = promoCode.discount
                    this.validPromoCode = code
                }
            }
        },

        async handleBuyNow() {
            try {
                await this.merchandiseStore.decreaseStock(this.product.id)

                if (this.validPromoCode) {
                    const user = this.usersStore.authenticatedUser
                    if (!user) {
                        throw new Error('No authenticated user found')
                    }

                    if (!user.promoCodesRedeemed) {
                        user.promoCodesRedeemed = []
                    }

                    const promoCodeIndex = user.promoCodesRedeemed.indexOf(this.validPromoCode)
                    if (promoCodeIndex !== -1) {
                        user.promoCodesRedeemed.splice(promoCodeIndex, 1)

                        const userIndex = this.usersStore.users.findIndex(u => u.email === user.email)
                        if (userIndex !== -1) {
                            if (!this.usersStore.users[userIndex].promoCodesRedeemed) {
                                this.usersStore.users[userIndex].promoCodesRedeemed = []
                            }
                            this.usersStore.users[userIndex].promoCodesRedeemed = [...user.promoCodesRedeemed]
                        }

                        this.usersStore.$patch()
                    }
                }

                this.showPopup = true
                this.resetPurchaseState()

                // Delay navigation to allow popup to be visible
                setTimeout(() => {
                    this.$router.push('/merchandising')
                }, 3000) // 3 seconds delay to match popup timeout
            } catch (err) {
                console.error('Error during purchase:', err)
                alert(err.message)
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
    font: 36px Aspekta700, sans-serif;
    letter-spacing: -0.5px;
}

.stock-label {
    color: #ff4444;
    font: 16px Aspekta600, sans-serif;
    padding: 4px 12px;
    border: 2px solid #ff4444;
    border-radius: 6px;
}

.product-price {
    color: var(--mainWhite, #fafafa);
    font: 36px Aspekta600, sans-serif;
    margin-top: 12px;
    letter-spacing: -0.5px;
}

.original-price {
    text-decoration: line-through;
    color: var(--gray400);
    margin-right: 12px;
}

.product-description-container {
    margin-top: 24px;
}

.product-description-title {
    color: var(--mainWhite, #fafafa);
    font: 30px Aspekta400, sans-serif;
}

.product-description {
    color: var(--gray100, #bec7ce);
    font: 16px Aspekta250, sans-serif;
    letter-spacing: 0.64px;
    margin-top: 8px;
    line-height: 1.6;
}

.size-section {
    margin-top: 40px;
}

.product-size-title {
    color: var(--mainWhite, #fafafa);
    font: 30px Aspekta400, sans-serif;
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
    font: 16px Aspekta500, sans-serif;
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

.promo-code-section {
    margin: 24px 0;
    width: 100%;
}

.available-codes {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 16px 0;
}

.code-button {
    padding: 8px 16px;
    background: var(--gray700);
    border: 2px solid var(--gray100);
    border-radius: 8px;
    color: var(--mainWhite);
    font-family: Aspekta400;
    cursor: pointer;
    transition: all 0.3s ease;
}

.code-button:hover {
    background: var(--gray600);
    transform: translateY(-2px);
}

.code-button.selected {
    background: var(--mainWhite);
    color: var(--mainBlack);
    border-color: var(--mainWhite);
}

.no-codes-message {
    color: var(--gray400);
    font-family: Aspekta400;
    margin-top: 12px;
}

.buy-button {
    width: 80%;
    max-width: 300px;
    padding: 18px 32px;
    border-radius: 12px;
    background: var(--mainWhite, #fafafa);
    color: var(--mainBlack, #010306);
    font: 18px Aspekta700, sans-serif;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 48px 0;
    /* Changed from margin: 48px auto */
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
    padding: 0 32px;
}

.section-title {
    color: var(--mainWhite);
    font: 48px Aspekta600, sans-serif;
    text-align: center;
    margin-bottom: 64px;
}

.related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    margin-bottom: 48px;
}

.related-products {
    width: 100%;
    margin-top: 96px;
    padding: 0 32px;
}

.section-title {
    color: var(--mainWhite);
    font: 48px Aspekta600, sans-serif;
    text-align: center;
    margin-bottom: 64px;
}

.related-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    margin-bottom: 48px;
}

@media (max-width: 991px) {
    .related-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 576px) {
    .related-grid {
        grid-template-columns: 1fr;
    }
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
        grid-template-columns: repeat(4, 1fr);
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