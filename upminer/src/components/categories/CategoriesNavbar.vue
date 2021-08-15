<template>
  <nav class="categories">
    <ul class="categories__list">
      <category
        v-for="category in myCategories"
        :key="category.title"
        :title="category.title"
      />
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import categories from "@/storage/categories";

import Category from "@/components/categories/Category";

export default {
  name: 'categories-navbar',
  
  mounted () {
    this.ActionSetCategories(categories);
  },

  computed: {
    ...mapGetters(['myCategories'])
  },

  methods: {
    ...mapActions(['ActionSetCategories']),
  },

  components: {
    Category,
  },
};
</script>

<style lang="scss" scoped>
.categories {
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  .categories__list {
    display: flex;
    flex-wrap: wrap;

    & > :nth-child(1) {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      padding-left: 2px;
    }
    & > :nth-last-child(1) {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      padding-right: 2px;
    }
  }
}
</style>