import { IEvent } from "@/interfaces/Event";
import axios from "axios";
import EventsMapper from "./mappers/EventsMapper";

const EVENTS_URL = `${import.meta.env.VITE_APP_API_URL}/events?apikey=${
  import.meta.env.VITE_APP_TICKETMASTER_API_KEY
}`;

const headers = { "Content-Type": "application/json" };

class EventsService {
  getEvents(
    page: number,
    keyword: string,
    filters: { [key: string]: string }
  ): Promise<{ events: IEvent[]; count: number } | void> {
    let filterParams = this.convertFiltersToParams(filters);
    return axios
      .get(`${EVENTS_URL}&keyword=${keyword}&page=${page}${filterParams}`, {
        headers,
      })
      .then((res) => {
        const mapper = new EventsMapper(res.data);
        return {
          events: mapper.convert(),
          count: mapper.count,
        };
      })
      .catch((err) => {
        console.error(err);
      });
  }

  convertFiltersToParams(filters: { [key: string]: string }): string {
    let filterParams = "";

    if (filters != null && Object.keys(filters)?.length) {
      const filterKeys = Object.keys(filters);
      for (let key of filterKeys) {
        filterParams = filterParams.concat("", `&${key}=${filters[key]}`);
      }
    }

    return filterParams;
  }
}

export default new EventsService();
