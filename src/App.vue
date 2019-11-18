<template>
  <v-app light>
    
    <app-navbar></app-navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default {

  components: {
    'app-navbar':Navbar,
    'app-footer': Footer
  },

  data: () => ({
    //
  }),
  methods:{
  }
};
</script>

<style scoped>

</style>
