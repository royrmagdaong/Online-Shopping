<template>
<div>

  <!-- for extra small screen only -->
  <v-container class="grey lighten-5" fluid v-if="$vuetify.breakpoint.xsOnly">

    <v-sheet
        class="mx-auto"
    >
    <h3 class="grey--text lighten-3 pl-4 pt-4">TOP PRODUCTS</h3>
        <v-slide-group
        v-model="model"
        class="pa-2"
        active-class="success"
        >
        
        <v-slide-item
            v-for="image in images"
            :key="image"
        >
            <v-hover v-slot:default="{ hover }">
                <v-card
                class="ma-2"
                width="120"
                height="120"    
                :elevation="hover ? 8 : 1"
                
                >
                <v-img
                    :src="image"
                    aspect-ratio="1"
                ></v-img>
                    
                </v-card>
            </v-hover>
        </v-slide-item>
        </v-slide-group>
    </v-sheet>
  </v-container>




  <!-- for medium and small screen only -->
  <v-container class="grey lighten-5" fluid v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.smOnly">

    <v-sheet
        class="mx-auto"
    >
    <h3 class="grey--text lighten-3 pl-4 pt-4">TOP PRODUCTS</h3>
        <v-slide-group
        v-model="model"
        class="pa-2"
        active-class="success"
        show-arrows
        >
        
        <v-slide-item
            v-for="image in images"
            :key="image"
        >
            <v-hover v-slot:default="{ hover }">
                <v-card
                class="ma-3"
                width="180"
                height="180"    
                :elevation="hover ? 8 : 1"
                
                >
                <v-img
                    :src="image"
                    aspect-ratio="1"
                ></v-img>
                    
                </v-card>
            </v-hover>
        </v-slide-item>
        </v-slide-group>
    </v-sheet>
  </v-container>

  <!-- Large and Up screen -->
    <v-container class="grey lighten-5" fluid v-if="$vuetify.breakpoint.lgAndUp">

    <v-sheet
        class="mx-auto"
    >
    <h3 class="grey--text lighten-3 pl-4 pt-4">TOP PRODUCTS</h3>
        <v-slide-group
        v-model="model"
        class="pa-2"
        active-class="success"
        >
        
        <v-slide-item
            v-for="image in images"
            :key="image"
        >
            <v-hover v-slot:default="{ hover }">
                <v-card
                class="ma-3"
                width="200"
                height="200"    
                :elevation="hover ? 8 : 1"
                
                >
                <v-img
                    :src="image"
                    aspect-ratio="1"
                ></v-img>
                    
                </v-card>
            </v-hover>
        </v-slide-item>
        </v-slide-group>
    </v-sheet>
  </v-container>

  
</div>
    
</template>

<script>

export default {
  data(){
      return{
        model: null,
        images:[require('../assets/manga_zambales_2.jpg'),require('../assets/alaminos_longganisa.jpg'),require('../assets/bagnet.jpg'),
            require('../assets/isabela_binalay.jpg'),require('../assets/pastillas_bulacan.jpeg'),require('../assets/bagnet.jpg'),
            require('../assets/isabela_binalay.jpg'),require('../assets/pastillas_bulacan.jpeg'),require('../assets/bagnet.jpg'),
            require('../assets/isabela_binalay.jpg'),require('../assets/pastillas_bulacan.jpeg')],
      }
  },
  methods:{
      
  }
}
</script>

<style scoped>

</style>
