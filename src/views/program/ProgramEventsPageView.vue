<template>
  <main class="program-page">
    <h1 class="outline-title">PROGRAM</h1>
    <Filter @filter-changed="applyFilters" />
    <section class="event-list">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else-if="eventsGroupedByDate.length === 0">No events found</div>
      <div v-else v-for="(group, index) in eventsGroupedByDate" :key="index" class="event-group">
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
      error: null
    };
  },
  methods: {
    async applyFilters(filters) {
      try {
        const programStore = useProgramStore();
        programStore.setFilters(filters);
        this.eventsGroupedByDate = await programStore.fetchAllPrograms();
      } catch (e) {
        this.error = 'Failed to apply filters';
        console.error('Error applying filters:', e);
      }
    },
    async fetchEvents() {
      try {
        this.loading = true;
        const programStore = useProgramStore();
        this.eventsGroupedByDate = await programStore.fetchAllPrograms();
      } catch (e) {
        this.error = 'Failed to load events';
        console.error('Error fetching events:', e);
      } finally {
        this.loading = false;
      }
    }
  },
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