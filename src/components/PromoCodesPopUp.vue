<template>
    <div class="popup-overlay" @click="$emit('close')">
        <div class="popup-content" @click.stop>
            <button class="close-button" @click="$emit('close')">&times;</button>
            <h2 class="popup-title">Redeem Promo Code</h2>
            <ul class="discount-list">
                <li v-for="(discount, index) in promoCodes" :key="index"
                    @click="canAffordDiscount(discount) && selectDiscount(discount)" :class="{
                        'selected': selectedDiscount === discount,
                        'disabled': !canAffordDiscount(discount)
                    }">
                    <div class="discount-info">
                        <span class="discount-name">{{ discount.name }}</span>
                        <span class="discount-percentage">{{ discount.discount }}% off</span>
                    </div>
                    <span class="coin-amount">{{ discount.requiredCoins }} coins</span>
                </li>
            </ul>
            <button v-if="selectedDiscount" class="buy-button" @click="redeemCode(selectedDiscount)">
                Buy with coins ({{ selectedDiscount.requiredCoins }})
            </button>
            <div v-if="redeemedCode" class="redeem-code">
                <h3>Redeem Code</h3>
                <p class="text">{{ redeemedCode }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useUsersStore } from '@/stores/user';
import { useMerchandiseStore } from '@/stores/merchandise';

export default {
    data() {
        return {
            selectedDiscount: null,
            redeemedCode: null,
            usersStore: useUsersStore(),
            merchandiseStore: useMerchandiseStore()
        };
    },
    computed: {
        userCoins() {
            return this.usersStore.authenticatedUser?.coins || 0;
        },
        promoCodes() {
            return this.merchandiseStore.getpromoCodes;
        }
    },
    methods: {
        canAffordDiscount(discount) {
            return this.userCoins >= discount.requiredCoins;
        },
        selectDiscount(discount) {
            this.selectedDiscount = discount;
            this.redeemedCode = null;
        },
        redeemCode(discount) {
            if (this.canAffordDiscount(discount)) {
                this.redeemedCode = discount.code;

                const authUser = this.usersStore.authenticatedUser;
                const userIndex = this.usersStore.users.findIndex(
                    user => user.email === authUser.email
                );

                if (userIndex !== -1) {
                    this.usersStore.users[userIndex].coins -= discount.requiredCoins;
                    this.usersStore.authenticatedUser.coins -= discount.requiredCoins;
                    this.usersStore.$patch();

                    alert(`Successfully redeemed ${discount.discount}% discount code!`);
                }
            }
        }
    }
};
</script>

<style scoped>
.popup-title {
    color: var(--Main-White);
    font-family: Aspekta300;
    font-size: 24px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
}

.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(3px);
}

.text {
    font-family: Aspekta300;
}


.popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    position: relative;
    width: 100%;
}

.close-button {
    position: fixed;
    right: 38%;
    top: 29%;
    background: transparent;
    border: none;
    color: var(--Gray-100);
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
}


.close-button:hover {
    color: var(--Main-White);
    transform: scale(1.1);
}

.popup-title {
    margin: 0 auto;
}

/* Update existing style */
.popup-title {
    margin-bottom: 0; /* Remove margin since it's now handled by popup-header */
}

.popup-content {
    background: rgba(1, 3, 6, 1);
    padding: 32px;
    border-radius: 16px;
    border: 2px solid var(--Blue-300);
    max-width: 480px;
    width: 90%;
    box-shadow:
        0 0 30px rgba(0, 153, 255, 0.2),
        inset 0 0 20px rgba(0, 0, 0, 0.7);
}

.popup-title {
    color: var(--Main-White);
    font-family: Aspekta300;
    font-size: 24px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
}

.discount-list {
    list-style: none;
    padding: 0;
}

.discount-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
    padding: 16px;
    background: rgba(250, 250, 250, 0.05);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--Gray-100);
    font-family: Aspekta300;
}

.discount-list li:hover {
    background: rgba(250, 250, 250, 0.1);
}

.discount-list li.selected {
    border: 1px solid var(--Blue-300);
    background: rgba(1, 152, 255, 0.1);
}

.discount-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.discount-name {
    font-size: 18px;
    color: var(--Main-White);
}

.discount-percentage {
    font-size: 14px;
}

.coin-amount {
    color: var(--Blue-300);
    font-family: Aspekta400;
}

.buy-button {
    width: 100%;
    padding: 12px;
    margin-top: 20px;
    border-radius: 8px;
    background: var(--Blue-300);
    color: var(--Main-White);
    border: none;
    font-family: Aspekta400;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: aliceblue;
    color: black;
}

.buy-button:hover {
    background-color: aqua;
}

.disabled {
    opacity: 0.5;
    text-decoration: line-through;
    cursor: not-allowed;
}

.disabled:hover {
    background: none;
}

.selected {
    background: var(--gray700);
}

.redeem-code {
    margin-top: 20px;
    padding: 16px;
    background: rgba(250, 250, 250, 0.05);
    border-radius: 8px;
    color: var(--Main-White);
}
</style>