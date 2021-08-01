import axios from "axios";

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

  getEventsWithKeyword(keyword: string) {
    axios
      .get(`${EVENTS_URL}&keyword=${keyword}`, {
        headers,
      })
      .then((res) => {
        console.log(res);
        return res.data;
      });
  }
}

export default new EventsService();