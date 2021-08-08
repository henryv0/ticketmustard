<template>
  <div>
    <input
      @input="handleChange"
      placeholder="Search for 'bowling'"
      type="search"
      class="border-2 rounded-sm border-solid p-3"
      :value="searchKeyword"
      @keyup.enter="submitSearch"
    />
    <button @click="submitSearch" class="p-3 bg-skyblue ml-3 font-bold border-2">SEARCH</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import EventsService from "../services/EventsService.ts"

export default defineComponent({
  name: "Search",
  props: {},
  data: () => {
    return {
      searchKeyword: "",
    };
  },
  setup: () => {
    // const handleEnter = (e) => {
    //   console.log(e);
    // };
  },
  emits: ["updateKeyword"],
  methods: {
    submitSearch() {
      console.log(this.searchKeyword);
      //   EventsService.getKeyword(this.searchKeyword);
      this.$emit("updateKeyword", this.searchKeyword);
    },
    handleChange(event: Event) {
      console.log((event.target as HTMLInputElement).value);
      this.searchKeyword = event.target.value;
    },
  },
});
</script>
