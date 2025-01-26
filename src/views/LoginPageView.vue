<template>
    <form class="login-container" @submit.prevent="handleSubmit">
        <div class="login-wrapper">
            <h1 class="login-title">Login</h1>
            <div class="form-content">
                <div class="form-fields">
                    <div class="input-group">
                        <label for="email" class="visually-hidden">Email</label>
                        <input type="email" id="email" v-model="email" class="form-input pbottom-12" placeholder="Email"
                            required />
                    </div>
                    <div class="input-group password-group">
                        <label for="password" class="visually-hidden">Password</label>
                        <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password"
                            class="form-input pbottom-12" placeholder="Password" required />
                    </div>
                </div>
                <a href="#" class="hover-underline-animation-gray forgot-password" tabindex="0">Forgot your password?</a>
                <!-- Add error message display -->
                <div v-if="errorMessage" class="error-message">
                    {{ errorMessage }}
                </div>
            </div>
            <div class="action-section">
                <button type="submit" class="btn-primary login-button">Log in</button>
                <router-link to="/register" class="hover-underline-animation-gray" tabindex="0">Don't have an account?</router-link>
            </div>
        </div>
    </form>
</template>

<script>
import { useUsersStore } from "@/stores/user";
import { useRouter } from "vue-router";
export default {
    name: "LoginForm",
    data() {
        return {
            email: "",
            password: "",
            showPassword: false,
            errorMessage: "", // Para exibir a mensagem de erro
        };
    },
    setup() {
        const usersStore = useUsersStore();
        const router = useRouter();

        return { usersStore, router };
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        async handleSubmit() {
            try {
                
                await this.usersStore.login(this.email, this.password);

                if(this.usersStore.authenticatedUser.name == "admin"){
                    this.router.push("/admin/adminDashboard");
                }
                else{
                    this.router.push("/account/dashboard");
                }
            } catch (error) {
                this.errorMessage = error.message;
            }
        },
    },
};
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

.login-container {
    background: var(--Main-Black, #010306);
    display: flex;
    padding: 0 0 142px;
    flex-direction: column;
    overflow: hidden;
    font-family: Aspekta, sans-serif;
}

.login-wrapper {
    align-self: center;
    display: flex;
    margin-top: 95px;
    width: 312px;
    max-width: 100%;
    flex-direction: column;
}

.login-title {
    color: var(--Main-White, #fafafa);
    text-align: center;
    font: 48px Aspekta500;
    margin: 0;
}

.error-message {
    color: red;
    font-size: 14px;
    margin-top: 10px;
    font-weight: bold;
    text-align: center;
}

.form-content {
    display: flex;
    gap: 12px;
    margin-top: 64px;
    width: 100%;
    flex-direction: column;
}

.form-fields {
    display: flex;
    width: 100%;
    flex-direction: column;
    font-size: 16px;
    font-weight: 400;
}

.input-group {
    display: flex;
    width: 100%;
    flex-direction: column;
    color: var(--Gray-400, #6b737a);
}

.password-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 32px;
    gap: 40px;
}

.toggle-password {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
}

.toggle-icon {
    width: 18px;
    aspect-ratio: 2;
    object-fit: contain;
}

.forgot-password {
    align-self: flex-end;
}

.action-section {
    display: flex;
    margin-top: 64px;
    width: 100%;
    gap: 12px;
    flex-direction: column;
    align-items: center;
}

.login-button {
    width: 100%;
}

.signup-link {
    color: var(--Gray-200, #a2aab1);
    text-decoration: none;
    margin-top: 12px;
    font-family: Aspekta400;
    font-size: 1rem;
}

@media (max-width: 991px) {
    .login-container {
        padding-bottom: 100px;
    }

    .login-wrapper {
        margin-top: 40px;
    }

    .login-title {
        font-size: 40px;
    }

    .form-content {
        margin-top: 40px;
    }

    .action-section {
        margin-top: 40px;
    }

    .login-button {
        padding: 12px 20px;
    }
}
</style>