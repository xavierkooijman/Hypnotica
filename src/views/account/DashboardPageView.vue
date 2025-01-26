<template>
    <main class="profile-settings-page">
        <PopUpGeneral 
            :is-visible="showPopup"
            :timeout="3"
            title="Changes saved successfully!"
            type="success"
            @close="showPopup = false"
        />
        <div class="profile-settings-layout">
            <Sidebar />
            <div class="profile-settings-container">
                <form class="profile-settings-form" @submit.prevent="handleSubmit">
                    <h1 class="profile-settings-title">Profile Settings</h1>
                    <div class="profile-settings-content">
                        <div class="avatar-container">
                            <button @click.prevent="openFileDialog" class="avatar-button">
                                <img :src="imageURL" class="avatar-image" alt="Imagem da Web" />
                                <Pen class="edit-icon" />
                            </button>

                            <input type="file" ref="fileInput" @change="handleImageSelect" style="display: none;" accept="image/*" />
                        </div>
                        <div class="form-group">
                            <label for="username" class="visually-hidden">Username</label>
                            <input type="text" id="username" class="form-input" placeholder="Username" v-model="username" />
                        </div>
                        <div class="form-group">
                            <label for="email" class="visually-hidden">Email</label>
                            <input type="email" id="email" class="form-input" placeholder="Email" v-model="email" />
                        </div>
                    </div>
                    <button type="submit" class="save-button btn-primary">Save changes</button>
                </form>
            </div>
        </div>
    </main>
</template>


<script>
import Sidebar from '@/components/Sidebar.vue';
import { Pen } from 'lucide-vue-next';
import { useUsersStore } from '@/stores/user'
import PopUpGeneral from '@/components/PopUpGeneral.vue'

export default {
    name: 'ProfileSettings',
    data() {
        return {
            username: useUsersStore().authenticatedUser.name,
            email: useUsersStore().authenticatedUser.email,
            imageURL: useUsersStore().authenticatedUser.profImg,
            showPopup: false
        }
    },
    components: {
        Sidebar,
        Pen,
        PopUpGeneral
    },
    methods: {
        handleSubmit() {
            const updatedUserData = {
                username: this.username,
                email: this.email,
                newProfImg: this.imageURL
            };

            const store = useUsersStore();
            try {
                store.updateUser(updatedUserData);
                this.showPopup = true
            } catch (error) {
                console.error(error);
            }
        },

        openFileDialog() {
            this.$refs.fileInput.click();  
        },

        handleImageSelect(event) {
            const file = event.target.files[0]; 
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imageURL = e.target.result;  
                };
                reader.readAsDataURL(file);  
            }
        }
    }
}
</script>

<style scoped>
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}

.profile-settings-page {
    background: var(--Main-Black, #010306);
    display: flex;
    padding: 0 0 69px;
    flex-direction: column;
    overflow: hidden;
}

.profile-settings-container {
    display: flex;
    align-items: flex-start;
    gap: 40px 96px;
    margin: 64px 0 0 48px;
}

.profile-settings-form {
    display: flex;
    min-width: 240px;
    flex-direction: column;
    width: 301px;
    gap: 64px;
}

.profile-settings-title {
    color: var(--Gray-100, #bec7ce);
    font: 36px Aspekta400;
}

.profile-settings-content {
    display: flex;
    margin-top: 64px;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    gap: 32px;
}

.avatar-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 150px;
    max-width: 100%;
}

.avatar-image {
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    width: 100%;
    border-radius: 50%;
    cursor: pointer;
    transition: filter 0.3s ease; 
}

.avatar-image:hover {
    filter: brightness(0.7); 
}


.edit-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: white;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    filter: brightness(0.7);
}

.avatar-container:hover .edit-icon{
    opacity: 1;
    pointer-events: auto;
    cursor: pointer;
}

.avatar-button {
    background-color: transparent;
    border-color: transparent;
}

.profile-settings-layout {
    display: flex;
    align-items: flex-start;
    padding: 20px;
}

.save-button {
    align-self: flex-start;
}

@media (max-width: 991px) {
    .profile-settings-container {
        max-width: 100%;
        margin-top: 40px;
    }

    .profile-settings-content {
        margin-top: 40px;
    }

    .form-input {
        white-space: normal;
    }

    .save-button {
        margin-top: 40px;
        padding: 12px 20px;
    }
}

</style>