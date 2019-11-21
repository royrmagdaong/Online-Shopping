<template>
  <div>
    <v-row
        >
            <v-col cols="12" sm="12" offset-sm="">
                <v-card flat class="">
                    <v-container fluid >
                    <h3 class="red--text text--lighten-2 text-center display-1">CART ITEMS </h3>
                    <v-row class="pa-4">
                        <v-col
                            v-for="image in getCartItems"
                            :key="image"
                            class="d-flex child-flex"
                            cols="6"
                            >
                            <!-- <v-card
                              class="mx-auto"
                            >
                              <v-img
                                :src="image"
                                height="200px"
                              ></v-img>

                              <v-card-title>
                                Top western road trips
                              </v-card-title>

                              <v-card-subtitle>
                                1,000 miles of wonder
                              </v-card-subtitle>

                              <v-card-actions>
                                <v-btn color="red" large icon><span class="title">+</span></v-btn>
                                <v-btn color="red" large icon><span class="title">-</span></v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="red" text>REMOVE</v-btn>
                              </v-card-actions>
                            </v-card> -->
                            <p>{{image}}</p>
                            
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  computed:{
    getCartItems(){
      return this.$store.getters.getCartItems;
    }
  }
}
</script>

<style>

</style>