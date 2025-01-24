<template>
    <article class="artist-circle" @click="navigateToArtist">
        <div class="image-container">
            <img :src="artist.mainImg" :alt="artist.name" class="artist-image" />
            <button class="action-button" aria-label="View artist details">
                <MoveUpRight class="action-icon" />
            </button>
        </div>
    </article>
</template>

<script setup>
import { MoveUpRight } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
    artist: {
        type: Object,
        required: true
    }
})

const navigateToArtist = () => {
    router.push({ path: `/artist/${props.artist.id}` })
}
</script>

<style scoped>
.artist-circle {
    width: 200px;
    cursor: pointer;
}

.image-container {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
}

.artist-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.action-button {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(250, 250, 250, 0.3);
    width: 60px;
    height: 60px;
    left: 50%;
    top: 55%;
    transform: translate(-50%, 0);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.5s ease;
}

.artist-circle:hover .action-button {
    opacity: 1;
    background-color: rgba(250, 250, 250, 0.4);
    transform: translate(-50%, -75%);
}

.action-icon {
    width: 32px;
    height: 32px;
    color: var(--gray800);
}
</style>