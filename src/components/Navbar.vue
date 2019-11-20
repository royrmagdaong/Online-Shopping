<template>
<div>

  <!-- AppBar -->
    <v-app-bar
      color=""
      light
      fixed
      app
      elevation="1"
    >
      
      <v-img
        src="../assets/logo.png"
        max-width="180"
        max-height="80"
        class=""
      ></v-img>

      <v-spacer></v-spacer>
      <v-btn icon router-link to="/cart"><v-icon>mdi-cart</v-icon></v-btn>
      <v-divider
        class="mx-4"
        vertical
      ></v-divider>
      
      <v-btn text router-link to="/" class="hidden-sm-and-down">Home</v-btn>
      <v-btn text router-link to="/about" class="hidden-sm-and-down">About</v-btn>
      <login-form title="Login" v-show="currentUser==null" class="hidden-sm-and-down"></login-form>
      <login-form title="Sign Up" v-show="currentUser==null" class="hidden-sm-and-down"></login-form>
      
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-avatar color="grey" size="36" v-show="currentUser!=null" class="hidden-sm-and-down" v-on="on">
              <img
                  class="grey"
                >
              </v-avatar>
          </template>
          <v-list>
            <v-list-item router-link to="/profile">
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item router-link to="/cart">
              <v-list-item-title>Cart</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout()" router-link to="/">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

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
          <v-list-item-avatar class="mr-2">
            <v-avatar color="grey" size="46">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class=" white--text ">{{currentUser ? currentUser.email : customerName}}</v-list-item-title>
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
            @click.stop="logout()"
            v-show="currentUser!=null"
            router-link
            to="/home"
          >
            <v-list-item-icon>
              <v-icon large>mdi-logout</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            router-link
            to="/login"
            v-show="currentUser==null"
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
            v-show="currentUser==null"
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
import {db} from '../firebasedb'


export default {
  props:['currentUser'],
  components:{
    'login-form':LoginForm
  },
  data(){
      return{
        drawer: null,
        dialog: false,
        customerName:'Customer name',
        product:{
          name:'bagnet',
          price:100,
          stock:10
        }
      }
  },
  methods:{
      logout(){
        db.auth().signOut()

      },
      sendData(){
        this.$emit('passData',this.product);
      }
  },
  created(){
    
  }

}
</script>

<style scoped>

</style>
