<template>
  <main>
    <section>
      <div class="flex">
        <Title :cities="['高雄', '臺北']" />
        <Ruler />
      </div>
      <Divider city="高雄市" date="2020/11/11 14:00" />
      <div class="flex statistics">
        <AreaDetial />
        <div>
          <Area name="前金" :number="0" />
          <Area name="前金" :number="100" />
          <Area name="前金" :number="201" />
          <Area name="前金" :number="550" />
        </div>
      </div>
    </section>
    <footer>
      <p>資料來源：g0v</p>
      <p>Copyright © 2019 HexSchool. All rights reserved.</p>
    </footer>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import Divider from "@/components/divider.vue";
import Title from "@/components/title.vue";
import Ruler from "@/components/ruler.vue";
import Area from "@/components/area.vue";
import AreaDetial from "@/components/areaDetail.vue";

export default defineComponent({
  name: "App",
  components: {
    Divider,
    Title,
    Ruler,
    Area,
    AreaDetial
  },
  setup() {
    // getDate();
    // async function getDate() {
    //   try {
    //     let response = await fetch(
    //       "https://data.epa.gov.tw/api/v1/aqx_p_432?limit=100000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json"
    //     );
    //     let data = await response.json();
    //     console.log(data);
    //   } catch (e) {
    //     console.log("Oops, error", e);
    //   }
    // }
  }
});
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: $gray;
}
p {
  margin: 0;
  font-weight: 600;
}
#app {
  width: 100%;
  height: 100%;
}

main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: $black;
  width: 1280px;
  margin: 100px auto 0;
  height: 100%;
  justify-content: center;
  display: flex;
  padding: 0px 85px;
  box-sizing: border-box;
}
section {
  width: 100%;
}
footer {
  position: fixed;
  bottom: 0;
  padding: 6px;
  justify-content: space-around;
  align-items: center;
  background-color: $black;
  width: 100%;
  display: flex;
  p {
    color: $white;
  }
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistics {
  > div {
    &:first-child {
      flex: 1;
    }
    &:last-child {
      flex: 2;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      > div {
        margin-bottom: 32px;
      }
    }
  }
}

.green {
  background-color: $green;
}
.yellow {
  background-color: $yellow;
}
.orange {
  background-color: $orange;
}
.red {
  background-color: $red;
}
.blue {
  background-color: $blue;
}
.purple {
  background-color: $purple;
}
</style>
