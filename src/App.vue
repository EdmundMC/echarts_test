<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import test from "./components/test.vue";

export default {
  name: "App",
  components: {
    test,
  },
};
</script>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  background: linear-gradient(
    90deg,
    #f9ffeb 0%,
    #f5ffeb 33%,
    #f3ffeb 66%,
    #d1ffd4 100%
  );
  background-position: 100% 0;
  animation: bgSize 5s infinite ease-in-out alternate;
}

@keyframes bgSize {
  0% {
    background-size: 300% 100%;
  }

  100% {
    background-size: 100% 100%;
  }
}
</style>
