<template>
  <section class="artist-showcase">
    <div class="artist-grid" ref="artistGrid" @mousedown="startDrag" @mousemove="drag" @mouseup="stopDrag"
      @mouseleave="stopDrag">
      <article v-for="(artist, index) in artistDetails" :key="artist.id" class="artist-card"
        :class="['artist-card-item', artist.customClass, { 'hover': hoveredIndex === index }]"
        @mouseover="hoveredIndex = index" @mouseleave="hoveredIndex = null">
        <div class="artist-click-area">
          <img :src="artist.mainImg" :alt="artist.name" loading="lazy" class="artist-image"
            @click="navigateToArtistPage(artist.id)" />
        </div>
        <h2 class="artist-name">{{ artist.name }}</h2>
        <p v-show="hoveredIndex === index" class="artist-description">{{ artist.simpleDescription }}</p>
      </article>
    </div>
  </section>
</template>

<script>
import { useEventStore } from "@/stores/events";
import { useArtistsStore } from "@/stores/artists";

export default {
  name: "ArtistSlideshow",
  data() {
    return {
      hoveredIndex: null,
      isDragging: false,
      startX: 0,
      scrollLeft: 0,
      artistDetails: [], // Lista para armazenar os detalhes completos dos artistas
    };
  },
  async created() {
    // Obtém o ID do evento a partir da rota
    const eventId = this.$route.params.eventId;

    // Acessa as stores de eventos e artistas
    const eventStore = useEventStore();
    const artistStore = useArtistsStore();

    // Obtém o evento associado ao ID
    const event = eventStore.getEventById(eventId);

    if (event && event.artistsIds) {
      // Obtém os detalhes dos artistas usando os IDs da lista
      this.artistDetails = event.artistsIds
        .map((id) => artistStore.getArtistById(id))
        .filter((artist) => artist !== undefined); // Remove IDs inválidos ou artistas não encontrados
    }
  },
  methods: {
    startDrag(event) {
      this.isDragging = true;
      this.startX = event.pageX - this.$refs.artistGrid.offsetLeft;
      this.scrollLeft = this.$refs.artistGrid.scrollLeft;
    },
    drag(event) {
      if (!this.isDragging) return;
      const x = event.pageX - this.$refs.artistGrid.offsetLeft;
      const walk = (x - this.startX) * 2; // Multiplicador para aumentar a velocidade do arrasto
      this.$refs.artistGrid.scrollLeft = this.scrollLeft - walk;
    },
    stopDrag() {
      this.isDragging = false;
    },
    navigateToArtistPage(artistId) {
      this.$router.push(`/artist/${artistId}`);
    },
  },
};
</script>

<style scoped>
.artist-showcase {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  justify-content: center;
  padding: 0px 32px;
}

.artist-grid {
  display: flex;
  gap: 32px;
  padding: 32px 32px 0px 48px; /* Adicionado padding à esquerda */
  width: 100%;
  max-width: 100%;
  overflow: hidden; /* Não permite que o conteúdo ultrapasse os limites da div */
  cursor: grab;
}

.artist-grid:active {
  cursor: grabbing;
}

.artist-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; /* Centraliza o conteúdo */
  flex: 0 0 auto;
  transition: transform 0.3s ease-out;
  height: 550px; /* Altura ajustada para incluir espaço para a descrição */
}

.artist-card-item {
  transition: transform 0.3s ease-out;
  width: 220px; /* Ajuste da largura do item */
  min-width: 180px;
  user-select: none;
  pointer-events: all;
}

.artist-card-item.hover {
  transform: scale(1.1);
}

.artist-click-area {
  cursor: pointer;
}

.artist-image {
  width: 100%;
  height: 220px; /* Altura fixa para o espaço da imagem */
  object-fit: cover; /* Faz com que a imagem ocupe todo o espaço disponível */
  border-radius: 50%;
}

.artist-name {
  color: var(--Main-White);
  margin-top: 16px;
  font: 36px Aspekta500, sans-serif;
  transition: color 0.3s ease-out;
}

.artist-name:hover {
  color: var(--Primary-Accent);
}

.artist-description {
  color: var(--Gray-200, #a2aab1);
  font: 18px Aspekta300, sans-serif;
  margin-top: 16px;
  white-space: pre-wrap; /* Permite quebras de linha */
  text-align: center; /* Alinha o texto no centro */
  opacity: 1; /* Sempre visível */
  transition: opacity 0.3s ease-in-out;
}

.artist-card-featured,
.artist-card-highlight,
.artist-card-special {
  padding: 15px 0;
}

.artist-card-end {
  z-index: 10;
  margin-right: -1100px;
  padding: 15px 0;
}
</style>

