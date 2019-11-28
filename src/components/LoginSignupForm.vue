<template>
<div>
      <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on" class="caption" color="red">{{title}}</v-btn>
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
                    <v-text-field label="Email*" required v-model="email"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Password*" type="password" required v-model="password"></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="6" > 
                    <p class="caption" >*indicates required field</p>
                  </v-col>
                  <v-col cols="6" sm="6" > 
                    <p class="caption blue--text text-right" >Forgot Password</p>
                  </v-col>

                  <v-col cols="12" class="text-center">
                    <span>or Login as...</span>
                  </v-col>
                  <v-col cols="12" class="text-center">
                    <v-avatar size="42"  >
                      <img
                       @click="googleSignIn()"
                        src="../assets/google_icon.png"
                      >
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="dialog = false">Close</v-btn>
              <v-btn color="red" text @click="signIn">Login</v-btn>
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
                    <v-text-field label="Email*" required v-model="rEmail"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Password*" type="password" required v-model="rPassword"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Repeat Password*" type="password" required v-model="rRepeatPassword"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="dialog = false">Close</v-btn>
              <v-btn color="red" text @click="signUp">Sign Up</v-btn>
            </v-card-actions>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>


      
    </v-dialog>
</div>
</template>

<script>
import { db,dbFirestore } from '../firebasedb'


export default {
  props:['title'],
  data(){
      return{
        user: {},
        password:'',
        email:'',
        plEmail:'',
        rEmail:'',
        rPassword:'',
        rRepeatPassword:'',
        dialog: false,
        tab: null,
        errorMessage:'',
        items: [
          'Login', 'Sign Up'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
  },
  created(){

  },
  methods:{
      signIn(){
        db.auth().signInWithEmailAndPassword(this.email,this.password).then(()=>{
          if(db.auth().currentUser.emailVerified){
            window.console.log('email is verified')
            this.email = '';
            this.password = '';
            this.dialog  = false;
          }else{
            window.console.log('email is not verified')
            db.auth().signOut();
          }
        }).catch((err)=>{
            window.console.log(err.message)
        });
      },
      signUp(){
        var mAuth = db.auth();
        if(this.rPassword == this.rRepeatPassword){
          mAuth.createUserWithEmailAndPassword(this.rEmail,this.rRepeatPassword).then(()=>{
            
            mAuth.currentUser.sendEmailVerification().then(()=>{
              window.console.log('email verification sent');

              // create user data to firestore
              dbFirestore.collection('users').doc(mAuth.currentUser.uid).set({
                email: mAuth.currentUser.email,
                isMerchant: false
              }).then(function(){
                mAuth.signOut();
                window.console.log('created');
              }).catch(function(error){
                window.console.log(error.message);
                mAuth.signOut();
              });

              // clear form data
              this.rPassword = '';
              this.rRepeatPassword = '';
              this.rEmail = '';

              this.dialog = false;
            }).catch((err)=>{
              window.console.log(err.message);
              mAuth.signOut();
            });

          }).catch((error)=>{
            window.console.log(error.message)
          });
        }else{
          window.console.log('Password do not match');
        }
        
      },
      googleSignIn(){
        var provider = new db.auth().GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        window.console.log(provider)
      

      }
    
  }
}
</script>

<style scoped>
</style>
