<template>
    <main class="news-page">
        <!-- Featured News Section -->
        <section class="featured-news">
            <NewsMainCard :imageSrc="mainNews?.mainImage" :imageAlt="mainNews?.title + ' image'" :date="mainNews?.date"
                :title="mainNews?.title" @click="handleNewsClick(mainNews?.id)" />
            <div class="secondary-news-container">
                <NewsSecundaryCard v-for="news in secondaryNews" :key="news.id" :imageSrc="news.mainImage"
                    :imageAlt="news.title + ' image'" :date="news.date" :title="news.title"
                    @click="handleNewsClick(news.id)" />
            </div>
        </section>

        <!-- Divider -->
        <div class="section-divider" role="separator"></div>

        <!-- All News Grid -->
        <section class="all-news">
            <div class="news-grid">
                <NewsCard v-for="news in allOtherNews" :key="news.id" :imageSrc="news.mainImage"
                    :imageAlt="news.title + ' image'" :date="news.date" :title="news.title"
                    :description="news.description" @click="handleNewsClick(news.id)" />
            </div>
        </section>
    </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import NewsMainCard from '@/components/NewsMainCard.vue'
import NewsSecundaryCard from '@/components/NewsSecundaryCard.vue'
import NewsCard from '@/components/NewsAllCard.vue'
import { useNewsStore } from '@/stores/news'

const router = useRouter()
const newsStore = useNewsStore()

const mainNews = computed(() => {
    const allNews = newsStore.getAllNews
    return allNews.length > 0 ? allNews[0] : null
})

const secondaryNews = computed(() => {
    const allNews = newsStore.getAllNews
    return allNews.slice(1, 6)
})

const allOtherNews = computed(() => {
    const allNews = newsStore.getAllNews
    return allNews.slice(6) // Get all news after the first 6
})

const handleNewsClick = (newsId) => {
    router.push(`/news/${newsId}`)
}
</script>

<style scoped>
.news-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 48px;
    margin-bottom: 64px;
}

.featured-news {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 32px;
    width: 100%;
    margin: 0 auto;
}

.secondary-news-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    max-width: 433px;
}

.section-divider {
    margin: 95px 0;
    width: 100%;
    max-width: 1344px;
    height: 1px;
    background: rgba(255, 255, 255, 1);
}

.news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    width: 100%;
    max-width: 1344px;
}

@media (max-width: 991px) {
    .news-grid {
        grid-template-columns: 1fr;
    }

    .section-divider {
        margin: 40px 0;
    }

    .featured-news {
        flex-direction: column;
        align-items: center;
    }
}
</style>