import { mount } from "@vue/test-utils";
import EventsService from "./EventsService";

describe("EventsService", () => {
  it("should convert filters to params successfully", () => {
    const filters = {
        country: "NZ",
        city: "Auckland",
        keyword: "test"
    }
    const actual = EventsService.convertFiltersToParams(filters);
    const expected = "&country=NZ&city=Auckland&keyword=test";
    
    expect(actual).toBe(expected);
  });

  it("should still return empty string when no filters are provided", () => {
    const filters = {};

    const actual = EventsService.convertFiltersToParams(filters);
    const expected = "";

    expect(actual).toBe(expected);
  });
});
