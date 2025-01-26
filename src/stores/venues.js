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
          "https://calderwoodmedia.wordpress.com/wp-content/uploads/2014/04/image_1903.jpg",
          "https://djmag.com/sites/default/files/styles/djm_23_1005x565/public/article/image/berghain-VR.jpg.webp?itok=foHBsm-1",
          "https://www.dontdiewondering.com/_next/image/?url=https%3A%2F%2Fbackend.dontdiewondering.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fberghain44.jpg&w=3840&q=85",
          "https://i.pinimg.com/564x/ca/d8/83/cad883f81b1e0a167bace505bbc30233.jpg",
          "https://static.dw.com/image/59285857_906.webp",
        ]
      },
      {
        id: "2",
        name: "KitKatClub",
        desc: "Köpenicker Str. 76, 10179 Berlin",
        bio: "Famous techno club known for its unique atmosphere and diverse music program.",
        position: { lat: 52.5005, lng: 13.4397 },
        mainImg: "https://berliner.party/img/clubs/kitkat.jpg",
        carouselImages: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsFONxSjTbII0DvwsVO77syeVVIPRtKaJJPQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVB0GmcVg8C07cq6iOICHvSaBSBqBzvUoF2g&s",
          "https://media.cntraveler.com/photos/5b96b02fc0b4820edbc1bd18/master/pass/KitKatClub_GettyImages-883356876.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUA53kcy9fO72fpqTzZQJiOgNzFryPOful_g&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTov9jDEtQrp-MxbwpgnpIe2_WX8Xy7n3QDKw&s",
        ]
      },
      {
        id: "3",
        name: "Watergate",
        desc: "Falckensteinstraße 49, 10997 Berlin",
        bio: "Two-floor club on the Spree River with panoramic windows and an LED ceiling installation.",
        position: { lat: 52.5007, lng: 13.4519 },
        mainImg: "https://i.guim.co.uk/img/media/708e45be1c21eeef2792a3885b3c81c0a26268c0/0_497_7499_4500/master/7499.jpg?width=1200&quality=85&auto=format&fit=max&s=c3c2e248f8ce9e2eee102021ac746797",
        carouselImages: [
          "https://static.ra.co/images/clubs/lg/de-watergate-water-floor.jpg?dateUpdated=1610211803863",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PQsDm5TMpsUMyARlp2oC2yY8dNI3Ot2hRg&s",
          "https://edmmaniac.com/wp-content/uploads/2024/09/Watergate-1600x1066.jpg",
          "https://i.ytimg.com/vi/_0e5yXywPiU/maxresdefault.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzNeKTy5FdYoBfg2sd0FYe-MJIa85NbO1aQ&s",
        ]
      },
      {
        id: "4",
        name: "Tresor",
        desc: "Köpenicker Str. 70, 10179 Berlin",
        bio: "Historic techno club in a former power plant basement, featuring three floors of electronic music.",
        position: { lat: 52.4973, lng: 13.4530 },
        mainImg: "https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL25ld3MvMjAyNC90cmVzb3IuanBn",
        carouselImages: [
          "https://www.orte-der-einheit.de/fileadmin/_processed_/a/2/csm_Tresor_Moment4_ODEB_F_5_237_9e3c1fbc0f.jpg",
          "https://intravel.net/images/places/large/002/klub-tresor-2463.webp",
          "https://www.orte-der-einheit.de/fileadmin/_processed_/a/2/csm_Tresor_Moment4_ODEB_F_5_237_9e3c1fbc0f.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f7/d8/3b/bal-tresor-club-prague.jpg?w=1200&h=-1&s=1",
          "https://technoedm.com/wp-content/uploads/2023/10/Tresor-Berlin.jpg",
        ]
      },
      {
        id: "5",
        name: "Ritter Butzke",
        desc: "Ritterstraße 26, 10969 Berlin",
        bio: "Industrial-style nightclub in a former factory featuring multiple rooms of electronic music.",
        position: { lat: 52.4995, lng: 13.4288 },
        mainImg: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/02/dc/54/innenhof.jpg?w=1200&h=-1&s=1",
        carouselImages: [
          "https://static.ra.co/images/clubs/lg/de-ritter-butzke-berlin.jpg?dateUpdated=1610212678503",
          "https://images.xceed.me/clubs/covers/ritter-butzke-club-berlin-xceed-88ad.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-klJpPBbZdyFrhSslU0jm7xdquTPPzSgsw&s",
          "https://jumpberlin.com/wp-content/uploads/2017/12/16_039_GIZ_LoT_16_042_RitterButzke@MaxThrelfall-4870--1197x800.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oKP_38vArT1eFzx2tTWBboPFu-9TA-JSHg&s",
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