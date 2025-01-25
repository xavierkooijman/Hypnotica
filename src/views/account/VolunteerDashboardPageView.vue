<template>
    <div class="dashboard-container">
        <div class="dashboard-content">
            <Sidebar />
            <div class="dashboard-layout">
                <main class="main-content">
                    <div class="content-wrapper">
                        <section class="top-section">
                            <div class="shift-card">
                                <div class="shift-info">
                                    <div class="shift-header">
                                        <h2 class="shift-title">Today's Shift</h2>
                                        <div class="shift-details">
                                            <h2>{{ selectedShift ? selectedShift.job : '' }}</h2>
                                            <p>{{ selectedShift ? selectedShift.location : '' }}</p>
                                            <p class="shift-time">
                                                {{ selectedShift ? selectedShift.startTime + ' - ' +
                                                    selectedShift.endTime : '' }}
                                            </p>
                                        </div>
                                    </div>
                                    <button class="start-shift-btn" tabindex="0" @click="startShift">
                                        <span>Start</span>
                                        <span>shift</span>
                                    </button>
                                </div>
                            </div>

                            <div class="coins-card">
                                <div class="coins-info">
                                    <div class="coins-header">
                                        <h3 class="coins-title">Total coins</h3>
                                        <p class="coins-amount">{{ userCoins }} coins</p>
                                    </div>
                                </div>
                                <div class="reward-section">
                                    <div class="reward-content">
                                        <div class="reward-header">
                                            <h3 class="reward-title">Reward</h3>
                                            <p class="reward-desc">Merch promo code</p>
                                        </div>
                                        <button class="claim-btn" tabindex="0">Claim with coins</button>
                                    </div>
                                </div>
                            </div>

                            <div class="hours-card">
                                <div class="hours-content">
                                    <h3 class="hours-title">Hours worked</h3>
                                    <div class="hours-stats">
                                        <div class="total-stats">
                                            <p class="total-number">36</p>
                                            <p class="total-label">Total hours</p>
                                            <p class="worked-label">worked</p>
                                        </div>
                                        <div class="weekly-progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="4"
                                                aria-valuemin="0" aria-valuemax="8">
                                                <div class="progress-fill" :style="{ height: '50%' }"></div>
                                                <!-- Representa 4/8 de progresso -->
                                                <span class="progress-date">20 Jan</span>
                                                <span class="progress-value">4</span>
                                            </div>
                                            <div class="progress-bar" role="progressbar" aria-valuenow="8"
                                                aria-valuemin="0" aria-valuemax="8">
                                                <div class="progress-fill" :style="{ height: '100%' }"></div>
                                                <!-- Representa 8/8 de progresso -->
                                                <span class="progress-date">21 Jan</span>
                                                <span class="progress-value">8</span>
                                            </div>
                                            <div class="progress-bar" role="progressbar" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="8">
                                                <div class="progress-fill" :style="{ height: '0%' }"></div>
                                                <!-- Representa 0/8 de progresso -->
                                                <span class="progress-date">22 Jan</span>
                                                <span class="progress-value">0</span>
                                            </div>
                                            <div class="progress-bar" role="progressbar" aria-valuenow="4"
                                                aria-valuemin="0" aria-valuemax="8">
                                                <div class="progress-fill" :style="{ height: '50%' }"></div>
                                                <!-- Representa 4/8 de progresso -->
                                                <span class="progress-date">23 Jan</span>
                                                <span class="progress-value">4</span>
                                            </div>
                                            <div class="progress-bar" role="progressbar" aria-valuenow="6"
                                                aria-valuemin="0" aria-valuemax="8">
                                                <div class="progress-fill" :style="{ height: '75%' }"></div>
                                                <!-- Representa 6/8 de progresso -->
                                                <span class="progress-date">24 Jan</span>
                                                <span class="progress-value">6</span>
                                            </div>
                                            <div class="progress-bar" role="progressbar" aria-valuenow="8"
                                                aria-valuemin="0" aria-valuemax="8">
                                                <div class="progress-fill" :style="{ height: '100%' }"></div>
                                                <!-- Representa 8/8 de progresso -->
                                                <span class="progress-date">25 Jan</span>
                                                <span class="progress-value">8</span>
                                            </div>
                                            <div class="progress-bar" role="progressbar" aria-valuenow="6"
                                                aria-valuemin="0" aria-valuemax="8">
                                                <div class="progress-fill" :style="{ height: '75%' }"></div>
                                                <!-- Representa 6/8 de progresso -->
                                                <span class="progress-date">26 Jan</span>
                                                <span class="progress-value">6</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="bottom-section">
                            <div class="shifts-list">
                                <h2 class="shifts-title">Available Shifts</h2>
                                <div class="shift-items">
                                    <div v-for="(shift, index) in shifts" :key="index" class="shift-item">
                                        <p class="shift-job">{{ shift.job }}</p>
                                        <p class="shift-date">{{ shift.date }}</p>
                                        <p class="shift-hours">{{ shift.startTime }} - {{ shift.endTime }}</p>
                                        <button class="pick-shift-btn" tabindex="0" @click="selectShift(shift)">
                                            Pick shift
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="calendar-card">
                                <div class="calendar-header">
                                    <h3 class="calendar-title">January 2025</h3>
                                    <div class="calendar-nav">
                                        <button class="nav-btn prev" aria-label="Previous month">
                                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/134433a6536f12ba7ed4cfb3379a3f898696278bc84c7d6eb496690f25eaf5e0?placeholderIfAbsent=true&apiKey=3650e9b5644d4191adc714c61c50f709"
                                                alt="" />
                                        </button>
                                        <button class="nav-btn next" aria-label="Next month">
                                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0a3ff78029980f77358258da1e366b302a0970ec30fe21fe0573dcd884f5a6b?placeholderIfAbsent=true&apiKey=3650e9b5644d4191adc714c61c50f709"
                                                alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div class="calendar-grid">
                                    <div class="weekday">M</div>
                                    <div class="weekday">T</div>
                                    <div class="weekday">W</div>
                                    <div class="weekday">T</div>
                                    <div class="weekday">F</div>
                                    <div class="weekday">S</div>
                                    <div class="weekday">S</div>
                                    <div class="date prev-month">30</div>
                                    <div class="date prev-month">31</div>
                                    <div class="date">1</div>
                                    <div class="date">2</div>
                                    <div class="date">3</div>
                                    <div class="date">4</div>
                                    <div class="date">5</div>
                                    <div class="date">6</div>
                                    <div class="date">7</div>
                                    <div class="date">8</div>
                                    <div class="date">9</div>
                                    <div class="date">10</div>
                                    <div class="date">11</div>
                                    <div class="date">12</div>
                                    <div class="date">13</div>
                                    <div class="date">14</div>
                                    <div class="date">15</div>
                                    <div class="date">16</div>
                                    <div class="date">17</div>
                                    <div class="date">18</div>
                                    <div class="date">19</div>
                                    <div class="date">20</div>
                                    <div class="date">21</div>
                                    <div class="date">22</div>
                                    <div class="date">23</div>
                                    <div class="date">24</div>
                                    <div class="date">25</div>
                                    <div class="date">26</div>
                                    <div class="date">27</div>
                                    <div class="date">28</div>
                                    <div class="date">29</div>
                                    <div class="date">30</div>
                                    <div class="date">31</div>
                                    <div class="date next-month">1</div>
                                    <div class="date next-month">2</div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import { useShiftsStore } from '@/stores/shifts';
