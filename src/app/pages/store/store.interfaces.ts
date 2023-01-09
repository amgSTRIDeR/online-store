export interface CardConfig {
    template: string;
    selector: string;
    containerSelector: string;
    id: number;
    discount: number;
    price: number;
}

export interface PriceConfig {
    template: string;
    selector: string;
    containerSelector: string;
    price: number;
    discount: number;
}

export interface GameObject {
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
    images: ImageBitmap[];
}

export interface DualSliderConfig {
    selector: string;
    leftSlider: string;
    rightSlider: string;
    leftRange: string;
    rightRange: string;
    option: string;
}

export interface CheckBoxConfig {
    selector: string;
    itemSelector: string;
    option: string;
}

export interface FilterConfig {
    beginList: GameObject[] | null;
    option: string;
    params: string[];
}

export interface NewCollectionConfig {
    price: DualSliderConfig | CheckBoxConfig;
    gamers: DualSliderConfig | CheckBoxConfig;
    brand: DualSliderConfig | CheckBoxConfig;
    category: DualSliderConfig | CheckBoxConfig;
}

export interface QuantityConfig {
    template: string;
    selector: string;
}
