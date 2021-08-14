<template>
  <div class="card-header">
    <icon :iconName="card.title" class="card-icon"/>
    <h2 class="card-title">{{card.title}}</h2>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'card-header',

  props: {
    card: {
      type: Object,
      default: () => ({})
    },
  },

  components: {
    Icon,
  },
}
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;

  .card-icon {
    font-size: $text-size-6;
    color: $color-orange-1;
    margin: 12px 0;
  }

  .card-title {
    color: $color-gray-4;
    font-size: $text-size-4;
    margin: 12px 0;
  }
}
</style>
