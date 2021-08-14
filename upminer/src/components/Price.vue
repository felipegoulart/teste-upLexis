<template>
  <span>{{computedPrice}}</span>
</template>

<script>
  
export default {
  name: 'price',
  props: {
    price: {
      type: Number,
      default: 0
    },
  },

  computed: {
    computedPrice() {
      return this.price.toLocaleString('pt-BR', {style: 'currency', currency: "BRL"})
    }
  },
}
</script>

<style>

</style>