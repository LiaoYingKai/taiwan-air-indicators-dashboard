<template>
  <div class="ruler">
    <div class="ruler__block" v-for="(item, index) in data" :key="index">
      <div :class="item.color">{{ item.range }}</div>
      <div>{{ item.text }}</div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {},
  setup() {
    const data = [
      {
        range: "0 ~ 50",
        text: "良好",
        color: "green"
      },
      {
        range: "51 ~ 100",
        text: "普通",
        color: "yellow"
      },
      {
        range: "101 ~ 151",
        text: "對敏感族群 不健康",
        color: "orange"
      },
      {
        range: "151 ~ 200",
        text: "對所有族群 不健康",
        color: "red"
      },
      {
        range: "201 ~ 300",
        text: "非常不健康",
        color: "blue"
      },
      {
        range: "301 ~ 400",
        text: "危害",
        color: "purple"
      }
    ];

    return { data };
  }
});
</script>

<style scoped lang="scss">
.ruler {
  border: 2px solid $black;
  display: flex;
  &__block {
    border: 2px solid $black;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      text-align: center;
      font-weight: 600;
      height: 55px;
      box-sizing: border-box;
      padding: 0 20px;
      &:first-child {
        border-bottom: 4px solid $black;
      }
    }
  }
}
</style>
