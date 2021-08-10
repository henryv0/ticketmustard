<template>
  <body class="grid grid-rows-layout min-h-screen">
    <header class="bg-mustard py-5">
      <div class="container mx-auto p-5">
        <h1 class="text-black text-xl font-extrabold">ticketmustard 🎫</h1>
      </div>
    </header>
    <div class="container mx-auto p-5">
      <Search @update-keyword="setKeyword" />
      <div class="flex">
        <div class="mt-5 border border-solid p-2 inline-block text-sm">
          City:
          <select v-model="cityFilter">
            <option value="melbourne">Melbourne</option>
            <option value="sydney">Sydney</option>
            <option value="brisbane">Brisbane</option>
          </select>
        </div>
        <div class="ml-3 mt-5 border border-solid p-2 inline-block text-sm opacity-50">
          Country:
          <select v-model="countryFilter" disabled>
            <option value="AU">Australia</option>
          </select>
        </div>
      </div>
      <EventList :keyword="keyword" :filters="filters" />
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
import EventList from "./components/EventList.vue";
import Search from "./components/Search.vue";

export default defineComponent({
  name: "App",
  components: {
    EventList,
    Search,
  },
  data() {
    return {
      keyword: "",
      cityFilter: "melbourne",
      countryFilter: "AU"
    };
  },
  methods: {
    setKeyword(newKeyword: string) {
      console.log("NEW KEYWORD", newKeyword);
      this.keyword = newKeyword;
    },
  },
  computed: {
    filters() {
      return {
        city: this.cityFilter,
        country: this.countryFilter
      }
    }
  }
});
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
