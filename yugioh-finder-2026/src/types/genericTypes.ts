export type GenericCardPayload = {
  id: number;
  name: string;
  desc: string;
  ygoprodeck_url: string;
  archetype? : string;
};

export type CardImagesPayload = {
  id: number;
  image_url: string;
  image_url_cropped: string;
  image_url_small: string;
};

export type CardPricesPayload = {
  amazon_price: string;
  cardmarket_price: string;
  coolstuffinc_price: string;
  ebay_price: string;
  tcgplayer_price: string;
};

export type CardSetPayload = {
  set_code: string;
  set_name: string;
  set_price: string;
  set_rarity: string;
  set_rarity_code: string;
};
