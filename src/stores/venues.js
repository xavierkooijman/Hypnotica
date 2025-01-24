import { defineStore } from 'pinia';

export const useVenuesStore = defineStore('venues', {
  state: () => ({
    venues: [
      {
        id: "1",
        name: "Berghain",
        desc: "Am Wriezener Bhf, 10243 Berlin",
        bio: "Legendary techno club housed in a former power plant, known for its striking industrial architecture and world-class sound system.",
        position: { lat: 52.5097, lng: 13.4577 },
        mainImg: "https://s3.playbpm.com.br/images/berghain.2e16d0ba.fill-1140x450.jpg",
        carouselImages: [
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
          "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg",
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
          "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg",
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
        ]
      },
      {
        id: "2",
        name: "KitKatClub",
        desc: "Köpenicker Str. 76, 10179 Berlin",
        bio: "Famous techno club known for its unique atmosphere and diverse music program.",
        position: { lat: 52.5005, lng: 13.4397 },
        mainImg: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
        carouselImages: [
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
          "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg",
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
          "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg",
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
        ]
      },
      {
        id: "3",
        name: "Watergate",
        desc: "Falckensteinstraße 49, 10997 Berlin",
        bio: "Two-floor club on the Spree River with panoramic windows and an LED ceiling installation.",
        position: { lat: 52.5007, lng: 13.4519 },
        mainImg: "https://www.residentadvisor.net/images/clubs/watergate.jpg",
        carouselImages: [
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
          "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg",
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
          "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg",
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
        ]
      },
      {
        id: "4",
        name: "Tresor",
        desc: "Köpenicker Str. 70, 10179 Berlin",
        bio: "Historic techno club in a former power plant basement, featuring three floors of electronic music.",
        position: { lat: 52.4973, lng: 13.4530 },
        mainImg: "https://www.residentadvisor.net/images/clubs/tresor-berlin.jpg",
        carouselImages: [
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
          "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg",
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
          "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg",
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
        ]
      },
      {
        id: "5",
        name: "Ritter Butzke",
        desc: "Ritterstraße 26, 10969 Berlin",
        bio: "Industrial-style nightclub in a former factory featuring multiple rooms of electronic music.",
        position: { lat: 52.4995, lng: 13.4288 },
        mainImg: "https://www.ritterbutzke.com/wp-content/uploads/2019/01/ritter-butzke-club-berlin.jpg",
        carouselImages: [
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
          "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg",
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
          "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg",
          "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
        ]
      }
    ]
  }),

  getters: {
    getVenueById: (state) => (id) => {
      return state.venues.find(venue => venue.id == id);
    },
    getAllVenues: (state) => {
      return state.venues;
    },
    getVenueMarkers: (state) => {
      return state.venues.map(venue => ({
        position: venue.position,
        title: venue.name,
        description: venue.bio,
        address: venue.desc,
        image: venue.mainImg
      }));
    }
  },

  actions: {
    addVenue(venue) {
      const venueExists = this.venues.some(v => v.name === venue.name);

      if (venueExists) {
        throw new Error('Venue already exists');
      }

      let newId;
      do {
        newId = Math.floor(Math.random() * 1000) + 1;
      } while (this.venues.some(v => v.id === newId.toString()));

      const newVenue = {
        id: newId.toString(),
        ...venue
      };

      this.venues.push(newVenue);
    }
  },
  persist: true
});