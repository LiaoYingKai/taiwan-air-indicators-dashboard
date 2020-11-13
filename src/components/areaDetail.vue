<template>
  <div class="area-detial">
    <Area :name="detail.SiteName" :number="detail.AQI" />
    <div class="area-detial__content">
      <div
        class="area-detial__content-item"
        v-for="item in data"
        :key="item.abbreviation"
      >
        <p>
          {{ item.name }}<span>{{ item.abbreviation }}</span>
        </p>
        <p>{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from "vue";
import Area from "@/components/area.vue";

export default defineComponent({
  components: {
    Area
  },
  props: {
    detail: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const data = computed(() => [
      {
        name: "臭氧",
        abbreviation: "O3(ppb)",
        value: props.detail.O3
      },
      {
        name: "懸浮微粒",
        abbreviation: "PM10 (μg/m³)",
        value: props.detail.PM10
      },
      {
        name: "細懸浮微粒",
        abbreviation: "PM2.5 (μg/m³)",
        value: props.detail["PM2.5"]
      },
      {
        name: "一氧化碳",
        abbreviation: "CO (ppm)",
        value: props.detail.CO
      },
      {
        name: "二氧化硫",
        abbreviation: "SO2 (ppb)",
        value: props.detail.SO2
      },
      {
        name: "二氧化氮",
        abbreviation: "NO2 (ppb)",
        value: props.detail.NO2
      }
    ]);

    return {
      data
    };
  }
});
</script>

<style scoped lang="scss">
.area-detial {
  &__content {
    width: 350px;
    padding: 15px 30px;
    box-sizing: border-box;
    border: 4px solid $black;
    border-top: none;

    &-item {
      padding: 16px 0;
      border-bottom: 2px solid $black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 24px;
      span {
        font-size: 16px;
        font-weight: 400;
        margin-left: 10px;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
