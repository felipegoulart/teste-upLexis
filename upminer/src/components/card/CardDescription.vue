<template>
  <p class="card-description">
    {{ text }}
  </p>
</template>

<script>
export default {
  name:'card-description',

  props: {
    text: {
      type: String,
      default: ''
    },
  },
};
</script>

<style lang="scss" scoped>
.card-description {
  color: $color-gray-3;
  font-size: $text-size-1;
  text-align: center;
}
</style>