export interface Venue {
  name: string;
  id: string;
  url: string;
  postalCode: string;
  city: string;
  state: { name: string; stateCode: string; };
  country: { name: string; countryCode: string; };
  address: { line1: string; };
  location: { longitude: string; lattitude: string };
}
