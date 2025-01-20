<template>
  <main class="artist-profile">
    <section class="hero-section" aria-label="Artist Hero Section">
      <img loading="lazy" :src="artistInfo.mainImg" class="hero-background" alt="Artist performing live" />
      <div class="text-overlay">
        <div class="name-container">
          <h1 class="artist-name">{{ artistInfo.name }}</h1>
          <button @click="toggleLike" aria-label="Like/Dislike" class="like-button">
            <Heart :class="{ liked: isLiked }" class="heart-icon" />
          </button>
        </div>
      </div>
    </section>

    <section class="artist-bio" aria-label="Artist Biography">
      <div class="bio-container">
        <p class="bio-text">{{ artistInfo.bio }}</p>
        <div class="social-links" role="navigation" aria-label="Social Media Links">
          <a :href="artistInfo?.socials?.youtube" target="_blank" rel="noopener noreferrer"
            v-if="artistInfo?.socials?.youtube">
            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/831c81c938349091e2146876e0645d3586d86fb03def6537bb794ee0ff7a7b94?placeholderIfAbsent=true&apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f"
              class="social-icon" alt="YouTube" />
          </a>
          <a :href="artistInfo?.socials?.spotify" target="_blank" rel="noopener noreferrer">
            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6525e131582c27018aa27e0cb734a4bbe48a79f1ce846092f2a8538a755ee030?placeholderIfAbsent=true&apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f"
              class="social-icon" alt="Spotify" />
          </a>
          <a :href="artistInfo?.socials?.instagram" target="_blank" rel="noopener noreferrer">
            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ccf2bb4cb874abffa5390e4c638d667d26f2c74a2824bc92943ef04e0ff94be?placeholderIfAbsent=true&apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f"
              class="social-icon" alt="Instagram" />
          </a>
        </div>
      </div>
      <img loading="lazy" :src="artistInfo.secondaryImg" class="artist-image" alt="Portrait of Charlotte de Witte" />
    </section>

    <!-- Seção de Top Tracks -->
    <section class="featured-music" aria-label="Top Tracks">
      <h2 class="section-title">Top Tracks</h2>
      <div v-if="loading" class="loading-message">Loading top tracks...</div>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-if="topTracks && !loading && !error" class="music-grid">
        <div v-for="track in topTracks" :key="track.name" class="track-card">
          <a :href="'https://open.spotify.com/track/' + track.id" target="_blank" rel="noopener noreferrer">
            <img v-if="track.image_url" :src="track.image_url" alt="Track artwork" class="track-artwork" />
            <h3 class="track-title">{{ track.name }}</h3>
          </a>
          <p class="track-album">Album: {{ track.album }}</p>
          <audio v-if="track.preview_url" :src="track.preview_url" controls></audio>
        </div>
      </div>
    </section>

    <section class="event-schedule" aria-label="Event Schedule">
      <h2 class="section-title">Artist Schedule</h2>
      <div v-if="artistEvents.length === 0">
        <p class="no-events-message">No upcoming events found for this artist.</p>
      </div>
      <div v-for="(day, index) in artistEvents" :key="index" class="schedule-day">
        <h3 class="day-title">{{ day.date }}</h3>
        <div class="events-list">
          <Program v-for="(event, eventIndex) in day.events" :key="eventIndex" :eventTitle="event.title"
            :venue="event.venue" :eventTime="event.time" :lineup="event.lineup" :eventId="event.id" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { useUsersStore } from "../stores/user";
import { useArtistsStore } from "../stores/artists";
import { useProgramStore } from "../stores/program";

import { Heart } from "lucide-vue-next";
import Program from "../components/ProgramSection.vue";

