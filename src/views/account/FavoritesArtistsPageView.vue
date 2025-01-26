<template>
  <img class="blur-gradiant" src="../../assets/images/Blur gradient.svg" alt="Blur Gradient" />
    <div>
      <PopUpLogin :is-visible="showLoginPopup" :timeout="5" @close="showLoginPopup = false" />
      <h1 class="outline-title">FAVORITES</h1>
      <div class="mini-navigation">
        <div class="button-group">
          <span class="filter-label">Show me</span>
          <div class="button-container">
            <button 
              :class="['mini-button', { active: selectedType === 'artists' }]"
              @click="selectedType = 'artists'"
            >
              Artists
            </button>
            <button 
              :class="['mini-button', { active: selectedType === 'venues' }]"
              @click="selectedType = 'venues'"
            >
              Venues
            </button>
          </div>
        </div>
      </div>
      <div v-if="selectedType === 'artists'" class="artists-container px-container">
        <div v-if="favoriteArtists.length === 0" class="empty-state">
          No favorite artists yet
        </div>
        <div v-else v-for="artist in favoriteArtists" :key="artist.id" class="artist-card">
          <p class="artist-name" @click="handleArtistClick(artist.id)">{{ artist.name }}</p>
          <img :src="artist.mainImg" alt="artist image" class="image artist-image1" />
          <img :src="artist.mainImg" alt="artist image" class="image artist-image2" />
          <img :src="artist.mainImg" alt="artist image" class="image artist-image3" />
          <div class="like-button-container">
            <LikeButton 
              type="artist" 
              :isEnabled="false" 
              :targetId="artist.id" 
              @like-changed="onLikeChanged" 
              @click="handleLikeClick" 
              class="like-button" 
            />
          </div>
        </div>
      </div>
      <div v-else class="artists-container px-container">
        <div v-if="favoriteVenues.length === 0" class="empty-state">
          No favorite venues yet
        </div>
        <div v-else v-for="venue in favoriteVenues" :key="venue.id" class="artist-card">
          <p class="artist-name" @click="handleVenueClick(venue.id)">{{ venue.name }}</p>
          <img :src="venue.mainImg" alt="venue image" class="image artist-image1" />
          <img :src="venue.mainImg" alt="venue image" class="image artist-image2" />
          <img :src="venue.mainImg" alt="venue image" class="image artist-image3" />
          <div class="like-button-container">
            <LikeButton 
              type="venue" 
              :isEnabled="false" 
              :targetId="venue.id" 
              @like-changed="onLikeChanged" 
              @click="handleLikeClick" 
              class="like-button" 
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useArtistsStore } from "@/stores/artists";
  import { useVenuesStore } from "@/stores/venues";
  import { useUsersStore } from "@/stores/user";
  import LikeButton from '@/components/likeButton.vue';
  import PopUpLogin from '@/components/PopUpLogin.vue';
  
  export default {
    data() {
      return {
        artistStore: useArtistsStore(),
        venueStore: useVenuesStore(),
        userStore: useUsersStore(),
        showLoginPopup: false,
        selectedType: 'artists'
      };
    },
    components: {
      LikeButton,
      PopUpLogin
    },
    computed: {
      favoriteArtists() {
        const user = this.userStore.authenticatedUser;
        if (!user) return [];
        return this.artistStore.artists.filter(artist => 
          user.favoriteArtists.includes(artist.id)
        );
      },
      favoriteVenues() {
        const user = this.userStore.authenticatedUser;
        if (!user) return [];
        return this.venueStore.venues.filter(venue => 
          user.favoriteVenues.includes(venue.id)
        );
      }
    },
    methods: {
      handleArtistClick(artistId) {
        this.$router.push({ path: `/artist/${artistId}` });
      },
      handleVenueClick(venueId) {
        this.$router.push({ path: `/venue/${venueId}` });
      },
      onLikeChanged(newState) {
        const currentUser = this.userStore.authenticatedUser;
        if (currentUser) {
          this.userStore.updateUser({
            ...currentUser,
            favoriteArtists: [...currentUser.favoriteArtists],
            favoriteVenues: [...currentUser.favoriteVenues]
          });
        }
      },
      handleLikeClick() {
        if (!this.userStore.authenticatedUser) {
          this.showLoginPopup = true;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .artists-container {
    display: flex;
    flex-direction: column;
  }

  .blur-gradiant {
  position: absolute;
  z-index: -1;
  bottom: 0px;
  right: 0;
  }
  .artist-name {
    font-family: Aspekta400;
    font-size: 3rem;
  }
  
  .artist-card {
    position: relative;
    display: flex;
    border-bottom: 1px solid var(--gray500);
    align-items: center;
    cursor: pointer;
  }
  
  .image {
    position: absolute;
    border-radius: 50%;
    object-fit: cover;
    visibility: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    transition: all 0.4s cubic-bezier(0.4, 1.5, 0.6, 1);
  }
  
  .artist-image1 {
    width: 150px;
    height: 150px;
  }
  
  .artist-image2 {
    width: 50px;
    height: 50px;
  }
  
  .artist-image3 {
    width: 25px;
    height: 25px;
  }
  
  .artist-card:hover {
    border-bottom: 1px solid var(--mainWhite);
  }
  
  .artist-card:hover .image {
    transition: all 0.8s cubic-bezier(0.4, 1.5, 0.6, 1);
  }
  
  .artist-card:hover .artist-image1 {
    visibility: visible;
    width: 560px;
    height: 560px;
  }
  
  .artist-card:hover .artist-image2 {
    visibility: visible;
    width: 448px;
    height: 448px;
  }
  
  .artist-card:hover .artist-image3 {
    visibility: visible;
    width: 336px;
    height: 336px;
  }
  
  .like-button {
    transform: scale(0.65);
  }
  
  .mini-navigation {
    display: flex;
    flex-direction: column;
    padding-left: 48px;
    margin: 40px 0;
  }
  
  .button-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .filter-label {
    color: var(--gray400);
    font-family: Aspekta400;
    font-size: 20px;
  }
  
  .button-container {
    display: flex;
    gap: 12px;
  }
  
  .mini-button {
    border: 1px solid var(--Gray-200, #a2aab1);
    border-radius: 50px;
    padding: 6px 24px;
    color: var(--Main-White, #fafafa);
    background: transparent;
    cursor: pointer;
    font-size: 20px;
    font-family: Aspekta400;
    min-width: 132px;
    max-height: 41px;
  }
  
  .mini-button.active {
    background-color: var(--mainWhite);
    color: var(--mainBlack);
  }
  
  .empty-state {
    color: var(--gray400);
    font-family: Aspekta400;
    font-size: 24px;
    text-align: center;
    padding: 40px 0;
  }
  </style>