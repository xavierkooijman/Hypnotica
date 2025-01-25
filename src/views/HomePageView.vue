<template>
  <main class="landing-page">
    <section class="hero-section">
      <h1 class="outline-title">HYPNØTICA</h1>
      <div class="hero-container">
        <video class="hero-background" autoplay loop muted playsinline>
          <source src="@/assets/videos/LandingPageVideo.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="date-wrapper">
          <p class="festival-date">
            24th-26th<br />January 2025<br />Berlin
          </p>
        </div>
        <div class="button-wrapper">
          <button class="ticket-button btn-primary" tabindex="0" @click="navigateToTickets" role="button"
            aria-label="Purchase tickets for Hypnotica festival">
            Get tickets
          </button>
        </div>
      </div>
    </section>
    <section class="about-section">
      <div class="about-container">
        <div class="about-content">
          <div class="about-text-column">
            <div class="about-text-wrapper">
              <h1 class="about-heading">
                <span class="heading-text">What is </span>
                <span class="heading-highlight">Hypnøtica?</span>
              </h1>
              <p class="about-description">
                Hypnøtica is envisioned as an immersive and transformative
                festival that serves as a beacon for the electronic music world.
                It combines cutting-edge sounds with forward-thinking education
                and innovation. Spanning three electrifying days and nights, the
                festival is hosted across Berlin's iconic venues, featuring over
                100 performances.
              </p>
            </div>
          </div>
          <div class="about-image-column">
            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8206c2dcde24dc3546679ad6c932563ef2672196c0083cfcc097b56c9ab3761a?placeholderIfAbsent=true&apiKey=6e755de73b8d4c758b3444a5cc47bce6"
              class="about-image" alt="Hypnotica Festival Experience" />
          </div>
        </div>
      </div>
    </section>
    <h2 class="section-title">Artists</h2>
    <section class="artists-section">
      <div class="artist-slider" ref="artistGrid" @mousedown="startDrag" @mousemove="drag" @mouseup="stopDrag"
        @mouseleave="stopDrag">
        <div class="artist-track">
          <!-- Pattern of 4 artists: 2 small, 2 big -->
          <template v-for="(artist, index) in artistStore.artists" :key="artist.id">
            <!-- First two artists as small circles -->
            <div class="small-circles-group" v-if="index % 4 === 0">
              <ArtistSmallCircle :artist="artist" />
              <ArtistSmallCircle v-if="index + 1 < artistStore.artists.length"
                :artist="artistStore.artists[index + 1]" />
            </div>
            <!-- Next two artists as big circles -->
            <div class="large-circles-group" v-if="index % 4 === 2">
              <ArtistBigCircle :artist="artist" />
              <ArtistBigCircle v-if="index + 1 < artistStore.artists.length" :artist="artistStore.artists[index + 1]" />
            </div>
          </template>
        </div>
      </div>
    </section>
    <h2 class="section-title">Tickets</h2>
    <Tickets />
    <section class="banner-section" aria-label="Festival Banner">
      <h2 class="section-title">Media Gallery</h2>
      <div class="carousel-container">
        <div class="carousel-track">
          <!-- First set -->
          <img
            src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/2240765/pexels-photo-2240765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/4722053/pexels-photo-4722053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <!-- Second set -->
          <img
            src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/2240765/pexels-photo-2240765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/4722053/pexels-photo-4722053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <!-- Third set for smoother transition -->
          <img
            src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/2240765/pexels-photo-2240765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/4722053/pexels-photo-4722053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
        </div>
      </div>
    </section>

    <section class="banner-section-reverse" aria-label="Festival Banner Reverse">
      <div class="carousel-container">
        <div class="carousel-track">
          <!-- First set -->
          <img
            src="https://images.pexels.com/photos/16113965/pexels-photo-16113965/free-photo-of-graficas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/26447532/pexels-photo-26447532/free-photo-of-pessoas-luzes-noite-sombrio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/2842763/pexels-photo-2842763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/11963135/pexels-photo-11963135.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <!-- Second set -->
          <img
            src="https://images.pexels.com/photos/16113965/pexels-photo-16113965/free-photo-of-graficas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/26447532/pexels-photo-26447532/free-photo-of-pessoas-luzes-noite-sombrio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/2842763/pexels-photo-2842763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/11963135/pexels-photo-11963135.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <!-- Third set for smoother transition -->
          <img
            src="https://images.pexels.com/photos/16113965/pexels-photo-16113965/free-photo-of-graficas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/26447532/pexels-photo-26447532/free-photo-of-pessoas-luzes-noite-sombrio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/2842763/pexels-photo-2842763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
          <img
            src="https://images.pexels.com/photos/11963135/pexels-photo-11963135.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Festival image" class="carousel-image" />
        </div>
      </div>
    </section>
    <section class="merch-section">
      <div class="merch-header">
        <h2 class="merch-title">Elevate Your Style with Hypnøtica</h2>
        <p class="merch-subtitle">Unique designs for rave and techno lovers</p>
      </div>
      <div class="merch-content">
        <div class="merch-grid">
          <article v-for="product in latestProducts" :key="product.id" class="merch-card">
            <img loading="lazy" :src="product.mainImage" class="merch-image" :alt="product.name" />
            <h3 class="product-title">{{ product.name }}</h3>
          </article>
        </div>
        <button class="explore-button btn-secondary" tabindex="0" @click="navigateToMerchandise">
          Explore the Collection
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useMerchandiseStore } from '@/stores/merchandise'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useArtistsStore } from '@/stores/artists'
import ArtistSmallCircle from '@/components/ArtistSmallCircle.vue'
import ArtistBigCircle from '@/components/ArtistBigCircle.vue'
import Tickets from '@/components/Tickets.vue';


