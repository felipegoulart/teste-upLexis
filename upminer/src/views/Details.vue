<template>
  <main class="details">
    <back-to class="back-to" />
    <carousel class="details__carousel" :items="detailsCarousel" />

    <p class="details__description">
      {{ myApp.description || "Descrição indisponível" }}
    </p>

    <footer class="details__footer">
      <p v-if="myApp.price" class="price">
        R$ <span class="price__value">{{ myApp.price }}</span>
      </p>
      <p v-else>Valor indisponível</p>

      <button @click="enable" class="details__enable">Habilitar</button>
    </footer>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import detailsCarousel from "@/storage/detailsCarousel";
import Carousel from "@/components/details_carousel/Carousel";
import BackTo from "@/components/backTo";

export default {
  name: "Details",

  data() {
    return {
      detailsCarousel,
    };
  },

  computed: {
    ...mapGetters(["myApp"]),
  },

  methods: {
    enable() {
      if(this.myApp.title)
        alert(`${this.myApp.title} foi habilitado com sucesso`)
      else 
        alert(`Desculpa, houve algum problema. Tente novamente mais tarde`)
    }
  },

  components: {
    BackTo,
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
.details {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 36px 122px;

  &__carousel {
    align-self: center;
  }

  &__description {
    color: $color-gray-3;
    font-size: $text-size-3;
    padding: 36px 36px;
  }

  &__footer {
    color: $color-gray-3;
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;


    .price {
      color: $color-black;

      &__value {
        font-size: $text-size-7;
      }
    }
  }

  &__enable {
    background: linear-gradient(51deg, $color-orange-1 30%, $color-orange-2 70%);
    color: $color-white;
    position: relative;
    font-size: $text-size-3;
    padding: 12px 32px;

    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover::before {
      content: '';
      background: rgba($color-white, .2);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}

.back-to {
  margin-bottom: 36px;
}
</style>