import {
  type GenericCardPayload,
  type CardImagesPayload,
  type CardPricesPayload,
  type CardSetPayload,
} from "./genericTypes";

// Monster Types
export type LinkMarkers =
  | "Top"
  | "Bottom"
  | "Left"
  | "Right"
  | "Top-Left"
  | "Top-Right"
  | "Bottom-Left"
  | "Bottom-Right";

export type MonsterTypePayload =
  | "Effect Monster"
  | "Normal Monster"
  | "Flip Effect Monster"
  | "Link Effect Monster"
  | "Union Effect Monster"
  | "Fusion Effect Monster"
  | "Xyz Effect Monster"
  | "Synchro Effect Monster"
  | "Synchro Tuner Effect Monster"
  | "Tuner Effect Monster"
  | "Gemini Effect Monster"
  | "Fusion Tuner Monster"
  | "Tuner Normal Monster"
  | "Spirit Effect Monster"
  | "Ritual Effect Monster"
  | "Fusion Monster"
  | "Token"
  | "Link Monster"
  | "Ritual Monster"
  | "Toon Effect Monster"
  | "Ritual Tuner Effect Monster"
  | "Xyz Monster"
  | "Synchro Monster"
  | "Fusion Tuner Effect Monster"
  | "Flip Tuner Effect Monster"
  | "Pendulum Effect Monster"
  | "Fusion Pendulum Effect Monster"
  | "Pendulum Normal Monster"
  | "Synchro Pendulum Effect Monster"
  | "Pendulum Tuner Effect Monster"
  | "Xyz Pendulum Effect Monster"
  | "Pendulum Flip Effect Monster"
  | "Ritual Pendulum Effect Monster"
  | "Pendulum Tuner Normal Monster"
  | "Pendulum Spirit Effect Monster"
  | "Pendulum Effect Ritual Monster";

export type MonsterRacePayload =
  | "Beast"
  | "Aqua"
  | "Insect"
  | "Fish"
  | "Fiend"
  | "Spellcaster"
  | "Machine"
  | "Warrior"
  | "Beast-Warrior"
  | "Psychic"
  | "Dinosaur"
  | "Rock"
  | "Fairy"
  | "Dragon"
  | "Sea Serpent"
  | "Plant"
  | "Cyberse"
  | "Winged Beast"
  | "Wyrm"
  | "Pyro"
  | "Reptile"
  | "Zombie"
  | "Thunder"
  | "Illusion"
  | "Divine-Beast"
  | "Creator God";

export type MonsterAttributePayload =
  | "DARK"
  | "LIGHT"
  | "EARTH"
  | "WATER"
  | "FIRE"
  | "WIND"
  | "DIVINE";

export type FrameTypePayload =
  | "effect"
  | "normal"
  | "link"
  | "fusion"
  | "effect_pendulum"
  | "xyz"
  | "synchro"
  | "ritual"
  | "skill"
  | "token"
  | "fusion_pendulum"
  | "normal_pendulum"
  | "synchro_pendulum"
  | "xyz_pendulum"
  | "ritual_pendulum";

export type TypelineEntry =
  | "Normal"
  | "Effect"
  | "Tuner"
  | "Flip"
  | "Spirit"
  | "Union"
  | "Gemini"
  | "Toon"
  | "Pendulum"
  | "Ritual"
  | "Fusion"
  | "Synchro"
  | "Xyz"
  | "Link";

export type GenericMonsterPayload = GenericCardPayload & {
  type: Omit<
    MonsterTypePayload,
    | "Link Monster"
    | "Link Effect Monster"
    | "Pendulum Effect Monster"
    | "Fusion Pendulum Effect Monster"
    | "Pendulum Normal Monster"
    | "Synchro Pendulum Effect Monster"
    | "Pendulum Tuner Effect Monster"
    | "Xyz Pendulum Effect Monster"
    | "Pendulum Flip Effect Monster"
    | "Ritual Pendulum Effect Monster"
    | "Pendulum Tuner Normal Monster"
    | "Pendulum Spirit Effect Monster"
  >;
  race: MonsterRacePayload;
  attribute: MonsterAttributePayload;
  atk: number;
  def: number;
  level: number;
  typeline: (TypelineEntry | MonsterRacePayload)[];
  card_images: CardImagesPayload[];
  card_prices: CardPricesPayload[];
  card_set: CardSetPayload[];
  humanReadableCardType: Omit<
    MonsterTypePayload,
    | "Link Monster"
    | "Link Effect Monster"
    | "Pendulum Effect Monster"
    | "Fusion Pendulum Effect Monster"
    | "Pendulum Normal Monster"
    | "Synchro Pendulum Effect Monster"
    | "Pendulum Tuner Effect Monster"
    | "Xyz Pendulum Effect Monster"
    | "Pendulum Flip Effect Monster"
    | "Ritual Pendulum Effect Monster"
    | "Pendulum Tuner Normal Monster"
    | "Pendulum Spirit Effect Monster"
  >;
};

export type GenericPendulumMonsterPayload = Omit<
  GenericMonsterPayload,
  "type"
> & {
  pend_desc: string;
  monster_desc?: string;
  scale: number;
  type:
    | "Pendulum Effect Monster"
    | "Fusion Pendulum Effect Monster"
    | "Pendulum Normal Monster"
    | "Synchro Pendulum Effect Monster"
    | "Pendulum Tuner Effect Monster"
    | "Xyz Pendulum Effect Monster"
    | "Pendulum Flip Effect Monster"
    | "Ritual Pendulum Effect Monster"
    | "Pendulum Tuner Normal Monster"
    | "Pendulum Spirit Effect Monster"
    | "Pendulum Effect Ritual Monster"
  humanReadableCardType:
    | "Pendulum Effect Monster"
    | "Fusion Pendulum Effect Monster"
    | "Pendulum Normal Monster"
    | "Synchro Pendulum Effect Monster"
    | "Pendulum Tuner Effect Monster"
    | "Xyz Pendulum Effect Monster"
    | "Pendulum Flip Effect Monster"
    | "Ritual Pendulum Effect Monster"
    | "Pendulum Tuner Normal Monster"
    | "Pendulum Spirit Effect Monster";
};

export type GenericLinkMonsterPayload = Omit<
  GenericMonsterPayload,
  "type" | "def" | "level"
> & {
  type: "Link Monster" | "Link Effect Monster";
  def: null;
  level: null;
  linkmarkers: LinkMarkers[];
  linkval: number;
  humanReadableCardType: "Link Monster" | "Link Effect Monster";
};

export type MonsterCardPayload = GenericMonsterPayload | GenericLinkMonsterPayload | GenericPendulumMonsterPayload;