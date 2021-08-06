import { IEvent } from "../../interfaces/Event";

export default class EventsMapper {
  data: {
    _embedded: {
      events: any[];
    };
  };
  _count: number;

  constructor(data: any) {
    this.data = data;
    this._count = data.page.totalElements;
  }

  convert(): IEvent[] {
    if (!this.data) return [];

    return this.data._embedded.events.map((event) => {
      return {
        id: event.id,
        name: event.name,
        url: event.url,
        dates: event.dates,
        images: event.images,
        priceRanges: event.priceRanges,
        venues: event._embedded?.venues,
      };
    });
  }

  get count(): number {
      return this._count;
  }
}
