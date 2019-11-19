<template>
<div>

  <!-- AppBar -->
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
          <!-- <v-btn text >Login</v-btn> -->
          <v-btn text class="ma-0 pa-0"><login-form title="Login"></login-form></v-btn>
          <v-btn text class="ma-0 pa-0"><login-form title="Sign Up"></login-form></v-btn>
      </v-toolbar-item>
      <v-toolbar-item class="hidden-md-and-up">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-toolbar-item>
    </v-app-bar>

<!-- Navigation Drawer-->
  <v-sheet
    >
      <v-navigation-drawer
        v-model="drawer"
        temporary
        fixed
        width="80%"
      >
      <!-- List for Xtra small -->
        <v-list-item class="pa-4 red hidden-sm-and-up" >
          <v-list-item-avatar class="ml-2">
            <v-avatar color="grey" size="62">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="title white--text">Customer Name</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- List for Small -->
        <v-list-item class="red hidden-xs-only pa-8" >
          <v-list-item-avatar class="ml-3">
            <v-avatar color="grey" size="98">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content class="ml-5">
            <v-list-item-title class="display-1 white--text">Customer Name</v-list-item-title>
          </v-list-item-content>
        </v-list-item>



        <v-divider></v-divider>

      <!-- list for xtra small -->
        <v-list class="hidden-sm-and-up">
          <v-list-item
            link
            router-link
            to="/"
          >
            <v-list-item-icon>
              <v-icon x-large>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            router-link
            to="/about"
          >
            <v-list-item-icon>
              <v-icon x-large>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            router-link
            to="/login"
          >
            <v-list-item-icon>
              <v-icon large>mdi-login</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            router-link
            to="/register"
          >
            <v-list-item-icon>
              <v-icon large>mdi-login</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        


        <!-- list for small -->
        <v-list class="hidden-xs-only">
          <v-list-item
            link
            router-link
            to="/"
            class="pa-5"
          >
            <v-list-item-icon>
              <v-icon x-large>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="headline">Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            router-link
            to="/about"
            class="pa-5"
          >
            <v-list-item-icon>
              <v-icon x-large>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="headline">About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            router-link
            to="/login"
            class="pa-5"
          >
            <v-list-item-icon>
              <v-icon x-large>mdi-login</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="headline">Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            router-link
            to="/register"
            class="pa-5"
          >
            <v-list-item-icon>
              <v-icon x-large>mdi-login</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="headline">Register</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>
    </v-sheet>


</div>
</template>

<script>
import LoginForm from './LoginSignupForm'


export default {
  components:{
    'login-form':LoginForm
  },
  data(){
      return{
        drawer: null,
        dialog: false,
        
      }
  },
  methods:{
      
  },

}
</script>

<style scoped>

</style>
