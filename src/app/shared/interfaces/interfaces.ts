export interface ItemInCart {
  id: number;
  quantity: number;
  stock: number;
}

export interface Promocodes {
  id: number;
  code: string;
  title_ru: string;
  title_en: string;
  discount: number;
}
