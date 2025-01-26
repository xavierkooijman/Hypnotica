<script>
import { useVenuesStore } from "@/stores/venues";
import { useUsersStore } from "@/stores/user";
import LikeButton from '@/components/likeButton.vue';
import Filter from '@/components/Minibar.vue';

export default {
	data() {
		return {
			venueStore: useVenuesStore(),
			usersStore: useUsersStore(),
		}
	},
	components: {
		LikeButton,
		Filter
	},
	methods: {
		handleVenueClick(venueId) {
			this.$router.push({ path: `/venue/${venueId}` });
		},
		onLikeChanged(newState) {
			const currentUser = this.usersStore.getAuthenticatedUser;
			if (currentUser) {
				// Update the store to persist changes
				this.usersStore.updateUser({
					...currentUser,
					favoriteVenues: [...currentUser.favoriteVenues]
				});
			}
		}
	}
}
</script>

<template>
	<div>
		<h1 class="outline-title">PROGRAM</h1>
		<Filter/>
		<div class="artists-container px-container">
			<div v-for="venue in venueStore.venues" class="artist-card">
				<p class="artist-name" @click="handleVenueClick(venue.id)">{{ venue.name }}</p>
				<img :src="venue.mainImg" alt="venue image" class="image artist-image1" />
				<img :src="venue.mainImg" alt="venue image" class="image artist-image2" />
				<img :src="venue.mainImg" alt="venue image" class="image artist-image3" />
				<div class="like-button-container">
					<LikeButton type="venue" :targetId="venue.id" @like-changed="onLikeChanged" />
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