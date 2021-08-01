import { Image } from "./Image";

export enum Entities {
    Event = "event"
}

export interface IDate {
    localDate: string;
    localTime: string;
    dateTime: string;
}

export interface IEvent {
    name: string;
    type: Entities.Event;
    id: string;
    distance: number;
    units: number;
    location: { longitude: number; lattitude: number };
    description: string;
    locale: string;
    images: Image[];
    dates: {
        start: Date;
        end: Date;
        status: { code: string; };
        timezone: string;
        spanMultipleDays: boolean;
    }
}