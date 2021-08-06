import { Image } from "./Image";
import { Venue } from "./Venue";

export enum Entities {
    Event = "event"
}

export interface IDate {
    localDate: string;
    localTime: string;
    dateTime: string;
}

export interface PriceRange {
    type: string;
    currency: string;
    min: number;
    max: number;
}

export interface IEvent {
    name: string;
    id: string;
    url: string;
    images: Image[];
    priceRanges: PriceRange[];
    dates: {
        start: Date;
        end: Date;
        status: { code: string; };
        timezone: string;
        spanMultipleDays: boolean;
    },
    venues: Venue[];
}