<template>
  <div class="area">
    <p class="area__name">
      {{ name }}
    </p>
    <p class="area__number" :class="colorClassName">
      {{ number }}
    </p>
  </div>
</template>
<script>
import { defineComponent, computed } from "vue";
export default defineComponent({
  props: {
    name: {
      type: String,
      default: ""
    },
    number: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const ranges = [0, 51, 101, 151, 201, 301];
    const rangeColor = ["green", "yellow", "orange", "red", "blue", "purple"];

    const colorClassName = computed(() => {
      let colorClassName = "";

      ranges.forEach((item, index) => {
        if (props.number >= item) {
          colorClassName = rangeColor[index];
        }
      });
      return colorClassName;
    });

    return {
      colorClassName
    };
  }
});
</script>

<style scoped lang="scss">
.area {
  width: 350px;
  height: 97px;
  display: flex;
  align-items: center;
  font-size: 36px;
  text-align: center;
  line-height: 89px;
  border: 2px solid $black;
  box-sizing: border-box;
  &__name {
    width: 190px;
    border: 2px solid $black;
  }
  &__number {
    width: 160px;
    border: 2px solid $black;
  }
}
</style>
