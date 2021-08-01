<template>
  <div class="card">
    Card: 
    <slot>Card content</slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Card",
  props: {},
  setup: () => {},
});
</script>
