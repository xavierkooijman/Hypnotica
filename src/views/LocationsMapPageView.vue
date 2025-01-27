<template>
    <section class="locations-section">
      <h1 class="outline-title">LOCATIONS</h1>
      <div class="map-container">
        <GoogleMap 
          :center="mapConfig.center"
          :zoom="mapConfig.zoom"
          :markers="mapConfig.markers"
        />
      </div>
    </section>
  </template>
  
  <script>
  import { useVenuesStore } from '@/stores/venues'
  import GoogleMap from '../components/GoogleMaps.vue'
  
  export default {
    name: 'LocationsMapPage',
    components: {
      GoogleMap
    },
  
    data() {
      return {
        venuesStore: useVenuesStore()
      }
    },
  
    computed: {
      mapConfig() {
        return {
          center: { lat: 52.520008, lng: 13.404954 }, // Berlin center coordinates
          zoom: 12,
          markers: this.venuesStore.getVenueMarkers
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .locations-section {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0 48px;
      overflow-x: hidden;
      position: relative;
  }
  
  .outline-title {
      font-size: clamp(6rem, 10vw, 10rem);
      line-height: 1.2;
      font-family: Aspekta800, sans-serif;
      color: transparent;
      -webkit-text-stroke: 3px var(--gray200);
      margin: 48px auto;
      text-align: center;
      width: max-content;
      white-space: nowrap;
  }
  
  .map-container {
      width: 100%;
      height: 700px;
      border-radius: 16px;
      overflow: hidden;
      margin-bottom: 48px;
  }
  
  @media (max-width: 768px) {
      .locations-section {
          padding: 0 24px;
      }
  
      .outline-title {
          font-size: clamp(4rem, 8vw, 6rem);
          -webkit-text-stroke: 2px var(--gray200);
      }
  
      .map-container {
          height: 500px;
      }
  }
  </style>