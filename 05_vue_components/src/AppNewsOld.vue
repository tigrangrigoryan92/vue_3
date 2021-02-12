<template>
  <div class="container pt-1 ">
    <div class="card mb-1">
      <h2>Now is {{ now }}</h2>
      <p>Opened : {{ openRate }}</p>
      <strong>Read : {{ readRate }}</strong>
    </div>
    <AppNews
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :wasRead="item.wasRead"
      @open-card="openNews"
      @article-mark="articleMark"
      @unmark="unmark"
    />
  </div>
</template>

<script>
import AppNews from "@/AppNews";

export default {
  name: 'App',
  components: {
    AppNews,
  },
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: 'News number 1',
          id: 1,
          isOpen: false,
          wasRead: false,
        },
        {
          title: 'News number 2',
          id: 2,
          isOpen: false,
          wasRead: false,
        },
        {
          title: 'News number 3',
          id: 3,
          isOpen: false,
          wasRead: false,
        },
      ],
      openRate: 0,
      readRate: 0,
    }
  },
  provide() {
    return {
      title: 'All news list',
      news: this.news,
    }
  },
  methods: {
    openNews(data) {
      this.openRate++;
    },
    articleMark(id) {
      const idx = this.news.findIndex(el => el.id === id);
      this.news[idx].wasRead = true;
      this.readRate++;
    },
    unmark(id) {
      const idx = this.news.findIndex(el => el.id === id);
      this.news[idx].wasRead = false;
      this.readRate--;
    }
  }
}
</script>

<style scoped>
h2  {
  color: darkred;
}
</style>
