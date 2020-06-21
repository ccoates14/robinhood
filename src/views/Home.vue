<template>
  <div>
    <v-container max-width="30">
      <div class="d-flex mt-5">
        <div class="ml-5">
          <div><v-spacer></v-spacer> <portfolio-value></portfolio-value></div>
          <div class="mt-5">
            <v-responsive>
              <news-feed></news-feed>
            </v-responsive>
          </div>
        </div>
        <v-spacer></v-spacer>
        <stocks-owned class="mr-5"></stocks-owned>
      </div>
    </v-container>
  </div>
</template>

<script>
import stocksOwned from "@/components/Home/StocksOwned";
import portfolioValue from "@/components/Home/PortfolioValue";
import NewsFeed from "@/components/Home/NewsFeed";
export default {
  name: "Home",
  components: { stocksOwned, portfolioValue, NewsFeed },
};
</script>
