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
export interface Product {
    id: number;
    title_ru: string;
    title_en: string;
    subtittle_ru: string;
    subtittle_en: string;
    description_ru: string;
    description_en: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    GameTime: number[];
    age: number[];
    gamers: number[];
    brand: string;
    category_ru: string[];
    category_en: string[];
    thumbnail: string;
    images: string[];
}
//# sourceMappingURL=interfaces.d.ts.map