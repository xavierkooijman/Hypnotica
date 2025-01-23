<template>
  <div class="bell-container">
    <div class="bell">
      <BellRing class="bell-icon" @click="toggleNotifications" />
    </div>
    <div v-show="isModalOpen" class="notifications-container" ref="notificationsContainer">
      <header class="notifications-header">
        <h2 class="notifications-title">Notifications</h2>
        <button class="mark-read-button" tabindex="0" role="button" @click="markAllAsRead">
          Mark all as read
        </button>
      </header>
      <div class="notifications-list">
        <div v-for="(notification, index) in filteredNotifications" :key="index" class="notification-item">
          <div class="notification-content">
            <img :src="notification.image" :alt="notification.imageAlt" class="notification-avatar" loading="lazy" />
            <div class="notification-text">
              <h3 class="notification-heading">{{ notification.title }}</h3>
              <p class="notification-description" v-html="notification.description"></p>
            </div>
          </div>
          <div class="notification-indicator" :class="{ read: notification.read }"></div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { ref } from 'vue';
import { useNotificationsStore } from '@/stores/notifications';
import { BellRing } from 'lucide-vue-next';

export default {
  name: 'NotificationsModal',
  components: {
    BellRing,
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    handleClickOutside(event) {
      if (
        this.isModalOpen &&
        !event.target.closest('.bell-icon') &&
        !event.target.closest('.notifications-container')
      ) {
        this.isModalOpen = false
      }
    }
  },

  setup() {
    const isModalOpen = ref(false); 
    const notificationsStore = useNotificationsStore();

    const toggleNotifications = () => {
      isModalOpen.value = !isModalOpen.value;
    };

    const markAllAsRead = () => {
      notificationsStore.markAllAsRead();
    };

    return {
      isModalOpen,
      toggleNotifications,
      markAllAsRead,
      filteredNotifications: notificationsStore.notifications, 
    };
  },
  computed: {
    filteredNotifications() {
      const notificationsStore = useNotificationsStore();
      return notificationsStore.getFilteredNotifications();

    }
  },
};

</script>

<style scoped>
.bell-container {
  width: 50px;
  height: 50px;
}

.bell {
  width: 50px;
  height: 50px;
}

.bell-icon {
  width: 50px;
  height: 50px;
  cursor: pointer;
  stroke-width: 1px;
  color: white;
}

.bell-icon:hover {
  color: var(--Gray-200, #a2aab1);
}

.notifications-container {
  margin: 20px;
  border-radius: 16px;
  border: 1px solid var(--Gray-100, #bec7ce);
  background: var(--Main-Black, #010306);
  display: flex;
  flex-direction: column;
  font-family: Aspekta, sans-serif;
  position: absolute;
  right: 0;
  z-index: 1000;
  width: 470px;
  transform: translateX(-40%);
}

.notifications-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}

.notifications-title {
  color: var(--Main-White, #fafafa);
  font-size: 20px;
  font-family: Aspekta200;
  margin: 0;
}

.mark-read-button {
  color: var(--Gray-200, #a2aab1);
  font-size: 16px;
  font-family: Aspekta200;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.notifications-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
}

.notifications-list::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.notifications-list {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

.notification-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid var(--Gray-100, #bec7ce);
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.notification-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: contain;
}

.notification-text {
  flex: 1;
}

.notification-heading {
  color: var(--Main-White, #fafafa);
  font-size: 16px;
  font-family: Aspekta200;
  margin: 0;
}

.notification-description {
  color: var(--Gray-100, #bec7ce);
  font-size: 14px;
  font-family: Aspekta100;
  margin: 4px 0 0;
}

.notification-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--Blue-300, #0067ca);
  margin-left: 10px;
  flex-shrink: 0;
}

.notification-indicator.read {
  display: none; /* Hide the indicator for read notifications */
}

.notification-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid var(--Gray-100, #bec7ce);
}

.highlight-text {
  color: var(--Gray-200, #a2aab1);
}
</style>
