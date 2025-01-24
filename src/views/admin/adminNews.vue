<script>
import { useNewsStore } from "@/stores/news";

export default {
    data() {
        return {
            title: "",
            description: "",
            content: "",
            images: [],
			newsStore: useNewsStore()
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
                await this.newsStore.addNews(this.title, this.description, this.content, this.images);
                alert("News added successfully");
            } catch (error) {
                alert(error.message);
            }
        },
		deleteNews(newsId){
			this.newsStore.removeNews(newsId);
		}
    }
}
</script>

<template>
    <h1>Admin News</h1>
    <form class="container" @submit.prevent="handleSubmit">
        <h2>Add News:</h2>
        <input type="text" class="form-input pbottom-12" v-model="title" placeholder="Title" required/>
        <textarea class="form-input pbottom-12" v-model="content" placeholder="Content" required />
        <input type="text" class="form-input pbottom-12" v-model="description" placeholder="Description">
        <input type="file" @change="handleImagesSelect" accept="image/*" multiple />
        <button type="submit" class="btn-primary">Add news</button>
    </form>
		<h2>All News:</h2><br>
    <div class="artists-container">
        <div v-for="singleNews in newsStore.news" class="artist-card">
            <p class="card-title">{{ singleNews.title }}</p>
            <img :src="singleNews.mainImage" alt="news image" class="artist-image" />
            <button class="btn-primary w-100" @click="deleteNews(singleNews.id)">Delete</button>
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