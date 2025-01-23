<template>
    <div class="settings-popup">
        <button class="settings" @click="toggleModal">
            <img :src="imageURL" class="avatar-image-button" alt="Imagem da Web" />
        </button>
        <!-- Overlay para a tela -->
        <div v-if="isModalVisible" class="overlay" @click="toggleModal"></div>

        <div v-if="isModalVisible" class="account-avatar-modal">
            <div class="avatar-and-close">
                <img :src="imageURL" class="avatar-image" alt="Imagem da Web" />
                <span class="avatar-username">{{ userLogged }}</span>
            </div>
            <div class="settings-navigation">
                <div class="settings-option" tabindex="0">
                    <div class="line-container">
                        <div class="line"></div>
                    </div>
                    <router-link to="/account/dashboard" class="option-text">Profile Settings</router-link>
                </div>
                <div class="settings-option" tabindex="0">
                    <div class="line-container">
                        <div class="line"></div>
                    </div>
                    <router-link to="/account/tickets" class="option-text">Tickets</router-link>
                </div>
                <div class="settings-option" tabindex="0">
                    <div class="line-container">
                        <div class="line"></div>
                    </div>
                    <router-link to="/account/calendar" class="option-text">Calendar</router-link>
                </div>
                <div class="settings-option" tabindex="0">
                    <div class="line-container">
                        <div class="line"></div>
                    </div>
                    <router-link to="/account/volunteer" class="option-text">Volunteer dashboard</router-link>
                </div>
                <div class="settings-option" tabindex="0">
                    <div class="line-container">
                        <div class="line"></div>
                    </div>
                    <router-link to="/account/notifications" class="option-text">Notification settings</router-link>
                </div>
                <div class="settings-option" tabindex="0">
                    <div class="line-container">
                        <div class="line"></div>
                    </div>
                    <router-link to="/account/favorites" class="option-text">Favorites</router-link>
                </div>
                <div class="settings-option" tabindex="0">
                    <div class="line-container">
                        <div class="line"></div>
                    </div>
                    <router-link to="/account/password" class="option-text">Password</router-link>
                </div>
                <div class="settings-option" tabindex="0">
                    <div class="line-container">
                        <div class="line"></div>
                    </div>
                    <button @click="logout" class="signout-btn">Sign out</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { useUsersStore } from '@/stores/user';
export default {
    name: 'AccountAvatarModal',
    data() {
        return {
            isModalVisible: false
        };
    },
    computed: {
        imageURL() {
            const store = useUsersStore();
            return store.authenticatedUser.profImg;
        },
        userLogged() {
            const store = useUsersStore();
            return store.authenticatedUser.name;
        },
        logout() {
            const store = useUsersStore();
            return store.logout;
        }
    },
    methods: {
        toggleModal() {
            this.isModalVisible = !this.isModalVisible;
        }
    }
};
</script>

<style scoped>
.account-avatar-modal {
    border-radius: 16px;
    transform: translateX(-85%);
    margin-top: 10px;
    border: 1px solid var(--Gray-100, #bec7ce);
    background: var(--Main-Black, #010306);
    display: flex;
    max-width: 298px;
    flex-direction: column;
    justify-content: start;
    padding: 24px;
    position: absolute;
    z-index: 1000;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 500;
    animation: fadeInOverlay 0.3s ease;
}

.avatar-and-close {
    align-items: center;
    border-bottom: 1px solid var(--Gray-600, #3a4146);
    display: flex;
    width: 100%;
    gap: 16px;
    color: var(--Main-White, #fafafa);
    justify-content: start;
    padding: 0 12px 12px;
    font: 400 24px Aspekta, sans-serif;
}

.settings {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.avatar-image-button {
    aspect-ratio: 1;
    object-fit: fill;
    width: 50px;
    margin: auto 0;
    border-radius: 100%;
    background-color: transparent;
}

.avatar-image {
    aspect-ratio: 1;
    object-fit: fill;
    width: 50px;
    margin: auto 0;
    border-radius: 100%;
    background-color: transparent;
}

.avatar-username {
    margin: auto 0;
    font-size: 24px;
    font-family: Aspekta300;
}

.settings-navigation {
    display: flex;
    margin-top: 24px;
    width: 100%;
    flex-direction: column;
    justify-content: start;
}

.settings-option {
    display: flex;
    width: 100%;
    gap: 3px;
    justify-content: start;
    cursor: pointer;
}

.line-container {
    display: flex;
    justify-content: start;
    height: 100%;
    padding: 6px 0;
}

.line {
    min-height: 29px;
    width: 0;
    border: 2px solid rgba(0, 103, 202, 0);
}

.option-text {
    align-self: stretch;
    border-radius: 8px;
    min-width: 240px;
    color: var(--Gray-100, #bec7ce);
    flex: 1;
    margin: auto 0;
    padding: 6px 8px;
    font-size: 20px;
    font-family: Aspekta300;
}

.option-text:hover {
    background-color: #1E2429;
}

.signout-btn {
    align-self: stretch;
    border-radius: 8px;
    min-width: 240px;
    color: var(--Gray-100, #bec7ce);
    flex: 1;
    margin: auto 0;
    padding: 6px 8px;
    font-size: 20px;
    font-family: Aspekta300;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    border: none;
}

.signout-btn:hover {
    background-color: #1E2429;
}
</style>
