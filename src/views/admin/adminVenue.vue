<script>
import { useVenuesStore } from "@/stores/venues";

export default {
    data() {
        return {
            name: "",
            address: "",
            bio: "",
            latitude: "",
            logitude: "",
            images: [],
            venueStore: useVenuesStore(),
        }
    },
    methods: {
        handleImagesSelect(event) {
            const files = event.target.files; 

            if (files.length) {
                Array.from(files).forEach((file) => { 
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.images.push(e.target.result); 
                };
                reader.readAsDataURL(file);
                });
            }
        },
        async handleSubmit() {
            const venueStore = useVenuesStore();

            try {
                await venueStore.addVenue(this.name, this.address, this.bio, this.latitude,this.logitude  ,this.images);
                alert("Venue added successfully");
            } catch (error) {
                alert(error.message);
            }
        },
        deleteVenue(venueId){
            this.venueStore.removeVenue(venueId);
        }
    }
}
</script>

<template>
    <h1>Admin Venue</h1>
    <form class="container" @submit.prevent="handleSubmit">
        <h2>Add Venue:</h2>
        <input type="text" class="form-input pbottom-12" v-model="name" placeholder="Name" required/>
        <input type="text" class="form-input pbottom-12" v-model="address" placeholder="Address" required/>
        <input type="text" class="form-input pbottom-12" v-model="latitude" placeholder="Latitude" required/>
        <input type="text" class="form-input pbottom-12" v-model="logitude" placeholder="Longitude" required/>
        <textarea class="form-input pbottom-12" v-model="bio" placeholder="Bio" required />
        <input type="file" @change="handleImagesSelect" accept="image/*" multiple />
        <button type="submit" class="btn-primary">Add venue</button>
    </form>
    <h2>All Venues:</h2><br>
    <div class="venues-container">
        <div v-for="venue in venueStore.venues" class="venue-card">
            <p class="card-title">{{ venue.name }}</p>
            <img :src="venue.mainImg" alt="venue image" class="venue-image" />
            <button class="btn-primary w-100" @click="deleteVenue(venue.id)">Delete</button>
        </div>
    </div>
</template>

<style scoped>
.container{
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 24px;
	width: 600px;
}

.card-title{
  font-family: Aspekta500;
  font-size: 24px;
}

.venues-container{
	display: grid;
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
	gap: 32px;
}

.venue-card{
	display: flex;
	flex-direction: column;
	gap: 16px;
  padding: 24px;
  background-color: var(--mainBlack);
  border: 1px solid var(--gray200);
  border-radius: 16px;
}

.venue-image{
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}

</style>