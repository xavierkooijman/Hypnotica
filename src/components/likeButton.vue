<template>
    <button @click="toggleLike" aria-label="Like/Dislike" class="like-button" :style="{ '--icon-size': buttonSize }">
        <Heart :class="{ liked: isLiked }" class="heart-icon" />
        <Popup class="notification" :isVisible="isPopupVisible" :timeout="popupTimeout"
            @close="isPopupVisible = false" />
    </button>
</template>

<script>
import { Heart } from "lucide-vue-next";
import Popup from "./PopUpLogin.vue";
import { useUsersStore } from "../stores/user";

export default {
    name: 'LikeButton',
    components: {
        Heart,
        Popup
    },
    props: {
        type: {
            type: String,
            required: true,
            validator: value => ['artist', 'venue'].includes(value)
        },
        targetId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isPopupVisible: false,
            popupTimeout: 5
        }
    },
    computed: {
        isLiked() {
            const usersStore = useUsersStore();
            const currentUser = usersStore.getAuthenticatedUser;

            if (!currentUser) return false;

            const collection = this.type === 'artist' ?
                currentUser.favoriteArtists :
                currentUser.favoriteVenues;

            return collection.includes(this.targetId);
        }
    },
    methods: {
        toggleLike() {
            const usersStore = useUsersStore();
            const currentUser = usersStore.getAuthenticatedUser;

            if (!currentUser) {
                this.isPopupVisible = true;
                return;
            }

            const collection = this.type === 'artist' ?
                currentUser.favoriteArtists :
                currentUser.favoriteVenues;

            if (this.isLiked) {
                const index = collection.indexOf(this.targetId);
                if (index !== -1) {
                    collection.splice(index, 1);
                }
            } else {
                collection.push(this.targetId);
            }

            usersStore.$patch();
            this.$emit('like-changed', !this.isLiked);
        }
    }
}
</script>

<style scoped>
.like-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 15px;
    display: inline-flex;
    align-items: center;
}

.heart-icon {
    width: 64px;
    height: 64px;
    transition: transform 0.3s ease, fill 0.3s ease;
    stroke: #fff;
    fill: transparent;
    stroke-width: 2;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
}

.heart-icon.liked {
    fill: #fff;
    stroke: #fff;
}

.like-button:hover .heart-icon {
    transform: scale(1.1);
}

.notification {
    color: white;
}
</style>