<template>
  <article class="event-card" @click="navigateToEvent">
    <div class="event-header">
      <h4 class="event-title">{{ eventTitle }}</h4>
      <p class="venue-name">{{ venue }}</p>
      <div class="time-wrapper">
        <time class="event-time">{{ eventTime }}</time>
        <!-- Remover o disabled -->
        <button @click.stop="toggleIcon" class="icon-button">
          <CalendarPlus v-if="!clicked && isLoggedIn" class="event-icon" />
          <CalendarCheck v-if="clicked && isLoggedIn" class="event-icon" />
          <CalendarPlus v-if="!isLoggedIn" class="event-icon" />
        </button>
      </div>
    </div>
    <p class="lineup">{{ lineup }}</p>

    <Popup :is-visible="showLoginPopup" :timeout="5" @close="showLoginPopup = false"></Popup>
  </article>
</template>

<script>
import { useRouter } from 'vue-router';
import { useUsersStore } from "../stores/user";
import { CalendarPlus, CalendarCheck } from 'lucide-vue-next';
import Popup from "./PopUpLogin.vue";

export default {
  components: {
    CalendarPlus,
    CalendarCheck,
    Popup
  },
  props: {
    eventId: {
      type: String,
      required: true,
    },
    eventTitle: String,
    venue: String,
    eventTime: String,
    lineup: String,
  },
  data() {
    return {
      clicked: false,
      showLoginPopup: false // Add new data property for popup visibility
    };
  },
  setup(props) {
    const router = useRouter();
    return { router, eventId: props.eventId };
  },
  computed: {
    // Computa se o evento já está no calendário do usuário
    isEventInCalendar() {
      const usersStore = useUsersStore();
      const currentUser = usersStore.authenticatedUser;
      return currentUser ? currentUser.calendar.includes(this.eventId) : false;
    },
    // Computa se o usuário está logado
    isLoggedIn() {
      const usersStore = useUsersStore();
      return usersStore.authenticatedUser !== null;
    }
  },
  watch: {
    // Reage a mudanças no calendário do usuário
    isEventInCalendar(newValue) {
      this.clicked = newValue; // Atualiza o estado do ícone
    }
  },
  mounted() {
    // Inicializa o estado `clicked` baseado no calendário
    this.clicked = this.isEventInCalendar;
  },
  methods: {
    navigateToEvent() {
      this.router.push(`/event/${this.eventId}`);
    },
    toggleIcon() {
      if (!this.isLoggedIn) {
        this.showLoginPopup = true;
        return;
      }

      const usersStore = useUsersStore();
      const currentUser = usersStore.authenticatedUser;

      if (this.isEventInCalendar) {
        const index = currentUser.calendar.indexOf(this.eventId);
        if (index !== -1) {
          currentUser.calendar.splice(index, 1);
        }
      } else {
        currentUser.calendar.push(this.eventId);
      }

      // Add sync with users array
      const userIndex = usersStore.users.findIndex(u => u.email === currentUser.email);
      if (userIndex !== -1) {
        usersStore.users[userIndex].calendar = [...currentUser.calendar];
      }

      // Persist changes
      usersStore.$patch();

      this.clicked = !this.clicked;
    },
    addToCalendar() {
      const usersStore = useUsersStore();
      const currentUser = usersStore.authenticatedUser;
      if (currentUser) {
        usersStore.addEventToCalendar(this.eventId);
      }
    },
    removeFromCalendar() {
      const usersStore = useUsersStore();
      const currentUser = usersStore.authenticatedUser;
      if (currentUser) {
        usersStore.removeEventFromCalendar(this.eventId);
      }
    },
  }
};
</script>

<style scoped>
.event-card {
  border-top: 1px solid var(--Gray-500, #52595f);
  border-bottom: 1px solid var(--Gray-500, #52595f);
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.event-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;
  color: var(--Main-White, #fafafa);
  font: 24px Aspekta300, sans-serif;
}

.event-title {
  cursor: pointer;
  margin: 0;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.venue-name {
  color: var(--Gray-100, #bec7ce);
  white-space: nowrap;
  text-align: center;
}

.time-wrapper {
  display: flex;
  justify-self: end;
  align-items: center;
  gap: 48px;
}

/* Estilo do botão para o ícone */
.icon-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

/* Estilo do ícone */
.event-icon {
  width: 36px;
  height: 36px;
  color: var(--Gray-100, #bec7ce);
  /* Cor inicial */
  transition: all 0.3s ease;
  /* Transição suave */
}

/* Mudança de cor e transformação no hover */
.event-icon:hover {
  color: var(--Main-White, #fafafa);
  /* Cor ao passar o mouse */
  transform: scale(1.1);
  /* Aumento do ícone */
}

.lineup {
  color: var(--Gray-100, #bec7ce);
  font: 20px Aspekta350, sans-serif;
  margin-top: 24px;
}
</style>
