<template>
  <div class="event-list">
    <h1>Search by keyword!</h1>

    <div v-if="events?.length">
      Upcoming events:

      <Card v-for="event in events">
        {{ event.name }}
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
  setup: () => {},
  methods: {
    async loadEvents(keyword: string) {
      EventsService.getEventsWithKeyword(keyword).then((data) => {
        console.log(data);
        this.events = data._embedded.events;
      });
    },
  },
  watch: {
    keyword(val, oldVal) {
      this.loadEvents(val);
    },
  },
});
</script>
