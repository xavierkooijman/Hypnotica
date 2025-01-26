import { defineStore } from 'pinia';
import { useEventStore } from './events';
import { useVenuesStore } from './venues';
import { useArtistsStore } from './artists';

export const useProgramStore = defineStore('program', {
  state: () => ({
    filters: {
      days: [],
      genres: [],
      venues: []
    }
  }),

  actions: {
    setFilters(filters) {
      this.filters = { ...filters };
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      const dayNumber = date.getDate();
      const monthName = date.toLocaleDateString('en-US', { month: 'long' });

      const daySuffix = (d) => {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
          case 1: return 'st';
          case 2: return 'nd';
          case 3: return 'rd';
          default: return 'th';
        }
      };

      return `${dayName}, ${dayNumber}${daySuffix(dayNumber)} ${monthName}`;
    },

    async fetchArtistEvents(artistId) {
      const eventStore = useEventStore();
      const venueStore = useVenuesStore();
      const artistsStore = useArtistsStore();

      const artistEvents = eventStore.events.filter(event => 
        event.artistsIds.includes(artistId)
      );

      const groupedEvents = artistEvents.reduce((acc, event) => {
        const date = this.formatDate(event.date);
        const venueName = venueStore.getVenueById(event.venueId)?.name || 'Unknown Venue';
        const lineupNames = event.artistsIds
          .map((id) => artistsStore.getArtistById(id)?.name)
          .filter(name => name !== null);

        const formattedEvent = {
          id: event.id,
          title: event.name,
          venue: venueName,
          time: `${event.timeStart} - ${event.timeEnd}`,
          lineup: lineupNames.join(', '),
          genres: event.genres || []
        };

        if (!acc[date]) {
          acc[date] = {
            date,
            events: []
          };
        }

        acc[date].events.push(formattedEvent);
        return acc;
      }, {});

      return Object.values(groupedEvents);
    },

    async fetchAllPrograms() {
      const eventStore = useEventStore();
      const venueStore = useVenuesStore();
      const artistsStore = useArtistsStore();

      let events = eventStore.events;

      if (this.filters.days.length || this.filters.genres.length || this.filters.venues.length) {
        events = events.filter(event => {
          const dayMatch = !this.filters.days.length ||
            this.filters.days.some(day => this.formatDate(event.date).startsWith(day));

          const venueMatch = !this.filters.venues.length ||
            this.filters.venues.includes(venueStore.getVenueById(event.venueId)?.name);

          const genreMatch = !this.filters.genres.length ||
            event.genres?.some(g => this.filters.genres.includes(g));

          return dayMatch && venueMatch && genreMatch;
        });
      }

      const groupedEvents = events.reduce((acc, event) => {
        const date = this.formatDate(event.date);
        const venueName = venueStore.getVenueById(event.venueId)?.name || 'Unknown Venue';
        const lineupNames = event.artistsIds
          .map((id) => artistsStore.getArtistById(id)?.name)
          .filter(name => name !== null);

        const formattedEvent = {
          id: event.id,
          title: event.name,
          venue: venueName,
          time: `${event.timeStart} - ${event.timeEnd}`,
          lineup: lineupNames.join(', '),
          genres: event.genres || []
        };

        if (!acc[date]) {
          acc[date] = {
            date,
            events: []
          };
        }

        acc[date].events.push(formattedEvent);
        return acc;
      }, {});

      return Object.values(groupedEvents);
    }
  },

  persist: {
    key: 'program-filters',
    storage: localStorage,
    paths: ['filters']
  }
});