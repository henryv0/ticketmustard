<template>
  <body class="grid grid-rows-layout min-h-screen">
    <header class="bg-mustard py-5">
      <div class="container mx-auto p-5">
        <h1 class="text-black text-xl font-extrabold">ticketmustard 🎫</h1>
      </div>
    </header>
    <div class="container mx-auto p-5">
      <Search @update-keyword="setKeyword" />
      <EventList :keyword="keyword" />
    </div>
    <footer class="bg-mustard py-5">
      <div class="container mx-auto p-5 text-right text-xs">
        &copy; TICKETMUSTARD 2021
      </div>
    </footer>
  </body>
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
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    setKeyword(newKeyword: string) {
      console.log("NEW KEYWORD", newKeyword);
      this.keyword = newKeyword;
    },
  },
});
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
