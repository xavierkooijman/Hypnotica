<template>
  <main class="merchandise-page">
    <!-- Hero Title -->
    <h1 class="outline-title">MERCHANDISE</h1>

    <!-- New Arrivals Section -->
    <section class="new-arrivals">
      <h2 class="section-title">New Arrivals</h2>
      <div class="arrivals-grid">
        <MerchandiseCard v-for="product in latestProducts" :key="product.id" :product="product" />
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-container">
      <div class="gallery-layout">
        <div class="gallery-image-container">
          <img loading="lazy"
            src="https://artoftechno.com/cdn/shop/files/0.47054300_1732557288.png?v=1732557290&width=800"
            alt="Gallery image 1" />
        </div>
        <div class="gallery-image-container">
          <img loading="lazy"
            src="https://artoftechno.com/cdn/shop/files/0.87025500_1732557216.png?v=1732557218&width=800"
            alt="Gallery image 2" />
        </div>
        <div class="gallery-image-container">
          <div class="image-overlay"></div>
          <img loading="lazy"
            src="https://artoftechno.com/cdn/shop/files/0.47874700_1732557336.png?v=1732557339&width=800"
            alt="Gallery image 3" />
          <div class="gallery-text">
            <h2 class="gallery-title">PAIRS SALE</h2>
            <p class="gallery-subtitle">up to <span class="highlight">50%</span> discount</p>
          </div>
        </div>
        <div class="gallery-image-container">
          <img loading="lazy"
            src="https://artoftechno.com/cdn/shop/files/0.41300200_1732557150.png?v=1732557152&width=800"
            alt="Gallery image 4" />
        </div>
      </div>
    </section>

    <!-- All Products Section -->
    <section class="all-products">
      <h2 class="section-title">All Products</h2>
      <div class="products-grid">
        <MerchandiseCard v-for="product in allProducts" :key="product.id" :product="product" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useMerchandiseStore } from '@/stores/merchandise'
import MerchandiseCard from '@/components/MerchandiseCard.vue'

const merchandiseStore = useMerchandiseStore()

const latestProducts = computed(() => {
  return merchandiseStore.getAllMerchandise.slice(0, 3)
})

const allProducts = computed(() => {
  return merchandiseStore.getAllMerchandise
})
</script>

<style scoped>
.merchandise-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 0 48px;
  overflow-x: hidden;
  position: relative;
}

.outline-title {
  font-size: clamp(6rem, 10vw, 10rem); /* Minimum 32px, responsive 8% viewport width, maximum 96px */
  line-height: 1.2;
  font-family: Aspekta800, sans-serif;
  color: transparent;
  -webkit-text-stroke: 3px var(--gray200);
  margin: 48px auto;
  text-align: center;
  width: max-content;
  /* Changed to fix letter cutoff */
  white-space: nowrap;
  /* Prevent word wrap */
}

.section-title {
  color: var(--mainWhite);
  font: 64px Aspekta600, sans-serif;
  text-align: center;
  margin: 96px auto 64px;
  width: 100%;
}

/* New Arrivals Section */
.new-arrivals {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

.arrivals-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;
}

/* Gallery Section - Full Width */
.gallery-container {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 96px;
  margin-bottom: 96px;
  overflow: hidden;
}

.gallery-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Ajuste para 5 colunas */
  gap: 0;
  width: 100%;
  height: auto; /* Ajuste para altura automática */
}

.gallery-layout img {
  width: 100%;
  height: auto; /* Ajuste para altura automática */
  object-fit: cover;
  filter: blur(3px);
}

.gallery-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
  flex-direction: column;

}

.gallery-title {
  font-size: 70px;
  font-family: Aspekta700, sans-serif;
  margin-bottom: 16px;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px var(--mainWhite);
  white-space: nowrap;
}

.gallery-subtitle {
  font-size: 28px;
  font-family: Aspekta600, sans-serif;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--mainWhite);
}

.highlight {
  color: var(--blue100);
}

.gallery-layout>*:nth-child(2) {
  position: relative;
}

/* All Products Section */
.all-products {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto 96px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;
}
</style>