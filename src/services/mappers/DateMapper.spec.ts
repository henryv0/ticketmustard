import { mount } from "@vue/test-utils";
import DateMapper from "./DateMapper";

describe("DateMapper", () => {
  it("should return datetime when available", () => {
      const dates = {
        start: {
          dateTime: "2021-05-03T22:00:00Z",
          localTime: "08:00",
          localDate: "02/03/22",
        },
        timezone: "Australia/Sydney",
      };

      const actual = new DateMapper(dates).parseDate(dates.start);
      const expected = new Date("2021-05-03T22:00:00Z");
      expect(actual).toEqual(expected);
  });

  it("should fallback to localdate + localtime", () => {
    const dates = {
      start: {
        localTime: "08:00",
        localDate: "02/03/22",
      },
      timezone: "Australia/Sydney",
    };

    const actual = new DateMapper(dates).parseDate(dates.start);
    const expected = new Date("02/03/22 08:00");
    expect(actual).toEqual(expected);
  });

  it("should fallback to localdate", () => {
    const dates = {
      start: {
        localDate: "02/03/22",
      },
      timezone: "Australia/Sydney",
    };

    const actual = new DateMapper(dates).parseDate(dates.start);
    const expected = new Date("02/03/22");
    expect(actual).toEqual(expected);
  });
});