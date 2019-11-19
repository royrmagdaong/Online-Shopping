<template>
<div>
      <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">{{title}}</v-btn>
      </template>

    <v-card>

      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="red"
        dark
        v-if="title==='Login'"
      >
       <v-tabs-slider></v-tabs-slider>
        <v-tab href="#tab-0" class="red--text">
          Login
        </v-tab>
        <v-tab href="#tab-1" class="red--text">
          Sign Up
        </v-tab>
      </v-tabs>

      <v-tabs
      v-model="tab"
        background-color="transparent"
        color="red"
        dark
        v-else
      >
       <v-tabs-slider></v-tabs-slider>
        <v-tab href="#tab-1" class="red--text">
          Sign Up
        </v-tab>
        <v-tab href="#tab-0" class="red--text">
          Login
        </v-tab>
      </v-tabs>

<!-- Tab 1/ Login tab -->
      <v-tabs-items v-model="tab" >
        <v-tab-item value="tab-0"
        >
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Password*" type="password" required></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="6" > 
                    <p class="caption" >*indicates required field</p>
                  </v-col>
                  <v-col cols="6" sm="6" > 
                    <p class="caption blue--text text-right" >Forgot Password</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="dialog = false">Close</v-btn>
              <v-btn color="red" text @click="dialog = false">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-tab-item>

<!-- Tab 2 / Sign Up tab -->
        <v-tab-item value="tab-1"
        >
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  
                  <v-col cols="12">
                    <v-text-field label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Password*" type="password" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Repeat Password*" type="password" required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="dialog = false">Close</v-btn>
              <v-btn color="red" text @click="dialog = false">Sign Up</v-btn>
            </v-card-actions>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>


      
    </v-dialog>
</div>
</template>

<script>

export default {
  props:['title'],
  data(){
      return{
        dialog: false,
        tab: null,
        items: [
          'Login', 'Sign Up'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
  },
  methods:{
      
  }
}
</script>

<style scoped>
</style>
