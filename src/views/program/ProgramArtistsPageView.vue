<script>
import { useArtistsStore } from "@/stores/artists";
import LikeButton from '@/components/likeButton.vue';
import Filter from '@/components/Minibar.vue';

export default {
	data() {
		return {
			artistStore: useArtistsStore(),
		}
	},
	components: {
		LikeButton,
		Filter
	},
	methods: {
		handleArtistClick(artistId) {
			this.$router.push({ path: `/artist/${artistId}` });
		},
		onLikeChanged(newState) {
			// Optional: Handle like state change if needed
			console.log('Like state changed:', newState);
		}
	}
}
</script>

<template>
	<div>
		<h1 class="outline-title">PROGRAM</h1>
		<Filter/>
		<div class="artists-container px-container">
			<div v-for="artist in artistStore.artists" class="artist-card">
				<p class="artist-name" @click="handleArtistClick(artist.id)">{{ artist.name }}</p>
				<img :src="artist.mainImg" alt="artist image" class="image artist-image1" />
				<img :src="artist.mainImg" alt="artist image" class="image artist-image2" />
				<img :src="artist.mainImg" alt="artist image" class="image artist-image3" />
				<div class="like-button-container">
					<LikeButton type="artist" :targetId="artist.id" @like-changed="onLikeChanged" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.artists-container {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.artist-name {
	font-family: Aspekta400;
	font-size: 3rem;
}

.artist-card {
	position: relative;
	display: flex;
	gap: 32px;
	padding-bottom: 12px;
	border-bottom: 1px solid var(--gray500);
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
</style>