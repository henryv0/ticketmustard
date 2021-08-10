<template>
  <div class="mt-4">
    <div v-if="events?.length">
      {{ eventCount }} Upcoming events for "{{ keyword }}":

      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-2 mb-2"
      >
        <Card
          v-for="event in events"
          :key="event.id"
          :name="event.name"
          :url="event.url"
          :images="event.images"
          :dates="event.dates"
          :priceRanges="event.priceRanges"
          :venues="event.venues"
        >
        </Card>
      </div>

      <div class="flex justify-center">
        <button
          @click="loadMoreEvents"
          :disabled="isButtonDisabled"
          class="bg-skyblue font-bold mt-5 border-2 p-3 disabled:opacity-50"
        >
          LOAD MORE EVENTS
        </button>
      </div>
    </div>
    <div v-if="hasNoResults">No events found!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import EventsService from "../services/EventsService";

import Card from "./Card.vue";

export default defineComponent({
  name: "EventList",
  components: { Card },
  props: {
    keyword: String,
    filters: Object
  },
  data: () => {
    return {
      events: [],
      eventCount: 0,
      page: 0,
      isLoading: false,
      hasNoResults: false,
    };
  },
  setup: () => {},
  onUpdated: () => {
    this.loadEvents();
  },
  methods: {
    async loadEvents(keyword = this.keyword) {
      this.hasNoResults = false;
      this.page = 0;

      EventsService.getEvents(this.page, keyword, this.filters)
        .then((data) => {
          if (data.events.length === 0) this.hasNoResults = true;

          this.events = data.events;
          this.eventCount = data.count;
        })
        .catch((err) => {
          console.error(err);

          this.events = [];
          this.eventCount = 0;
          this.hasNoResults = true;
        });
    },
    async loadMoreEvents() {
      this.page++;

      EventsService.getEvents(this.page, this.keyword, this.filters).then(
        (data) => {
          this.events = this.events.concat(data.events);
        }
      );
    },
  },
  computed: {
    isButtonDisabled() {
      return this.events.length === this.eventCount;
    },
  },
  watch: {
    keyword(val, oldVal) {
      this.loadEvents(val);
    },
    filters: {
      deep: true,
      handler() {
        this.loadEvents();
      }
    }
  },
});
</script>
