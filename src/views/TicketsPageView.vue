<template>
    <div>
        <h1 class="outline-title">TICKETS</h1>
        <Tickets />
        <div class="faq-container">
            <div class="faq-content">
                <h1 class="title">What ticket suits me best?</h1>
                <div class="faq-list">
                    <div v-for="(item, index) in ticketItems" :key="index" class="faq-item">
                        <button class="faq-button" :aria-expanded="activeIndex === index" @click="toggleQuestion(index)">
                            <span>{{ item.question }}</span>
                            <ChevronDown 
                                class="faq-icon" 
                                :class="{ 'faq-icon-active': activeIndex === index }"
                                aria-hidden="true" 
                            />
                        </button>
                        <div class="faq-answer" :class="{ 'faq-answer-active': activeIndex === index }">
                            {{ item.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tickets from '@/components/Tickets.vue';
import { ChevronDown } from 'lucide-vue-next';
export default {
    components: {
        Tickets,
        ChevronDown
    },
    data() {
        return {
            activeIndex: null,
            ticketItems: [
                {
                    question: 'When should I choose a Single Day ticket?',
                    answer: 'A Single Day ticket is perfect if you want to experience the festival for just one specific day. This is ideal for those with limited time or who want to attend specific performances scheduled for a particular day.'
                },
                {
                    question: 'What are the benefits of a Regular Pass?',
                    answer: 'The Regular Pass gives you complete access to all three days of the festival. Its ideal if you want to fully immerse yourself in the festival experience and dont want to miss any performances.'
                },
                {
                    question: 'Is the VIP Pass worth it?',
                    answer: 'The VIP Pass offers the ultimate festival experience with exclusive benefits like fast-track entry, access to VIP areas, priority merchandise access, and dedicated assistance. Its perfect for those seeking a premium experience.'
                }
            ]
        }
    },
    methods: {
        toggleQuestion(index) {
            this.activeIndex = this.activeIndex === index ? null : index
        }
    }
}
</script>

<style scoped>
.title {
    font-size: 64px;
    font-family: Aspekta300;
    margin-top: 40px;
    text-align: center;
}

.faq-container {
    background: var(--Main-Black, #010306);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: Aspekta, sans-serif;
}

.faq-content {
    align-self: center;
    display: flex;
    width: 100%;
    max-width: 1184px;
    flex-direction: column;
    padding: 0 48px;
}

.faq-list {
    display: flex;
    margin-top: 64px;
    flex-direction: column;
    font-size: 32px;
    color: var(--Main-White, #fafafa);
    margin-bottom: 191px;
}

.faq-item {
    border-top: 1px solid var(--Gray-500, #52595f);
    border-bottom: 1px solid var(--Gray-500, #52595f);
    margin-top: -1px;
}

.faq-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 24px;
    background: transparent;
    border: none;
    color: inherit;
    font-size: 32px;
    font-family: Aspekta250;
    cursor: pointer;
    text-align: left;
}

.faq-icon {
    transition: transform 0.3s ease;
    flex-shrink: 0;
}

.faq-icon-active {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s ease-out;
    padding: 0 24px;
    color: var(--Gray-400, #6b737a);
    font-family: Aspekta250;
    font-size: 24px;
}

.faq-answer-active {
    max-height: 500px;
    opacity: 1;
    padding: 16px 24px 32px;
}
</style>