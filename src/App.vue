<template>
  <v-app light>
    
    <app-navbar></app-navbar>
    <v-content>
      <app-banner></app-banner>
      <app-top-products></app-top-products>
      <app-hot-products></app-hot-products>
      <app-daily-discover></app-daily-discover>

      <p>{{page}}</p>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="21"
           :total-visible="7"
          @next="next"
          @previous="previous"
        ></v-pagination>
      </div>

    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import TopProducts from './components/TopProducts';
import HotProducts from './components/HotProducts';
import DailyDiscover from './components/DailyDiscover';

export default {

  components: {
    'app-navbar':Navbar,
    'app-banner':Banner,
    'app-top-products': TopProducts,
    'app-hot-products': HotProducts,
    'app-daily-discover': DailyDiscover,
    'app-footer': Footer
  },

  data: () => ({
    //
    page: 1,
  }),
  methods:{
    next(){
    },
    previous(){
    }
  }
};
</script>

<style scoped>

</style>
