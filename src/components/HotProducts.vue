<template>
    <v-container class="grey lighten-5" fluid>

    <v-sheet
        class="mx-auto"
    >
    <h3 class="grey--text lighten-3 pl-4 pt-4">HOT PRODUCTS</h3>
        <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
        >
        
        <v-slide-item
            v-for="image in images"
            :key="image"
        >
            <v-hover v-slot:default="{ hover }">
            <v-card
                class="ma-4"
                width="200"
                height="200"
                :elevation="hover ? 8 : 1"    
            >

                <v-img
                    :src="image"
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
            </v-hover>
        </v-slide-item>
        </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>

export default {
  data(){
      return{
        model: null,
        images:[require('../assets/manga_zambales_2.jpg'),require('../assets/alaminos_longganisa.jpg'),require('../assets/bagnet.jpg'),
            require('../assets/isabela_binalay.jpg'),require('../assets/pastillas_bulacan.jpeg')],
      }
  },
  methods:{
      
  }
}
</script>

<style scoped>

</style>