const merchandiseStore = useMerchandiseStore()
const router = useRouter()

const latestProducts = computed(() => {
  return merchandiseStore.getAllMerchandise.slice(0, 3)
})

const navigateToMerchandise = () => {
  router.push({ name: 'MerchandisingPage' })
}

const navigateToTickets = () => {
  router.push({ name: 'TicketsPage' })
}

const artistStore = useArtistsStore()
const artistGrid = ref(null)
const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)

const startDrag = (event) => {
  isDragging.value = true
  startX.value = event.pageX - artistGrid.value.offsetLeft
  scrollLeft.value = artistGrid.value.scrollLeft
}

const drag = (event) => {
  if (!isDragging.value) return
  const x = event.pageX - artistGrid.value.offsetLeft
  const walk = (x - startX.value) * 2
  artistGrid.value.scrollLeft = scrollLeft.value - walk
}

const stopDrag = () => {
  isDragging.value = false
}
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.hero-section {
  position: relative;
  width: 100%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.outline-title {
  font-size: clamp(6rem, 10vw, 10rem);
  line-height: 1.2;
  font-family: Aspekta800, sans-serif;
  color: transparent;
  -webkit-text-stroke: 3px var(--gray200);
  text-align: center;
  margin-bottom: -10rem;
  z-index: 2;
}

.hero-container {
  width: 100%;
  height: calc(100vh - 200px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-background {
  width: 65%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  display: block;
  margin: 0 auto;
}

.date-wrapper {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 2;
}

.festival-date {
  color: var(--gray100, #bec7ce);
  font-family: Aspekta600, sans-serif;
  font-size: 36px;
  text-transform: uppercase;
  margin-left: 20rem;
}

.button-wrapper {
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.ticket-button {
  margin: 0 auto;
  padding-left: 64px;
  padding-right: 64px;
}

.about-section {
  padding: 80px 120px;
  /* Increased from previous padding */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-content {
  gap: 10px;
  display: flex;
}

.about-text-column {
  display: flex;
  flex-direction: column;
  width: 43%;
}

.about-text-wrapper {
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 32px -151px 0 0;
}

.about-heading {
  color: var(--mainWhite, #fafafa);
  font: 64px Aspekta600, sans-serif;
}

.heading-highlight {
  color: var(--mainWhite, #fafafa);
}

.about-description {
  color: var(--gray100, #bec7ce);
  letter-spacing: 1.2px;
  margin-top: 48px;
  font: 24px Aspekta300, sans-serif;
}

.about-image-column {
  display: flex;
  flex-direction: column;
  width: 57%;
  margin-left: 20px;
}

.about-image {
  aspect-ratio: 1.47;
  object-fit: contain;
  width: 100%;
  flex-grow: 1;
}

.section-title {
  font-family: Aspekta600, sans-serif;
  font-size: 64px;
  color: var(--mainWhite);
  text-align: left;
  margin-bottom: 48px;
  margin-left: 48px;
}

.artist-slider {
  overflow: hidden;
  cursor: grab;
  padding: 0 0 80px 0;
}

.artist-slider:active {
  cursor: grabbing;
}

.artist-track {
  display: flex;
  padding: 0;
  margin: 0;
  gap: 0;
}

.small-circles-group {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0;
}

.large-circles-group {
  display: flex;
  gap: 0;
  margin: 0;
}

/* Ensure smooth scrolling */
.artist-track {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

.small-circles-group {
  display: flex;
  flex-direction: column;
}

.large-circles-group {
  display: flex;
}

.artist-track {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

.carousel-track {
  display: flex;
  gap: 16px;
  width: max-content;
  will-change: transform;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.carousel-image {
  height: 425px;
  width: 300px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

.carousel-container {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.banner-section,
.banner-section-reverse {
  margin-top: 96px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.banner-section-reverse {
  margin-top: 32px;
}

.banner-section .carousel-track {
  animation: scroll 40s linear infinite;
  transform: translateX(0);
}

.banner-section-reverse .carousel-track {
  animation: scroll-reverse 35s linear infinite;
  transform: translateX(calc(-50% + 0px));
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-50%));
  }
}

@keyframes scroll-reverse {
  0% {
    transform: translateX(calc(-50%));
  }

  100% {
    transform: translateX(0);
  }
}

.artists-banner {
  aspect-ratio: 3.19;
  object-fit: contain;
  width: 100%;
}

.gallery-title {
  margin-top: 192px;
}

.gallery-image {
  aspect-ratio: 1.73;
  object-fit: contain;
  width: 100%;
  margin-top: 64px;
}

.merch-section {
  padding: 60px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.merch-header {
  text-align: center;
  margin-bottom: 48px;
}

.merch-title {
  font-family: Aspekta600, sans-serif;
  font-size: 64px;
  color: var(--mainWhite);
  margin-bottom: 16px;
}

.merch-subtitle {
  font-family: Aspekta400, sans-serif;
  font-size: 32px;
  color: var(--gray200);
}

.merch-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(450px, 500px));
  gap: 24px;
  margin-bottom: 48px;
  justify-content: center;
}

.merch-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.merch-image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
}

.product-title {
  color: var(--gray100);
  font: 500 24px Aspekta500, sans-serif;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.merch-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.explore-button {
  margin: 0 auto;
}
</style>