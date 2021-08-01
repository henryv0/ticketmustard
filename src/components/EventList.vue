<template>
  <div class="event-list">
    Upcoming events:

    <Card v-for="event in events">
      {{ event.description }}
    </Card>

    <button>... Load more events</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import EventsService from "../services/EventsService";

import Card from "./Card.vue";

export default defineComponent({
  name: "EventList",
  components: { Card },
  props: {},
  data: () => {
    return { events: [{ description: "blah" }] };
  },
  setup: () => {
    // api call to EventService
    console.log(EventsService);
    EventsService.get("test");
  },
});
</script>
