<template>
    <div class="tickets-section">
        <div class="ticket-grid">
            <article class="ticket-item">
                <div class="ticket-content">
                    <header class="ticket-header">
                        <h2 class="ticket-title">Single Day</h2>
                        <span class="ticket-cost">45€</span>
                    </header>
                    <p class="ticket-description">
                        Enjoy access to the event for a single day of your choice. Perfect
                        for visitors with limited time who want to experience the event
                        highlights. Includes general admission without access to premium or
                        exclusive areas
                    </p>
                </div>
                <ul class="ticket-benefits">
                    <li class="benefit-item">
                        <i class="ti ti-ticket "></i>
                        <CircleCheck /><span>Entry to all events for one day (choose your day)</span>
                    </li>
                    <li class="benefit-item">
                        <i class="ti ti-check "></i>
                        <CircleCheck /><span>Access to event spaces open to regular ticket holders</span>
                    </li>
                    <li class="benefit-item">
                        <i class="ti ti-check "></i>
                        <CircleCheck /><span>Ability to shop from official vendors or event merchandise stands</span>
                    </li>
                </ul>
                <button class="btn-secondary ticket-button-second" @click="purchaseTicket('Single Day', 45)"
                    tabindex="0">
                    Buy Single Day
                </button>
            </article>

            <article class="ticket-item-vip">
                <div class="ticket-content">
                    <header class="ticket-header">
                        <h2 class="ticket-title">VIP Pass</h2>
                        <span class="ticket-cost">160€</span>
                    </header>
                    <p class="ticket-description">
                        The VIP Pass offers the ultimate event experience, granting you
                        exclusive privileges and full access to all days of the event.
                    </p>
                </div>
                <ul class="ticket-benefits">
                    <li class="benefit-item">
                        <i class="ti ti-ticket "></i>
                        <CircleCheck /><span>Unlimited access to the festival on all days</span>
                    </li>
                    <li class="benefit-item">
                        <i class="ti ti-rocket "></i>
                        <CircleCheck /><span>Fast-track entry at all events</span>
                    </li>
                    <li class="benefit-item">
                        <i class="ti ti-check "></i>
                        <CircleCheck /><span>Access private lounges, seating zones, or backstage areas reserved for VIP
                            attendees</span>
                    </li>
                    <li class="benefit-item">
                        <i class="ti ti-check "></i>
                        <CircleCheck /><span>Freedom to attend on any or all events as per your schedule</span>
                    </li>
                    <li class="benefit-item">
                        <i class="ti ti-check "></i>
                        <CircleCheck /><span>Access to premium areas designed for a superior experience</span>
                    </li>
                    <li class="benefit-item">
                        <i class="ti ti-check "></i>
                        <CircleCheck /><span>Dedicated assistance to ensure a seamless and enjoyable time at the
                            event</span>
                    </li>
                    <li class="benefit-item">
                        <i class="ti ti-check "></i>
                        <CircleCheck /><span>Priority or early access to event merchandise and exclusive items</span>
                    </li>
                </ul>
                <button class="btn-primary ticket-button" @click="purchaseTicket('VIP Pass', 160)" tabindex="0">
                    Buy VIP Pass
                </button>
            </article>

            <article class="ticket-item">
                <div class="ticket-content">
                    <header class="ticket-header">
                        <h2 class="ticket-title">Regular Pass</h2>
                        <span class="ticket-cost">120€</span>
                    </header>
                    <p class="ticket-description">
                        The Regular Pass grants you full access to the entire festival,
                        covering all events and days. Ideal for attendees who want to
                        immerse themselves in everything the festival offers, from
                        exhibitions to performances.
                    </p>
                </div>
                <ul class="ticket-benefits">
                    <li class="benefit-item">
                        <i class="ti ti-ticket "></i>
                        <CircleCheck /><span>Valid all three days and nights</span>
                    </li>
                    <li class="benefit-item">
                        <i class="ti ti-check "></i>
                        <CircleCheck /><span>Access to event spaces open to regular ticket holders</span>
                    </li>
                    <li class="benefit-item">
                        <i class="ti ti-check "></i>
                        <CircleCheck /><span>Shop from official vendors and event merchandise stands throughout the
                            entire event
                            duration</span>
                    </li>
                    <li class="benefit-item">
                        <i class="ti ti-check "></i>
                        <CircleCheck /><span>Freedom to attend on any or all events as per your schedule</span>
                    </li>
                </ul>
                <button class="btn-secondary ticket-button-second" @click="purchaseTicket('Regular Pass', 120)"
                    tabindex="0">
                    Buy Regular Pass
                </button>
            </article>
        </div>
    </div>
