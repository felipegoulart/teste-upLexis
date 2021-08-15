<template>
  <li
    class="category"
    @click="select"
  >
    <div
      class="category__card category__card--hover"
      :class="{ 'category__card--active': active }"
    >
      <icon :iconName="title" class="category__icon" />
      <span class="category__title">{{ title }}</span>
    </div>
  </li>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: "category",

  props: {
    title: {
      type: String,
      default: "Todos",
    },

    active: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    select() {
      this.$emit("selected", this.title);
    },
  },

  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
@mixin active {
  background-color: $color-orange-1;
  color: white;
}

.category {
  background-color: $color-gray-2;
  padding: 2px 1px;
  list-style: none;

  .category__card {
    background-color: $color-gray-1;
    width: 130px;
    height: 84px;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 17px 0;
  
    border-radius: 5px;
    color: $color-gray-4;
    transition: 0.1s ease-in-out;
    cursor: pointer;
  
    &--hover:hover {
      @include active;
    }
  
    &--active {
      @include active;
      transform: scale3d(1.1, 1.1, 1.1);
      box-shadow: 0 0 5px rgba($color-black, .3);
    }
  
    .category__icon {
      font-size: $text-size-6;
    }
  
    .category__title {
      font-size: $text-size-1;
    }
  }
}
</style>