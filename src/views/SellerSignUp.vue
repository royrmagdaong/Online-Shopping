<template>
  <v-container fluid>
      <v-row>
          <v-col cols="12">
              <v-row justify="center" align="center" style="height:80vh;" class="mx-2">
                  <v-card>
                    <v-card-text>
                    <v-container>
                        <v-row>
                        <v-col cols="12">
                            <v-text-field label="Email*" required v-model="email"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Password*" type="password" required v-model="password"></v-text-field>
                            <v-text-field label="Repeat Password*" type="password" required v-model="rPassword"></v-text-field>
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
                        <v-row>
                            <v-col cols="6">
                                <v-btn block outlined >Clear</v-btn>  
                            </v-col>
                            <v-col cols="6" @click.prevent="signUpSeller">
                                <v-btn block outlined>Sign Up</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
              </v-row>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { db,dbFirestore } from '../firebasedb'

export default {
    data:()=>({
        email:'',
        rPassword:'',
        password:''
    }),
    methods:{
        signUpSeller(){
            var mAuth = db.auth();
            if(this.password == this.rPassword){
                mAuth.createUserWithEmailAndPassword(this.email,this.password).then(()=>{
            
                    mAuth.currentUser.sendEmailVerification().then(()=>{
                        window.console.log('email verification sent');

                        // create user data to firestore
                        dbFirestore.collection('users').doc(mAuth.currentUser.uid).set({
                            email: mAuth.currentUser.email,
                            isMerchant: true
                            
                        }).then(function(){
                            mAuth.signOut();
                            window.console.log('created');
                        }).catch(function(error){
                            window.console.log(error.message);
                            mAuth.signOut();
                        });

                        // clear form data
                        this.password = '';
                        this.rPassword = '';
                        this.email = '';

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
        }
    }
}
</script>

<style>

</style>