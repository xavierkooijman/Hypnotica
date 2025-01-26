<template>
  <main class="program-page">
    <h1 class="outline-title">PROGRAM</h1>
    <Filter @filter-changed="applyFilters" />
    <section class="event-list">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else-if="filteredEvents.length === 0">No events found</div>
      <div v-else v-for="(group, index) in filteredEvents" :key="index" class="event-group">
        <h3 class="event-date">{{ group.date }}</h3>
        <div class="events-list">
          <Program v-for="event in group.events" :key="event.id" :eventId="event.id" :eventTitle="event.title"
            :venue="event.venue" :eventTime="event.time" :lineup="event.lineup" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Filter from '@/components/Minibar.vue';
import Program from "@/components/ProgramSection.vue";
import { useProgramStore } from '@/stores/program';

export default {
  name: 'EventList',
  components: {
    Program,
    Filter
  },
  data() {
    return {
      eventsGroupedByDate: [],
      loading: false,
      error: null,
      activeFilters: {
        days: [],
        genres: [],
        venues: []
      }
    };
  },
  computed: {
    filteredEvents() {
      if (!this.activeFilters.days.length &&
        !this.activeFilters.genres.length &&
        !this.activeFilters.venues.length) {
        return this.eventsGroupedByDate;
      }

      return this.eventsGroupedByDate.map(group => {
        const filteredEvents = group.events.filter(event => {
          const dayMatch = !this.activeFilters.days.length ||
            this.activeFilters.days.some(day => group.date.startsWith(day));

          const venueMatch = !this.activeFilters.venues.length ||
            this.activeFilters.venues.includes(event.venue);

          const genreMatch = !this.activeFilters.genres.length ||
            event.genres?.some(g => this.activeFilters.genres.includes(g));

          return dayMatch && venueMatch && genreMatch;
        });

        return {
          ...group,
          events: filteredEvents
        };
      }).filter(group => group.events.length > 0);
    }
  },
  methods: {
    applyFilters(filters) {
      this.activeFilters = filters;
    },
    async fetchEvents() {
      try {
        this.loading = true;
        const programStore = useProgramStore();
        this.eventsGroupedByDate = await programStore.fetchAllPrograms();
        console.log('Fetched events:', this.eventsGroupedByDate); // Debug log
      } catch (e) {
        this.error = 'Failed to load events';
        console.error('Error fetching events:', e);
      } finally {
        this.loading = false;
      }
    }
  },
  // Move created() to component root level
  async created() {
    await this.fetchEvents();
  }
};
</script>

<style scoped>
.program-page {
  margin-bottom: 100px;
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-left: 48px;
  margin-right: 48px;
}

.event-group {
  margin-top: 69px;
}

.event-date {
  color: var(--Main-White, #fafafa);
  font: 48px Aspekta400, sans-serif;
}

.events-list {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.event-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>