<template>
  <div >
    <main>
      <header>{{card.title}}</header>
      <p class="description"></p>
    </main>
    <footer>
      <router-link :to="{name: 'app', params: {appId: card.id}}"/>
      <span>{{card.value}}</span>
      <span>Saiba mais</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: "card",

  props: {
    card: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>

</style>