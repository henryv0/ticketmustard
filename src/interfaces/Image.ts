export enum ImageRatio {
    "16_9",
    "3_2"
}

export interface Image {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}