</template>

<script setup>
import { CircleCheck } from 'lucide-vue-next';
import { useTicketsStore } from '@/stores/tickets';
import { useUsersStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const ticketsStore = useTicketsStore();
const usersStore = useUsersStore();
const router = useRouter();

const purchaseTicket = (type, price) => {
    if (!usersStore.authenticatedUser) {
        alert('Please login to purchase tickets');
        router.push('/login');
        return;
    }

    try {

        let newId;
        do {
            newId = Math.floor(Math.random() * 999) + 1;
        } while (ticketsStore.getTicketById(newId.toString()));

        const ticketData = {
            id: newId.toString(),
            title: "HYPNØTICA 2025",
            date: type === 'Single Day' ? "FRIDAY 24th JANUARY" : "24th-26th JANUARY",
            name: usersStore.authenticatedUser.name,
            type: type,
            price: price,
            qrcode: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png',
            background: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d203ace7cd45f849cefbb792a778b82f5ecdd49de0e9aaf507667a936ff309fb?apiKey=3650e9b5644d4191adc714c61c50f709&'
        };

        ticketsStore.addTicket(
            ticketData.id,
            ticketData.title,
            ticketData.date,
            ticketData.name,
            ticketData.type,
            ticketData.qrcode,
            ticketData.background
        );

        alert('Ticket purchased successfully!');
        router.push('/account/tickets');
    } catch (error) {
        alert('Failed to purchase ticket: ' + error.message);
    }
};
</script>

<style scoped>
.tickets-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 48px;
    margin-top: 64px;
    background-color: var(--Main-Black, #010306);
}

.ticket-grid {
    display: flex;
    gap: 32px;
    margin-top: 32px;
    width: 100%;
    max-width: 1440px;
    justify-content: center;
}

.ticket-item {
    backdrop-filter: blur(100px);
    border: 1px solid var(--Gray-300, #868e95);
    border-radius: 20px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    max-width: 426px;
    background-color: rgba(1, 3, 6, 0.01);
    max-height: 647px;
    margin-top: 32px;
    align-items: center;
}

.ticket-item-vip {
    backdrop-filter: blur(100px);
    border: 1px solid var(--Gray-300, #ffffff);
    border-radius: 20px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    max-width: 426px;
    max-height: 736px;
    background-color: rgba(1, 3, 6, 0.01);
}

.ticket-header {
    margin-bottom: 12px;
}

.ticket-title {
    color: var(--Gray-100, #bec7ce);
    font-size: 32px;
    font-family: Aspekta250;
}

.ticket-cost {
    color: var(--Main-White, #fafafa);
    font-size: 48px;
    font-family: Aspekta500;
}


.ticket-description {
    color: var(--Gray-200, #a2aab1);
    letter-spacing: 0.64px;
    margin-bottom: 36px;
    font-size: 16px;
    font-family: Aspekta300;
}

.ticket-benefits {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0 0 auto;
}



.benefit-item svg {
    width: 18px;
    height: 18px;
    min-width: 18px;
    flex-shrink: 0;
}

.benefit-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--Main-White, #fafafa);
    font-size: 16px;
    font-family: Aspekta300;
}


.ti {
    display: none;
}

.ticket-button {
    margin-top: 24px;
}

.ticket-button-second {
    margin-top: 24px;
    font-family: Aspekta500;
    width: 378px;
}


@media (max-width: 991px) {
    .tickets-section {
        padding: 0 20px;
    }

    .tickets-heading {
        font-size: 100px;
    }

    .ticket-grid {
        flex-direction: column;
        align-items: center;
    }

    .ticket-item {
        width: 100%;
    }
}

@media (max-width: 640px) {
    .tickets-heading {
        font-size: 60px;
        -webkit-text-stroke: 2px var(--Gray-200, #a2aab1);
    }

    .faq-heading {
        font-size: 40px;
    }

    .faq-question {
        font-size: 24px;
    }
}
</style>