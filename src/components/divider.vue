<template>
  <div class="divider">
    <p class="divider__city">{{ city }}</p>
    <div></div>
    <p class="divider__date">{{ date }} 更新</p>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    city: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    }
  }
});
</script>

<style scoped lang="scss">
.divider {
  display: flex;
  font-weight: 600;
  align-items: center;
  width: 100%;
  &__city {
    font-size: 36px;
  }
  > div {
    border-top: 3px dashed $black;
    flex: 1;
    margin: 0 24px;
  }
}
</style>
