<template>
  <div class="title">
    <p>空氣品質指標(AQI)</p>
    <select @change="handleChange" :value="value">
      <option value="" selected disabled hidden>請選擇地區</option>
      <option v-for="city in cities" :key="city" :value="city">
        {{ city }}
      </option>
    </select>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    cities: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: ""
    }
  },
  setup(props, { emit }) {
    function handleChange(event) {
      emit("on-change", event.target.value);
    }

    return {
      handleChange
    };
  }
});
</script>

<style scoped lang="scss">
.title {
  p {
    text-align: center;
    font-size: 40px;
  }
  select {
    width: 350px;
    border: 0;
    padding: 16px 20px;
    font-size: 16px;
  }
}
</style>
