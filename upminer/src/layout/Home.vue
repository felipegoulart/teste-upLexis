<template>
  <div>
    <agile
      class="carousel"
      :dots="false"
      :navButtons="false"
      :infinite="true"
      :autoplay="true"
      :autoplaySpeed="6000"
      :speed="1000"
    >
      <img
        class="slide"
        src="../../public/banner/header__banner-1.png"
        alt=""
      />
      <img
        class="slide"
        src="../../public/banner/header__banner-2.png"
        alt=""
      />
    </agile>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "home-layout",
};
</script>

<style lang="scss" scoped>
.carousel {
  margin-bottom: 36px;
}
</style>