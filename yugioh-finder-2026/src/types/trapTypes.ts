import {
  type GenericCardPayload,
  type CardImagesPayload,
  type CardPricesPayload,
  type CardSetPayload,
} from "./genericTypes";

// Trap Types
export type TrapTypePayload = 
  | "Normal Trap"
  | "Continuous Trap"
  | "Counter Trap"
  | " Trap";

export type TrapRacePayload = 
  | "Normal"
  | "Continuous"
  | "Counter"
  | "";

export type TrapFramePayload = "trap";

export type GenericTrapPayload = GenericCardPayload & {
  type: TrapTypePayload;
  race: TrapRacePayload;
  frameType: TrapFramePayload;
  humanReadableCardType: TrapTypePayload;
  card_images: CardImagesPayload[];
  card_prices: CardPricesPayload[];
  card_sets: CardSetPayload[];
};

export type TrapCardPayload = GenericTrapPayload;