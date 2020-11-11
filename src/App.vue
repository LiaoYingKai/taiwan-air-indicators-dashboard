<template>
  <main>
    <footer>
      <p>資料來源：g0v</p>
      <p>Copyright © 2019 HexSchool. All rights reserved.</p>
    </footer>
  </main>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
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
}
#app {
  width: 100%;
  height: 100%;
}

main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: $black;
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0px 85px;
  box-sizing: border-box;
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
}
</style>
