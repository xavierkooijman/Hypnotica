import { defineStore } from 'pinia';
import { useUsersStore } from './user';

export const useNotificationsStore = defineStore('notifications', {
  state: () => ({
    notifications: [
      {
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6ca71a78f8fc742cf1240b82e9bb3d3ea10a97441a79ae2ccd9389d5b7febf09?placeholderIfAbsent=true&apiKey=3650e9b5644d4191adc714c61c50f709',
        imageAlt: 'Event notification icon',
        title: 'An event you liked is happening soon!',
        description: 'Dont miss out! Hypnøtica opening party starts in 3 days. Check the details and get ready to rave!',
        read: false,
        type: 'upcomingEvents',
      },
      {
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f20037d0f0dd4c0f86234c0f846c83842683f0baaf995568e9517f0d6955a3c5?placeholderIfAbsent=true&apiKey=3650e9b5644d4191adc714c61c50f709',
        imageAlt: 'VIP pass discount icon',
        title: 'Special discount on VIP passes!',
        description: 'Upgrade your experience! VIP Passes are now 20% off for a limited time!',
        read: false,
        type: 'favoriteArtists',
      },
      {
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ad697c3c4785b80aea2efd0f762f7faec4e89172b3acfad03cbb5bfcad02000f?placeholderIfAbsent=true&apiKey=3650e9b5644d4191adc714c61c50f709',
        imageAlt: 'Shop update icon',
        title: 'New items added to the shop!',
        description: 'Check out our latest Merch. Limited to <span class="highlight-text">available</span> stock!',
        read: false,
        type: 'news',
      },
      {
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/88e0485d44c2e9fe17782e86f23a89929c9f98dbcc3ab5e5d0a19e0ca9896ba0?placeholderIfAbsent=true&apiKey=3650e9b5644d4191adc714c61c50f709',
        imageAlt: 'Artist performance icon',
        title: 'Artist you liked performing soon: Mischluft',
        description: 'Dont miss out! Mischluft will be performing tomorrow at the KitKat Club.',
        read: false,
        type: 'favoriteArtists',
      },
      {
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/88e0485d44c2e9fe17782e86f23a89929c9f98dbcc3ab5e5d0a19e0ca9896ba0?placeholderIfAbsent=true&apiKey=3650e9b5644d4191adc714c61c50f709',
        imageAlt: 'Artist performance icon',
        title: 'Artist you liked performing soon: Mischluft',
        description: 'Dont miss out! Mischluft will be performing tomorrow at the KitKat Club.',
        read: false,
        type: 'favoriteArtists',
      }
    ],
    notificationTypes: [
      'upcomingEvents', 
      'favoriteArtists',
      'calendarEvents',
      'news',
      'eventChange',
    ],
    preferences: {
      upcomingEvents: false,
      favoriteArtists: true,
      calendarEvents: true,
      news: true,
      eventChange: false,
    },
  }),

  getters: {
    getUserNotificationPreferences: (state) => {
      const usersStore = useUsersStore();
      if (!usersStore.authenticatedUser) {
        return [];
      }
      return usersStore.authenticatedUser.notificationPref;
    },

    isNotificationEnabled: (state) => (type) => {
      const usersStore = useUsersStore();
      const preferences = usersStore.authenticatedUser?.notificationPref || [];
      const preference = preferences.find((pref) => pref.type === type);
      return preference?.enabled ?? false;
    },
  },

  actions: {
    // Ação para adicionar uma nova notificação
    addNotification(image, imageAlt, title, description, type, read = false) {
      const newNotification = {
        image: image,
        imageAlt: imageAlt,
        title: title,
        description: description,
        read: read,
        type: type,
      };
  
      // Adiciona a nova notificação à lista de notificações
      this.notifications.push(newNotification);
    },
  
    // Ação para alterar as preferências de notificação
    updateNotificationPreference(type, enabled) {
      const usersStore = useUsersStore();
  
      this.preferences[type] = enabled;
  
      const userPreferences = usersStore.authenticatedUser.notificationPref;
      const preferenceIndex = userPreferences.findIndex((pref) => pref.type === type);
  
      if (preferenceIndex !== -1) {
        usersStore.authenticatedUser.notificationPref[preferenceIndex].enabled = enabled;
      } else {
        usersStore.authenticatedUser.notificationPref.push({ type, enabled });
      }
    },
        // Filtrar as notificações com base nas preferências
    getFilteredNotifications() {
      const usersStore = useUsersStore();
      const preferences = usersStore.authenticatedUser?.notificationPref || [];
  
      return this.notifications.filter((notification) => {
        const userPref = preferences.find(pref => pref.type === notification.type);
        return userPref?.enabled ?? true;
      });
    },
    
    markAllAsRead() {
      this.notifications = this.notifications.map(notification => ({
        ...notification,
        read: true
      }));
    }
  },
  persist: true,
});
