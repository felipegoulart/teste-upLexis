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
import { mapGetters, mapActions } from 'vuex'
import apps from '@/storage/appList'

import CategoriesNavbar from "@/components/categories/CategoriesNavbar";
import Order from "@/components/order/Order";
import Card from "@/components/card/Card";

export default {
  name: "Apps",
  data() {
    return {
      filter: false,
      order: "Lançamento",
    };
  },

  mounted () {
    this.ActionSetApps(apps);
  },

  computed: {
    ...mapGetters(['myApps', 'selectedCategory', 'myFilter', 'myOrder']),

    appList() {
      const appList = this.myFilter
        ? this.myApps.filter((app) => app.title === this.selectedCategory)
        : this.myApps;


      return this.myOrder === "Lançamento"
        ? appList.sort((a, b) => a.id - b.id)
        : appList.sort((a, b) => a.price - b.price)
    },
  },

  methods: {
    ...mapActions(['ActionSetApps']),
  },

  components: {
    CategoriesNavbar,
    Order,
    Card
  },
};
</script>

<style lang="scss">

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
