<template>
  <div>

    <div class="display-3">About</div>
    <v-img
      ref="image"
      :src="imgUrl"
      :lazy-src="imgUrl"
      aspect-ratio="1"
      class="grey lighten-2"
      >
    </v-img>
  </div>
</template>

<script>
import {dbStorage} from '../firebasedb'


export default {
  data(){
    return{
      imgUrl:'',
      self:this
    }
  },
  mounted(){
      dbStorage.ref('images/IMG20191031090958.jpg').getDownloadURL().then((url)=>{
        this.imgUrl = url;
      }).catch((error) => {
        window.console.log(error.message)
      })
  }
}
</script>

<style>

</style>