<template>
    <div class="notificatin">
        <div v-if="isVisible" class="popup-overlay" :class="{ 'popup-enter': isEntering, 'popup-leave': isLeaving }">
            <div class="popup">
                <h3>
                    <component :is="icon" class="icon-alert" />
                    {{ title }}
                </h3>
                <p v-if="message">{{ message }}</p>
                <div class="progress-bar">
                    <div class="progress" :style="{ width: progress + '%' }"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { CircleAlert, CircleCheck, AlertCircle } from 'lucide-vue-next';

export default {
    components: {
        CircleAlert,
        CircleCheck,
        AlertCircle
    },
    props: {
        isVisible: {
            type: Boolean,
            required: true
        },
        timeout: {
            type: Number,
            default: 5
        },
        title: {
            type: String,
            required: true
        },
        message: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'success',
            validator: (value) => ['success', 'alert', 'warning'].includes(value)
        }
    },
    computed: {
        icon() {
            const icons = {
                success: 'CircleCheck',
                alert: 'CircleAlert',
                warning: 'AlertCircle'
            }
            return icons[this.type]
        }
    },
    data() {
        return {
            progress: 100,
            timer: null,
            isEntering: true,
            isLeaving: false
        }
    },
    watch: {
        isVisible(newValue) {
            if (newValue) {
                this.startTimer()
            } else {
                this.resetPopup()
            }
        }
    },
    methods: {
        startTimer() {
            const interval = 100
            const step = (100 / (this.timeout * 1000)) * interval

            this.progress = 100
            this.isEntering = true
            this.isLeaving = false

            this.timer = setInterval(() => {
                this.progress -= step
                if (this.progress <= 0) {
                    this.isLeaving = true
                    clearInterval(this.timer)
                    setTimeout(() => {
                        this.$emit('close')
                    }, 300)
                }
            }, interval)
        },
        resetPopup() {
            clearInterval(this.timer)
            this.progress = 100
            this.isEntering = false
            this.isLeaving = false
        }
    }
}
</script>

<style scoped>
.notificatin {
    font-size: 17px;
    z-index: 1;
}

.popup-overlay {
    position: fixed;
    top: 20%;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    z-index: 1000;
    font-family: Aspekta200;
    pointer-events: none;
}

.popup {
    background: black;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    pointer-events: auto;
}

.popup-enter {
    animation: slideInRight 0.5s ease-out forwards;
}

.popup-leave {
    animation: slideOutRight 0.5s ease-in forwards;
}

.progress-bar {
    width: 100%;
    height: 5px;
    background: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 10px;
}

.progress {
    height: 100%;
    background: #007bff;
    transition: width 0.1s linear;
}

.popup h3 {
    display: flex;
    align-items: center;
}

.icon-alert {
    margin-right: 10px;
    width: 20px;
    height: 20px;
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutRight {
    from {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(100%);
        opacity: 0;
    }
}
</style>