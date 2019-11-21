<template>
  <div>
    <!-- For extra small only -->
    <!-- <v-card class="" v-if="$vuetify.breakpoint.xsOnly"> -->
    <v-card class="hidden-sm-and-up">
    <v-container >
      <v-row>
       
        <v-col cols="12" sm="12"> 
          <v-img
            :src="getViewProduct" width="100%"
            aspect-ratio="1"
            ></v-img>
        </v-col>
        <v-col cols="12" sm="12"> 
          <div class="">
            <v-row class="ma-0 pa-0">
            <v-col cols="6" sm="6" class="ma-0 pa-0"><p class="title ma-0">Product Name</p></v-col>
            <v-col cols="6" sm="6" class="ma-0 pa-0"><p class="ma-0">Price: 1000.0</p></v-col>
            </v-row>
            <p class="ma-0">Product Description</p>
            <p class="ml-4 body-2">You know what's sucky about regular flashlights? They only come in two colors: white or that yellowish-white that reminds us of the teeth of an avid coffee drinker. What fun is that kind of flashlight? We'll answer that: NO FUN AT ALL.</p>
          </div>
          <v-btn class="red ma-2 white--text" @click="addToCart(getViewProduct)">Add to Cart</v-btn>
          <v-btn class="red ma-2 white--text">Buy</v-btn>
          
        </v-col>
      </v-row>
    </v-container>
    </v-card>



    <!-- For small and Up -->
    <!-- <v-card class="ma-2 pa-5" v-if="!$vuetify.breakpoint.xsOnly">  -->
    <v-card class="ma-2 pa-5 hidden-xs-only"> 
    <v-container >
      <v-row>
       
        <v-col cols="6" sm="6"> 
          <v-img
            :src="getViewProduct" width="400"
            aspect-ratio="1"
            ></v-img>
        </v-col>
        <v-col cols="6" sm="6"> 
          <div>
            <p class="title">Product Name</p>
            <p>Price: 1000.0</p>
            <p>Product Description</p>
            <p class="ml-2 body-2">You know what's sucky about regular flashlights? They only come in two colors: white or that yellowish-white that reminds us of the teeth of an avid coffee drinker. What fun is that kind of flashlight? We'll answer that: NO FUN AT ALL. You know what is fun? Using the Multi-Color LED Flashlight to cast a sickly green glow over your face while telling a zombie story around a campfire. No campfire? Make a fake one with the orange light!</p>
          </div>
          <v-btn class="red ma-2 white--text" @click="addToCart(getViewProduct)">Add to Cart</v-btn>
          <v-btn class="red ma-2 white--text">Buy</v-btn>
          
        </v-col>
      </v-row>
    </v-container>
    </v-card>

  </div>
            
</template>

<script>
export default {
    data(){
        return{
        }
        
    },
    computed:{
      getViewProduct(){
        return this.$store.getters.getViewProduct;
      }
    },
    methods:{
      addToCart(val){
        this.$store.dispatch('setCartItems',val);
      }
    }
}
</script>

<style>

</style>