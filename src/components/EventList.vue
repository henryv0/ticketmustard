<template>
  <div class="event-list">
    <h1>Search by keyword!</h1>

    <div v-if="events.length">
      Upcoming events:

      <Card v-for="event in events">
        {{ event.description }}
      </Card>

      <button>... Load more events</button>
    </div>
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
  },
  data: () => {
    return {
      events: [],
      isLoading: false,
    };
  },
  setup: () => {
    // api call to EventService
    console.log(EventsService);
  },
  methods: {
    loadEvents(keyword: string) {
      EventsService.getEventsWithKeyword(keyword);
    },
  },
  watch: {
    keyword(val, oldVal) {
      console.log(val, oldVal);

      this.loadEvents(val);
    },
  },
});
</script>
