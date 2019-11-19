<template>
  <v-app light>
    
    <app-navbar :currentUser="currentUser"></app-navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {db} from './firebasedb'


export default {

  components: {
    'app-navbar':Navbar,
    'app-footer': Footer
  },

  data: () => ({
    //
    currentUser:{},

  }),
  methods:{
  },
  created(){
    db.auth().onAuthStateChanged(()=>{
      if(db.auth().currentUser == null){
        window.console.log("null");
        this.currentUser = db.auth().currentUser;
      }else{
        window.console.log(db.auth().currentUser.email);
        this.currentUser = db.auth().currentUser;
      }
    });
  }
};
</script>

<style scoped>

</style>
