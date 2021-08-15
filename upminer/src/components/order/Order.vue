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
export default {
  name: 'order',

  data() {
    return {
      order: 'Lançamento'
    }
  },
}
</script>

<style lang="scss" scoped>
.order__label {
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