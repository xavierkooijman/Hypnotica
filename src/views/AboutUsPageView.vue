<template>
  <main class="about-us-page" role="main">
    <section class="hero-section" aria-labelledby="festival-description">
      <h1 class="outline-title">ABOUT US</h1>
      <p id="festival-description" class="festival-description">
        Hypnøtica is envisioned as an immersive and transformative festival that
        serves as a beacon for the electronic music world. It combines
        cutting-edge sounds with forward-thinking education and innovation.
        Spanning three electrifying days and nights, the festival is hosted across
        Berlin's iconic venues, featuring over 100 performances.
      </p>
    </section>

    <section class="stats-section" aria-label="Festival Statistics">
      <div class="stats-container">
        <div class="stat-group">
          <div class="stat-number" data-target="100">0</div>
          <div class="stat-label">Artists</div>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat-group">
          <div class="stat-number" data-target="800">0</div>
          <div class="stat-label">Tracks</div>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat-group">
          <div class="stat-number" data-target="10">0</div>
          <div class="stat-label">Venues</div>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat-group">
          <div class="stat-number" data-target="50">0</div>
          <div class="stat-label">Events</div>
        </div>
      </div>
    </section>

    <section class="banner-section" aria-label="Festival Banner">
      <div class="carousel-container">
        <div class="carousel-track">
          <!-- First set -->
          <img src="../assets/images/1.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/2.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/3.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/4.jpg" alt="Festival image" class="carousel-image" />
          <!-- Second set -->
          <img src="../assets/images/1.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/2.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/3.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/4.jpg" alt="Festival image" class="carousel-image" />
          <!-- Third set for smoother transition -->
          <img src="../assets/images/1.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/2.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/3.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/4.jpg" alt="Festival image" class="carousel-image" />
        </div>
      </div>
    </section>

    <section class="banner-section-reverse" aria-label="Festival Banner Reverse">
      <div class="carousel-container">
        <div class="carousel-track">
          <!-- First set -->
          <img src="../assets/images/1.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/2.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/3.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/4.jpg" alt="Festival image" class="carousel-image" />
          <!-- Second set -->
          <img src="../assets/images/1.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/2.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/3.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/4.jpg" alt="Festival image" class="carousel-image" />
          <!-- Third set for smoother transition -->
          <img src="../assets/images/1.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/2.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/3.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/4.jpg" alt="Festival image" class="carousel-image" />
        </div>
      </div>
    </section>


    <section class="content-section" aria-label="Festival Details">
      <img src="../assets/images/5.jpg" alt="Festival experience" class="content-image" loading="lazy" />
      <div class="content-wrapper">
        <p class="content-description">
          Hypnøtica is envisioned as an immersive and transformative festival
          that serves as a beacon for the electronic music world. It combines
          cutting-edge sounds with forward-thinking education and innovation.
          Spanning three electrifying days and nights, the festival is hosted
          across Berlin's iconic venues, featuring over 100 performances.
        </p>
        <button class="btn-secondary" aria-label="Explore the Hypnøtica Program" tabindex="0"
          @click="navigateToProgram">
          Explore the Hypnøtica Program
        </button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AboutUsPageView',

  data() {
    return {
      carouselTracks: [],
      isCarouselMounted: false
    }
  },

  methods: {
    startCountdown() {
      const counters = document.querySelectorAll('.stat-number')
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target
            const target = +counter.getAttribute('data-target')
            const duration = 1200
            const startTime = performance.now()

            const updateCounter = (currentTime) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              const current = Math.floor(progress * target)
              counter.textContent = '+' + current

              if (progress < 1) {
                requestAnimationFrame(updateCounter)
              }
            }
            requestAnimationFrame(updateCounter)
          }
        })
      })

      counters.forEach(counter => observer.observe(counter))
    },

    initializeCarousel() {
      try {
        const tracks = document.querySelectorAll('.carousel-track')
        if (!tracks.length) return

        tracks.forEach((track, index) => {
          const speed = index === 0 ? 1 : -1
          let position = 0

          function animate() {
            position += speed
            const totalWidth = track.scrollWidth / 3

            if (Math.abs(position) >= totalWidth) {
              position = 0
            }

            track.style.transform = `translateX(${position}px)`
            requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
        })

        this.isCarouselMounted = true
      } catch (error) {
        console.error('Error initializing carousel:', error)
      }
    },

    navigateToProgram() {
      this.$router.push('/program/events')
    }
  },

  mounted() {
    this.startCountdown()
    setTimeout(this.initializeCarousel, 0)
  }
}
</script>


<style scoped>
/* Page Layout */
.about-us-page {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--mainBlack);
}

.festival-description {
  color: var(--gray100);
  text-align: center;
  letter-spacing: 1.6px;
  margin: 24px auto 0;
  max-width: 948px;
  font: 32px Aspekta300, sans-serif;
}

/* Stats Section */
.stats-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  padding: 32px;
}

.stat-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.stat-divider {
  width: 2px;
  height: 64px;
  background: var(--gray500);
}

.stat-number {
  font: 64px Aspekta600, sans-serif;
  color: var(--mainWhite);
}

.stat-label {
  font: 24px Aspekta400, sans-serif;
  color: var(--gray100);
}

/* Carousel Section */
.carousel-track {
  display: flex;
  gap: 16px;
  width: max-content;
  transform: translateX(0);
  transition: transform 0s linear;
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
  animation: scroll 50s linear infinite;
  transform: translateX(0);
}

.banner-section-reverse .carousel-track {
  animation: scroll-reverse 50s linear infinite;
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

/* Content Section */
.content-section {
  display: flex;
  align-items: center;
  gap: 128px;
  margin: 192px 48px 98px;
}

.content-image {
  width: 541px;
  border-radius: 10px;
  aspect-ratio: 0.86;
  object-fit: cover;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content-description {
  color: var(--gray100);
  font: 32px Aspekta300, sans-serif;
  letter-spacing: 1.6px;
}

.btn-secondary {
  align-self: flex-start;
  margin-top: 48px;
  padding: 12px 24px;
  border-radius: 12px;
  border: 1px solid var(--mainWhite);
  background: transparent;
  color: var(--mainWhite);
  font: 20px Aspekta500, sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--gray400);
  border-color: var(--gray400);
}

@media (max-width: 768px) {
  .carousel-image {
    height: 300px;
    width: 200px;
  }

  .content-section {
    flex-direction: column;
    gap: 48px;
    margin: 96px 24px 48px;
  }

  .content-image {
    width: 100%;
  }
}
</style>