export default {
  components: {
    Heart,
    Program,
  },
  data() {
    return {
      topTracks: null,
      loading: true,
      error: null,
      isLiked: false,
      artistInfo: {},
      artistEvents: [],  // Agora é um array de eventos do artista
    };
  },
  methods: {
    async fetchArtistEvents() {
      const artistsStore = useArtistsStore();
      const programStore = useProgramStore();
      const usersStore = useUsersStore();

      try {
        this.loading = true;
        this.error = null;
        const artistId = this.$route.params.artistId;

        this.artistInfo = artistsStore.getArtistById(artistId);
        if (!this.artistInfo) {
          this.error = "Artist not found";
          return;
        }

        // Check if artist is liked
        const currentUser = usersStore.getAuthenticatedUser;
        if (currentUser) {
          this.isLiked = currentUser.favoriteArtists.includes(this.artistInfo.id);
        }

        this.artistEvents = programStore.getEventsByArtist(artistId);
      } catch (err) {
        this.error = "Failed to load artist events: " + err.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchTopTracks() {
      const artistsStore = useArtistsStore();

      try {
        this.loading = true;
        this.error = null;
        this.topTracks = await artistsStore.getTop3Tracks(this.artistInfo.name);
      } catch (err) {
        this.error = "Failed to load top tracks: " + err.message;
      } finally {
        this.loading = false;
      }
    },

    toggleLike() {
      const usersStore = useUsersStore();
      const currentUser = usersStore.getAuthenticatedUser;

      if (!currentUser) {
        alert("You need to be logged in to like artists!");
        return;
      }

      if (this.isLiked) {
        const index = currentUser.favoriteArtists.indexOf(this.artistInfo.id);
        if (index !== -1) {
          currentUser.favoriteArtists.splice(index, 1);
        }
      } else {
        currentUser.favoriteArtists.push(this.artistInfo.id);
      }

      this.isLiked = !this.isLiked;
      usersStore.$patch();
    },
  },
  mounted() {
    this.fetchTopTracks();
    this.fetchArtistEvents();  // Correção aqui: certifique-se de que está chamando corretamente
  }
};
</script>

<style scoped>
.artist-profile {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 100px;
}

.hero-section {
  position: relative;
  height: 700px;
  display: flex;
  align-items: flex-end;
}

.text-overlay {
  width: 100%;
  padding: 20px;
  margin: 20px;
  position: relative;
  /* Add this */
  z-index: 2;
  /* Add this to appear above background */
}

.hero-background {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.hero-background::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%);
  z-index: 1;
}

.name-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}

.artist-header {
  position: relative;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  /* Alinhamento vertical */
}

.artist-name {
  color: var(--Main-White);
  font: 64px Aspekta800, sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-right: 20px;
  /* Add space between name and like button */
}

.verified-badge {
  width: 64px;
  object-fit: contain;
}

.like-button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 15px;
  display: inline-flex;
  align-items: center;
}

.heart-icon {
  width: 64px;
  /* Define o tamanho inicial do ícone */
  height: 64px;
  /* Define o tamanho inicial do ícone */
  transition: transform 0.3s ease, fill 0.3s ease;
  /* Transição suave para o tamanho e o preenchimento */
  stroke: #fff;
  /* Cor da borda do coração (branca inicialmente) */
  fill: transparent;
  /* Começa com o coração vazio (transparente) */
  stroke-width: 2;
  /* Largura da borda do coração */
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
}

.heart-icon.liked {
  fill: #fff;
  /* Preenchimento branco quando curtido */
  stroke: #fff;
  /* Mantém a borda branca quando curtido */
}

.like-button:hover .heart-icon {
  transform: scale(1.1);
  /* Aumenta o ícone um pouco ao passar o mouse */
}

.social-icon {
  width: 75px;
  object-fit: contain;
  transition: filter 0.3s ease;
  /* Transição suave para o filtro */
}

/* Efeito de hover: ao passar o mouse, a cor fica mais clara */
.social-icon:hover {
  filter: brightness(.8);
  /* Aumenta o brilho, criando o efeito de cor mais clara */
}

.bio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

.social-links {
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  /* Change to flex-start */
  padding-left: 20px;
  /* Add some padding from the left */
  margin-top: 20px;
  /* Add some space from the name */
}

