<template>
  <div
    class="carousel"
  >
    <i class="fas fa-arrow-left carousel__arrow carousel__arrow--left"></i>
    <div class="carousel__list">
      <carousel-item
        v-for="(item, i) in items"
        :key="i"
        :carousel="item"
      />
    </div>
    <i class="fas fa-arrow-right carousel__arrow carousel__arrow--right"></i>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem";

export default {
  name: "carousel",

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  components: {
    CarouselItem,
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 90%;
  overflow-x: auto;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &__list {
    display: flex;
    padding: 12px 8px;
  }

  &__arrow {
    color: $color-gray-3;
    font-size: $text-size-4;
    
    position: absolute;
    top: 50%;

    @media screen and(max-width: 480px) {
      display: none;
    }

    &:hover {
      color: $color-black;
      cursor: pointer;
    }

    &--left {
      left: -30px;
      transform: translate(-50%, -50%);
    }

    &--right {
      right: -30px;
      transform: translate(50%, -50%);
    }
  }
}

</style>