<template>
	<img class="blur-gradiant" src="../../assets/images/Blur gradient.svg" alt="Blur Gradient" />
	<div>
		<PopUpLogin :is-visible="showLoginPopup" :timeout="5" @close="showLoginPopup = false" />
		<h1 class="outline-title">PROGRAM</h1>
		<Filter/>
		<div class="artists-container px-container">
			<div v-for="artist in artistStore.artists" class="artist-card">
				<p class="artist-name" @click="handleArtistClick(artist.id)">{{ artist.name }}</p>
				<img :src="artist.mainImg" alt="artist image" class="image artist-image1" />
				<img :src="artist.mainImg" alt="artist image" class="image artist-image2" />
				<img :src="artist.mainImg" alt="artist image" class="image artist-image3" />
				<div class="like-button-container">
					<LikeButton type="artist" :isEnabled="false" :targetId="artist.id" @like-changed="onLikeChanged"
						@click="handleLikeClick" class="like-button" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useArtistsStore } from "@/stores/artists";
import { useUsersStore } from "@/stores/user";
import LikeButton from '@/components/likeButton.vue';
import PopUpLogin from '@/components/PopUpLogin.vue';
import Filter from '@/components/Minibar.vue';

export default {
	components: {
		LikeButton,
		PopUpLogin,
		Filter
	},
	data() {
		return {
			artistStore: useArtistsStore(),
			userStore: useUsersStore(),
			showLoginPopup: false
		}
	},
	methods: {
		handleArtistClick(artistId) {
			this.$router.push({ path: `/artist/${artistId}` });
		},
		handleLikeClick() {
			if (!this.userStore.authenticatedUser) {
				this.showLoginPopup = true;
			}
		},
		onLikeChanged(newState) {
			const currentUser = this.userStore.authenticatedUser;
			if (currentUser) {
				this.userStore.updateUser({
					...currentUser,
					favoriteArtists: [...currentUser.favoriteArtists],
				});
			}
		}
	}
}
</script>

<style scoped>
.artists-container {
	display: flex;
	flex-direction: column;

}

.blur-gradiant {
  position: absolute;
  z-index: -1;
  bottom: 100px;
  rotate: 180deg;
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
	/* Vertical center */
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
</style>