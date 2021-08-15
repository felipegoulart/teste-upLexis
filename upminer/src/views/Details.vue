<template>
  <div class="home">
    <h1>{{myApp.title}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',

  computed: {
    ...mapGetters(['myApp'])
  },
  components: {
  }
}
</script>
