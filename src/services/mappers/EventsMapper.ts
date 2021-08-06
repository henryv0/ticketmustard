import { IEvent } from "../../interfaces/Event";

export default class EventsMapper {
  data: {
    _embedded: {
      events: any[];
    };
  };

  constructor(data: any) {
    this.data = data;
  }

  convert(): IEvent[] {
      console.log('convefsi')
    if (!this.data) return [];

    return this.data._embedded.events.map((event) => {
      return {
        id: event.id,
        name: event.name,
        url: event.url,
        dates: event.dates,
        images: event.images,
        priceRanges: event.priceRanges,
        venues: event._embedded.venues,
      };
    });
  }
}
