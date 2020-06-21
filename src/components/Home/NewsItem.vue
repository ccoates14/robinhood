<template>
  <v-card @click="openLink" max-width="1000">
    <v-card-title primary-title>
      {{ title }}
    </v-card-title>
    <v-img max-width="300" max-height="300" :src="imageLink"> </v-img>
    <v-card-text>
      {{ body }}
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  computed: {
    apiKey() {
      return "0e23556704454cc78f3b2a299e1b8d10";
    },
  },
  data() {
    return {
      newsLink: "",
      imageLink: "",
      title: "",
      body: "",
    };
  },
  methods: {
    openLink() {
      window.open(this.newsLink, "_blank");
    },
  },
  created() {
    this.$axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + this.apiKey
      )
      .then((resp) => {
        try {
          let articles = resp?.data?.articles;
          let article = articles[Math.floor(articles.length * Math.random())];
          if (article) {
            this.title = article.title ?? "";
            this.body = article.body ?? "";
            this.imageLink = article.urlToImage ?? "";
            this.newsLink = article.url;
          }
        }
        catch (err){
            console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
