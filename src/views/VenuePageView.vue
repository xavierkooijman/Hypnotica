<template>
  <main class="venue-profile" v-if="venue && !loading">
    <section class="hero-section">
      <img :src="venue.mainImg" alt="Venue Image" class="hero-background" />
      <div class="text-overlay">
        <div class="name-container">
          <h1 class="venue-name">{{ venue.name }}</h1>
          <LikeButton 
            type="venue"
            :targetId="venue.id"
            @like-changed="onLikeChanged"
          />
        </div>
        <h2 class="venue-desc">{{ venue.desc }}</h2>
      </div>
    </section>

    <!-- Biography Section -->
    <section class="venue-bio">
      <p class="bio-text">{{ venue.bio }}</p>
    </section>

    <!-- Venue Photos Section -->
    <section class="venue-photos">
      <h2 class="section-title">Venue Photos</h2>
      <Carousel :images="venue.carouselImages" />
    </section>

    <!-- Program Section -->
    <section class="event-schedule" aria-label="Event Schedule">
      <h2 class="program-title">Artist Schedule</h2>
      <div v-if="venueEvents.length === 0">
        <p class="no-events-message">No upcoming events at this venue.</p>
      </div>
      
      <!-- Exibição dos eventos -->
      <div v-for="(event, index) in venueEvents" :key="index" class="schedule-day">
        <div class="events-list">
          <Program
            :key="event.id"
            :eventTitle="event.title"
            :venue="event.venue"
            :eventTime="event.time"
            :lineup="event.lineup"
            :eventId="event.id"
          />
        </div>
      </div>
    </section>
  </main>
  
  <!-- Loader or error message -->
  <div v-else>
    <p v-if="loading">Loading venue...</p>
    <p v-else-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { useVenuesStore } from "@/stores/venues";
import { useProgramStore } from "@/stores/program";
import { useUsersStore } from "@/stores/user";
import Carousel from "../components/Carousel.vue";
import Program from "../components/ProgramSection.vue";
import LikeButton from "../components/likeButton.vue";

export default {
  name: "VenueProfile",

  components: {
    Carousel,
    Program,
    LikeButton
  },

  data() {
    return {
      venue: null,
      venueEvents: [],
      loading: true,
      error: null,
      isLiked: false
    };
  },

  methods: {
    async fetchVenue() {
      const venuesStore = useVenuesStore();
      const usersStore = useUsersStore();

      try {
        this.loading = true;
        this.error = null;
        const venueId = this.$route.params.venueId;

        const fetchedVenue = venuesStore.getVenueById(venueId);

        if (!fetchedVenue) {
          this.error = "Venue não encontrado!";
        } else {
          this.venue = fetchedVenue;
          const currentUser = usersStore.getAuthenticatedUser;
          if (currentUser) {
            this.isLiked = currentUser.favoriteVenues.includes(this.venue.id);
          }

          this.fetchVenueEvents(venueId);
        }
      } catch (err) {
        this.error = "Falha ao carregar venue: " + err.message;
      } finally {
        this.loading = false;
      }
    },

    onLikeChanged(newState) {
      this.isLiked = newState;
    },

    async fetchVenueEvents(venueId) {
      const programStore = useProgramStore();
      
      try {
        const events = await programStore.fetchAllPrograms();

        const venueEvents = events.flatMap(eventGroup => 
          eventGroup.events.filter(event => event.venue === this.venue.name)
        );

        this.venueEvents = venueEvents;
      } catch (error) {
        this.error = "Falha ao carregar eventos: " + error.message;
      }
    },
  },

  mounted() {
    this.fetchVenue();
  },
};
</script>

<style scoped>
.venue-profile {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 100px;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 700px;
  display: flex;
  align-items: flex-end;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.text-overlay {
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
}

.venue-name {
  color: var(--Main-White);
  font: 64px Aspekta800, sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-right: 20px;
}

.venue-desc {
  color: var(--gray100);
  font: 24px Aspekta400, sans-serif;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
}

.name-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}

/* Biography Section */
.venue-bio {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 48px 0;
  padding: 20px 96px;
}

.bio-text {
  flex: 1;
  max-width: 900px;
  text-align: center;
  color: var(--Gray-100, #bec7ce);
  letter-spacing: 1.5px;
  font: 30px Aspekta300, sans-serif;
}

/* Venue Photos Section */
.venue-photos {
  margin: 48px;
  text-align: center;
  margin-bottom: -120px;
  margin-top: -120px;
}

.section-title {
  color: var(--Main-White);
  font: 64px Aspekta600, sans-serif;
  margin-top: 96px;
  margin-bottom: -120px;
}

.program-title {
  color: var(--Main-White);
  font: 64px Aspekta600, sans-serif;
  text-align: center;
}

/* Program Section */
.event-schedule {
  margin-top: 137px;
  padding: 0 48px;
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
</style>