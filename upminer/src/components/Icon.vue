<template>
  <i :class="icon"></i>
</template>

<script>
import categories from "@/storage/categories"
export default {
  name: 'icon',

  props: {
    iconName: {
      type: String,
      default: 'Profissional'
    },
  },

  data() {
    return {
      categories
    }
  },

  computed: {
    icon() {
      return this.categories.find(category => category.title === this.iconName).icon 
    }
  },
}
</script>