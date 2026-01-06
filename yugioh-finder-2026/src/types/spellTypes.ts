import {
  type GenericCardPayload,
  type CardImagesPayload,
  type CardPricesPayload,
  type CardSetPayload,
} from "./genericTypes";

// Spell Types
export type SpellTypePayload = 
  | "Continuous Spell"
  | "Quick-Play Spell"
  | "Equip Spell"
  | "Normal Spell"
  | "Field Spell"
  | "Ritual Spell";

export type SpellRacePayload = 
  | "Continuous"
  | "Quick-Play"
  | "Equip"
  | "Normal"
  | "Field"
  | "Ritual";

export type SpellFramePayload = "spell";

export type GenericSpellPayload = GenericCardPayload & {
  type: SpellTypePayload;
  race: SpellRacePayload;
  frameType: SpellFramePayload;
  humanReadableCardType: SpellTypePayload;
  card_images: CardImagesPayload[];
  card_prices: CardPricesPayload[];
  card_sets: CardSetPayload[];
};

export type SpellCardPayload = GenericSpellPayload;