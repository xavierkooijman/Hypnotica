<template>
  <img class="blur-gradiant" src="../../assets/images/Blur gradient.svg" alt="Blur Gradient" />
  <img class="blur-gradiant-2" src="../../assets/images/Blur gradient.svg" alt="Blur Gradient" />
  <img class="blur-gradiant-3" src="../../assets/images/Blur gradient.svg" alt="Blur Gradient" />
  <article class="article-container" v-if="currentNews">
    <!-- Hero Image -->
    <img loading="lazy" :src="currentNews.mainImage" class="hero-image"
      :alt="currentNews.title + ' main stage with dramatic lighting and crowd'" />
    <div class="article-header">
      <h1 class="article-title">{{ currentNews.title }}</h1>
      <time :datetime="currentNews.date" class="article-date">{{ formattedDate }}</time>
    </div>
    <section class="article-content">
      <!-- Part 1 of Content -->
      <p class="article-text" v-for="(line, index) in currentNews.contentPart1" :key="'part1-' + index">
        {{ line }}
      </p>
      <img loading="lazy" :src="currentNews.secondaryImages[0]" class="content-image"
        alt="Festival attendees at Hypnotica" />

      <!-- Part 2 of Content -->
      <p class="article-text" v-for="(line, index) in currentNews.contentPart2" :key="'part2-' + index">
        {{ line }}
      </p>
      <img loading="lazy" :src="currentNews.secondaryImages[1]" class="content-image"
        alt="Sustainable stage setup at Hypnotica Festival" />

      <!-- Part 3 of Content -->
      <p class="article-text" v-for="(line, index) in currentNews.contentPart3" :key="'part3-' + index">
        {{ line }}
      </p>
    </section>
    <div class="section-divider" role="separator"></div>

    <!-- More News -->
    <h2 class="more-news-heading">More News</h2>
    <div class="news-card-container">
      <NewsCard v-for="newsItem in moreNews" :key="newsItem.id" :imageSrc="newsItem.mainImage"
        :imageAlt="newsItem.title + ' image'" :date="newsItem.date" :title="newsItem.title"
        :description="newsItem.description" @click="handleNewsClick(newsItem.id)" />

    </div>
  </article>

  <!-- Fallback message when the news is not found -->
  <p v-else>Sorry, the news article could not be found.</p>
</template>

<script>
import { useNewsStore } from "@/stores/news";  // Importando a store do Pinia
import NewsCard from "@/components/NewsAllCard.vue";

export default {
  components: {
    NewsCard,
  },
  computed: {
    // Acesso à store do Pinia
    newsStore() {
      return useNewsStore();  // Acesso correto à store
    },

    // Obtendo o ID da notícia da rota
    newsId() {
      const id = this.$route.params.newId;  // Acesso ao parâmetro da URL
      console.log("newsId from route:", id);  // Logando o valor do newsId
      return id;  // Retorna o ID
    },

    // Notícia atual (selecionada pela ID)
    currentNews() {
      if (!this.newsId) return null;  // Se o newsId não estiver disponível, retorna null

      const news = this.newsStore.getNewsById(this.newsId);

      if (!news) {
        return null;  // Se a notícia não for encontrada, retorna null
      }

      // Dividindo o conteúdo em 3 partes, mantendo as linhas separadas por quebras
      const contentLines = news.content.split("\n");
      const part1 = contentLines.slice(0, Math.ceil(contentLines.length / 3));
      const part2 = contentLines.slice(Math.ceil(contentLines.length / 3), Math.ceil(contentLines.length * 2 / 3));
      const part3 = contentLines.slice(Math.ceil(contentLines.length * 2 / 3));

      return {
        ...news,
        contentPart1: part1,
        contentPart2: part2,
        contentPart3: part3,
      };
    },

    // Formatação da data
    formattedDate() {
      if (this.currentNews) {
        const date = new Date(this.currentNews.date);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
      return "";  // Retorna uma string vazia caso currentNews seja null
    },

    // As três primeiras notícias para o "More News", excluindo a notícia atual
    moreNews() {
      const store = useNewsStore(); // Acesso correto à store
      return store.getAllNews.filter(newsItem => newsItem.id !== this.newsId).slice(0, 3);  // Exclui a notícia atual
    },
  },
  methods: {
    // Função chamada ao clicar em uma notícia
    handleNewsClick(newsId) {
      this.$router.push(`/news/${newsId}`);
    },
  },
};
</script>

<style scoped>
.article-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
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
  bottom: -1400px;
  rotate: 180deg;
}

.blur-gradiant-3 {
  position: absolute;
  z-index: -1;
  top: 2000px;
  right: 0;
}

.hero-image,
.content-image {
  width: 100%;
  border-radius: 15px;
  margin: 32px 0 0;
  max-width: 1344px;
}

.hero-image {
  aspect-ratio: 2.28;
}

.content-image {
  aspect-ratio: 2.02;
  max-width: 1114px;
  margin: 48px 0 0;
}

.article-header {
  display: flex;
  margin: 32px 0 0;
  width: 100%;
  max-width: 1344px;
  flex-direction: column;
  font-family: Aspekta, sans-serif;
  text-align: left;
}

.article-title {
  color: var(--Main-White);
  font: 64px Aspekta800, sans-serif;
  margin: 0 0 0 37px;
}

.article-date {
  color: var(--gray200);
  font: 24px Aspekta250, sans-serif;
  margin: 16px 0 0 40px;
}

.article-text {
  color: var(--gray100);
  letter-spacing: 1.2px;
  margin: 48px auto 0;
  width: 800px;
  font: 24px Aspekta300, sans-serif;
  text-align: center;
}

.section-divider {
  margin: 95px 0 0;
  width: 1344px;
  height: 1px;
  border: 1px solid rgba(255, 255, 255, 1);
}

.more-news-heading {
  color: var(--Main-White);
  text-align: center;
  margin: 96px auto 0;
  font: 64px Aspekta600, sans-serif;
}

.news-card-container {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  margin-top: 64px;
  margin-bottom: 64px;
  max-width: 1344px;
  width: 100%;
}

@media (max-width: 991px) {

  .hero-image,
  .content-image {
    max-width: 100%;
  }

  .content-image {
    margin-top: 40px;
  }

  .article-header {
    max-width: 100%;
  }

  .article-title {
    font: 40px Aspekta800, sans-serif;
  }

  .article-text {
    font: 20px Aspekta300, sans-serif;
  }

  .section-divider {
    margin-top: 40px;
  }

  .more-news-heading {
    font: 40px Aspekta600, sans-serif;
    margin-top: 40px;
  }


  .news-card-container {
    flex-direction: column;
    gap: 32px;
    align-items: center;
  }
}
</style>
