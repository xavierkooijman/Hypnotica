<script>
import { useMerchandiseStore } from "@/stores/merchandise";

export default {
    data() {
        return {
            name: "",
            price: 0,
            description: "",
            selectedSizes: [],
            stock: 0,
            images: [],
			      merchStore: useMerchandiseStore(),
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
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
            
            try {
                await this.merchStore.addMerchandise(this.name, this.price, this.description, this.selectedSizes,this.stock, this.images);
                alert("Merch added successfully");
            } catch (error) {
                alert(error.message);
            }
        },
		deleteMerch(merchId){
			this.merchStore.removeMerchandise(merchId);
		}
    }
}
</script>

<template>
    <h1>Admin Merchandise</h1>
    <form class="container" @submit.prevent="handleSubmit">
        <h2>Add Merchandise:</h2>
        <input type="text" class="form-input pbottom-12" v-model="name" placeholder="Name" required/>
        <input type="number" class="form-input pbottom-12" v-model="price" placeholder="Price" required/>
        <input type="number" class="form-input pbottom-12" v-model="stock" placeholder="Stock" required/>
        <textarea class="form-input pbottom-12" v-model="description" placeholder="Description" required />
        <div>Selected sizes: {{ selectedSizes }}</div>
        <select class="select" v-model="selectedSizes" multiple required>
            <option v-for="size in sizes" :value="size">
                {{ size }}
            </option>
        </select>
        <input type="file" @change="handleImagesSelect" accept="image/*" multiple />
        <button type="submit" class="btn-primary">Add news</button>
    </form>
		<h2>All Merchandise:</h2><br>
    <div class="artists-container">
        <div v-for="merch in merchStore.merchandise" class="artist-card">
            <p class="card-title">{{ merch.name }}</p>
            <img :src="merch.mainImage" alt="merch image" class="artist-image" />
            <button class="btn-primary w-100" @click="deleteMerch(merch.id)">Delete</button>
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

.artists-container{
	display: grid;
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
	gap: 32px;
}

.artist-card{
	display: flex;
	flex-direction: column;
	gap: 16px;
  padding: 24px;
  background-color: var(--mainBlack);
  border: 1px solid var(--gray200);
  border-radius: 16px;
}

.artist-image{
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}
</style>