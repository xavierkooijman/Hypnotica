import { defineStore } from 'pinia';
import { useNotificationsStore } from './notifications';
import { useTicketsStore } from './tickets';

export const useUsersStore = defineStore('users', {

  state: () => ({
    authenticatedUser: null,
    users: [
      { name: "admin", email: "admin@gmail.com", password: "123", isAdmin: true},
      { name: "xavi", email: "example@gmail.com", password: "321", profImg: '/src/assets/images/1.jpg', tickets: [], favoriteArtists: [], favoriteVenues: [], calendar: [], notificationPref: [] },
    ],
  }),

  getters: {
    getUserByName: (state) => (name) => {
      return state.users.find(user => user.name === name);
    },

    isAuthenticated: (state) => {
      return state.authenticatedUser !== null;
    },

    getAuthenticatedUser: (state) => {
      return state.authenticatedUser;
    }
  },

  actions: {

    // Adiciona evento ao calendário do usuário
    addEventToCalendar(eventId) {
      if (!this.authenticatedUser) {
        throw new Error('Nenhum utilizador autenticado');
      }

      const alreadyInCalendar = this.authenticatedUser.calendar.includes(eventId);
      if (!alreadyInCalendar) {
        this.authenticatedUser.calendar.push(eventId);
        this.$patch(); // Persistir a alteração
        console.log(`Evento ${eventId} adicionado ao calendário.`);
      }
    },

    // Remove evento do calendário do usuário
    removeEventFromCalendar(eventId) {
      if (!this.authenticatedUser) {
        throw new Error('Nenhum utilizador autenticado');
      }

      const index = this.authenticatedUser.calendar.indexOf(eventId);
      if (index !== -1) {
        this.authenticatedUser.calendar.splice(index, 1);
        this.$patch(); // Persistir a alteração
        console.log(`Evento ${eventId} removido do calendário.`);
      }
    },

    validateImage1(file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (fileExtension !== 'jpg') {
        throw new Error('A imagem deve ser do tipo .jpg');
      }
    },

    validateImage2(file, callback) {
      const fr = new FileReader()
      fr.onload = () => callback(null, fr.result)
      fr.onerror = (err) => callback(err)
      fr.readAsDataURL(file)
    },

    addUser(name, email, password) {
      const userExists = this.users.some(
        user => user.email === email || user.name === name
      );

      if (userExists) {
        throw new Error('Já existe um utilizador com esse nome ou email');
      }



      const notificationsStore = useNotificationsStore();  // Acessar a store de notificações
      const ticketsStore = useTicketsStore();  // Acessar a store
      const newUser = {
        name: name,
        email: email,
        password: password,
        profImg: '/src/assets/images/1.jpg',
        tickets: [ticketsStore.tickets],
        favoriteArtists: [],
        favoriteVenues: [],
        calendar: [],
        notificationPref: [notificationsStore.preferences]
      };

      this.users.push(newUser);
    },

    updateUser(updatedUserData) {
      if (!this.authenticatedUser) {
        throw new Error('Nenhum utilizador autenticado');
      }
    
      const { username, email, newPassword, newProfImg } = updatedUserData;
    
      if (username) {
        this.authenticatedUser.name = username;
      }
    
      if (email) {
        this.authenticatedUser.email = email;
      }

      if (newPassword) {
        this.authenticatedUser.password = newPassword;
      }
    
      // Verifica se newProfImg é um arquivo ou um URL
      if (newProfImg && typeof newProfImg === 'object' && newProfImg.name) {
        this.updateProfileImage(newProfImg);
      } else if (newProfImg && typeof newProfImg === 'string') {
        this.authenticatedUser.profImg = newProfImg; 
      }
    },

    removeUser(name) {
      const userIndex = this.users.findIndex(user => user.name === name);

      if (userIndex === -1) {
        throw new Error('Utilizador não encontrado');
      }

      this.users.splice(userIndex, 1);
    },

    login(email, password) {
      const user = this.users.find(
        user => user.email === email && user.password === password
      );

      if (!user) {
        throw new Error('Email ou password incorretos');
      }

      this.authenticatedUser = user; 
    },

    logout() {
      this.authenticatedUser = null;
      window.location.reload();
    },

    updateProfileImage(newProfImg) {
      if (this.authenticatedUser) {
        this.validateImage(newProfImg);
        this.authenticatedUser.profImg = newProfImg;
      } else {
        throw new Error('Nenhum utilizador autenticado');
      }
    }
  },
  persist: true,
});
