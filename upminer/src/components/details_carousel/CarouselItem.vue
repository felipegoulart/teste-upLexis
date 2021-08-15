<template>
  <div class="carousel__item">
    <img class="carousel__image" :src="image" alt="Imagem do aplicativo">
    <p class="carousel__description">{{carousel.description}}</p>
  </div>
</template>

<script>
export default {
  name: "carousel-item",

  props: {
    carousel: {
      type: Object,
      default: () => ({}),
      required: true
    },
  },

  computed: {
    image() {
      return this.carousel.img
    }
  },
}
</script>

<style lang="scss" scoped>
.carousel {
  &__item {
    background-color: $color-white;
    width: 488px;
    max-width: 488px;
    height: 320px; 
    max-height: 320px; 
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 18px rgba($color-black, 0.1);
  
    @media screen and(max-width: 480px) {
      min-width: 95%;
      height: 95%;
      margin: 0 4px;
    }
  }

  &__image{
    width: 100%;
  }


  &__description{
    color: $color-orange-1;
    font-size: $text-size-2;
    font-weight: 400;
    margin-top: 20px;
  }
}
</style>