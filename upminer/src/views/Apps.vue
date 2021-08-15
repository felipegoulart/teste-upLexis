<template>
  <div class="home">
    <header>
      <categories-navbar />
      <order class="order"/>
    </header>
    <section class="app-list">
      <card class="app-list__card" v-for="app in appList" :key="app.id" :card="app" />
    </section>
  </div>
</template>

<script>
import categories from '@/storage/categories'
import apps from '@/storage/appList'

import CategoriesNavbar from "@/components/categories/CategoriesNavbar";
import Order from "@/components/order/Order";
import Card from "@/components/card/Card";

export default {
  name: 'Home',
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
  font-family: "Roboto", sans-serif;
}

.order {
  margin-top: 36px;
  margin-bottom: 9px;
}

.app-list {
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    justify-content: space-evenly;
  }

  .app-list__card {
    margin: 27px 12px;
  }
  }
  
</style>
