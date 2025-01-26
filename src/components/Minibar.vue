<template>
  <div class="filter-section">
    <div>
      <div class="filter-label">Show me</div>
      <div class="filter-options">
        <RouterLink 
          tabindex="0" 
          class="filter-option" 
          :class="{ 'filter-option-active': $route.name === 'ProgramEventsPage' }"
          :to="{ name: 'ProgramEventsPage' }"
          aria-label="Filter by Events"
        >Events</RouterLink>
        <RouterLink 
          tabindex="0" 
          class="filter-option"
          :class="{ 'filter-option-active': $route.name === 'ProgramArtistsPage' }" 
          :to="{ name: 'ProgramArtistsPage' }"
          aria-label="Filter by Artists"
        >Artists</RouterLink>
        <RouterLink 
          tabindex="0" 
          class="filter-option"
          :class="{ 'filter-option-active': $route.name === 'ProgramVenuePage' }"
          :to="{ name: 'ProgramVenuePage' }"
          aria-label="Filter by Venues"
        >Venues</RouterLink>
      </div>
    </div>
    <button 
      tabindex="0"
      class="filter-toggle"
      aria-label="Open filters menu"
      @click="toggleFilter"
    >
      <i class="ti ti-adjustments-horizontal" aria-hidden="true"></i>
      <span>Filter</span>
    </button>

    <Filter v-if="isFilterOpen" @close="closeFilter" @filter-changed="handleFilterChange" />
  </div>
</template>

<script>
import Filter from '@/components/Filter.vue';
import { useProgramStore } from '@/stores/program';

export default {
  components: {
    Filter,
  },
  data() {
    return {
      isFilterOpen: false,
    }
  },
  methods: {
    toggleFilter() {
      this.isFilterOpen = !this.isFilterOpen;
    },
    closeFilter() {
      this.isFilterOpen = false;
    },
    handleFilterChange(filters) {
      const programStore = useProgramStore();
      programStore.setFilters(filters);
      this.$emit('filter-changed', filters);
    }
  }
}
</script>

<style scoped>
  
  .filter-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1800px;
  margin: 64px 48px 128px;
}

.filter-label {
  color: var(--Gray-100, #bec7ce);
  font-size: 20px;
  font-family: Aspekta300;
}

.filter-options {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.filter-option {
  border: 1px solid var(--Gray-200, #a2aab1);
  border-radius: 50px;
  padding: 6px 32px;
  color: var(--Main-White, #fafafa);
  background: transparent;
  cursor: pointer;
  font-size: 20px;
  font-family: Aspekta400;
  min-width: 132px;
  max-height: 41px;
}

.filter-option-active {
  background-color: var(--Main-White, #fafafa);
  color: var(--Main-Black, #010306);
}

.filter-toggle {
  gap: 12px;
  margin-top: 29px;
  border: 1px solid var(--Gray-200, #a2aab1);
  border-radius: 50px;
  padding: 6px 24px;
  color: var(--Main-White, #fafafa);
  background: transparent;
  cursor: pointer;
  font-size: 20px;
  font-family: Aspekta400;
  min-width: 132px;
  max-height: 41px;
}

@media (max-width: 991px) {
  .filter-section {
    margin: 40px 20px 0;
  }
}

@media (max-width: 640px) {
  .filter-section {
    flex-direction: column;
    align-items: flex-start;
  }

  .filter-options {
    flex-wrap: wrap;
  }

  .filter-toggle {
    margin-left: 0; /* Alinha o botão à esquerda em telas menores */
    align-self: flex-end; /* Posiciona o botão no lado direito */
  }
}
</style>