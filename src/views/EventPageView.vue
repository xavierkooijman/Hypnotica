<template>
  <img class="blur-gradiant" src="../assets/images/Blur gradient.svg" alt="Blur Gradient" />
  <img class="blur-gradiant-2" src="../assets/images/Blur gradient.svg" alt="Blur Gradient" />
  <main class="event-profile" v-if="event && !loading">
    <PopUpLogin :is-visible="showLoginPopup" :timeout="5" @close="showLoginPopup = false" />
    <section class="hero-section">
      <img :src="event.mainImg" alt="Main Event Image" class="hero-background" />
      <div class="text-overlay">
        <div class="name-container">
          <h1 class="event-name">{{ event.name }}</h1>
          <button @click="toggleCalendar" aria-label="Add/Remove from Calendar" class="calendar-button">
            <CalendarPlus v-if="!isInCalendar && isLoggedIn" class="calendar-icon" />
            <CalendarCheck v-if="isInCalendar && isLoggedIn" class="calendar-icon" />
            <CalendarPlus v-if="!isLoggedIn" class="calendar-icon" />
          </button>
        </div>
        <h2 class="event-subtitle">{{ formattedDescription }}</h2>
      </div>
    </section>

    <section class="event-bio" aria-label="Event Biography">
      <p class="bio-text">{{ event.bio }}</p>
      <img :src="event.bioImg" alt="Event atmosphere" class="bio-image" />
    </section>

    <!-- Tickets Section -->
    <section class="buy-tickets">
      <button class="btn-primary">Get Tickets</button>
    </section>

    <!-- Event Photos Section -->
    <section class="event-photos">
      <h2 class="section-title">Event Photos</h2>
      <Carousel :images="event.carouselImages" />
    </section>

    <!-- Artists Slider Section -->
    <section class="artists-slide">
      <h2 class="artists-title">Event Artists</h2>
      <Slider :artists="event.artists" />
    </section>
  </main>

  <!-- Loader or error message -->
  <div v-else>
    <p v-if="loading">Loading event...</p>
    <p v-else-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { useEventStore } from "@/stores/events";
import { useVenuesStore } from "@/stores/venues";
import { useUsersStore } from "@/stores/user";
import { CalendarPlus, CalendarCheck } from "lucide-vue-next";
import Carousel from "../components/Carousel.vue";
import Slider from "../components/EventArtistSlider.vue";
import PopUpLogin from '@/components/PopUpLogin.vue';

export default {
  name: "EventProfile",

  components: {
    Carousel,
    Slider,
    CalendarPlus,
    CalendarCheck,
    PopUpLogin
  },

  data() {
    return {
      event: null,
      loading: true,
      error: null,
      venuesStore: null,
      eventStore: null,
      showLoginPopup: false
    };
  },

  computed: {
    isInCalendar() {
      const usersStore = useUsersStore();
      const currentUser = usersStore.getAuthenticatedUser;
      return currentUser ? currentUser.calendar.includes(this.event?.id) : false;
    },

    isLoggedIn() {
      const usersStore = useUsersStore();
      return usersStore.getAuthenticatedUser !== null;
    },

    formattedDescription() {
      if (!this.event) return '';

      const date = new Date(this.event.date);
      const fullDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });

      const venueName = this.venuesStore.getVenueById(this.event.venueId)?.name || 'Unknown Venue';
      return `${fullDate} | ${venueName}`;
    }
  },

  methods: {
    toggleCalendar() {
      const usersStore = useUsersStore();
      const currentUser = usersStore.authenticatedUser;

      if (!currentUser) {
        this.showLoginPopup = true;
        return;
      }

      if (this.isInCalendar) {
        const index = currentUser.calendar.indexOf(this.event.id);
        if (index !== -1) {
          currentUser.calendar.splice(index, 1);
        }
      } else {
        currentUser.calendar.push(this.event.id);
      }

      // Add sync with users array
      const userIndex = usersStore.users.findIndex(u => u.email === currentUser.email);
      if (userIndex !== -1) {
        usersStore.users[userIndex].calendar = [...currentUser.calendar];
      }

      // Persist changes
      usersStore.$patch();
    },

    async fetchEvent() {
      try {
        this.loading = true;
        const eventId = this.$route.params.eventId;
        const event = this.eventStore.getEventById(eventId);

        if (!event) {
          this.error = 'Event not found';
          return;
        }

        this.event = event;
      } catch (err) {
        this.error = 'Failed to load event: ' + err.message;
      } finally {
        this.loading = false;
      }
    }
  },

  created() {
    this.eventStore = useEventStore();
    this.venuesStore = useVenuesStore();
    this.fetchEvent();
  }
};
</script>


<style scoped>
.event-profile {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.blur-gradiant {
  position: absolute;
  z-index: -1;
  bottom: -800px;
  right: 0;
}

.blur-gradiant-2 {
  position: absolute;
  z-index: -1;
  bottom: -1700px;
  rotate: 180deg;
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

.event-bio {
  display: flex;
  gap: 128px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin: 128px 48px;
  padding: 0 96px;
}

.bio-text {
  flex: 1;
  max-width: 900px;
  color: var(--Gray-100, #bec7ce);
  letter-spacing: 1.5px;
  font: 30px Aspekta300, sans-serif;
}

.bio-image {
  flex: 1;
  max-width: 40%;
  max-height: 700px;
  width: auto;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

.name-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}

.calendar-button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 15px;
  display: inline-flex;
  align-items: center;
}

.calendar-icon {
  width: 64px;
  height: 64px;
  transition: transform 0.3s ease;
  stroke: #fff;
  fill: transparent;
  stroke-width: 2;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
}

.calendar-icon.liked {
  fill: #fff;
  stroke: #fff;
}

.calendar-button:hover .calendar-icon {
  transform: scale(1.1);
}

.event-name {
  color: var(--Main-White);
  font: 64px Aspekta800, sans-serif;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
}

.event-subtitle {
  color: var(--gray100);
  font: 24px Aspekta400, sans-serif;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
}

/* Tickets Section */
.buy-tickets {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 64px 0;
}

/* Event Photos Section */
.event-photos {
  margin: 48px;
  text-align: center;
  margin-bottom: -120px;
}

.section-title {
  color: var(--Main-White);
  font: 64px Aspekta600, sans-serif;
  margin-bottom: -100px;
}

.artists-slide {
  text-align: center;
}

.artists-title {
  color: var(--Main-White);
  font: 64px Aspekta600, sans-serif;
  margin-bottom: 24px;
  margin-top: 96px;
}
</style>
