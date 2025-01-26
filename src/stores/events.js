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
        duration: 3,
        venueId: "1",
        genres: ["Techno", "House"],
        mainImg: "https://love-explosion.com/_ipx/w_1500&f_webp/content/Startseite/Startseite-Techno4.jpg",
        bioImg: "https://www.seadancefestival.me/wp-content/uploads/2023/06/52317616884_09977d0afe_o-1.jpg",
        carouselImages: [
          "https://vinylstein.com/cdn/shop/articles/0002_20220625225647_kevin__D4_1956__1.jpg?v=1680439735",
          "https://www.feralclo.com/cdn/shop/articles/harrymgordon_httpss.mj.runKwb1iFnCRyQ_httpss.mj.runllLvN0GOYS_477cfacd-c310-4307-9dc7-a8b5b9e0a553_3.jpg?v=1724427341&width=1100",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHuFayfmRvT9BMBbV95M9iCos90YLbJaRAmfZjfKBzLmKJpY4HB0erFuaSNEMRkiXw8QA&usqp=CAU",
          "https://europebookings.com/wp-content/uploads/nature-one-festival-stage-laser-show.jpg",
          "https://edm.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwMzg3Mzk4ODgwNzk4MTAw/pentek2-38-1.jpg",
        ],
      },
      {
        id: "2",
        name: "A Club of Angel Dust",
        bio: `Step into the pulsating heart of electronic music at Neon Reverie, an unforgettable event that merges cutting-edge soundscapes with immersive visuals. Taking place at the iconic KitKatClub in Berlin from January 1st to 3rd, 2025, this night promises an unparalleled fusion of innovation and rhythm. Featuring world-renowned DJs and live acts, Neon Reverie celebrates the diversity of electronic music across genres like techno, trance, and deep house. Get ready to dance, connect, and lose yourself in a sensory journey like no other.`,
        artistsIds: ["2", "1", "9", "8"],
        date: "2025-01-24",
        timeStart: "23:00",
        timeEnd: "03:00",
        duration: 4,
        venueId: "2",
        genres: ["Techno", "Electro"],
        mainImg: "https://hierfestival.nl/wp-content/uploads/techno-festivals-2024.jpg",
        bioImg: "https://europebookings.com/wp-content/uploads/i-love-techno-europe-stage-lights-show.jpg",
        carouselImages: [
          "https://onlytechno.net/wp-content/uploads/2017/03/15123275_1109243595855000_2213674211348831424_o.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhCrKdag1-cj06kLYOCUXp-dl85f7TPTxAsHMpl1u7dx92bxnGxO7sC6aXBaSMoaMFdOw&usqp=CAU",
          "https://beatforbeat.com.br/site/wp-content/uploads/2021/11/1c5c9b3e887c4f33c722d7fcee0a301elow.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCaLNJvHAXvDeuKnC-UOFndQbL3o_K4yZo49CtzP2YrBkdtad229moQPSCmUU_IxlMS_8&usqp=CAU",
          "https://www.djmag.de/_next/image?url=https%3A%2F%2Fmedia.djmag.de%2F2024%2F12%2F16205717%2Ffestival-ben-wicks-unsplash-700x434.jpg&w=1080&q=75",
        ],
      },
      {
        id: "3",
        name: "Synthwave Skylines",
        bio: `Embark on a retro-futuristic journey at Synthwave Skylines, a night dedicated to the nostalgic sounds of the 80s reimagined with modern flair. Hosted at Berlin's Urban Spree, this event blends dreamy synths, pulsing basslines, and mesmerizing neon visuals. From iconic synthwave artists to emerging talents, expect an immersive experience that captures the essence of a digital utopia. Celebrate the timeless connection between music and technology in a night that feels like stepping into a sci-fi movie.`,
        artistsIds: ["8", "7", "1"],
        date: "2025-01-25",
        timeStart: "20:00",
        timeEnd: "02:00",
        duration: 6,
        venueId: "3",
        genres: ["House", "Disco"],
        mainImg: "https://cdn.prod.website-files.com/654c619d331d35a065ede6d8/654d4af1b66272a1195414ec_Rectangle%206.png",
        bioImg: "https://img.freepik.com/premium-photo/crowd-concert-with-purple-pink-lights_832479-4429.jpg",
        carouselImages: [
          "https://img.freepik.com/premium-photo/crowd-concert-with-purple-pink-lights_832479-4433.jpg",
          "https://img.freepik.com/premium-photo/silhouettes-concert-with-purple-neon-lights_27550-2704.jpg",
          "https://img.freepik.com/premium-photo/crowd-concert-with-purple-pink-lights_832479-4423.jpg",
          "https://t4.ftcdn.net/jpg/05/75/44/05/240_F_575440555_DDY1uihhvLYNplO5gD08xAi1jJlc3bWg.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDMPgsJ_uSKk4butywTRyteDBVsqQiG1BBUE09Nmej36iJn2ZqpMH-pVTBKktQdwpxJo&usqp=CAU",
        ],
      },
      {
        id: "4",
        name: "Rhythm and Lights",
        bio: `Dive into a multi-sensory spectacle at Rhythm and Lights, an event where music and visual art converge. Taking place at the iconic Tresor Berlin, this night features live techno performances synchronized with stunning light installations and laser shows. Feel the heartbeat of Berlin's underground as DJs create a seamless narrative of sound, while the venue transforms into an ever-changing canvas of vibrant colors and shapes. Prepare for a night of pure energy and artistic expression.`,
        artistsIds: ["2", "4", "5"],
        date: "2025-01-25",
        timeStart: "21:00",
        timeEnd: "04:00",
        duration: 7,
        venueId: "4",
        genres: ["Acid", "Drum & bass"],
        mainImg: "https://mixmag.net/assets/uploads/images/_fullX2/dance-music-sustainbility-festivals-events.jpg",
        bioImg: "https://mixmag.net/assets/uploads/images/_fullX2/DGTL-festival-sustainbility.jpg",
        carouselImages: [
          "https://www.nussli.com/ecomaXL/files/NATURE_ONE_OpenAirFloor_2023_Copyright_NATURE_ONE_05.jpg?max_h=640&crop=1020,640",
          "https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_768%2Cx_2941%2Cy_3012/MjA1NjQ0MDM5NDIzMjcyNDc3/dsc04251-enhanced-nr.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbz9g4J_Fu4dGMB_rYcsxTAQ840EBJJnATA&s",
          "https://edm.com/.image/t_share/MTUyOTU2NjMxMTIwODgwNjQ3/tomorrowland-laser-lightshow.jpg",
          "https://www.shutterstock.com/image-photo/crowded-concert-hall-scene-stage-600nw-2019442733.jpg"
        ],
      },
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

      const [startHour, startMinute] = timeStart.split(':').map(Number);
      const [endHour, endMinute] = timeEnd.split(':').map(Number);

      let startDate = new Date(0, 0, 0, startHour, startMinute);
      let endDate = new Date(0, 0, 0, endHour, endMinute);

      if (endDate <= startDate) {
        endDate.setDate(endDate.getDate() + 1);
      }

      const diff = endDate - startDate;
      const hours = Math.floor(diff / 1000 / 60 / 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);

      const timeDifference = hours + (minutes / 60);

      const newEvent = {
        id: newId,
        name: name,
        bio: bio,
        artistsIds: artistsIds,
        date: date,
        timeStart: timeStart,
        timeEnd: timeEnd,
        duration: timeDifference,
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
