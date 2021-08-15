<template>
  <div class="card">
    <main class="card__info">
      <card-header :card="card" />
      <card-description v-if="card.description" :text="card.description" />
    </main>
    <card-button :card="card"/>
  </div>
</template>

<script>
import CardHeader from "./CardHeader"
import CardDescription from "./CardDescription"
import CardButton from "./CardButton"

export default {
  name: "card",

  props: {
    card: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },

  components: {
    CardHeader,
    CardDescription,
    CardButton
  },
}
</script>

<style lang="scss" scoped>
.card {
  background-color: $color-white;
  width: 305px;
  height: 317px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 3px 16px rgba($color-black, .06);
  transition: .2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 24px rgba($color-black, .2);
  }

  .card__info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;

  }

}
</style>