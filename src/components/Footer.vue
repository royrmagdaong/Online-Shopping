<template>
<v-footer
    light
    padless
  >
    <v-card 
      elevation="0"
      flat
      tile
      width="100%"
      class=" lighten-1 white--text text-center pt-4"
    >

      <v-card-text class="pt-0 d-flex justify-center">
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="">
        {{ new Date().getFullYear() }} — <strong>UpNorth</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>


export default {
  components:{
  },
  data(){
      return{
      }
  },
  methods:{
      
  }
}
</script>

<style scoped>

</style>
