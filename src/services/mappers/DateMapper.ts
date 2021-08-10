import { IDate } from "@/interfaces/Event";

export default class DateMapper {
  dates: any;

  constructor(dates: any) {
    this.dates = dates;
  }

  convert(): IDate {
    const { dates } = this;
    return {
      start: this.parseDate(dates.start),
      timezone: dates.timezone,
    };
  }

  parseDate(date: any): Date {
    if (date.dateTime != null) {
      return new Date(date.dateTime);
    }
    if (date.localDate != null && date.localTime != null) {
      return new Date(`${date.localDate} ${date.localTime}`);
    }
    if (date.localDate != null) {
      return new Date(date.localDate);
    }

    return new Date();
  }
}
