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
        max-width="200"
        max-height="100"
      ></v-img>

      <v-spacer></v-spacer>

      <app-signup-form></app-signup-form>
      <app-login-form></app-login-form>
      
    </v-app-bar>

</div>
</template>

<script>
import SignUpForm from './SignUpForm.vue'
import LoginForm from './LoginForm.vue'


export default {
  components:{
    'app-signup-form':SignUpForm,
    'app-login-form':LoginForm,
  },
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
