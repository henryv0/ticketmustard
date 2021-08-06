<template>
  <div class="event-list">
    <h1>Search by keyword!</h1>

    <div v-if="events?.length">
      {{ eventCount }} Upcoming events for "{{ keyword }}":

      <Card v-for="event in events"
        >
        {{ event.name }}
        {{ event.url }}
        {{ event.date }}
      </Card>

      <button>... Load more events</button>
    </div>
    <div v-if="hasNoResults">
      No events found!
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
      eventCount: 0,
      isLoading: false,
      hasNoResults: false
    };
  },
  setup: () => {},
  methods: {
    async loadEvents(keyword: string) {
      this.hasNoResults = false;
      
      EventsService.getEventsWithKeyword(keyword).then((data) => {
        console.log(data);
        this.events = data.events;
        this.eventCount = data.count;
      }).catch(err => {
        console.error(err);

        this.events = [];
        this.eventCount = 0;
        this.hasNoResults = true;
      });
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
