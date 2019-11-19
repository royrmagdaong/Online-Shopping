<template>
  <div>
      <!-- <app-banner v-if="$vuetify.breakpoint.smAndUp"></app-banner> -->
      <app-banner></app-banner>
      <app-top-products></app-top-products>
      <app-hot-products></app-hot-products>
      <app-daily-discover></app-daily-discover>
  </div>
</template>

<script>
import Banner from '../components/Banner';
import TopProducts from '../components/TopProducts';
import HotProducts from '../components/HotProducts';
import DailyDiscover from '../components/DailyDiscover';


export default {
    components:{
        'app-banner': Banner,
        'app-top-products': TopProducts,
        'app-hot-products': HotProducts,
        'app-daily-discover':DailyDiscover
    },
    data(){
        return{
        }
    }
}
</script>

<style>

</style>