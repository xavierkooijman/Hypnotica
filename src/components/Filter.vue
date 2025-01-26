<template>
    <div class="modal-container">
        <header class="modal-header">
            <h1 class="modal-title">Filter program</h1>
            <close class="close-icon" @click="$emit('close')" aria-label="Close filter modal" />
        </header>
        <div class="modal-content">
            <div class="filter-container">
                <section class="filter-section">
                    <h2 class="section-title">Days</h2>
                    <div class="filter-options">
                        <button v-for="day in ['Friday', 'Saturday', 'Sunday']" :key="day" class="filter-btn"
                            :class="{ 'filter-btn-active': isSelected('days', day) }"
                            @click="toggleFilter('days', day)">
                            {{ day }}
                        </button>
                    </div>
                </section>

                <section class="filter-section">
                    <h2 class="section-title">Genres</h2>
                    <div class="filter-options">
                        <button
                            v-for="genre in ['Techno', 'House', 'Dubstep', 'Trance', 'Acid', 'Dub', 'Bass', 'Psytrance', 'Drum & bass', 'Disco', 'Hardcore']"
                            :key="genre" class="filter-btn"
                            :class="{ 'filter-btn-active': isSelected('genres', genre) }"
                            @click="toggleFilter('genres', genre)">
                            {{ genre }}
                        </button>
                    </div>
                </section>

                <section class="filter-section">
                    <h2 class="section-title">Venues</h2>
                    <div class="filter-options">
                        <button
                            v-for="venue in ['Tresor', 'Insomnia', 'KitKatClub', 'Ritter Butzke', 'Trauma Bar Und Kino']"
                            :key="venue" class="filter-btn"
                            :class="{ 'filter-btn-active': isSelected('venues', venue) }"
                            @click="toggleFilter('venues', venue)">
                            {{ venue }}
                        </button>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { X } from 'lucide-vue-next';
import { useProgramStore } from '@/stores/program';

export default {
  components: {
    close: X
  },
  data() {
    return {
      selectedFilters: {
        days: [],
        genres: [],
        venues: []
      }
    }
  },
  created() {
    // Initialize with stored filters
    const programStore = useProgramStore();
    this.selectedFilters = JSON.parse(JSON.stringify(programStore.filters));
  },
  methods: {
    toggleFilter(category, value) {
      if (this.selectedFilters[category].includes(value)) {
        this.selectedFilters[category] = this.selectedFilters[category].filter(item => item !== value);
      } else {
        this.selectedFilters[category].push(value);
      }
      
      // Update store
      const programStore = useProgramStore();
      programStore.setFilters(this.selectedFilters);
      
      // Emit change
      this.$emit('filter-changed', this.selectedFilters);
    },
    isSelected(category, value) {
      return this.selectedFilters[category].includes(value);
    }
  }
}
</script>

<style scoped>
.modal-container {
    border-radius: 20px;
    border: 1px solid var(--Gray-100, #bec7ce);
    backdrop-filter: blur(25px);
    background-color: rgba(1, 3, 6, 0.01);
    display: flex;
    max-width: 517px;
    max-height: 715;
    flex-direction: column;
    overflow: hidden;
    font-family: Aspekta, sans-serif;
    position: fixed;
    z-index: 3000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--Gray-100, #bec7ce);
    background: var(--Main-Black, #010306);
    padding: 24px;
    gap: 40px 100px;
    flex-wrap: wrap;
}

.modal-title {
    color: var(--Main-White, #fafafa);
    font-size: 36px;
    font-family: Aspekta200;
    margin: 0;
}

.close-icon {
    font-size: 18px;
    color: white;
    cursor: pointer;
    transition: color 0.3s ease;
}

.close-icon:hover {
    color: var(--Gray-200, #a2aab1);
}

.modal-content {
    display: flex;
    margin-top: 7px;
}

.filter-container {
    flex-grow: 1;
    margin-top: 41px;
    padding-bottom: 24px;
}

.filter-section {
    padding: 0 24px;
    margin-bottom: 48px;
}

.section-title {
    color: var(--Gray-100, #bec7ce);
    font-size: 24px;
    font-family: Aspekta300;
    margin: 0 0 12px;
}

.filter-options {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.filter-btn {
    border-radius: 50px;
    border: 1px solid var(--Gray-200, #a2aab1);
    background: transparent;
    color: var(--Main-White, #fafafa);
    font-size: 20px;
    font-family: Aspekta400;
    padding: 6px 24px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-btn-active {
    background-color: var(--Main-White, #fafafa);
    color: var(--Main-Black, #010306);
    border-color: var(--Main-White, #fafafa);
}

.filter-btn:hover {
    background-color: rgba(250, 250, 250, 0.1);
}

.filter-btn.filter-btn-active:hover {
    background-color: var(--Main-White, #fafafa);
}

.empty-btn {
    min-height: 41px;
    padding: 6px 0;
}



@media (max-width: 991px) {
    .modal-header {
        padding: 0 20px;
    }

    .filter-container {
        margin: 40px -12px 0 0;
    }

    .filter-section {
        padding: 0 20px;
    }

    .filter-btn {
        padding: 0 20px;
    }

    .scroll-indicator {
        display: none;
    }
}
</style>