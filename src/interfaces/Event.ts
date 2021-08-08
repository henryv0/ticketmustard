import { Image } from "./Image";
import { Venue } from "./Venue";

export enum Entities {
    Event = "event"
}

export interface IDate {
    start: Date;
    timezone?: string;
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
    dates: IDate;
    venues: Venue[];
}