<template>
  <div class="border-2 border-solid border-gray-300">
    <a :href="url" target="_blank">
      <img class="w-full border-b-2" :src="cardImageUrl" />
      <div class="p-5">
        <p class="font-bold">{{ name }}</p>
        <p class="text-sm">{{ dates.start.toLocaleString() }}</p>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Card",
  props: {
    name: String,
    url: String,
    images: Array,
    dates: Object,
    priceRanges: Array,
    venues: Array,
  },
  setup: () => {},
  computed: {
    cardImageUrl() {
      // Grab first 3_2 image for MVP
      const firstImage = this.images.find(image => image.ratio === "3_2")

      return firstImage?.url;
    }
  }
});
</script>
