<template>
  <div>
    <ul v-for="product in products" :key="product">
      <li>name: {{product.name}} price: {{product.price}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  computed:{
    products(){
      return this.$store.state.products;
    }
  }
}
</script>

<style>

</style>