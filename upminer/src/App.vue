<template>
  <div id="app">
    <main class="app-list">
      <card class="app-card" v-for="app in apps" :key="app.id" :card="app"/>
    </main>
  </div>
</template>

<script>
import categories from './storage/categories'
import apps from './storage/appList'
import Card from '@/components/card/Card'

export default {
  data() {
    return { 
      categories,
      apps
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
  
  font-size: $text-size-1;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
}

.app-list {
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
  .app-card {
    margin: 27px 12px;
  }
}
</style>
