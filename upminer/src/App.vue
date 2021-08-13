<template>
  <div id="app">
    <i v-for="category in categories" :key="category.title" :class="category.icon"><span>{{category.title}}</span></i>

    <card :card="{id: 1, title: 'Teste', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, quam.', value: '29.99'}"/>
  </div>
</template>

<script>
import categories from './storage/categories'
import Card from '@/components/Card'

export default {
  data() {
    return { 
      categories
    }
  },

  components: {
    Card,
  },

}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Roboto', sans-serif;
}
</style>
