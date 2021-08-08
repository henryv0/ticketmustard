import { IEvent } from "@/interfaces/Event";
import axios from "axios";
import EventsMapper from "./mappers/EventsMapper";

// const BASE_URL = import.meta.env.VITE_APP_API_URL;
// const API_KEY = import.meta.env.VITE_APP_TICKETMASTER_API_KEY;
// console.log(API_KEY);

const EVENTS_URL = `${import.meta.env.VITE_APP_API_URL}/events?apikey=${
  import.meta.env.VITE_APP_TICKETMASTER_API_KEY
}`;

const headers = { "Content-Type": "application/json" };

class EventsService {
  get() {
    // return http.get(`${url}/${category}/${id}`);
    // console.log(`${BASE_URL}/events/${id}`);

    axios
      .get(EVENTS_URL, {
        headers,
      })
      .then((res) => {
        console.log(res);
        return res.data;
      });
  }

  getEventsWithKeyword(page: number, keyword: string): Promise<{ events: IEvent[]; count: number } | void> {
    console.log(`&keyword=${keyword}&page=${page}`);

    return axios
      .get(`${EVENTS_URL}&keyword=${keyword}&page=${page}`, {
        headers,
      })
      .then((res) => {
        console.log(res);
        const mapper = new EventsMapper(res.data);
        return {
          events: mapper.convert(),
          count: mapper.count
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
}

export default new EventsService();
