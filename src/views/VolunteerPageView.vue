<template>
    <img class="blur-gradiant" src="../assets/images/Blur gradient.svg" alt="Blur Gradient" />
    <form class="volunteer-page" @submit.prevent="handleSubmit">
        <PopUpGeneral :is-visible="showPopup" :timeout="3" title="Volunteer request sent successfully!" type="success"
            @close="showPopup = false" />
        <div class="main-content">
            <h1 class="outline-title">VOLUNTEER</h1>
            <div class="join-text">
                <span>Join the Beat.</span><br>
                <span>Volunteer at Hypnøtica.</span>
            </div>
            <div class="form-container">
                <div class="form-row">
                    <div class="input-group">
                        <label for="name" class="visually-hidden">Name</label>
                        <input type="text" id="name" v-model="formData.name" class="form-input pbottom-12"
                            placeholder="Name" required aria-label="Name" />
                    </div>
                    <div class="input-group">
                        <label for="email" class="visually-hidden">Email</label>
                        <input type="email" id="email" v-model="formData.email" class="form-input pbottom-12"
                            placeholder="Email" required aria-label="Email" />
                    </div>
                </div>
                <div class="dropdown">
                    <label for="workFunction" class="visually-hidden">Work Function</label>
                    <select id="workFunction" v-model="formData.workFunction" class="form-input dropdown-select"
                        required aria-label="Select work function">
                        <option value="" disabled selected>Work Function</option>
                        <option value="production">Production</option>
                        <option value="marketing">Marketing</option>
                        <option value="operations">Operations</option>
                    </select>
                    <i class="ti ti-chevron-down dropdown-icon" aria-hidden="true"></i>
                </div>
                <div class="input-group">
                    <label for="coverLetter" class="visually-hidden">Cover Letter</label>
                    <textarea id="coverLetter" v-model="formData.coverLetter" class="form-input textarea"
                        placeholder="Cover letter" required aria-label="Cover letter"></textarea>
                </div>
                <button type="submit" class="btn-primary submit-button" aria-label="Submit application">
                    Submit application
                </button>
                <PopUpLogin :is-visible="showLoginPopup" :timeout="5" @close="showLoginPopup = false" />
            </div>
        </div>
    </form>
</template>

<script>
import { volunteerStore } from '@/stores/volunteerForm';
import { useUsersStore } from '@/stores/user';
import PopUpLogin from '@/components/PopUpLogin.vue';
import PopUpGeneral from '@/components/PopUpGeneral.vue'

export default {
    name: 'VolunteerForm',
    components: {
        PopUpLogin,
        PopUpGeneral
    },
    data() {
        return {
            formData: {
                name: '',
                email: '',
                workFunction: '',
                coverLetter: ''
            },
            showLoginPopup: false,
            showPopup: false
        }
    },
    methods: {
        handleSubmit() {
            const userStore = useUsersStore();

            // Check if user is logged in
            if (!userStore.authenticatedUser) {
                this.showLoginPopup = true;
                return;
            }

            const store = volunteerStore();

            // Add new volunteer to store
            store.volunteers.push({
                id: userStore.authenticatedUser.id,
                name: this.formData.name,
                email: this.formData.email,
                workFunction: this.formData.workFunction,
                coverLetter: this.formData.coverLetter
            });

            // Reset form
            this.formData = {
                name: '',
                email: '',
                workFunction: '',
                coverLetter: ''
            };

            // Show success message
            this.showPopup = true
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
    white-space: nowrap;
    border: 0;
}

.blur-gradiant {
  position: absolute;
  z-index: -1;
  bottom: -500px;
  right: 0;
}

.volunteer-page {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: Aspekta, sans-serif;
    min-height: 100vh;
}

.main-content {
    display: flex;
    margin: 68px 48px 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 253px;
}


.join-text {
    color: var(--Main-White, #fafafa);
    font-size: 48px;
    font-family: Aspekta500;
    line-height: 55px;
    margin-top: 40px;
    text-align: start;
    align-self: start;
}

.form-container {
    display: flex;
    margin-top: 128px;
    width: 648px;
    max-width: 100%;
    flex-direction: column;
    gap: 32px;
    padding: 0 20px;
}

.form-row {
    display: flex;
    gap: 48px;
}

.input-group {
    flex: 1;
}


.dropdown {
    position: relative;
    width: 100%;
}



.dropdown-icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--Gray-400, #6b737a);
}

.textarea {
    width: 100%;
    min-height: 120px;
    padding: 12px 0;
}

.submit-button {
    align-self: center;
    margin-top: 32px;
}



@media (max-width: 991px) {
    .volunteer-title {
        font-size: 100px;
    }

    .join-text {
        font-size: 36px;
        line-height: 1.3;
    }

    .form-container {
        margin-top: 64px;
    }
}

@media (max-width: 640px) {
    .volunteer-title {
        font-size: 60px;
    }

    .join-text {
        font-size: 28px;
    }

    .form-row {
        flex-direction: column;
        gap: 24px;
    }
}
</style>