.artist-bio {
  display: flex;
  gap: 128px;
  justify-content: space-between;
  align-items: center;
  /* Centraliza verticalmente os elementos */
  flex-wrap: nowrap;
  /* Impede que os itens quebrem para uma nova linha */
  margin: 128px 48px;
  /* Margem lateral de 48px */
  padding: 0 96px;
}

.bio-text {
  flex: 1;
  /* Garante que o texto ocupe espaço proporcional */
  max-width: 900px;
  /* Aumenta a largura máxima do texto */
  color: var(--Gray-100, #bec7ce);
  letter-spacing: 1.5px;
  font: 30px Aspekta300, sans-serif;
}

.artist-image {
  flex: 1;
  /* Garante que a imagem ocupe espaço proporcional */
  max-width: 40%;
  /* A largura se adapta ao contêiner */
  max-height: 700px;
  /* Define uma altura máxima reduzida */
  width: auto;
  /* Ajusta a largura proporcional à altura */
  height: auto;
  /* Mantém as proporções */
  border-radius: 12px;
  object-fit: cover;
  /* Garante que a imagem preencha o espaço disponível sem distorção */
}

.featured-music {
  padding: 0 48px;
  /* Margem lateral de 48px */
}

.section-title {
  color: var(--Main-White);
  font: 64px Aspekta600, sans-serif;
}

.music-grid {
  display: flex;
  gap: 32px;
  margin-top: 32px;
}

.track-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  opacity: 0.8;
  /* Inicialmente com opacidade 80% */
  transition: opacity 0.3s ease, transform 0.3s ease;
  /* Transições suaves para opacidade e escala */
}

.track-card:hover {
  opacity: 1;
  /* Opacidade 100% quando passar o mouse */
  transform: scale(1.01);
  /* Aumenta a escala para 1.1 quando passar o mouse */
}

.track-artwork {
  width: 100%;
  border-radius: 12px;
  aspect-ratio: 1;
  object-fit: cover;
  transition: transform 0.3s ease;
  /* Suaviza a transformação da imagem */
}

.track-title {
  color: var(--Main-White, #fafafa);
  font: 32px Aspekta600, sans-serif;
  margin: 15px 0 17px;
}

.platform-icon {
  width: 32px;
  aspect-ratio: 0.97;
  object-fit: contain;
}

.event-schedule {
  margin-top: 137px;
  padding: 0 48px;
  /* Margem lateral de 48px */
}

.schedule-day {
  margin-top: 69px;
}

.day-title {
  color: var(--Main-White, #fafafa);
  font: 48px Aspekta400, sans-serif;
}

.events-list {
  margin-top: 32px;
}

.event-card {
  border-top: 1px solid var(--Gray-500, #52595f);
  border-bottom: 1px solid var(--Gray-500, #52595f);
  padding: 32px 0;
}

.event-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--Main-White, #fafafa);
  font: 24px Aspekta400, sans-serif;
}

.time-wrapper {
  display: flex;
  align-items: center;
  gap: 48px;
}

.event-icon {
  width: 28px;
  aspect-ratio: 0.97;
  object-fit: contain;
}

.lineup {
  color: var(--Gray-100, #bec7ce);
  font: 20px Aspekta350, sans-serif;
  margin-top: 12px;
}

.featured-music {
  padding: 0 48px;
  /* Margem lateral de 48px */
}

.section-title {
  color: var(--Main-White, #fafafa);
  font: 64px Aspekta600, sans-serif;
}

.music-grid {
  display: flex;
  gap: 20px;
  margin-top: 32px;
}

.track-card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.track-artwork {
  width: 100%;
  border-radius: 12px;
  aspect-ratio: 1;
  object-fit: contain;
}

.track-title {
  color: var(--Main-White, #fafafa);
  font: 32px Aspekta600, sans-serif;
  margin: 36px 0 17px;
}

.platform-icon {
  width: 32px;
  aspect-ratio: 0.97;
  object-fit: contain;
}
</style>