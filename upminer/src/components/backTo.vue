<template>
  <div class="back" @click="back">
    <i class="fas fa-chevron-left back__arrow"></i><span>{{myApp.title || 'Voltar'}}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'back-to',

  computed: {
    ...mapGetters(['myApp'])
  },

  methods: {
    back() {
      this.$router.back(1)
    }
  },

}
</script>

<style lang="scss">
.back {
  color: $color-orange-1;
  font-size: $text-size-6;
  cursor: pointer;

  &__arrow {
    margin-right: 18px;
  }

}
</style>