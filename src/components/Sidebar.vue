<template>
    <div class="dashboard-container">
        <div class="content-wrapper">
            <nav class="sidebar-nav">
                <div class="user-profile">
                    <img :src="imageURL" class="profile-img" alt="Imagem da Web" />
                    <span class="profile-name">{{ userLogged }}</span>
                </div>
                <div class="nav-menu">
                    <div class="nav-item">
                        <div class="separator">
                            <div class="separator-line"></div>
                        </div>
                        <RouterLink to="/account/dashboard" class="nav-link"
                            :class="{ active: $route.path === '/account/dashboard', 'custom-style-dashboard': $route.path === '/account/dashboard' }">
                            Profile Settings
                        </RouterLink>
                    </div>
                    <div class="nav-item">
                        <div class="separator">
                            <div class="separator-line"></div>
                        </div>
                        <RouterLink to="/account/tickets" class="nav-link"
                            :class="{ active: $route.path === '/account/tickets', 'custom-style-tickets': $route.path === '/account/tickets' }">
                            Tickets
                        </RouterLink>
                    </div>
                    <div class="nav-item">
                        <div class="separator">
                            <div class="separator-line"></div>
                        </div>
                        <RouterLink to="/account/calendar" class="nav-link"
                            :class="{ active: $route.path === '/account/calendar', 'custom-style-calendar': $route.path === '/account/calendar' }">
                            Calendar
                        </RouterLink>
                    </div>
                    <div class="nav-item">
                        <div class="nav-item" v-if="isVolunteer">
                            <div class="separator">
                                <div class="separator-line"></div>
                            </div>
                        <RouterLink to="/account/volunteer" class="nav-link"
                            :class="{ active: $route.path === '/account/volunteer', 'custom-style-volunteer': $route.path === '/account/volunteer' }">
                            Volunteer dashboard
                        </RouterLink>
                    </div>
                    </div>
                    <div class="nav-item">
                        <div class="separator">
                            <div class="separator-line"></div>
                        </div>
                        <RouterLink to="/account/notifications" class="nav-link"
                            :class="{ active: $route.path === '/account/notifications', 'custom-style-notifications': $route.path === '/account/notifications' }">
                            Notification settings
                        </RouterLink>
                    </div>
                    <div class="nav-item">
                        <div class="separator">
                            <div class="separator-line"></div>
                        </div>
                        <RouterLink to="/account/favorites" class="nav-link"
                            :class="{ active: $route.path === '/account/favorites', 'custom-style-favorites': $route.path === '/account/favorites' }">
                            Favorite
                        </RouterLink>
                    </div>
                    <div class="nav-item">
                        <div class="separator">
                            <div class="separator-line"></div>
                        </div>
                        <RouterLink to="/account/password" class="nav-link"
                            :class="{ active: $route.path === '/account/password', 'custom-style-password': $route.path === '/account/password' }">
                            Password
                        </RouterLink>
                    </div>
                </div>
            </nav>
            <div class="main-content"></div>
        </div>
    </div>
</template>


<script>
import { useUsersStore } from '@/stores/user';
export default {
    computed: {
        imageURL() {
            const store = useUsersStore();
            return store.authenticatedUser.profImg;
        },
        userLogged() {
            const store = useUsersStore();
            return store.authenticatedUser.name;
        },
        isVolunteer() {
            const store = useUsersStore();
            return store.authenticatedUser.isVolunteer === true;
        }
    }
}
</script>

<style scoped>
.dashboard-container {
    background: var(--Main-Black, #010306);
    padding-bottom: 69px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.content-wrapper {
    display: flex;
    align-items: flex-start;
    width: 320px;
    gap: 96px;
    margin: 64px 0 0 48px;
    flex-wrap: wrap;
}

.sidebar-nav {
    display: flex;
    min-width: 240px;
    flex-direction: column;
    width: 250px;
}

.profile-img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;
}

.user-profile {
    display: flex;
    align-items: center;
    gap: 18px;
    color: rgba(255, 255, 255, 1);
    font: 400 20px Aspekta, sans-serif;
}

.profile-avatar {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 40px;
}

.profile-name {
    flex: 1;
    font: 20px Aspekta400;
}

.nav-menu {
    display: flex;
    margin-top: 32px;
    width: 100%;
    max-width: 240px;
    flex-direction: column;
}

.nav-item {
    display: flex;
    width: 100%;
    gap: 3px;
}

.nav-link {
    align-self: stretch;
    border-radius: 8px;
    min-width: 240px;
    flex: 1;
    padding: 6px 8px;
    font-size: 20px;
    font-family: Aspekta400;
    color: var(--Gray-100, #bec7ce);
    cursor: pointer;
}

.nav-link:hover {
    background-color: #1E2429;
}

.nav-link.active {
    background: var(--Gray-800, #0e1419);
    color: var(--Main-White, #fafafa);
    border-left: 5px solid #0067CA;
    padding-left: 12px;
}

.separator {
    display: flex;
    justify-content: flex-start;
    height: 100%;
    padding: 6px 0;
}

.separator-line {
    display: flex;
    min-height: 29px;
    width: 0;
    border: 2px solid rgba(0, 103, 202, 0);
}

.main-content {
    display: flex;
    min-width: 240px;
    flex-direction: column;
    width: 301px;
}

@media (max-width: 991px) {
    .content-wrapper {
        max-width: 100%;
        margin-top: 40px;
    }

    .nav-link {
        white-space: normal;
    }
}
</style>