import { mount } from "@vue/test-utils";
import EventList from "./EventList.vue";
import Card from "./Card.vue";

describe("EventList", () => {
  it("should render eventList markup", () => {
    const keyword = "comedy";
    const filters = {
      country: "NZ",
      city: "Auckland",
      keyword: "test",
    };
    const wrapper = mount(EventList, { props: { keyword, filters } });

    expect(wrapper.classes()).toContain(`mt-4`);
  });

  it("should display event content correctly", () => {
    const keyword = "comedy";
    const filters = {};

    const wrapper = mount(EventList, {
      props: { keyword, filters },
      data() {
        return {
          events: TEST_EVENTS,
        };
      },
    });

    expect(wrapper.text()).toContain(`Upcoming events for "${keyword}`);
    expect(wrapper.findComponent(Card).exists()).toBe(true);
    expect(wrapper.findAllComponents(Card).length).toBe(2);
  });

  it("should display no results when events are empty", () => {
    const keyword = "comedy";
    const filters = {};

    const wrapper = mount(EventList, {
      props: { keyword, filters },
      data() {
        return {
          events: [],
        };
      },
    });

    expect(wrapper.vm.events).toStrictEqual([]);
    expect(wrapper.vm.eventCount).toBe(0);

    expect(wrapper.text()).not.toContain(`Upcoming events for "${keyword}`);
    expect(wrapper.findComponent(Card).exists()).toBe(false);
    expect(wrapper.findAllComponents(Card).length).toBe(0);
  });

  it("should disable load more button", () => {
    const wrapper = mount(EventList, {
      data() {
        return {
          events: TEST_EVENTS,
          eventCount: 2
        };
      },
    });

    const loadMoreButton = wrapper.find('button');

    expect(wrapper.vm.isButtonDisabled).toBe(true);
    expect(loadMoreButton.attributes()).toHaveProperty('disabled');
  });
});

const TEST_EVENTS = [
  {
    id: "zxcv9cs",
    name: "Dog: The Musical",
    url: "www.ticketmaster.com/dog-musical",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ea8/39075d5b-9e69-4b7b-9f08-aeae4c7b1ea8_1296081_RETINA_PORTRAIT_3_2.jpg",
      },
    ],
    dates: {
      start: new Date(),
    },
    priceRanges: [],
    venues: [
      {
        name: "Forum Melbourne",
      },
    ],
  },
  {
    id: "ajgc7n",
    name: "Cat Ballet",
    url: "www.ticketmaster.com/cat-ballet",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ea8/39075d5b-9e69-4b7b-9f08-aeae4c7b1ea8_1296081_RETINA_PORTRAIT_3_2.jpg",
      },
    ],
    dates: {
      start: new Date(),
    },
    priceRanges: [],
    venues: [
      {
        name: "Forum Melbourne",
      },
    ],
  },
];
