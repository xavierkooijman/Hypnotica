<template>
    <img class="blur-gradiant" src="../assets/images/Blur gradient.svg" alt="Blur Gradient" />
    <img class="blur-gradiant-2" src="../assets/images/Blur gradient.svg" alt="Blur Gradient" />
    <div class="faq-container">
        <div class="faq-content">
            <h1 class="outline-title">FAQ</h1>
            <div class="faq-subtitle">
                <span>Got questions?</span><br /><span>We have answers.</span>
            </div>
            <div class="faq-list">
                <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
                    <button class="faq-button" :aria-expanded="activeIndex === index" @click="toggleQuestion(index)">
                        <span>{{ item.question }}</span>
                        <ChevronDown class="faq-icon" :class="{ 'faq-icon-active': activeIndex === index }"
                            aria-hidden="true" />
                    </button>
                    <div class="faq-answer" :class="{ 'faq-answer-active': activeIndex === index }">
                        {{ item.answer }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ChevronDown } from 'lucide-vue-next';
export default {
    name: 'FaqPage',
    data() {
        return {
            activeIndex: null,
            faqItems: [
                {
                    question: 'What is Hypnøtica?',
                    answer: 'Hypnøtica is envisioned as an immersive and transformative festival that serves as a beacon for the electronic music world. It combines cutting-edge sounds with forward-thinking education and innovation. Spanning three electrifying days and nights, the festival is hosted across Berlin’s iconic venues, featuring over 100 performances. The event not only celebrates the current vibrancy of electronic music but also aims to inspire the next generation of creators and industry professionals.'
                },
                {
                    question: 'When does Hypnotica take place?',
                    answer: 'Hypnøtica takes place from January 24th to 26th, 2025.'
                },
                {
                    question: 'Where is the festival located?',
                    answer: 'The festival is hosted across various iconic venues throughout Berlin, Germany.'
                }
            ]
        }
    },
    methods: {
        toggleQuestion(index) {
            this.activeIndex = this.activeIndex === index ? null : index
        }
    },
    components: {
        ChevronDown,
    },
}
</script>

<style scoped>
.faq-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: Aspekta, sans-serif;
    min-height: 100vh;
    margin-bottom: 146px;        
}

.blur-gradiant {
  position: absolute;
  z-index: -1;
  bottom: -300px;
  right: 0;
}

.blur-gradiant-2 {
  position: absolute;
  z-index: -1;
  bottom: -700px;
  rotate: 180deg;
}

.faq-content {
    align-self: center;
    display: flex;
    margin-top: 58px;
    width: 100%;
    max-width: 1184px;
    flex-direction: column;
    padding: 0 48px;
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

.faq-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 24px;
    background: transparent;
    border: none;
    color: inherit;
    font: inherit;
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

.faq-subtitle {
    color: var(--Main-White, #fafafa);
    font-size: 48px;
    font-family: Aspekta300;
    line-height: 55px;
    margin-top: 24px;
}

.faq-list {
    display: flex;
    margin-top: 64px;
    flex-direction: column;
    font-size: 32px;
    color: var(--Main-White, #fafafa);
    font-family: Aspekta250;
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
    font: inherit;
    cursor: pointer;
}

.faq-icon {
    color: var(--Gray-400, #6b737a);
    transition: transform 0.3s ease;
}

.faq-icon-active {
    transform: rotate(180deg);
}

@media (max-width: 991px) {
    .faq-content {
        padding: 0 32px;
        margin-top: 40px;
    }

    .faq-title {
        font-size: 120px;
    }

    .faq-subtitle {
        font-size: 40px;
        line-height: 48px;
    }

    .faq-list {
        margin-top: 48px;
        font-size: 28px;
    }
}

@media (max-width: 640px) {
    .faq-content {
        padding: 0 24px;
    }

    .faq-title {
        font-size: 64px;
        -webkit-text-stroke-width: 2px;
    }

    .faq-subtitle {
        font-size: 32px;
        line-height: 40px;
    }

    .faq-list {
        font-size: 24px;
    }

    .faq-button {
        padding: 24px 16px;
    }
}
</style>