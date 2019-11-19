<template>
    <v-container fluid >

        <!-- XS Only -->
       <v-row
        v-if="$vuetify.breakpoint.xsOnly"
       >
            <v-col cols="12" sm="12" offset-sm="">
                <v-card flat class="">
                    <v-container fluid >
                    <h3 class="grey--text lighten-2">DAILY DISCOVER </h3>
                    <v-row class="pa-0">
                        <v-col
                            v-for="image in images"
                            :key="image"
                            class="d-flex child-flex"
                            cols="6"
                        
                            >
                            <v-hover v-slot:default="{ hover }">
                            <v-card  tile :elevation="hover ? 12 : 1">
                                <v-card flat tile class="d-flex"
                                >
                                    <v-img
                                        :src="image"
                                        :lazy-src="image"
                                        aspect-ratio="1"
                                        class="grey lighten-2"
                                        >
                                        
                                    <template v-slot:placeholder>
                                        <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                        >
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-row>
                                    </template>
                                    </v-img>
                                </v-card>
                                 
                            <p class="grey--text lighten-3 text-center ma-0">Product Name</p>
                            <v-row>
                                <v-col sm="6" class="pa-0 ma-0" >
                                    <p class=" red--text caption ma-0 pa-0 text-center">P1,000.00</p>
                                </v-col>
                                <v-col sm="6" class="pa-0 ma-0" >
                                    <p class="caption ma-0 pa-0 text-center">Stock: 34</p>
                                </v-col>
                            </v-row>
                            </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>

        <!-- Small Only -->
        <v-row
        v-if="$vuetify.breakpoint.smOnly"
       >
            <v-col cols="12" sm="12" offset-sm="">
                <v-card flat class="">
                    <v-container fluid >
                    <h3 class="grey--text lighten-2">DAILY DISCOVER </h3>
                    <v-row class="pa-4">
                        <v-col
                            v-for="image in images"
                            :key="image"
                            class="d-flex child-flex"
                            cols="4"
                        
                            >
                            <v-hover v-slot:default="{ hover }">
                            <v-card  tile :elevation="hover ? 12 : 1">
                                <v-card flat tile class="d-flex"
                                >
                                    <v-img
                                        :src="image"
                                        :lazy-src="image"
                                        aspect-ratio="1"
                                        class="grey lighten-2"
                                        >
                                        
                                    <template v-slot:placeholder>
                                        <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                        >
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-row>
                                    </template>
                                    </v-img>
                                </v-card>
                                 
                            <p class="grey--text lighten-3 text-center ma-0">Product Name</p>
                            <v-row>
                                <v-col sm="6" class="pa-0 ma-0" >
                                    <p class=" red--text caption ma-0 pa-0 text-center">P1,000.00</p>
                                </v-col>
                                <v-col sm="6" class="pa-0 ma-0" >
                                    <p class="caption ma-0 pa-0 text-center">Stock: 34</p>
                                </v-col>
                            </v-row>
                            </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>


        <!-- Medium Only -->
        <v-row
        v-if="$vuetify.breakpoint.mdOnly"
       >
            <v-col cols="12" sm="12" offset-sm="">
                <v-card flat class="">
                    <v-container fluid >
                    <h3 class="grey--text lighten-2">DAILY DISCOVER </h3>
                    <v-row class="pa-4">
                        <v-col
                            v-for="image in images"
                            :key="image"
                            class="d-flex child-flex"
                            cols="3"
                        
                            >
                            <v-hover v-slot:default="{ hover }">
                            <v-card  tile :elevation="hover ? 12 : 1">
                                <v-card flat tile class="d-flex"
                                >
                                    <v-img
                                        :src="image"
                                        :lazy-src="image"
                                        aspect-ratio="1"
                                        class="grey lighten-2"
                                        >
                                        
                                    <template v-slot:placeholder>
                                        <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                        >
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-row>
                                    </template>
                                    </v-img>
                                </v-card>
                                 
                            <p class="grey--text lighten-3 text-center ma-0">Product Name</p>
                            <v-row>
                                <v-col sm="6" class="pa-0 ma-0" >
                                    <p class=" red--text caption ma-0 pa-0 text-center">P1,000.00</p>
                                </v-col>
                                <v-col sm="6" class="pa-0 ma-0" >
                                    <p class="caption ma-0 pa-0 text-center">Stock: 34</p>
                                </v-col>
                            </v-row>
                            </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>

        


        <!-- Large and Up -->
        <v-row
        v-if="$vuetify.breakpoint.lgAndUp"
        >
            <v-col cols="12" sm="12" offset-sm="">
                <v-card flat class="">
                    <v-container fluid >
                    <h3 class="grey--text lighten-2">DAILY DISCOVER </h3>
                    <v-row class="pa-4">
                        <v-col
                            v-for="image in images"
                            :key="image"
                            class="d-flex child-flex"
                            cols="2"
                        
                            >
                            <v-hover v-slot:default="{ hover }">
                            <v-card  tile :elevation="hover ? 12 : 1">
                                <v-card flat tile class="d-flex"
                                >
                                    <v-img
                                        :src="image"
                                        :lazy-src="image"
                                        aspect-ratio="1"
                                        class="grey lighten-2"
                                        >
                                        
                                    <template v-slot:placeholder>
                                        <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                        >
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-row>
                                    </template>
                                    </v-img>
                                </v-card>
                                 
                            <p class="grey--text lighten-3 text-center ma-0">Product Name</p>
                            <v-row>
                                <v-col sm="6" class="pa-0 ma-0" >
                                    <p class=" red--text caption ma-0 pa-0 text-center">P1,000.00</p>
                                </v-col>
                                <v-col sm="6" class="pa-0 ma-0" >
                                    <p class="caption ma-0 pa-0 text-center">Stock: 34</p>
                                </v-col>
                            </v-row>
                            </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>







    
  </v-container>
</template>

<script>
import {dbStorage} from '../firebasedb'
export default {
  data(){
      return{
        model: null,
        imagesUrl:['abel_weaving_sm.jpg','alaminos_longganisa_sm.jpg','bagnet_sm.jpg','biko_bulacan_sm.jpg','cashey_nuts_bataan_sm.png'
            ,'hopya_ibanag_sm.jpg','ilocos_bagoong_sm.jpg','inatata_isabela_sm.jpg','isabela_binalay_sm.jpg','manga_zambales_2_sm.jpg',
                'manga_zambales_sm.jpg','moriecos_isabela_sm.jpg'],
        images:[],
      }
  },
  methods:{
      
  },
  created(){
      window.console.log("moounted!")

      this.imagesUrl.forEach(elmnt => {
        dbStorage.ref('images/'+elmnt).getDownloadURL().then((url)=>{
            this.images.push(url)
        }).catch((error) => {
            window.console.log(error.message)
        })
      });
  }
}
</script>


<style scoped>

</style>
