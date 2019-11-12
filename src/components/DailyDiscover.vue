<template>
    <v-container fluid >
        <v-row>
            <v-col cols="12" sm="12" offset-sm="">
                <v-card flat class="grey lighten-5">
                    <v-container fluid >
                    <h3 class="grey--text lighten-2">DAILY DISCOVER</h3>
                    <v-row class="pa-4">
                        <v-col
                            v-for="n in 60"
                            :key="n"
                            class="d-flex child-flex"
                            cols="2"
                        
                            >
                            <v-card  tile>
                                <v-card flat tile class="d-flex">
                                    <v-img
                                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
                            
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
  </v-container>
</template>

<script>

export default {
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
