<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
    <input
      @input="handleChange"
      placeholder="Search for 'music'"
      type="search"
      class="border-2 rounded-sm border-solid p-3"
      :value="searchKeyword"
      @keyup.enter="submitSearch"
    />
    <button @click="submitSearch" class="p-3 bg-skyblue md:w-max font-bold border-2">SEARCH</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Search",
  props: {},
  data: () => {
    return {
      searchKeyword: "",
    };
  },
  setup: () => {
  },
  emits: ["updateKeyword"],
  methods: {
    submitSearch() {
      this.$emit("updateKeyword", this.searchKeyword);
    },
    handleChange(event: Event) {
      this.searchKeyword = event.target.value;
    },
  },
});
</script>
