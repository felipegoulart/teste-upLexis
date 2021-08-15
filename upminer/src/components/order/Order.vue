<template>
  <div>
    <label class="order__label" for="order">Ordenar</label>
    <select class="order__selector" name="order" id="order" v-model="order">
      <option value="Lançamento">Lançamento</option>
      <option value="Preço">Preço</option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'order',

  computed: {
    ...mapGetters(['myOrder']),

    order: {
      get() {
        return this.myOrder
      },
      set(value) {
        this.$store.commit('order', value)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.order__label {
  font-size: $text-size-2;
  font-weight: bold;
  text-transform: uppercase;
  margin: 20px;
}

.order__selector {
  width: 220px;
  height: 34px;

  border: 2px solid $color-gray-2;
  border-radius: 5px
}

</style>