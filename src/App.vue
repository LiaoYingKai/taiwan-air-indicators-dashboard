<template>
  <main>
    <section>
      <div class="flex">
        <Title
          :cities="counties"
          @onChange="handleChangeCounty"
          :value="selectCounty"
        />
        <Ruler />
      </div>
      <Divider
        :city="selectSiteDetail.County"
        :date="selectSiteDetail.PublishTime"
      />
      <div class="flex statistics">
        <AreaDetial :detail="selectSiteDetail" />
        <div>
          <Area
            :name="item.SiteName"
            :number="item.AQI"
            v-for="item in Object.values(selectCountyDetail)"
            :key="item.SiteName"
            @onClick="handleClickSite"
          />
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
import { defineComponent, ref } from "vue";
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
    const counties = ref([]);
    const details = ref({});
    const selectCounty = ref("");
    const selectCountyDetail = ref({});
    const selectSiteDetail = ref({});

    getDate();
    async function getDate() {
      try {
        let response = await fetch(
          "https://data.epa.gov.tw/api/v1/aqx_p_432?limit=100000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json"
        );
        let { records } = (await response.json()) || {};
        records.forEach(item => {
          if (!counties.value.includes(item.County)) {
            counties.value = [...counties.value, item.County];
          }
          if (!details.value[item.County]) {
            details.value[item.County] = {
              [item.SiteName]: item
            };
          } else {
            details.value[item.County] = {
              ...details.value[item.County],
              [item.SiteName]: item
            };
          }
        });
        selectCounty.value = counties.value[0];
        selectCountyDetail.value = details.value[selectCounty.value];
        selectSiteDetail.value = Object.values(selectCountyDetail.value)[0];
      } catch (error) {
        console.log("Oops, error", error);
      }
    }

    function handleChangeCounty(county) {
      selectCounty.value = county;
      selectCountyDetail.value = details.value[selectCounty.value];
      selectSiteDetail.value = Object.values(selectCountyDetail.value)[0];
    }

    function handleClickSite(siteName) {
      selectSiteDetail.value = selectCountyDetail.value[siteName];
    }

    return {
      counties,
      details,
      selectCounty,
      selectCountyDetail,
      selectSiteDetail,
      handleChangeCounty,
      handleClickSite
    };
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
  min-height: 100%;
}

main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: $black;
  width: 1280px;
  margin: 0 auto;
  min-height: 100%;
  justify-content: center;
  display: flex;
  padding: 80px 85px;
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
  align-items: flex-start;
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