import { useUsersStore } from '@/stores/user';
import { computed, ref, onMounted } from 'vue';

export default {
    name: 'VolunteerDashboardPageView',
    components: { Sidebar },
    setup() {
        const shiftsStore = useShiftsStore();
        const usersStore = useUsersStore();

        // Computed para acessar os shifts da store
        const shifts = computed(() => shiftsStore.shifts);
        
        // Computed para acessar as coins do usuário autenticado
        const userCoins = computed(() => usersStore.authenticatedUser?.coins || 0);

        // Definir uma variável para armazenar o shift selecionado
        const selectedShift = ref(null);
        
        // Função para selecionar o shift
        const selectShift = (shift) => {
            selectedShift.value = shift;
        };

        // Definir um shift padrão assim que os shifts estiverem carregados
        onMounted(() => {
            if (shifts.value.length > 0) {
                selectedShift.value = shifts.value[0];
            }
        });

        return {
            shifts,
            selectShift,
            selectedShift,
            userCoins
        };
    }
};
</script>

<style scoped>
.dashboard-container {
    background: var(--Main-Black, #010306);
    display: flex;
    padding: 0 0 69px;
    flex-direction: column;
    overflow: hidden;
}

.dashboard-content {
    display: flex;
    align-items: flex-start;
    padding: 20px;
    max-width: 1800px;
}

.dashboard-layout {
    display: flex;
    gap: 20px;
}

.sidebar {
    width: 20%;
}

.main-content {
    width: 100%;

}

.top-section {
    display: flex;
    gap: 20px;
}

.shift-card {
    width: 29%;
    border-radius: 12px;
    border: 1px solid var(--Gray-100, #bec7ce);
    background: var(--Main-Black, #010306);
    padding: 12px 16px 27px;
    min-height: 269px;
    aspect-ratio: 1;
}

.shift-title {
    color: var(--Main-White, #fafafa);
    font-size: 20px;
    font-family: Aspekta200;
    margin: 0;
}

.shift-details {
    margin-top: 8px;
    color: var(--Gray-100, #bec7ce);
    font-size: 16px;
    font-family: Aspekta200;
}

.start-shift-btn {
    background: var(--Blue-100, #0198ff);
    border-radius: 80px;
    width: 120px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto 0;
    border: none;
    color: var(--Main-Black, #010306);
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
}

.start-shift-btn:hover {
    background: var(--gray300);
}

.coins-card {
    width: 22%;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.coins-info {
    border-radius: 12px;
    border: 1px solid var(--Gray-100, #bec7ce);
    background: var(--Main-Black, #010306);
    padding: 12px;
}

.coins-title {
    color: var(--Gray-100, #bec7ce);
    font-size: 20px;
    font-family: Aspekta200;
    margin: 0;
}

.coins-amount {
    color: var(--Main-White, #fafafa);
    font-size: 32px;
    font-family: Aspekta200;
    margin: 16px 0 0;
}

.reward-section {
    border-radius: 12px;
    border: 1px solid var(--Gray-100, #bec7ce);
    background: var(--Main-Black, #010306);
    padding: 16px;
    flex-grow: 1;
}

.reward-title {
    color: var(--Main-White, #fafafa);
    font-size: 20px;
    font-family: Aspekta200;
    margin: 0;
}

.reward-desc {
    color: var(--Gray-100, #bec7ce);
    font-size: 16px;
    font-family: Aspekta200;
    margin: 8px 0 0;
}

.claim-btn {
    width: 100%;
    border-radius: 12px;
    border: 1px solid var(--Gray-400, #6b737a);
    background: transparent;
    color: var(--Main-White, #fafafa);
    padding: 12px 24px;
    margin-top: 25px;
    cursor: pointer;
    font-size: 16px;
    font-family: Aspekta200;
}

.claim-btn:hover {
    background: var(--gray700);
}

.hours-card {
    width: 49%;
    border-radius: 12px;
    border: 1px solid var(--Gray-100, #bec7ce);
    background: var(--Main-Black, #010306);
    padding: 24px;
    min-height: 269px;
}

.hours-title {
    color: var(--Gray-100, #bec7ce);
    font-size: 20px;
    font-family: Aspekta200;
    margin: 0;
}

.hours-stats {
    display: flex;
    gap: 32px;
    margin-top: 120px;
}

.total-stats {
    padding-bottom: 16px;
    color: var(--Gray-100, #bec7ce);
    font-size: 16px;
    font-family: Aspekta200;
}

.total-number {
    color: var(--Main-White, #fafafa);
    font-size: 20px;
    font-family: Aspekta200;
    margin: 0;
}

.weekly-progress {
    display: flex;
    gap: 16px;
    min-width: 240px;
    font-size: 36px;
    font-family: Aspekta200;
}

.progress-bar {
    width: 30px;
    position: relative;
}

.progress-fill {
    border-radius: 6px 6px 0 0;
    background: var(--Gray-100, #bec7ce);
    width: 100%;
    position: absolute;
    bottom: 20px;
    margin-bottom: 20px;
}

.progress-date {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: var(--Gray-100, #bec7ce);
    font-size: 10px;
}

.progress-value {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--Main-Black, #010306);
    font-size: 12px;
}

.bottom-section {
    display: flex;
    gap: 20px;
    margin-top: 12px;
}

.shifts-list {
    width: 72%;
    border-radius: 12px;
    border: 1px solid var(--Gray-100, #bec7ce);
    background: var(--Main-Black, #010306);
    padding: 12px 24px;
    font-size: 36px;
    font-family: Aspekta200;
}

.shifts-title {
    color: var(--Main-White, #fafafa);
    font-size: 20px;
    font-family: Aspekta200;
    margin: 0;
}

.shift-items {
    margin-top: 12px;
    max-height: 300px;
    overflow-y: auto;
}

/* Estilo do scrollbar */
.shift-items::-webkit-scrollbar {
    width: 1px;
    /* Largura do scrollbar */
}

/* Cor do fundo do scrollbar */
.shift-items::-webkit-scrollbar-track {
    background: transparent;
    /* Tornando o fundo transparente */
}

/* Cor do polegar (parte do meio) do scrollbar */
.shift-items::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    /* Cor do polegar, ajustável */
    border-radius: 10px;
    /* Arredondando as bordas do polegar */
}

/* Estilo do polegar quando ele está sendo hover */
.shift-items::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
    /* Cor do polegar quando em hover */
}

.shift-item {
    display: flex;
    align-items: center;
    gap: 64px;
    padding: 16px 0;
    border-top: 1px solid var(--Gray-100, #bec7ce);
    color: var(--Gray-100, #bec7ce);
    font-size: 16px;
}

.pick-shift-btn {
    border-radius: 12px;
    border: 1px solid var(--Gray-400, #6b737a);
    background: transparent;
    color: var(--Main-White, #fafafa);
    padding: 8px 16px;
    cursor: pointer;
    margin-left: auto;
    height: 39px;
    width: 98px;
}

.pick-shift-btn:hover {
    background: var(--gray700);
}

.calendar-card {
    width: 28%;
    border-radius: 12px;
    border: 1px solid var(--Gray-100, #bec7ce);
    background: var(--Main-Black, #010306);
    padding: 24px;
    aspect-ratio: 1;
}

.calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.calendar-title {
    color: var(--Gray-100, #bec7ce);
    font-size: 20px;
    font-family: Aspekta200;
    margin: 0;
}

.calendar-nav {
    display: flex;
    gap: 13px;
}

.nav-btn {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
}

.nav-btn img {
    width: 8px;
    height: 14px;
}

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
    margin-top: 24px;
    text-align: center;
    font-size: 36px;
    font-family: Aspekta200;
}

.weekday {
    color: var(--Gray-100, #bec7ce);
    font-weight: 550;
    font-size: 16px;
}

.date {
    color: var(--Main-White, #fafafa);
    font-size: 16px;
    padding: 4px;
}

.prev-month,
.next-month {
    color: var(--Gray-100, #bec7ce);
    opacity: 0.5;
}

@media (max-width: 991px) {
    .dashboard-container {
        padding-bottom: 100px;
    }

    .dashboard-content {
        margin-top: 40px;
    }

    .dashboard-layout {
        flex-direction: column;
    }

    .sidebar,
    .main-content {
        width: 100%;
    }

    .top-section,
    .bottom-section {
        flex-direction: column;
    }

    .shift-card,
    .coins-card,
    .hours-card,
    .shifts-list,
    .calendar-card {
        width: 100%;
        margin-top: 24px;
    }

    .hours-stats {
        margin-top: 40px;
    }

    .shift-item {
        flex-wrap: wrap;
        gap: 16px;
    }

    .pick-shift-btn {
        margin-left: 0;
    }
}
</style>