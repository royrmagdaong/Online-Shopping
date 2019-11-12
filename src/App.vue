<template>
  <v-app light>
    
    <app-navbar></app-navbar>
    <v-content>
      <app-banner></app-banner>
      <app-top-products></app-top-products>
      <app-hot-products></app-hot-products>
      <app-daily-discover></app-daily-discover>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TopProducts from './components/TopProducts';
import HotProducts from './components/HotProducts';
import DailyDiscover from './components/DailyDiscover';

export default {

  components: {
    'app-navbar':Navbar,
    'app-banner':Banner,
    'app-top-products': TopProducts,
    'app-hot-products': HotProducts,
    'app-daily-discover': DailyDiscover
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>
