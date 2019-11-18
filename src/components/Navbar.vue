<template>
<div>
    <v-app-bar
      color=""
      light
      fixed
      app
    >
      
      <v-img
        src="../assets/logo.png"
        max-width="180"
        max-height="80"
        class=""
      ></v-img>

      <v-spacer></v-spacer>

      <v-toolbar-item class="hidden-sm-and-down">
          <v-btn text router-link to="/">Home</v-btn>
          <v-btn text router-link to="/about">About</v-btn>
          <v-btn text>Login</v-btn>
          <v-btn text>Sign Up</v-btn>
      </v-toolbar-item>
      <v-toolbar-item class="hidden-md-and-up">
          <v-btn text>MENU</v-btn>
      </v-toolbar-item>

      
    </v-app-bar>

</div>
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
      
  },

}
</script>

<style scoped>

</style>
