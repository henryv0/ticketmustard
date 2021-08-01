<template>
  <!--<div class="flex justify-center content-center">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>-->
  <!--<HelloWorld msg="Hello Vue 3 + TypeScript + Viteeee" />-->
  <div class="container mx-auto">
    <Search />
    <EventList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import EventList from "./components/EventList.vue";
import Search from "./components/Search.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    EventList,
    Search,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
