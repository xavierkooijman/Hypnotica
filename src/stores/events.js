import { defineStore } from 'pinia';

export const useEventStore = defineStore('event', {
  state: () => ({
    events: [
      {
        id: "1",
        name: "A Night of Electrifying Beats",
        bio: `Step into the pulsating heart of electronic music at Neon Reverie, an unforgettable event that merges cutting-edge soundscapes with immersive visuals. Taking place at the iconic KitKatClub in Berlin from January 1st to 3rd, 2025, this night promises an unparalleled fusion of innovation and rhythm. Featuring world-renowned DJs and live acts, Neon Reverie celebrates the diversity of electronic music across genres like techno, trance, and deep house. Get ready to dance, connect, and lose yourself in a sensory journey like no other.`,
        artistsIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        date: "2025-01-24",
        timeStart: "22:00",
        timeEnd: "01:00",
        timeDifference: 3,
        venueId: "1",
        genres: "Techno",
        mainImg: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        bioImg: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        carouselImages: [
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
      },
      {
        id: "2",
        name: "A Club of Angel Dust",
        bio: `Step into the pulsating heart of electronic music at Neon Reverie, an unforgettable event that merges cutting-edge soundscapes with immersive visuals. Taking place at the iconic KitKatClub in Berlin from January 1st to 3rd, 2025, this night promises an unparalleled fusion of innovation and rhythm. Featuring world-renowned DJs and live acts, Neon Reverie celebrates the diversity of electronic music across genres like techno, trance, and deep house. Get ready to dance, connect, and lose yourself in a sensory journey like no other.`,
        artistsIds: ["2", "1"],
        date: "2025-01-25",
        timeStart: "23:00",
        timeEnd: "03:00",
        timeDifference: 4,
        venueId: "2",
        genres: "Techno",
        mainImg: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        bioImg: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        carouselImages: [
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
      },
      // Adicionar mais eventos conforme necessário
    ]
  }),

  getters: {
    getEventById: (state) => (id) => {
      return state.events.find(event => event.id === id);
    },
    getAllEvents: (state) => {
      return state.events;
    },
  },

  actions: {
    addEvent(name,bio,artistsIds,date,timeStart,timeEnd,venueId,genres,images) {
      const eventExists = this.events.some(event => event.name === name);

      if (eventExists) {
        throw new Error('Já existe um evento com esse nome');
      }

      let newId;
      do {
        newId = Math.floor(Math.random() * 1000) + 1;
      } while (this.events.some(event => event.id === newId));

      const newEvent = {
        id: newId,
        name: name,
        bio: bio, 
        artistsIds: artistsIds,
        date: date,
        timeStart: timeStart,
        timeEnd: timeEnd,
        venueId: venueId,
        genres: genres,
        mainImg: images[0],
        bioImg: images[1],
        carouselImages: [images[2], images[3], images[4], images[5], images[6]],
      };

      this.events.push(newEvent);
    },
    removeEvent(eventId) {
      const eventIndex = this.events.findIndex(event => event.id === eventId);
      if (eventIndex === -1) {
        throw new Error('Evento não encontrado');
      }
      this.events.splice(eventIndex, 1);
    },
    updateEvent(updatedEvent) {
      const eventIndex = this.events.findIndex(event => event.id === updatedEvent.id);
      if (eventIndex === -1) {
        throw new Error('Evento não encontrado');
      }
      this.events[eventIndex] = { ...this.events[eventIndex], ...updatedEvent };
    },
  },
  persist: true,
});
