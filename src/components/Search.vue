<template>
  <div>
    <input
      @input="handleChange"
      placeholder="Search for 'bowling'"
      type="search"
      class="border rounded-sm border-solid"
      :value="searchKeyword"
      @keyup.enter="submitSearch"
    />
    <button @click="submitSearch">Search</button>
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
