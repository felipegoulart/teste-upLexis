<template>
  <div class="header">
    <icon :iconName="card.title" class="header__icon"/>
    <h2 class="header__title">{{card.title}}</h2>
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
.header {
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;

  .header__icon {
    font-size: $text-size-6;
    color: $color-orange-1;
    margin: 12px 0;
  }

  .header__title {
    color: $color-gray-4;
    font-size: $text-size-4;
    margin: 12px 0;
  }
}
</style>
