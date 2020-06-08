<template>
  <v-app>
    <v-app-bar app>
      <v-img
        class="mr-5"
        src="./assets/robinhoodicon.jpg"
        max-height="40"
        max-width="40"
        contain
        @click="reloadSite"
        style="cursor: pointer;"
      ></v-img>

      <div max-width="40" class="ml-5">
        <v-text-field
          clearable
          flat
          solo-inverted
          hide-details
          label="Search"
          dense
        ></v-text-field>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="primary" class="ml-5" @click="$store.dispatch('END_DAY')">End Day</v-btn>
      <v-tabs color="green" right>
         <v-tab router to="/">Home</v-tab>
        <v-tab router to="/Stocks">Stocks</v-tab>
        <v-tab router to="/Profile">Profile</v-tab>
        <v-tab router to="/Cash">Cash</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-content>
       <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  methods: {
    reloadSite() {
      location.replace(location.origin);
    },
  },

  data: () => ({
    //
  }),
  created() {},
};
</script>
