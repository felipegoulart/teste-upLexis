<template>
  <footer class="card__button">
    <router-link
      class="card__link"
      :to="{ name: 'Details', params: { id: card.id } }"
    />
    <price class="card__value" :price="Number(card.price)"/>
    <span class="card__learn-more">Saiba mais</span>
  </footer>
</template>

<script>
import Price from "@/components/Price"

export default {
  props: {
    card: {
      type: Object,
      default: () => ({})
    },
  },

  components: {
    Price,
  },
};
</script>

<style lang="scss" scoped>
.card__button {
  background: linear-gradient(51deg, $color-orange-1 30%, $color-orange-2 70%);
  width: 100%;
  height: 53px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .card__value {
    color: $color-white;
    font-size: $text-size-5;
  }

  .card__learn-more {
    color: $color-white;
    font-size: $text-size-3;
  }

  .card__link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &:hover {
      background: rgba($color-white, 0.1);
    }
  }
}
</style>