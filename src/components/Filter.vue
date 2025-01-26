<template>
    <div class="modal-container">
        <header class="modal-header">
            <h1 class="modal-title">Filter program</h1>
            <close 
                
                class="close-icon" 
                @click="$emit('close')"
                aria-label="Close filter modal"
            />
        </header>
        <div class="modal-content">
            <div class="filter-container">
                <section class="filter-section">
                    <h2 class="section-title">Days</h2>
                    <div class="filter-options">
                        <button class="filter-btn">Friday</button>
                        <button class="filter-btn">Saturday</button>
                        <button class="filter-btn">Sunday</button>
                    </div>
                </section>

                <section class="filter-section">
                    <h2 class="section-title">Genres</h2>
                    <div class="filter-options">
                        <button class="filter-btn">Techno</button>
                        <button class="filter-btn">House</button>
                        <button class="filter-btn">Dubstep</button>
                        <button class="filter-btn">Trance</button>
                        <button class="filter-btn">Acid</button>
                        <button class="filter-btn">Dub</button>
                        <button class="filter-btn">Bass</button>
                        <button class="filter-btn">Psytrance</button>
                        <button class="filter-btn">Drum & bass</button>
                        <button class="filter-btn">Disco</button>
                        <button class="filter-btn">Hardcore</button>
                    </div>
                </section>

                <section class="filter-section">
                    <h2 class="section-title">Venues</h2>
                    <div class="filter-options">
                        <button class="filter-btn">Tresor</button>
                        <button class="filter-btn">Insomnia</button>
                        <button class="filter-btn">KitKatClub</button>
                        <button class="filter-btn">Ritter Butzke</button>
                        <button class="filter-btn">Trauma Bar Und Kino</button>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { X } from 'lucide-vue-next';
export default {
    components: {
        close: X
    },
    emits: ['close']
}
</script>

<style scoped>
.modal-container {
    border-radius: 20px;
    border: 1px solid var(--Gray-100, #bec7ce);
    backdrop-filter: blur(25px);
    background-color: rgba(1, 3, 6, 0.01);
    display: flex;
    max-width: 517px;
    max-height: 715;
    flex-direction: column;
    overflow: hidden;
    font-family: Aspekta, sans-serif;
    position: fixed;
    z-index: 3000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--Gray-100, #bec7ce);
    background: var(--Main-Black, #010306);
    padding: 24px;
    gap: 40px 100px;
    flex-wrap: wrap;
}

.modal-title {
    color: var(--Main-White, #fafafa);
    font-size: 36px;
    font-family: Aspekta200;
    margin: 0;
}

.close-icon {
    font-size: 18px;
    color: white;
    cursor: pointer;
    transition: color 0.3s ease;
}

.close-icon:hover {
    color: var(--Gray-200, #a2aab1);
}

.modal-content {
    display: flex;
    margin-top: 7px;
}

.filter-container {
    flex-grow: 1;
    margin-top: 41px;
    padding-bottom: 24px;
}

.filter-section {
    padding: 0 24px;
    margin-bottom: 48px;
}

.section-title {
    color: var(--Gray-100, #bec7ce);
    font-size: 24px;
    font-family: Aspekta300;
    margin: 0 0 12px;
}

.filter-options {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.filter-btn {
    border-radius: 50px;
    border: 1px solid var(--Gray-200, #a2aab1);
    background: transparent;
    color: var(--Main-White, #fafafa);
    font-size: 20px;
    font-family: Aspekta400;
    padding: 6px 24px;
    cursor: pointer;
}

.empty-btn {
    min-height: 41px;
    padding: 6px 0;
}



@media (max-width: 991px) {
    .modal-header {
        padding: 0 20px;
    }

    .filter-container {
        margin: 40px -12px 0 0;
    }

    .filter-section {
        padding: 0 20px;
    }

    .filter-btn {
        padding: 0 20px;
    }

    .scroll-indicator {
        display: none;
    }
}
</style>